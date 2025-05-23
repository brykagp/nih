import { useState } from "react";
import {
  FiLogOut,
  FiClipboard,
  FiUser,
  FiFileText,
  FiBell,
  FiMessageSquare,
  FiBarChart2,
} from "react-icons/fi";

import { useRouter } from "next/router";
import Chatbot from "../../components/Chatbot/Main";
import EpidemiologicalData from "./EpidemiologicalData";
import PublicHealthAlerts from "./PublicHealthAlerts";
import Announcements from "./AnnouncementsCdc";
import DataAnalysis from "./DataAnalysis";

export default function CDCMain() {
  const [activeTab, setActiveTab] = useState<
    "epidemiology" | "publicHealthAlerts" | "announcements" | "chat" | "metrics"
  >("epidemiology");

  const router = useRouter();

  const handleLogout = async () => {
    await router.push("/");
  };

  return (
    <div className="relative flex h-screen w-full">
      {/* Sidebar */}
      <div className="w-80 min-w-[320px] bg-gray-900 p-5 text-white">
        <h2 className="mb-4 text-xl font-bold">CDC Healthcare Portal</h2>

        <div className="space-y-4">
          <button
            onClick={() => setActiveTab("epidemiology")}
            className={`flex w-full items-center gap-2 p-3 text-left ${activeTab === "epidemiology" ? "bg-gray-700" : "hover:bg-gray-800"}`}
          >
            <FiClipboard /> View Epidemiological Data
          </button>

          <button
            onClick={() => setActiveTab("announcements")}
            className={`flex w-full items-center gap-2 p-3 text-left ${activeTab === "announcements" ? "bg-gray-700" : "hover:bg-gray-800"}`}
          >
            <FiFileText /> Announcements (CDC)
          </button>

          <button
            onClick={() => setActiveTab("chat")}
            className={`flex w-full items-center gap-2 p-3 text-left ${activeTab === "chat" ? "bg-gray-700" : "hover:bg-gray-800"}`}
          >
            <FiMessageSquare /> Chat & Partnering Institutions
          </button>

          <button
            onClick={() => setActiveTab("metrics")}
            className={`flex w-full items-center gap-2 p-3 text-left ${activeTab === "metrics" ? "bg-gray-700" : "hover:bg-gray-800"}`}
          >
            <FiBarChart2 /> View Operational Metrics
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto p-5">
        <nav className="flex justify-between bg-gray-100 p-4">
          <h1 className="text-lg font-semibold">Welcome, CDC Representative</h1>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 rounded-md bg-red-500 px-4 py-2 text-white"
          >
            <FiLogOut /> Log out
          </button>
        </nav>

        {/* Dynamic Content */}
        <div className="mt-6 border p-4">
          {activeTab === "epidemiology" && <EpidemiologicalData />}
          {activeTab === "publicHealthAlerts" && <PublicHealthAlerts />}
          {activeTab === "announcements" && <Announcements />}

          {activeTab === "chat" && <Chatbot />}
         

          {activeTab === "metrics" && <DataAnalysis></DataAnalysis>}
        </div>
      </div>
    </div>
  );
}
