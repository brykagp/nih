

interface PatientProfile {
  name: string;
  gender: string;
  birthDate: string;
  address: string;
  phone: string;
  managingOrg: string;
  conditions: { name: string; onset: string; status: string }[];
  diagnosticReports: { testName: string; result: string; date: string }[];
  followUpDate: string;
  partnerNotificationStatus: string;
  healthAlert: string;
 
}

const Profile = () => {
  // Sample Patient Data (Replace with API data)
  const patient: PatientProfile = {
    name: "Sarah Jones",
    gender: "Other",
    birthDate: "2000-12-14",
    address: "317 Main St, Phoenix, IL 51570, USA",
    phone: "+1-733-255-1458 (home)",
    managingOrg: "Sample Healthcare Org",
    conditions: [
      { name: "HPV", onset: "2021-05-21", status: "Active" },
    ],
    diagnosticReports: [
      { testName: "Gonorrhea Test", result: "Inconclusive", date: "2023-09-04" },
    ],
    followUpDate: "2024-06-15",
    partnerNotificationStatus: "Notified",
    healthAlert: "No Alert",
   
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-6 border border-gray-200">
      {/* Profile Image */}
      <div className="flex justify-center">
       
      </div>

      {/* Patient Details */}
      <h2 className="mt-4 text-xl font-bold text-gray-800 text-center">{patient.name}</h2>

      <div className="mt-4 text-gray-700">
      <p><strong>Gender:</strong> {patient.name}</p>
        <p><strong>Gender:</strong> {patient.gender}</p>
        <p><strong>Birth Date:</strong> {patient.birthDate}</p>
        <p><strong>Address:</strong> {patient.address}</p>
        <p><strong>Phone:</strong> {patient.phone}</p>
        <p><strong>Managing Organization:</strong> {patient.managingOrg}</p>
      </div>

      {/* Conditions */}
      <div className="mt-4">
        <h3 className="font-semibold text-gray-800">Conditions:</h3>
        <ul className="list-disc pl-5 text-gray-700">
          {patient.conditions.map((condition, index) => (
            <li key={index}>
              {condition.name} (Onset: {condition.onset}, Status: {condition.status})
            </li>
          ))}
        </ul>
      </div>

      {/* Diagnostic Reports */}
      <div className="mt-4">
        <h3 className="font-semibold text-gray-800">Diagnostic Reports:</h3>
        <ul className="list-disc pl-5 text-gray-700">
          {patient.diagnosticReports.map((report, index) => (
            <li key={index}>
              {report.testName} Result: {report.result} (Date: {report.date})
            </li>
          ))}
        </ul>
      </div>

      {/* Follow-Up & Alerts */}
      <div className="mt-4 text-gray-700">
        <p><strong>Follow-Up Date:</strong> {patient.followUpDate}</p>
        <p><strong>Partner Notification Status:</strong> {patient.partnerNotificationStatus}</p>
        <p><strong>Health Department Alert:</strong> {patient.healthAlert}</p>
      </div>

      
    </div>
  );
};

export default Profile;








