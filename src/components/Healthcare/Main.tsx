import { useState } from "react";
import { useRouter } from "next/router";
import {
  FiLogOut,
  FiClipboard,
  FiUser,
  FiFileText,
  FiMessageSquare,
  FiDatabase,
  FiBarChart2,
} from "react-icons/fi";


import Chatbot from "../../components/Chatbot/Main";
import Map from "./Map";
import PatientTable from "./PatientTable";
import HospitalsPage from "./HospitalizationData";
import Announcements from "./Announcements";
import OperationalMetrics from "./OperationalMetrics";
import DataAnalysis from "./DataAnalysis";




export default function Main() {
  const [activeTab, setActiveTab] = useState<
    | "epidemiology"
    | "publicHealthAlerts"
    | "announcements"
    | "chat"
    | "patientData"
    | "hospitalizationData"
    | "metrics"
    | "dataAnalysis"
  >("epidemiology");

  const router = useRouter();

  const handleLogout = async () => {
    await router.push("/");
  };

  return (
    <div className="relative flex h-screen w-full">
      {/* Sidebar */}
      <div className="w-80 min-w-[320px] bg-gray-900 p-5 text-white">
        <h2 className="mb-4 text-xl font-bold">Healthcare Department</h2>
        <div className="space-y-4">
          <button
            onClick={() => setActiveTab("epidemiology")}
            className={`flex w-full items-center gap-2 p-3 text-left ${
              activeTab === "epidemiology" ? "bg-gray-700" : "hover:bg-gray-800"
            }`}
          >
            <FiClipboard /> Alerts
          </button>

          <button
            onClick={() => setActiveTab("announcements")}
            className={`flex w-full items-center gap-2 p-3 text-left ${
              activeTab === "announcements"
                ? "bg-gray-700"
                : "hover:bg-gray-800"
            }`}
          >
            <FiFileText /> Announcements
          </button>

          <button
            onClick={() => setActiveTab("chat")}
            className={`flex w-full items-center gap-2 p-3 text-left ${
              activeTab === "chat" ? "bg-gray-700" : "hover:bg-gray-800"
            }`}
          >
            <FiMessageSquare /> Connect with CDC & Institutions
          </button>

          <button
            onClick={() => setActiveTab("patientData")}
            className={`flex w-full items-center gap-2 p-3 text-left ${
              activeTab === "patientData" ? "bg-gray-700" : "hover:bg-gray-800"
            }`}
          >
            <FiUser /> Manage Patient Data (PID)
          </button>

          {/* <button
            onClick={() => setActiveTab("hospitalizationData")}
            className={`flex w-full items-center gap-2 p-3 text-left ${
              activeTab === "hospitalizationData"
                ? "bg-gray-700"
                : "hover:bg-gray-800"
            }`}
          >
            <FiDatabase /> View Hospitalization Data
          </button> */}

          {/* <button
            onClick={() => setActiveTab("metrics")}
            className={`flex w-full items-center gap-2 p-3 text-left ${
              activeTab === "metrics" ? "bg-gray-700" : "hover:bg-gray-800"
            }`}
          >
            <FiBarChart2 /> Operational Metrics
          </button> */}

          <button
            onClick={() => setActiveTab("dataAnalysis")}
            className={`flex w-full items-center gap-2 p-3 text-left ${
              activeTab === "dataAnalysis" ? "bg-gray-700" : "hover:bg-gray-800"
            }`}
          >
            <FiBarChart2 /> Data Analysis
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto p-5">
        <nav className="flex justify-between bg-gray-100 p-4">
          <h1 className="text-lg font-semibold">
            Welcome, Healthcare Professional
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
          {activeTab === "epidemiology" && <Map />}
          {activeTab === "announcements" && <Announcements></Announcements>}
          {activeTab === "chat" && (
            <div>
              <h2 className="text-lg font-semibold">
                Chat with CDC & Institutions
              </h2>
              <Chatbot />
            </div>
          )}
          {activeTab === "patientData" && <PatientTable />}
          {activeTab === "hospitalizationData" && <HospitalsPage />}
          {activeTab === "metrics" && <OperationalMetrics></OperationalMetrics>}
          {activeTab === "dataAnalysis" && (
          
            <DataAnalysis></DataAnalysis>
          )}
        </div>
      </div>
    </div>
  );
}

