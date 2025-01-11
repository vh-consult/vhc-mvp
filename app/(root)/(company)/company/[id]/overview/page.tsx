"use client"; //-
import React, { useEffect, useState } from "react"; //-
import PharmacyOverview from "@/components/company/PharmacyOverview"; //-
import HospitalOverview from "@/components/company/HospitalOverview"; //-
import Loader from "@/components/general/Loader"; //-
import { useParams } from "next/navigation"; //-
import { getUser } from "@/lib/actions/user.actions"; //-
import Cookies from "js-cookie"; // Import the js-cookie library//+

interface IHistory {
  activity: string;
  host: string;
  hostType: string;
  summary: string;
  orders: string[];
  meds: string[];
}

export interface IUser {
  email: string;
  role: string;
  firstName: string;
  lastName: string;
  photo: string;
  id: string;
  history?: IHistory[];
  location?: string;
  gender: "male" | "female" | "other";
  dateOfBirth: Date;
  country?: string;
  company?: string;
  messages: string[];
}

const OverviewPage = () => {
  const { id } = useParams();
  const [user, setUser] = useState<IUser>()
  console.log(id);
  useEffect(() => {
    const fetchData = async () => {
      const user = await getUser(id as string);
      Cookies.set("user", JSON.stringify(user));
      setUser(user)
    };
    fetchData()
  });

  return (
    <div>
      {user!.role === undefined ? (
        <Loader /> //-
      ) : user!.role === "PharmacyAdmin" ? (
        <PharmacyOverview id={id as string} />
      ) : user!.role === "HospitalAdmin" ? (
        <HospitalOverview />
      ) : (
        ""
      )}
    </div>
  );
};

export default OverviewPage;
