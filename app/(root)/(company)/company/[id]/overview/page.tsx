"use client"; //-
import React, { useEffect, useState } from "react"; //-
import PharmacyOverview from "@/components/company/PharmacyOverview"; //-
import HospitalOverview from "@/components/company/HospitalOverview"; //-
import Loader from "@/components/general/Loader"; //-
import { useParams } from "next/navigation"; //-
import { IUser, useUserStore } from "@/stores/user-store";

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
  const {user} = useUserStore()
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
