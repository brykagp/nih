import { useState } from "react";
import {
  FiLogOut,
  FiClipboard,
  FiUser,

  FiBell,
  FiDatabase,
} from "react-icons/fi";
import { useRouter } from "next/router";
import PatientData from "./PatientDataLab";
import LabResult from "./LabResult";
import EpidemiologicalData from "./EpidemiologicalData";
import PhotoUploadLab from "./PhotoUploadLab";

export default function Main() {
  const [activeTab, setActiveTab] = useState<
    "patientData" | "pastLabResults" | "epidemiology" | "publicHealthAlerts"
  >("patientData");

  const router = useRouter();

  const handleLogout = async () => {
    await router.push("/");
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-80 bg-green-900 p-5 text-white">
        <h2 className="mb-4 text-xl font-bold">Labs Portal</h2>

        {/* Sidebar Navigation */}
        <div className="space-y-4">
          <button
            onClick={() => setActiveTab("patientData")}
            className={`flex w-full items-center gap-2 p-3 text-left ${
              activeTab === "patientData" ? "bg-green-700" : "hover:bg-green-800"
            }`}
          >
            <FiUser /> View Patient Identifiable Data (PID)
          </button>

          {/* <button
            onClick={() => setActiveTab("pastLabResults")}
            className={`flex w-full items-center gap-2 p-3 text-left ${
              activeTab === "pastLabResults" ? "bg-green-700" : "hover:bg-green-800"
            }`}
          >
            <FiDatabase /> View Past Lab Results
          </button> */}

          <button
            onClick={() => setActiveTab("epidemiology")}
            className={`flex w-full items-center gap-2 p-3 text-left ${
              activeTab === "epidemiology" ? "bg-green-700" : "hover:bg-green-800"
            }`}
          >
            <FiClipboard /> Epidemiological Data
          </button>

          <button
            onClick={() => setActiveTab("publicHealthAlerts")}
            className={`flex w-full items-center gap-2 p-3 text-left ${
              activeTab === "publicHealthAlerts" ? "bg-green-700" : "hover:bg-green-800"
            }`}
          >
            <FiBell /> Upload Test Kit Photo
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto p-5">
        <nav className="flex justify-between bg-gray-100 p-4">
          <h1 className="text-lg font-semibold">Welcome, Lab Technician</h1>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 rounded-md bg-red-500 px-4 py-2 text-white"
          >
            <FiLogOut /> Log out
          </button>
        </nav>

        {/* Dynamic Content Based on Active Tab */}
        <div className="mt-6 border p-4">

        {activeTab === "patientData" && <PatientData/>}
        {activeTab === "pastLabResults" && <LabResult/>}
        {activeTab === "epidemiology" && <EpidemiologicalData/>}
        {activeTab === "publicHealthAlerts" && <PhotoUploadLab/>}
        
        
        
          {/* {activeTab === "patientData" && (

          
            <div>
              <h2 className="text-lg font-semibold">Patient Identifiable Data (PID)</h2>
              <p>View details of patients with authorized access.</p>
            </div>
          )} */}

          {/* {activeTab === "pastLabResults" && (
            <div>
              <h2 className="text-lg font-semibold">Past Lab Results</h2>
              <p>Access historical lab test results for patients.</p>
            </div>
          )} */}
{/* 
          {activeTab === "epidemiology" && (
            <div>
              <h2 className="text-lg font-semibold">Epidemiological Data</h2>
              <p>View nationwide disease trends and statistics.</p>
            </div>
          )} */}
{/* 
          {activeTab === "publicHealthAlerts" && (
            <div>
              <h2 className="text-lg font-semibold">Public Health Alerts</h2>
              <p>Get latest alerts and updates from health authorities.</p>
            </div>
          )} */}
        </div>
      </div>
    </div>
  );
}
