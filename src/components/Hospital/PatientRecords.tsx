// import React from 'react'

// const PatientRecords = () => {
//   return (
//     <div>
//       <h1>pid</h1>
//     </div>
//   )
// }

// export default PatientRecords





"use client";
import React, { useState, useEffect } from "react";

interface Identifier {
  system: string;
  value: string;
}

interface Name {
  use: string;
  text: string;
  family: string;
  given: string[];
  prefix?: string[];
  suffix?: string[];
  period: string;
}

interface Address {
  line: string[];
  city: string;
  state: string;
  postalCode: string;
  country: string;
}

interface Telecom {
  system: string;
  value: string;
  use: string;
}

interface Condition {
  code: string;
  onsetDate: string;
  clinicalStatus: string;
}

interface DiagnosticReport {
  testPerformed: string;
  testResult: string;
  date: string;
}

interface PatientData {
  identifier: Identifier[];
  active: boolean;
  name: Name;
  gender: string;
  birthDate: string;
  address: Address;
  telecom: Telecom;
  managingOrganization: string;
  condition: Condition[];
  diagnosticReport: DiagnosticReport;
  follow_up_date: string;
  partner_notification_status: string;
  health_department_alert: string;
}

const PatientSearch: React.FC = () => {
  const [patients, setPatients] = useState<PatientData[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredPatient, setFilteredPatient] = useState<PatientData | null>(null);

  useEffect(() => {
    fetch("/patientData.json")
      .then((res) => res.json())
      .then((data: PatientData[]) => {
        setPatients(data);
      })
      .catch((error) => {
        console.error("Error fetching patient data:", error);
      });
  }, []);

  // Handle Search
  const handleSearch = (query: string) => {
    setSearchQuery(query);
    const match = patients.find((patient) =>
      patient.name.text.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredPatient(match ?? null);
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4 text-center">Patient Search</h1>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search by name..."
        className="w-full p-2 mb-4 border border-gray-300 rounded-md"
        value={searchQuery}
        onChange={(e) => handleSearch(e.target.value)}
      />

      {/* Display Patient Details */}
      {filteredPatient ? (
        <div className="p-4 bg-gray-100 border rounded-lg shadow-md">
          <h2 className="text-lg font-bold">{filteredPatient.name.text}</h2>
          <table className="w-full border-collapse border border-gray-300 mt-2">
            <tbody>
              <tr>
                <td className="border px-4 py-2 font-semibold">Gender</td>
                <td className="border px-4 py-2">{filteredPatient.gender}</td>
              </tr>
              <tr>
                <td className="border px-4 py-2 font-semibold">Date of Birth</td>
                <td className="border px-4 py-2">{filteredPatient.birthDate}</td>
              </tr>
              <tr>
                <td className="border px-4 py-2 font-semibold">Address</td>
                <td className="border px-4 py-2">
                  {filteredPatient.address.line[0]}, {"Los Angeles"}
                </td>
              </tr>
              <tr>
                <td className="border px-4 py-2 font-semibold">Phone</td>
                <td className="border px-4 py-2">{filteredPatient.telecom.value}</td>
              </tr>
              <tr>
                <td className="border px-4 py-2 font-semibold">Condition</td>
                <td className="border px-4 py-2">
                  {filteredPatient.condition?.[0]?.code} (Status:{" "}
                  {filteredPatient.condition?.[0]?.clinicalStatus})
                </td>
              </tr>
              <tr>
                <td className="border px-4 py-2 font-semibold">Test Performed</td>
                <td className="border px-4 py-2">
                  {filteredPatient.diagnosticReport?.testPerformed}
                </td>
              </tr>
              <tr>
                <td className="border px-4 py-2 font-semibold">Test Result</td>
                <td className="border px-4 py-2">
                  {filteredPatient.diagnosticReport?.testResult}
                </td>
              </tr>
              <tr>
                <td className="border px-4 py-2 font-semibold">Follow-up Date</td>
                <td className="border px-4 py-2">{filteredPatient.follow_up_date}</td>
              </tr>
              <tr>
                <td className="border px-4 py-2 font-semibold">Health Department Alert</td>
                <td className="border px-4 py-2">{filteredPatient.health_department_alert}</td>
              </tr>
            </tbody>
          </table>
        </div>
      ) : (
        searchQuery && <p className="text-center text-gray-500">No patient found.</p>
      )}
    </div>
  );
};

export default PatientSearch;
