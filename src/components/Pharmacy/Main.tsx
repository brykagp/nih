import { useState } from "react";
import { useRouter } from "next/router";
import {
  FiLogOut,
  FiClipboard,
  FiUser,
  FiFileText,
  FiMessageSquare,
  FiDatabase,
 
} from "react-icons/fi";

import Chatbot from "../../components/Chatbot/Main";



import DrugInteractionAlerts from "./DrugInteractionAlerts";
import InsuranceBilling from "./InsuranceBilling";
import Prescriptions from "./Prescriptions";
import Pid from "./Pid";
import Map from '../Healthcare/Map'
import Announcements from './Announcements'

export default function Main() {
  const [activeTab, setActiveTab] = useState<
    | "pid"
    | "Alerts"
    | "Prescriptions & Medications"
    | "Past Insurance & Billing Data"
    | "chat"
    | "Drug Interaction Alerts"
    | "announcements"
   
  >("pid");

  const router = useRouter();

  const handleLogout = async () => {
    await router.push("/");
  };

  return (
    <div className="relative flex h-screen w-full">
      {/* Sidebar */}
      <div className="w-80 min-w-[320px] bg-gray-900 p-5 text-white">
        <h2 className="mb-4 text-xl font-bold">Pharmacy Department</h2>
        <div className="space-y-4">

        <button
            onClick={() => setActiveTab("Alerts")}
            className={`flex w-full items-center gap-2 p-3 text-left ${
              activeTab === "Alerts" ? "bg-gray-700" : "hover:bg-gray-800"
            }`}
          >
            <FiClipboard /> Alerts
          </button>
          <button
            onClick={() => setActiveTab("pid")}
            className={`flex w-full items-center gap-2 p-3 text-left ${
              activeTab === "pid" ? "bg-gray-700" : "hover:bg-gray-800"
            }`}
          >
            <FiClipboard /> PID 
          </button>


          <button
            onClick={() => setActiveTab("Prescriptions & Medications")}
            className={`flex w-full items-center gap-2 p-3 text-left ${
              activeTab === "Prescriptions & Medications"
                ? "bg-gray-700"
                : "hover:bg-gray-800"
            }`}
          >
            <FiFileText />   Prescriptions & Medications
          </button>

          <button
            onClick={() => setActiveTab("Past Insurance & Billing Data")}
            className={`flex w-full items-center gap-2 p-3 text-left ${
              activeTab === "Past Insurance & Billing Data"
                ? "bg-gray-700"
                : "hover:bg-gray-800"
            }`}
          >
            <FiFileText /> Past Insurance & Billing Data 
          </button>

          <button
            onClick={() => setActiveTab("chat")}
            className={`flex w-full items-center gap-2 p-3 text-left ${
              activeTab === "chat" ? "bg-gray-700" : "hover:bg-gray-800"
            }`}
          >
            <FiMessageSquare /> Connect with CDC and contact information for partnering institutions.
          </button>

          <button
            onClick={() => setActiveTab("Drug Interaction Alerts")}
            className={`flex w-full items-center gap-2 p-3 text-left ${
              activeTab === "Drug Interaction Alerts" ? "bg-gray-700" : "hover:bg-gray-800"
            }`}
          >
            <FiUser /> Drug Interaction Alerts
          </button>

          <button
            onClick={() => setActiveTab("announcements")}
            className={`flex w-full items-center gap-2 p-3 text-left ${
              activeTab === "announcements"
                ? "bg-gray-700"
                : "hover:bg-gray-800"
            }`}
          >
            <FiDatabase /> Announcements 
          </button>

       

        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto p-5">
        <nav className="flex justify-between bg-gray-100 p-4">
          <h1 className="text-lg font-semibold">
            Welcome, Pharmacy Deparatement
          </h1>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 rounded-md bg-red-500 px-4 py-2 text-white"
          >
            <FiLogOut /> Log out
          </button>
        </nav>

        {/* Dynamic Content Based on Active Tab */}
        <div className="mt-6 border p-4">
        {activeTab === "Alerts" && <Map></Map>}
          {activeTab === "pid" && <Pid></Pid>}
          {activeTab === "announcements" && <Announcements></Announcements>}
          {activeTab === "Past Insurance & Billing Data" && <InsuranceBilling></InsuranceBilling>}
          {activeTab === "chat" && (
            <div>
              <h2 className="text-lg font-semibold">
              Connect with CDC and contact information for partnering institutions.
              </h2>
              <Chatbot />
            </div>
          )}
          {activeTab === "Drug Interaction Alerts" && <DrugInteractionAlerts></DrugInteractionAlerts>}
        
          {activeTab === "Prescriptions & Medications" && <Prescriptions></Prescriptions>}
        </div>
      </div>
    </div>
  );
}
