import {  useState } from "react";


import { FiDownload } from "react-icons/fi";
import { useRouter } from "next/router";

import Map from "./Map";



export default function Main() {
  const [isOpen, ] = useState(true);

  const router = useRouter();

  const [view, setView] = useState<"map" | "table">("map");

  
  const handleLogout = async() => {
   
    await router.push("/"); 
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div
        className={`w-80 bg-teal-900 p-5 text-white transition-all ${isOpen ? "block" : "hidden"}`}
      >
        <h2 className="mb-4 text-xl font-bold">Select Data</h2>

        {/* Compare Maps */}
        <div className="mb-4">
          <p className="font-semibold">Compare maps</p>
          <div className="mt-2 flex gap-2">
            <button className="rounded bg-gray-200 px-4 py-1 text-black">
              Single
            </button>
            <button className="rounded bg-gray-200 px-4 py-1 text-black">
              Dual
            </button>
          </div>
        </div>

        {/* Dropdowns */}
        {[
          { label: "Disease & SDOH", options: ["HIV"] },
          { label: "Indicator", options: ["HIV diagnoses"] },
          { label: "Geography", options: ["US Map-State Level"] },
          { label: "Age Group", options: ["Ages 13 years and older"] },
          { label: "Race/Ethnicity", options: ["All races/ethnicities"] },
        ].map(({ label, options }, index) => (
          <div className="mb-4" key={index}>
            <p className="font-semibold">{label}</p>
            <select className="w-full rounded p-2 text-black">
              {options.map((option, idx) => (
                <option key={idx}>{option}</option>
              ))}
            </select>
          </div>
        ))}
      </div>

      {/* Main Content Area (Beside Sidebar) */}
      <div className="flex-1 p-5">
        <div className="mx-auto max-w-4xl p-4">
          {/* Navbar */}
          <nav className="flex gap-2 bg-gray-100 p-2">
            {["Home", "Charts", "Maps", "Tables"].map((item) => (
              <button
                key={item}
                className="rounded-md bg-purple-500 px-4 py-1 text-white"
              >
                {item}
              </button>
            ))}
            <button
              onClick={handleLogout}
              className="ml-auto rounded-md bg-purple-500 px-4 py-1 text-white"
            >
              log out
            </button>
          </nav>

          {/* Header */}
          <div className="p-4 text-sm text-gray-700">
            <p>
              HIV diagnoses | 2022 | Ages 13 years and older | All
              races/ethnicities | Both sexes | All transmission categories | US
              Map-State Level
            </p>
          </div>

          {/* Toggle & Download */}
          <div className="flex items-center justify-between p-2">
            <div className="flex gap-2">
              <button
                className={`rounded-md border px-4 py-1 ${view === "map" ? "bg-gray-800 text-white" : "bg-gray-300"}`}
                onClick={() => setView("map")}
              >
                🗺️ Map
              </button>
              <button
                className={`rounded-md border px-4 py-1 ${view === "table" ? "bg-gray-800 text-white" : "bg-gray-300"}`}
                onClick={() => setView("table")}
              >
                📊 Table
              </button>
            </div>

            <button className="flex items-center gap-2 rounded-md border bg-gray-200 px-3 py-1">
              <FiDownload />
              Download
            </button>
          </div>

          {/* Map/Table View */}
          <div className="flex h-[400px] items-center justify-center border">
            {view === "map" ? (
        
           <Map></Map>

            ) : (
              <p className="text-gray-600">📊 Table View Coming Soon...</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}



// import { useState } from "react";
// import {
//   FiLogOut,
//   FiClipboard,
//   FiUser,
//   FiFileText,
//   FiBell,
//   FiMessageSquare,
//   FiBarChart2,
// } from "react-icons/fi";
// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
//   ResponsiveContainer,
// } from "recharts";
// import { useRouter } from "next/router";
// import Chatbot from "../../components/Chatbot/Main";
// // import EpidemiologicalData from "./EpidemiologicalData";

// export default function CDCMain() {
//   const [activeTab, setActiveTab] = useState<
//     | "cdcView"
//     | "epidemiology"
//     | "publicHealthAlerts"
//     | "announcements"
//     | "chat"
//     | "metrics"
//   >("cdcView");

//   const router = useRouter();

//   const handleLogout = async () => {
//     await router.push("/");
//   };

//   const data = [
//     { date: "Jan", cases: 400, hospitalizations: 240 },
//     { date: "Feb", cases: 700, hospitalizations: 320 },
//     { date: "Mar", cases: 1500, hospitalizations: 800 },
//     { date: "Apr", cases: 1800, hospitalizations: 900 },
//   ];

//   return (
//     <div className="flex h-screen">
//       {/* Sidebar */}
//       <div className="w-80 bg-gray-900 p-5 text-white">
//         <h2 className="mb-4 text-xl font-bold">CDC Healthcare Portal</h2>

//         <div className="space-y-4">
//           <button
//             onClick={() => setActiveTab("cdcView")}
//             className={`flex w-full items-center gap-2 p-3 text-left ${activeTab === "cdcView" ? "bg-gray-700" : "hover:bg-gray-800"}`}
//           >
//             <FiClipboard /> CDC View Page
//           </button>

//           <button
//             onClick={() => setActiveTab("epidemiology")}
//             className={`flex w-full items-center gap-2 p-3 text-left ${activeTab === "epidemiology" ? "bg-gray-700" : "hover:bg-gray-800"}`}
//           >
//             <FiClipboard /> View Epidemiological Data
//           </button>

//           <button
//             onClick={() => setActiveTab("publicHealthAlerts")}
//             className={`flex w-full items-center gap-2 p-3 text-left ${activeTab === "publicHealthAlerts" ? "bg-gray-700" : "hover:bg-gray-800"}`}
//           >
//             <FiBell /> Public Health Alerts
//           </button>

//           <button
//             onClick={() => setActiveTab("announcements")}
//             className={`flex w-full items-center gap-2 p-3 text-left ${activeTab === "announcements" ? "bg-gray-700" : "hover:bg-gray-800"}`}
//           >
//             <FiFileText /> View, Create & Modify Announcements (CDC)
//           </button>

//           <button
//             onClick={() => setActiveTab("chat")}
//             className={`flex w-full items-center gap-2 p-3 text-left ${activeTab === "chat" ? "bg-gray-700" : "hover:bg-gray-800"}`}
//           >
//             <FiMessageSquare /> Chat & Partnering Institutions
//           </button>

//           <button
//             onClick={() => setActiveTab("metrics")}
//             className={`flex w-full items-center gap-2 p-3 text-left ${activeTab === "metrics" ? "bg-gray-700" : "hover:bg-gray-800"}`}
//           >
//             <FiBarChart2 /> View Operational Metrics
//           </button>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="flex-1 p-5">
//         <nav className="flex justify-between bg-gray-100 p-4">
//           <h1 className="text-lg font-semibold">Welcome, CDC Representative</h1>
//           <button
//             onClick={handleLogout}
//             className="flex items-center gap-2 rounded-md bg-red-500 px-4 py-2 text-white"
//           >
//             <FiLogOut /> Log out
//           </button>
//         </nav>

//         {/* Dynamic Content */}
//         <div className="mt-6 border p-4">
//           {activeTab === "cdcView" && (
//             <div>
//               <h2 className="text-lg font-semibold">CDC View Page</h2>
//               <p>Access nationwide epidemiological trends, alerts, and reports.</p>
//             </div>
//           )}

//           {activeTab === "epidemiology" && <EpidemiologicalData />}

//           {activeTab === "publicHealthAlerts" && (
//             <div>
//               <h2 className="text-lg font-semibold">Public Health Alerts</h2>
//               <p>Latest health alerts and advisories.</p>
//             </div>
//           )}

//           {activeTab === "announcements" && (
//             <div>
//               <h2 className="text-lg font-semibold">CDC Announcements</h2>
//               <p>Create, modify, and view CDC-issued announcements.</p>
//             </div>
//           )}

//           {activeTab === "chat" && (
//             <div>
//               <h2 className="text-lg font-semibold">Chat & Institutions</h2>
//               <p>Communicate with healthcare departments and partners.</p>
//               <Chatbot />
//             </div>
//           )}

//           {activeTab === "metrics" && (
//             <div>
//               <h2 className="text-lg font-semibold">Operational Metrics</h2>
//               <p>Monitor hospital capacities and testing rates.</p>
//               <ResponsiveContainer width="100%" height={300}>
//                 <LineChart data={data}>
//                   <CartesianGrid strokeDasharray="3 3" />
//                   <XAxis dataKey="date" />
//                   <YAxis />
//                   <Tooltip />
//                   <Legend />
//                   <Line type="monotone" dataKey="cases" stroke="#8884d8" />
//                   <Line type="monotone" dataKey="hospitalizations" stroke="#82ca9d" />
//                 </LineChart>
//               </ResponsiveContainer>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }



