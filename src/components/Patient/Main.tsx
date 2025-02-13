import { useState } from "react";
import {
  FiLogOut,
  FiClipboard,
  FiUser,
  FiFileText,
  FiUploadCloud,
  FiBell,
  FiPhone,
  FiMessageSquare,
} from "react-icons/fi";
import { useRouter } from "next/router";
import Chatbot from "../../components/Chatbot/Main";
import PhotoUpload from "./PhotoUpload";
import DiagnosedConditions from "./DiagnosedConditions";
import Guidelines from "./Guidelines";
import Profile from "./Profile";

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

  // Hardcoded test results (Replace with API fetch)
  const testResults = [
    { parameter: "ESR", result: "71 mm/Hr", normalRange: "1–20" },
    { parameter: "CRP", result: "3+", normalRange: "_" },
    { parameter: "Anti-ds DNA", result: "21 IU/mL", normalRange: "<20" },
    { parameter: "ANA", result: "1.18", normalRange: "<10" },
    { parameter: "RF", result: "256", normalRange: "_" },
    { parameter: "ACLA", result: "14.5 U/mL", normalRange: "<8" },
    { parameter: "P-ANCA", result: "24.6 U/mL", normalRange: "0–4" },
    { parameter: "C-ANCA", result: "1.02 U/mL", normalRange: "0–0.5" },
    { parameter: "Anti CCP", result: "NEGATIVE", normalRange: "_" },
    { parameter: "Tumor markers", result: "NEGATIVE", normalRange: "_" },
  ];

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
      <div className="flex-1 p-5">
        <nav className="flex justify-between bg-gray-100 p-4">
          <h1 className="text-lg font-semibold">Welcome, Shubham Patil</h1>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 rounded-md bg-red-500 px-4 py-2 text-white"
          >
            <FiLogOut /> Log out
          </button>
        </nav>

        {/* Dynamic Content Based on Active Tab */}
        <div className="mt-6 border p-4">
          {activeTab === "testResults" && (
            <div>
              <h2 className="mb-4 text-lg font-semibold">Test Results</h2>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-200">
                      <th className="border border-gray-300 p-2 text-left">
                        Parameter
                      </th>
                      <th className="border border-gray-300 p-2 text-left">
                        Result
                      </th>
                      <th className="border border-gray-300 p-2 text-left">
                        Normal Range
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {testResults.map((test, index) => (
                      <tr
                        key={index}
                        className="border-b border-gray-300 hover:bg-gray-100"
                      >
                        <td className="border border-gray-300 p-2">
                          {test.parameter}
                        </td>
                        <td className="border border-gray-300 p-2">
                          {test.result}
                        </td>
                        <td className="border border-gray-300 p-2">
                          {test.normalRange}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === "photoUpload" && <PhotoUpload></PhotoUpload>}

          {activeTab === "contact" && (
            <div>
              <h2 className="text-lg font-semibold">Contact Support</h2>
              <div className="mt-4 flex gap-4">
                <button className="flex items-center gap-2 rounded bg-green-500 px-4 py-2 text-white">
                  <FiPhone /> Call Assistance
                </button>
                <button className="flex items-center gap-2 rounded bg-purple-500 px-4 py-2 text-white">
                  <FiMessageSquare /> Chatbot
                </button>

                <Chatbot />
              </div>
            </div>
          )}

          {activeTab === "diagnosedConditions" && (
            <div>
              <DiagnosedConditions></DiagnosedConditions>
            </div>
          )}

          {activeTab === "alerts" && <Guidelines></Guidelines>}
          {activeTab === "profile" && <Profile></Profile>}
        </div>
      </div>
    </div>
  );
}

