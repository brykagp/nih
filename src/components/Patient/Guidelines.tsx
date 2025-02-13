import React from "react";

const HIVGuidelines: React.FC = () => {
  return (
    <div className="p-5">
      <h2 className="text-2xl font-bold mb-4">HIV Guidelines</h2>
      <div className="space-y-4">
        <section>
          <h3 className="text-xl font-semibold">1. Overview</h3>
          <p>
            Human Immunodeficiency Virus (HIV) attacks the immune system, 
            specifically CD4 cells (T cells), which help the body fight infections. 
            If left untreated, HIV can lead to Acquired Immunodeficiency Syndrome (AIDS).
          </p>
        </section>

        <section>
          <h3 className="text-xl font-semibold">2. Transmission</h3>
          <ul className="list-disc pl-5">
            <li>Unprotected sexual contact with an infected individual</li>
            <li>Sharing needles or syringes</li>
            <li>Mother-to-child transmission during childbirth or breastfeeding</li>
            <li>Blood transfusions with contaminated blood (rare due to screening)</li>
          </ul>
        </section>

        <section>
          <h3 className="text-xl font-semibold">3. Symptoms</h3>
          <ul className="list-disc pl-5">
            <li>Fever, chills, rash, night sweats</li>
            <li>Muscle aches, sore throat, swollen lymph nodes</li>
            <li>Fatigue and weight loss</li>
            <li>Opportunistic infections (in later stages)</li>
          </ul>
        </section>

        <section>
          <h3 className="text-xl font-semibold">4. Prevention</h3>
          <ul className="list-disc pl-5">
            <li>Use condoms during sexual activity</li>
            <li>Pre-exposure prophylaxis (PrEP) for high-risk individuals</li>
            <li>Regular HIV testing and early detection</li>
            <li>Needle exchange programs for intravenous drug users</li>
          </ul>
        </section>

        {/* <section>
          <h3 className="text-xl font-semibold">5. Diagnosis</h3>
          <ul className="list-disc pl-5">
            <li>HIV Antibody Test (ELISA and Western Blot)</li>
            <li>Rapid HIV Testing</li>
            <li>Polymerase Chain Reaction (PCR) Test for early detection</li>
          </ul>
        </section> */}

        {/* <section>
          <h3 className="text-xl font-semibold">6. Treatment</h3>
          <p>
            Antiretroviral therapy (ART) is the primary treatment for HIV.
            It involves a combination of medications that help lower viral load,
            improve immune function, and prevent transmission.
          </p>
          <ul className="list-disc pl-5">
            <li>Integrase inhibitors (e.g., Dolutegravir, Raltegravir)</li>
            <li>Protease inhibitors (e.g., Atazanavir, Darunavir)</li>
            <li>Reverse transcriptase inhibitors (e.g., Tenofovir, Zidovudine)</li>
          </ul>
        </section>

        <section>
          <h3 className="text-xl font-semibold">7. Living with HIV</h3>
          <ul className="list-disc pl-5">
            <li>Adhere to prescribed ART regimen</li>
            <li>Maintain a healthy diet and regular exercise</li>
            <li>Routine medical check-ups and blood tests</li>
            <li>Mental health support and counseling</li>
          </ul>
        </section> */}
      </div>
    </div>
  );
};

export default HIVGuidelines;
