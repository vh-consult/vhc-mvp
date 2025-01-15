"use server";

import { revalidatePath } from "next/cache";
import Appointment from "../database/models/appointment.model";
import { Company } from "../database/models/company.model";
import User from "../database/models/user.model";
import { connectToDatabase } from "../database/mongoose";
import { handleError } from "../utils";
import Patient from "../database/models/patient.model";
import Doctor from "../database/models/doctor.model";
import Consultation from "../database/models/consultation.model";

export interface AppointmentParams {
  date?: Date;
  problemStatement?: string;
  link?: string;
  channel?: "virtual" | "inPerson" | "lab";
  host?: string;
}

export async function newAppointment(id: string, formData: AppointmentParams) {
  try {
    await connectToDatabase();
    const creator = await Patient.findById({ id });
    if (!creator) throw new Error("Can't book an appointment | Invalid User");

    console.log(creator.personalPhysician);

    if (formData.host === "" && creator.personalPhysician !== undefined) {
      formData.host = creator.personalPhysician;
    } else if (
      formData.host !== "" &&
      creator.personalPhysician === undefined
    ) {
      creator.personalPhysician = formData.host;
      await creator.save();
    }
    const host = await Doctor.findById(formData.host);
    if (!host) throw new Error("Host not found");

    if (!host.clients.includes(creator._id)) {
      host.clients.push(creator._id);
      await host.save();
    }
    console.log(formData);
    const session = await Consultation.create({
      ...formData,
      patient: creator._id,
      doctor: host._id,
    });

    session.link = `${process.env.NEXT_PUBLIC_BASE_URL}/consultation/room/${session._id}`;
    if (formData.problemStatement === "") {
      session.status = "accepted";
    }
    await session.save();

    host.appointments.push(session._id);
    await host.save();

    return JSON.parse(JSON.stringify(session._id));
  } catch (error) {
    // handleError(error)
    console.error(error);
  }
}

export async function cancelAppointment(id: string, sessionId: string) {
  try {
    await connectToDatabase();

    const userCancelingAppointment = await Patient.findOne({
      id,
    }).populate("appointments");
    if (!userCancelingAppointment) throw new Error("User not found");
    if (!userCancelingAppointment.appointments.includes(sessionId))
      throw new Error("Appointment session not found in user's Appointments");

    const appointment = await Consultation.findById(sessionId);
    if (!appointment) throw new Error("Appointment not found");

    appointment.status = "canceled";
    await appointment.save();

    return { message: "Appointment canceled" };
  } catch (error) {
    handleError(error);
  }
}

export async function searchHost(query: string) {
  try {
    await connectToDatabase();

    // Search for hospitals
    const hospitalHosts = await Company.find({
      name: { $regex: query, $options: "i" },
      companyType: "Hospital",
    }).select("_id name");

    // Search for doctors
    const doctorHosts = await Doctor.find({
      $or: [
        { firstName: { $regex: query, $options: "i" } },
        { lastName: { $regex: query, $options: "i" } },
        {
          $expr: {
            $regexMatch: {
              input: { $concat: ["$firstName", " ", "$lastName"] },
              regex: query,
              options: "i",
            },
          },
        },
      ],
    }).select("_id firstName lastName");

    // Combine and format results
    const results = [
      ...hospitalHosts.map((hospital) => ({
        id: hospital._id.toString(),
        name: hospital.name,
        hostType: "Company",
      })),
      ...doctorHosts.map((doctor) => ({
        id: doctor._id.toString(),
        name: `${doctor.firstName} ${doctor.lastName}`,
        hostType: "User",
      })),
    ];
    return JSON.parse(JSON.stringify(results));
  } catch (error) {
    handleError(error);
    return [];
  }
}

export async function fetchRequestedAppointments(id: string) {
  try {
    await connectToDatabase();
    const doctor = await Doctor.findOne({ id }).populate({
      path: "appointments",
      match: { status: "pending" },
      populate: [{ path: "patient", select: "firstName lastName photo" }],
    });

    if (!doctor) {
      throw new Error("Doctor not found");
    }
    return doctor.appointments;
  } catch (error) {
    handleError(error);
  }
}

export async function fetchAcceptedAppointments(id: string) {
  try {
    await connectToDatabase();
    const doctor = await Doctor.findOne({ id }).populate({
      path: "appointments",
      match: { status: "accepted" },
      populate: [{ path: "patient", select: "firstName lastName photo" }],
    });

    if (!doctor) {
      throw new Error("Doctor not found");
    }

    return doctor.appointments;
  } catch (error) {
    handleError(error);
  }
}

export async function fetchHospitalAppointments(hospitalId: string) {
  try {
    await connectToDatabase();
    const hospital = await Company.findOne({
      _id: hospitalId,
      companyType: "Hospital",
    }).populate("appointments");
    if (!hospital) throw new Error("Hospital not found");

    const appointments = hospital.appointments;
    return JSON.parse(JSON.stringify(appointments));
  } catch (error) {
    handleError(error);
  }
}

export async function getMessages(id: string) {
  try {
    await connectToDatabase();
    const user = await User.findById({ id }).populate("messages");
    if (!user) throw new Error("User not found");
    const messages = user.messages;

    return JSON.parse(JSON.stringify(messages));
  } catch (error) {
    handleError(error);
  }
}
