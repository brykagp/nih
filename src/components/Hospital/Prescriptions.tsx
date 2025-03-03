// import React from 'react'

// const Prescriptions = () => {
//   return (
//     <div>
//       <h1>prescriptions</h1>
//     </div>
//   )
// }

// export default Prescriptions







import React, { useState, useEffect } from "react";

interface Prescription {
  patientName: string;
  medication: string;
  dosage: string;
  prescribingDoctor: string;
  status: "Active" | "Completed" | "Discontinued";
  datePrescribed: string;
}

const statusColors: Record<string, string> = {
  Active: "text-green-500",
  Completed: "text-yellow-500",
  Discontinued: "text-red-500"
};

const Prescriptions: React.FC = () => {
  const [prescriptions, setPrescriptions] = useState<Prescription[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<string>("");

  useEffect(() => {
    fetch("/prescriptions.json")
      .then((res) => res.json())
      .then((data: unknown) => {
        if (Array.isArray(data) && data.every((item) =>
          "patientName" in item && "medication" in item && "dosage" in item &&
          "prescribingDoctor" in item && "status" in item && "datePrescribed" in item)) {
          setPrescriptions(data as Prescription[]);
        } else {
          console.error("Invalid prescriptions data format:", data);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching prescriptions:", error);
        setLoading(false);
      });
  }, []);

  const filteredPrescriptions = filter
    ? prescriptions.filter((prescription) =>
        prescription.patientName.toLowerCase().includes(filter.toLowerCase()) ||
        prescription.medication.toLowerCase().includes(filter.toLowerCase())
      )
    : prescriptions;

  return (
    <div className="p-6 bg-gray-900 border border-gray-700 rounded-lg shadow-lg text-white max-w-6xl mx-auto w-full">
      <h2 className="text-2xl font-bold mb-4">Prescriptions & Medications</h2>

      {/* Search Filter */}
      <input
        type="text"
        placeholder="Filter by Patient Name or Medication..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="mb-4 p-2 border border-gray-500 rounded-md w-full bg-gray-800 text-white"
      />

      {loading ? (
        <p>Loading prescriptions...</p>
      ) : (
        <div className="overflow-y-auto max-h-[500px]  border border-gray-700 rounded-lg">
          <table className="w-full border-collapse">
            <thead className="bg-gray-800 sticky top-0">
              <tr>
                <th className="border border-gray-700 px-4 py-2 text-left">Patient</th>
                <th className="border border-gray-700 px-4 py-2 text-left">Medication</th>
                <th className="border border-gray-700 px-4 py-2 text-left">Dosage</th>
                <th className="border border-gray-700 px-4 py-2 text-left">Doctor</th>
                <th className="border border-gray-700 px-4 py-2 text-left">Status</th>
                <th className="border border-gray-700 px-4 py-2 text-left">Date Prescribed</th>
              </tr>
            </thead>
            <tbody>
              {filteredPrescriptions.length > 0 ? (
                filteredPrescriptions.map((prescription, index) => (
                  <tr key={index} className="bg-gray-800 hover:bg-gray-700">
                    <td className="border border-gray-700 px-4 py-2">{prescription.patientName}</td>
                    <td className="border border-gray-700 px-4 py-2">{prescription.medication}</td>
                    <td className="border border-gray-700 px-4 py-2">{prescription.dosage}</td>
                    <td className="border border-gray-700 px-4 py-2">{prescription.prescribingDoctor}</td>
                    <td className={`border border-gray-700 px-4 py-2 font-semibold ${statusColors[prescription.status]}`}>
                      {prescription.status}
                    </td>
                    <td className="border border-gray-700 px-4 py-2">{new Date(prescription.datePrescribed).toLocaleDateString()}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={6} className="text-center border border-gray-700 py-4 text-gray-500">
                    No matching records found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Prescriptions;

