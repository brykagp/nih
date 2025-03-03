import { useState } from "react";
import {
  FiLogOut,
  FiClipboard,
  FiUser,
  FiFileText,
  FiBell,
  FiDatabase,
  FiLayers,
 
  FiDollarSign,
} from "react-icons/fi";
import { MdMedicalServices } from "react-icons/md";

import { useRouter } from "next/router";
import PatientRecords from "./PatientRecords";
import PostLabResults from "./PostLabResults";
import Prescriptions from "./Prescriptions";
import InsuranceBilling from "./InsuranceBilling";
import DrugAlerts from "./DrugAlerts";
import Epidmiology from "./Epidmiology";
import Announcements from "./Announcements";
import TreatmentPlans from "./TreatmentPlans";

export default function HospitalDashboard() {
  const [activeTab, setActiveTab] = useState<
    | "patientRecords"
    | "pastLabResults"
    | "prescriptions"
    | "insuranceBilling"
    | "drugAlerts"
    | "epidemiology"
    | "publicHealthAlerts"
    | "announcements"
    | "treatmentPlans"
  >("patientRecords");

  const router = useRouter();

  const handleLogout = async () => {
    await router.push("/");
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-80 bg-blue-900 p-5 text-white">
        <h2 className="mb-4 text-xl font-bold">Hospital Portal</h2>

        {/* Sidebar Navigation */}
        <div className="space-y-4">
          <button
            onClick={() => setActiveTab("patientRecords")}
            className={`flex w-full items-center gap-2 p-3 text-left ${
              activeTab === "patientRecords" ? "bg-blue-700" : "hover:bg-blue-800"
            }`}
          >
            <FiUser /> View Patient Identifiable Data (PID)
          </button>

          <button
            onClick={() => setActiveTab("pastLabResults")}
            className={`flex w-full items-center gap-2 p-3 text-left ${
              activeTab === "pastLabResults" ? "bg-blue-700" : "hover:bg-blue-800"
            }`}
          >
            <FiDatabase /> View Past Lab Results
          </button>

          <button
            onClick={() => setActiveTab("prescriptions")}
            className={`flex w-full items-center gap-2 p-3 text-left ${
              activeTab === "prescriptions" ? "bg-blue-700" : "hover:bg-blue-800"
            }`}
          >
           <MdMedicalServices /> View Prescriptions & Medications
          </button>

          <button
            onClick={() => setActiveTab("insuranceBilling")}
            className={`flex w-full items-center gap-2 p-3 text-left ${
              activeTab === "insuranceBilling" ? "bg-blue-700" : "hover:bg-blue-800"
            }`}
          >
            <FiDollarSign /> View Insurance & Billing Data
          </button>

          <button
            onClick={() => setActiveTab("drugAlerts")}
            className={`flex w-full items-center gap-2 p-3 text-left ${
              activeTab === "drugAlerts" ? "bg-blue-700" : "hover:bg-blue-800"
            }`}
          >
            <FiClipboard /> View Drug Interaction Alerts
          </button>

          <button
            onClick={() => setActiveTab("epidemiology")}
            className={`flex w-full items-center gap-2 p-3 text-left ${
              activeTab === "epidemiology" ? "bg-blue-700" : "hover:bg-blue-800"
            }`}
          >
            <FiClipboard /> View Epidemiological Data
          </button>

          {/* <button
            onClick={() => setActiveTab("publicHealthAlerts")}
            className={`flex w-full items-center gap-2 p-3 text-left ${
              activeTab === "publicHealthAlerts" ? "bg-blue-700" : "hover:bg-blue-800"
            }`}
          >
            <FiBell /> View Public Health Alerts
          </button> */}

          <button
            onClick={() => setActiveTab("announcements")}
            className={`flex w-full items-center gap-2 p-3 text-left ${
              activeTab === "announcements" ? "bg-blue-700" : "hover:bg-blue-800"
            }`}
          >
            <FiFileText /> View CDC Announcements
          </button>

          <button
            onClick={() => setActiveTab("treatmentPlans")}
            className={`flex w-full items-center gap-2 p-3 text-left ${
              activeTab === "treatmentPlans" ? "bg-blue-700" : "hover:bg-blue-800"
            }`}
          >
            <FiLayers /> View Diagnosed Conditions & Treatment Plans
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-5">
        <nav className="flex justify-between bg-gray-100 p-4">
          <h1 className="text-lg font-semibold">Welcome, Hospital Staff</h1>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 rounded-md bg-red-500 px-4 py-2 text-white"
          >
            <FiLogOut /> Log out
          </button>
        </nav>

        {/* Dynamic Content Based on Active Tab */}
        <div className="mt-6 border p-4">

        {activeTab === "patientRecords" && <PatientRecords />}
        {activeTab === "pastLabResults" && <PostLabResults/>}

        {activeTab === "prescriptions" && <Prescriptions/>}

        {activeTab === "insuranceBilling" && <InsuranceBilling/>}

        {activeTab === "drugAlerts" && <DrugAlerts/>}

        {activeTab === "epidemiology" && <Epidmiology/>}
        {activeTab === "announcements" && <Announcements/>}

        {activeTab === "treatmentPlans" && <TreatmentPlans/>}
      



        


          {activeTab === "publicHealthAlerts" && (
            <div>
              <h2 className="text-lg font-semibold">Public Health Alerts</h2>
              <p>Get latest alerts and updates from health authorities.</p>
            </div>
          )}

      
        
        </div>
      </div>
    </div>
  );
}




















