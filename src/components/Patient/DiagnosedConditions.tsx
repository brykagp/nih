export default function DiagnosedConditions() {
  const diagnosedConditions = [
    {
      id: 1,
      name: "Rheumatoid Arthritis",
      date: "2023-09-15",
      severity: "Moderate",
      medication: "Methotrexate",
      notes: "Regular exercise and physiotherapy recommended.",
    },
    {
      id: 2,
      name: "Lupus",
      date: "2024-01-05",
      severity: "Severe",
      medication: "Hydroxychloroquine",
      notes: "Avoid excessive sunlight exposure.",
    },
    {
      id: 3,
      name: "Type 2 Diabetes",
      date: "2022-06-10",
      severity: "Moderate",
      medication: "Metformin",
      notes: "Monitor blood sugar levels daily.",
    },
    {
      id: 4,
      name: "Hypertension",
      date: "2021-11-20",
      severity: "Mild",
      medication: "Lisinopril",
      notes: "Reduce sodium intake and exercise regularly.",
    },
    {
      id: 5,
      name: "Asthma",
      date: "2020-08-14",
      severity: "Severe",
      medication: "Albuterol Inhaler",
      notes: "Use inhaler during shortness of breath episodes.",
    },
    {
      id: 6,
      name: "Osteoarthritis",
      date: "2019-03-25",
      severity: "Moderate",
      medication: "Ibuprofen",
      notes: "Maintain joint mobility with stretching exercises.",
    },
    {
      id: 7,
      name: "Hypothyroidism",
      date: "2023-02-18",
      severity: "Mild",
      medication: "Levothyroxine",
      notes: "Take medication before breakfast daily.",
    },
    {
      id: 8,
      name: "Chronic Kidney Disease",
      date: "2022-09-05",
      severity: "Moderate",
      medication: "Losartan",
      notes: "Maintain hydration and avoid high-protein diets.",
    },
    {
      id: 9,
      name: "Gastroesophageal Reflux Disease (GERD)",
      date: "2021-05-30",
      severity: "Mild",
      medication: "Omeprazole",
      notes: "Avoid acidic foods and late-night meals.",
    },
    {
      id: 10,
      name: "Multiple Sclerosis",
      date: "2024-04-12",
      severity: "Severe",
      medication: "Interferon beta",
      notes: "Follow-up with neurologist regularly.",
    },
  ];

  return (
    <div className="p-4 ">
      <h2 className="text-lg font-semibold mb-4">Diagnosed Conditions</h2>

      <div className="max-h-[500px] overflow-y-auto border border-gray-300 rounded-md">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200 text-center">
              <th className="border border-gray-300 p-2">Condition</th>
              <th className="border border-gray-300 p-2">Diagnosis Date</th>
              <th className="border border-gray-300 p-2">Severity</th>
              <th className="border border-gray-300 p-2">Medication</th>
              <th className="border border-gray-300 p-2">Doctor&apos;s Notes</th>
            </tr>
          </thead>
          <tbody>
            {diagnosedConditions.map((condition) => (
              <tr key={condition.id} className="hover:bg-gray-100 border-b border-gray-300 text-center">
                <td className="border border-gray-300 p-2">{condition.name}</td>
                <td className="border border-gray-300 p-2">{condition.date}</td>
                <td className="border border-gray-300 p-2">{condition.severity}</td>
                <td className="border border-gray-300 p-2">{condition.medication}</td>
                <td className="border border-gray-300 p-2">{condition.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
