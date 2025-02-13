

"use client";

import React, { useEffect, useState } from "react";

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
  id?:string;
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

const PatientTable: React.FC = () => {
  const [patients, setPatients] = useState<PatientData[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [editedPatient, setEditedPatient] = useState<PatientData | null>(null);

  useEffect(() => {
    fetch("/patientData.json")
      .then((res) => res.json())
      .then((data: unknown) => {
        if (Array.isArray(data)) {
          setPatients(data as PatientData[]);
        } else {
          console.error("Invalid data format:", data);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching patient data:", error);
        setLoading(false);
      });
  }, []);

  // const handleEdit = (index: number) => {
  //   setEditingIndex(index);
  //   setEditedPatient({ ...patients[index] });
  // };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    field: keyof PatientData,
  ) => {
    if (editedPatient) {
      setEditedPatient({ ...editedPatient, [field]: e.target.value });
    }
  };

  const handleSave = () => {
    if (editedPatient !== null && editingIndex !== null) {
      const updatedPatients = [...patients];
      updatedPatients[editingIndex] = editedPatient;
      setPatients(updatedPatients);
      setEditingIndex(null);
      setEditedPatient(null);
    }
  };

  const filteredPatients = patients.filter(
    (patient) =>
      patient.name.text.toLowerCase().includes(searchQuery.toLowerCase()) ||
      patient.gender.toLowerCase().includes(searchQuery.toLowerCase()) ||
      patient.diagnosticReport?.testResult
        ?.toLowerCase()
        .includes(searchQuery.toLowerCase()),
  );

  return (
    <div className="container mx-auto p-6">
      <h1 className="mb-4 text-center text-2xl font-bold">
        Patient Data Table
      </h1>
      <input
        type="text"
        placeholder="Search by name, gender, or test result..."
        className="mb-4 w-full rounded-md border border-gray-300 p-2"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      {loading ? (
        <p>Loading patient data...</p>
      ) : filteredPatients.length === 0 ? (
        <p>No matching records found.</p>
      ) : (
        <div className="max-h-[500px] overflow-x-auto overflow-y-auto rounded-md border p-2 shadow-lg">
          {filteredPatients.map((patient, index) => (
            <div key={index} className="mb-4 rounded-lg border bg-gray-100 p-4">
              {editingIndex === index ? (
                <div>
                  <input
                    type="text"
                    className="w-full border p-2"
                    value={editedPatient?.name.text}
                    onChange={(e) => handleChange(e, "name")}
                  />
                  <input
                    type="text"
                    className="w-full border p-2"
                    value={editedPatient?.gender}
                    onChange={(e) => handleChange(e, "gender")}
                  />
                  <input
                    type="text"
                    className="w-full border p-2"
                    value={editedPatient?.birthDate}
                    onChange={(e) => handleChange(e, "birthDate")}
                  />
                  <input
                    type="text"
                    className="w-full border p-2"
                    value={editedPatient?.managingOrganization}
                    onChange={(e) => handleChange(e, "managingOrganization")}
                  />
                  <input
                    type="text"
                    className="w-full border p-2"
                    value={editedPatient?.condition[0]?.code}
                    onChange={(e) => handleChange(e, "condition")}
                  />
                  <input
                    type="text"
                    className="w-full border p-2"
                    value={editedPatient?.diagnosticReport.testPerformed}
                    onChange={(e) => handleChange(e, "diagnosticReport")}
                  />
                  <input
                    type="text"
                    className="w-full border p-2"
                    value={editedPatient?.diagnosticReport.testResult}
                    onChange={(e) => handleChange(e, "diagnosticReport")}
                  />
                  <input
                    type="text"
                    className="w-full border p-2"
                    value={editedPatient?.follow_up_date}
                    onChange={(e) => handleChange(e, "follow_up_date")}
                  />
                  <input
                    type="text"
                    className="w-full border p-2"
                    value={editedPatient?.health_department_alert}
                    onChange={(e) => handleChange(e, "health_department_alert")}
                  />
                  <button
                    onClick={handleSave}
                    className="mt-2 rounded bg-green-500 p-2 text-white"
                  >
                    Save
                  </button>
                </div>
              ) : (
                <>
                  <h2 className="mb-2 text-lg font-bold">
                    {patient.name.text ?? "Unknown"}
                  </h2>
                  <p>
                    <strong>id:</strong> {patient.id ?? "No alert"}
                  </p>
                  <p>
                    <strong>Active:</strong> {patient.active ? "Yes" : "No"}
                  </p>
                  <p>
                    <strong>Address:</strong> {patient.address.line?? "Not specified"}, {patient.address.city?? "Not specified"}, {patient.address.state?? "Not specified"}, {patient.address.postalCode?? "Not specified"}, {patient.address.country?? "Not specified"}
                  </p>
                  <p>
                    <strong>Gender:</strong> {patient.gender ?? "Not specified"}
                  </p>
                  <p>
                    <strong>telephone:</strong> {patient.telecom.value ?? "No alert"}
                  </p>
                  <p>
                    <strong>Date of Birth:</strong>{" "}
                    {patient.birthDate ?? "Unknown"}
                  </p>
                  <p>
                    <strong>Managing Organization:</strong>{" "}
                    {patient.managingOrganization ?? "Not specified"}
                  </p>
                  <p>
                    <strong>Condition:</strong>{" "}
                    {patient.condition[0]?.code ?? "No condition"}
                  </p>
                  <p>
                    <strong>Diagnostic Report: Test Performed:</strong>{" "}
                    {patient.diagnosticReport.testPerformed ?? "Not available"}, {patient.diagnosticReport.date ?? "Not available"}
                  </p>
                  <p>
                    <strong>Lab Test Result:</strong>{" "}
                    {patient.diagnosticReport.testResult ?? "Not available"}
                  </p>
                  <p>
                    <strong>Follow-up Date:</strong>{" "}
                    {patient.follow_up_date ?? "Not scheduled"}
                  </p>
                  <p>
                    <strong>Health Department Alert:</strong>{" "}
                    {patient.health_department_alert ?? "No alert"}
                  </p>
{/* 
                  <button
                    onClick={() => handleEdit(index)}
                    className="mt-2 rounded bg-blue-500 p-2 text-white"
                  >
                    Edit
                  </button> */}
                </>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PatientTable;





