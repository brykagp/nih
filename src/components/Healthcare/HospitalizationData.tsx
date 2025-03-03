

import React, { useEffect, useState } from "react";

interface Hospital {
  "Hospital Name": string;
  Address: string;
  City: string;
  State: string;
  "ZIP Code": number;
  Admissions: number;
  "Discharge Status": string;
  "ICU Status": string;
  "Ventilator Usage": string;
  "Occupied Beds": number;
  "Empty Beds": number;
}

const HospitalsPage: React.FC = () => {
  const [hospitals, setHospitals] = useState<Hospital[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");

  useEffect(() => {
    fetch("/hospitals.json")
      .then((response) => response.json())
      .then((data) => setHospitals(data as Hospital[])) // Type assertion fix
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  // Filter hospitals based on search query
  const filteredHospitals = hospitals.filter(
    (hospital) =>
      hospital["Hospital Name"].toLowerCase().includes(searchQuery.toLowerCase()) ||
      hospital.City.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex flex-col h-screen w-full bg-gray-100 p-6">
      <h2 className="text-2xl font-bold mb-4 text-center">Hospital Data</h2>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search by hospital name or city..."
        className="mb-4 p-3 border border-gray-400 rounded-lg w-1/2 mx-auto shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      {/* Scrollable Table Container */}
      <div className="w-full max-w-6xl mx-auto overflow-x-auto border border-gray-300 shadow-lg rounded-lg">
        <div className="max-h-[500px] overflow-y-auto">
          <table className="min-w-full border-collapse border border-gray-300">
            <thead className="bg-gray-200 sticky top-0 z-10 shadow-md">
              <tr>
                <th className="border border-gray-300 px-4 py-2">Hospital Name</th>
                <th className="border border-gray-300 px-4 py-2">Address</th>
                <th className="border border-gray-300 px-4 py-2">City</th>
                <th className="border border-gray-300 px-4 py-2">State</th>
                <th className="border border-gray-300 px-4 py-2">ZIP Code</th>
                <th className="border border-gray-300 px-4 py-2">Admissions</th>
                <th className="border border-gray-300 px-4 py-2">Discharge Status</th>
                <th className="border border-gray-300 px-4 py-2">ICU Status</th>
                <th className="border border-gray-300 px-4 py-2">Ventilator Usage</th>
                <th className="border border-gray-300 px-4 py-2">Occupied Beds</th>
                <th className="border border-gray-300 px-4 py-2">Empty Beds</th>
              </tr>
            </thead>
            <tbody>
              {filteredHospitals.length > 0 ? (
                filteredHospitals.map((hospital, index) => (
                  <tr key={index} className="hover:bg-gray-100 text-center">
                    <td className="border border-gray-300 px-4 py-2">{hospital["Hospital Name"]}</td>
                    <td className="border border-gray-300 px-4 py-2">{hospital.Address}</td>
                    <td className="border border-gray-300 px-4 py-2">{hospital.City}</td>
                    <td className="border border-gray-300 px-4 py-2">{hospital.State}</td>
                    <td className="border border-gray-300 px-4 py-2">{hospital["ZIP Code"]}</td>
                    <td className="border border-gray-300 px-4 py-2">{hospital.Admissions}</td>
                    <td className="border border-gray-300 px-4 py-2">{hospital["Discharge Status"]}</td>
                    <td className="border border-gray-300 px-4 py-2">{hospital["ICU Status"]}</td>
                    <td className="border border-gray-300 px-4 py-2">{hospital["Ventilator Usage"]}</td>
                    <td className="border border-gray-300 px-4 py-2">{hospital["Occupied Beds"]}</td>
                    <td className="border border-gray-300 px-4 py-2">{hospital["Empty Beds"]}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={11} className="text-center py-4">
                    No results found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default HospitalsPage;
