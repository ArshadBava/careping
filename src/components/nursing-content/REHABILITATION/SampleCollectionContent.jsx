import React from 'react';
import MobileAccordion from '../../MobileAccordion';

const SampleCollectionContent = () => {
    return (
        <div className="space-y-6 font-poppins text-gray-700">
            {/* 1. Sample Collection Intro */}
            <div className="bg-blue-50 p-6 rounded-2xl border-l-4 border-primary shadow-sm">
                <h2 className="text-2xl font-bold text-primary mb-4">Sample Collection (Specimen Collection)</h2>
                <div className="space-y-3 leading-relaxed">
                    <p>
                        Sample collection refers to obtaining blood, urine, stool, sputum, or other body fluids for laboratory testing.
                        Accurate collection is essential for correct diagnosis and treatment.
                    </p>
                </div>
            </div>

            {/* Principles */}
            <MobileAccordion title="Principles of Sample Collection" number="A">
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {[
                        "Maintain aseptic technique",
                        "Use correct container for each specimen",
                        "Label correctly (name, age, sex, date, time)",
                        "Collect at the right time (e.g., fasting)",
                        "Prevent contamination",
                        "Ensure proper transport to the lab",
                        "Provide patient education"
                    ].map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                            <span className="text-secondary mt-1">●</span>
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            </MobileAccordion>

            {/* Types of Spceimens */}
            <MobileAccordion title="Types of Specimens & Nursing Responsibilities" number="B">
                <div className="space-y-6">
                    {[
                        {
                            title: "Blood Sample",
                            purpose: "CBC, blood sugar, liver function, kidney function",
                            care: ["Identify patient", "Use sterile equipment", "Apply tourniquet, collect sample, avoid hemolysis", "Apply pressure after collection"]
                        },
                        {
                            title: "Urine Sample",
                            purpose: "Random, Early morning, 24-hour, Clean-catch midstream",
                            care: ["Clean perineal area", "Use sterile container for culture", "Discard first specimen for 24hr collection", "Send promptly"]
                        },
                        {
                            title: "Stool Sample",
                            purpose: "Occult blood, parasites, culture",
                            care: ["Provide clean bedpan", "Avoid contamination with urine/water", "Use spatula to transfer", "Seal properly"]
                        },
                        {
                            title: "Sputum Sample",
                            purpose: "TB test, culture, cytology",
                            care: ["Collect early morning sample", "Encourage deep breathing and coughing", "Use sterile wide-mouth container"]
                        },
                        {
                            title: "Swab Samples",
                            purpose: "Throat, wound, nasal, vaginal swabs",
                            care: ["Maintain sterile technique", "Label site of collection", "Avoid touching surrounding areas"]
                        }
                    ].map((item, idx) => (
                        <div key={idx} className="bg-light-teal p-5 rounded-xl border border-teal-100">
                            <h4 className="font-bold text-navy mb-2 text-lg">{idx + 1}. {item.title}</h4>
                            <p className="text-sm text-gray-700 mb-3 bg-white/50 p-2 rounded block border border-teal-50">
                                <span className="font-bold text-teal-700">Purpose/Types:</span> {item.purpose}
                            </p>
                            <div>
                                <span className="font-semibold text-sm text-navy block mb-1">Nursing Care:</span>
                                <ul className="list-disc pl-5 space-y-1 text-sm text-gray-600">
                                    {item.care.map((careItem, i) => <li key={i}>{careItem}</li>)}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </MobileAccordion>

            {/* 2. Health Monitoring Intro */}
            <div className="bg-blue-50 p-6 rounded-2xl border-l-4 border-primary shadow-sm mt-8">
                <h2 className="text-2xl font-bold text-primary mb-4">Health Monitoring (Nursing)</h2>
                <p className="leading-relaxed">
                    Health monitoring is the ongoing assessment of a patient’s vital signs, physical condition, laboratory values,
                    symptoms, and overall well-being.
                </p>
            </div>

            {/* Components of Monitoring */}
            <MobileAccordion title="Components of Health Monitoring" number="A">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {[
                        { title: "Vital Signs", items: ["TPR (Temp, Pulse, Resp)", "Blood Pressure", "SpO₂", "Pain Score"] },
                        { title: "Physical Assessment", items: ["Skin color, hydration", "Consciousness level", "Mobility/Gait", "Sleep, Wounds"] },
                        { title: "Intake & Output", items: ["Oral/IV fluids", "Urine output", "Vomitus/Stools", "Drainage"] },
                        { title: "Lab Monitoring", items: ["Review results", "Report abnormal findings", "Monitor trends"] },
                        { title: "Risk Monitoring", items: ["Fall risk", "Infection risk", "Pressure sore risk", "Suicide risk"] },
                        { title: "Medication Monitoring", items: ["Check effects/side effects", "Monitor therapeutic levels", "Dosage & timing"] }
                    ].map((box, i) => (
                        <div key={i} className="bg-gray-50 p-4 rounded-xl border border-gray-100 hover:shadow-md transition-shadow">
                            <h4 className="font-bold text-navy mb-2 border-b border-gray-200 pb-1">{box.title}</h4>
                            <ul className="text-sm space-y-1 text-gray-600">
                                {box.items.map((item, j) => <li key={j}>• {item}</li>)}
                            </ul>
                        </div>
                    ))}
                </div>
            </MobileAccordion>

            {/* Purpose */}
            <MobileAccordion title="Purpose of Health Monitoring" number="B">
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {[
                        "Early detection of complications",
                        "Evaluate effectiveness of treatment",
                        "Prevent deterioration",
                        "Support recovery",
                        "Ensure patient safety"
                    ].map((item, index) => (
                        <li key={index} className="flex items-center gap-2 bg-green-50 p-2 rounded-lg text-green-800 text-sm border border-green-100">
                            <span>✓</span> {item}
                        </li>
                    ))}
                </ul>
            </MobileAccordion>

            {/* Summary */}
            <div className="bg-green-50 p-6 rounded-2xl shadow-sm border border-green-100 text-center">
                <h3 className="text-xl font-bold text-green-700 mb-2">Summary</h3>
                <p className="text-green-800 font-medium leading-relaxed">
                    Sample Collection ensures accurate diagnostic results by following correct procedures. Health Monitoring involves continuous assessment to maintain patient safety and guide treatment.
                </p>
            </div>
        </div>
    );
};

export default SampleCollectionContent;
