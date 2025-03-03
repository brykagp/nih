

import React from "react";

const TreatmentPlans: React.FC = () => {
  return (
    <div>
      <h2 className="text-xl font-semibold">Diagnosed Conditions & Treatment Plans</h2>
      <div className="mt-4">
        <h3 className="text-lg font-semibold">Condition: Hypertension</h3>
        <p>Details about Hypertension.</p>
        <h4 className="text-md font-semibold">Treatment Plan:</h4>
        <ul>
          <li>Medication: Blood Pressure Medication</li>
          <li>Dosage: 1 tablet daily</li>
          <li>Additional Instructions: Monitor BP regularly</li>
        </ul>
      </div>

      <div className="mt-6">
        <h3 className="text-lg font-semibold">Condition: Diabetes</h3>
        <p>Details about Diabetes.</p>
        <h4 className="text-md font-semibold">Treatment Plan:</h4>
        <ul>
          <li>Medication: Insulin Therapy</li>
          <li>Dosage: Inject 3 times a day before meals</li>
          <li>Additional Instructions: Maintain a low-carb diet</li>
        </ul>
      </div>
    </div>
  );
};

export default TreatmentPlans;
