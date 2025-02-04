"use client"; //-
import React, { useEffect, useState } from "react"; //-
import PharmacyOverview from "@/components/company/PharmacyOverview"; //-
import HospitalOverview from "@/components/company/HospitalOverview"; //-
import Loader from "@/components/general/Loader"; //-
import { useParams } from "next/navigation"; //-
import { getUser } from "@/lib/actions/user.actions"; //-
import Cookies from "js-cookie"; // Import the js-cookie library//+
import { IUser } from "@/stores/user-store";

interface IHistory {
  activity: string;
  host: string;
  hostType: string;
  summary: string;
  orders: string[];
  meds: string[];
}



const OverviewPage = () => {
  const { id } = useParams();
  const [user, setUser] = useState<IUser>();
  console.log(id);
  useEffect(() => {
    const fetchData = async () => {
      const user = await getUser(id as string);
      Cookies.set("user", JSON.stringify(user));
      setUser(user);
    };
    fetchData();
  });

  return (
    <div>
      {user!.type === undefined ? (
        <Loader /> //-
      ) : user!.type === "pharmacyAdmin" ? (
        <PharmacyOverview id={id as string} />
      ) : (
        ""
      )}
    </div>
  );
};

export default OverviewPage;
