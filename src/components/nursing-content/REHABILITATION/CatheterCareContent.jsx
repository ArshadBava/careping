import React from 'react';
import MobileAccordion from '../../MobileAccordion';

const CatheterCareContent = () => {
    return (
        <div className="space-y-6 font-poppins text-gray-700">
            {/* Introduction */}
            <div className="bg-blue-50 p-6 rounded-2xl border-l-4 border-primary shadow-sm">
                <h2 className="text-2xl font-bold text-primary mb-4">What Is a Catheter?</h2>
                <div className="space-y-3 leading-relaxed">
                    <p>
                        A catheter is a thin, flexible tube inserted into the body to drain urine from the bladder when a person cannot urinate normally.
                        It helps monitor urine output, prevent retention, and keep the bladder empty during illness or surgery.
                    </p>
                </div>
            </div>

            {/* Types */}
            <MobileAccordion title="Types of Urinary Catheters" number="1">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                        { title: "Indwelling (Foley)", desc: "Inserted through urethra, has balloon.", uses: ["Surgery", "Retention", "Critically ill", "Accurate measurement"] },
                        { title: "Intermittent (In-and-Out)", desc: "Temporary insertion to empty bladder.", uses: ["Short-term collection", "Spinal cord injury", "Self-catheterization"] },
                        { title: "Suprapubic", desc: "Inserted through abdominal wall.", uses: ["Urethral injury/obstruction", "Long-term use"] }
                    ].map((type, i) => (
                        <div key={i} className="bg-light-teal/30 p-4 rounded-xl border border-teal-100">
                            <h4 className="font-bold text-navy mb-2">{type.title}</h4>
                            <p className="text-sm text-gray-700 mb-3 min-h-[40px]">{type.desc}</p>
                            <div>
                                <span className="text-xs font-bold text-teal-800 uppercase block mb-1">Uses:</span>
                                <ul className="list-disc pl-4 text-xs text-gray-600 space-y-1">
                                    {type.uses.map((use, j) => <li key={j}>{use}</li>)}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </MobileAccordion>

            {/* Daily Care */}
            <MobileAccordion title="Daily Catheter Care" number="2">
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {[
                        "Hand hygiene before/after touching",
                        "Clean catheter area with warm water/soap",
                        "Check for redness/swelling/discharge",
                        "Keep drainage bag below bladder level",
                        "Ensure tubing is not kinked",
                        "Empty bag when 2/3 full",
                        "Avoid pulling/tugging",
                        "Maintain hydration"
                    ].map((step, i) => (
                        <li key={i} className="flex items-center gap-2 bg-gray-50 p-2 rounded-lg text-sm border border-gray-100 text-gray-700">
                            <span className="text-secondary font-bold">✓</span> {step}
                        </li>
                    ))}
                </ul>
            </MobileAccordion>

            {/* Procedure */}
            <MobileAccordion title="Catheterization Procedure (Basic)" number="3">
                <div className="space-y-4">
                    {[
                        { stage: "Preparation", steps: ["Wash hands, gather equipment", "Explain procedure, privacy", "Position patient", "Sterile gloves & tray"] },
                        { stage: "Insertion (Foley)", steps: ["Clean genital area with antiseptic", "Lubricate tip", "Insert gently until urine flows + 2-3cm", "Inflate balloon", "Secure tubing"] },
                        { stage: "Aftercare", steps: ["Secure to thigh", "Bag below bladder", "Dispose equipment", "Wash hands", "Document"] }
                    ].map((phase, i) => (
                        <div key={i} className="border-l-4 border-blue-200 pl-4 py-2">
                            <h4 className="font-bold text-navy mb-2">{phase.stage}</h4>
                            <ul className="list-decimal pl-5 text-sm text-gray-600 space-y-1">
                                {phase.steps.map((s, j) => <li key={j}>{s}</li>)}
                            </ul>
                        </div>
                    ))}
                </div>
            </MobileAccordion>

            {/* Removal */}
            <MobileAccordion title="Removal of Foley Catheter" number="4">
                <ol className="list-decimal pl-5 space-y-2 text-gray-700">
                    <li>Wash hands and wear gloves.</li>
                    <li>Deflate balloon <span className="font-bold">completely</span>.</li>
                    <li>Gently pull catheter out.</li>
                    <li>Observe for pain/difficulty.</li>
                    <li>Monitor patient for first void (6-8 hrs).</li>
                    <li>Document.</li>
                </ol>
            </MobileAccordion>

            {/* Risks & Infection */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-orange-50 p-6 rounded-xl border border-orange-100">
                    <h3 className="text-lg font-bold text-orange-800 mb-3">⚠️ Risks & Complications</h3>
                    <ul className="list-disc pl-5 text-orange-800 text-sm space-y-1">
                        <li>UTI (most common)</li>
                        <li>Blockage</li>
                        <li>Leakage</li>
                        <li>Bladder spasms</li>
                        <li>Trauma</li>
                    </ul>
                </div>
                <div className="bg-red-50 p-6 rounded-xl border border-red-100">
                    <h3 className="text-lg font-bold text-red-800 mb-3">🔴 Signs of Infection</h3>
                    <ul className="list-disc pl-5 text-red-800 text-sm space-y-1">
                        <li>Fever or chills</li>
                        <li>Burning sensation</li>
                        <li>Cloudy/foul-smelling urine</li>
                        <li>Blood in urine</li>
                        <li>Abdominal pain</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default CatheterCareContent;
