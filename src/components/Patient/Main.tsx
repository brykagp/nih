
import { useState } from "react";
import { useRouter } from "next/router";
import {
  FiLogOut,
  FiClipboard,
  FiUser,
  FiFileText,
  FiUploadCloud,
  FiBell,
  FiPhone,
} from "react-icons/fi";
import Chatbot from "../../components/Chatbot/Main";
import PhotoUpload from "./PhotoUpload";
import DiagnosedConditions from "./DiagnosedConditions";
import Guidelines from "./Guidelines";
import Profile from "./Profile";
import TestResults from "./TestResults"; // Import the TestResults component

export default function PatientDashboard() {
  const [activeTab, setActiveTab] = useState<
    | "testResults"
    | "photoUpload"
    | "diagnosedConditions"
    | "alerts"
    | "contact"
    | "profile"
    | "announcements"
  >("testResults");

  const router = useRouter();

  const handleLogout = async () => {
    await router.push("/");
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-80 bg-blue-900 p-5 text-white">
        <h2 className="mb-4 text-xl font-bold">Patient Portal</h2>

        {/* Sidebar Navigation */}
        <div className="space-y-4">
          <button
            onClick={() => setActiveTab("testResults")}
            className={`flex w-full items-center gap-2 p-3 text-left ${
              activeTab === "testResults" ? "bg-blue-700" : "hover:bg-blue-800"
            }`}
          >
            <FiClipboard /> Test Results
          </button>

          <button
            onClick={() => setActiveTab("photoUpload")}
            className={`flex w-full items-center gap-2 p-3 text-left ${
              activeTab === "photoUpload" ? "bg-blue-700" : "hover:bg-blue-800"
            }`}
          >
            <FiUploadCloud /> Upload Test Photo
          </button>

          <button
            onClick={() => setActiveTab("diagnosedConditions")}
            className={`flex w-full items-center gap-2 p-3 text-left ${
              activeTab === "diagnosedConditions"
                ? "bg-blue-700"
                : "hover:bg-blue-800"
            }`}
          >
            <FiFileText /> Diagnosed Conditions
          </button>

          <button
            onClick={() => setActiveTab("alerts")}
            className={`flex w-full items-center gap-2 p-3 text-left ${
              activeTab === "alerts" ? "bg-blue-700" : "hover:bg-blue-800"
            }`}
          >
            <FiBell /> CDC Alerts & Guidelines
          </button>

          <button
            onClick={() => setActiveTab("contact")}
            className={`flex w-full items-center gap-2 p-3 text-left ${
              activeTab === "contact" ? "bg-blue-700" : "hover:bg-blue-800"
            }`}
          >
            <FiPhone /> Call / Chat for Help
          </button>

          <button
            onClick={() => setActiveTab("profile")}
            className={`flex w-full items-center gap-2 p-3 text-left ${
              activeTab === "profile" ? "bg-blue-700" : "hover:bg-blue-800"
            }`}
          >
            <FiUser /> Profile
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-5 overflow-auto">
        <nav className="flex justify-between bg-gray-100 p-4">
          <h1 className="text-lg font-semibold">Welcome, Sarah Jones</h1>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 rounded-md bg-red-500 px-4 py-2 text-white"
          >
            <FiLogOut /> Log out
          </button>
        </nav>

        {/* Dynamic Content Based on Active Tab */}
        <div className="mt-6 border p-4">
          {activeTab === "testResults" && <TestResults />} {/* Use TestResults component here */}

          {activeTab === "photoUpload" && <PhotoUpload />}

          {activeTab === "contact" && <Chatbot />}

          {activeTab === "diagnosedConditions" && <DiagnosedConditions />}

          {activeTab === "alerts" && <Guidelines />}
          {activeTab === "profile" && <Profile />}
        </div>
      </div>
    </div>
  );
}
