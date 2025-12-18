import React from 'react';
import MobileAccordion from '../../MobileAccordion';

const VitalSignsContent = () => {
    return (
        <div className="space-y-6 font-poppins text-gray-700">
            {/* Introduction */}
            <div className="bg-blue-50 p-6 rounded-2xl border-l-4 border-primary shadow-sm">
                <h2 className="text-2xl font-bold text-primary mb-4">Vital Signs Monitoring</h2>
                <div className="space-y-3 leading-relaxed">
                    <p>
                        Vital signs monitoring refers to the regular measurement and assessment of the body’s most basic functions.
                        These signs give healthcare providers quick, essential information about a person’s physiological status and help detect early signs of medical problems.
                    </p>
                </div>
            </div>

            {/* Vital Signs Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                    {
                        title: "Temperature",
                        measure: "Body heat balance",
                        why: ["High (Fever): Infection, inflammation", "Low (Hypothermia): Exposure, shock"],
                        range: "~36.5°C – 37.5°C (97.7°F – 99.5°F)"
                    },
                    {
                        title: "Pulse (Heart Rate)",
                        measure: "Heart beats per minute",
                        why: ["Rapid: Fever, stress, pain, heart issues", "Slow: Fitness, meds, cardiac issues"],
                        range: "60 – 100 beats per minute"
                    },
                    {
                        title: "Respiratory Rate",
                        measure: "Breaths per minute",
                        why: ["Too fast/slow: Respiratory distress, infection, pain, anxiety"],
                        range: "12 – 20 breaths per minute"
                    },
                    {
                        title: "Blood Pressure",
                        measure: "Force of blood against arteries",
                        why: ["High: Risk of heart attack/stroke", "Low: Dizziness, shock"],
                        range: "Around 120/80 mmHg"
                    },
                    {
                        title: "Oxygen Saturation (SpO₂)",
                        measure: "Oxygen carried by blood",
                        why: ["Low: Breathing/circulation problems", "Used for asthma, COPD, pneumonia"],
                        range: "95 – 100%"
                    }
                ].map((sign, idx) => (
                    <MobileAccordion key={idx} title={sign.title} number={idx + 1}>
                        <div className="space-y-2 text-sm">
                            <p><span className="font-semibold text-gray-800">Measures:</span> {sign.measure}</p>
                            <div>
                                <span className="font-semibold text-gray-800">Why it matters:</span>
                                <ul className="list-disc pl-5 text-gray-600 mt-1">
                                    {sign.why.map((w, i) => <li key={i}>{w}</li>)}
                                </ul>
                            </div>
                            <div className="mt-3 bg-light-teal/50 p-2 rounded text-center border border-teal-100">
                                <span className="font-bold text-teal-800">Normal: {sign.range}</span>
                            </div>
                        </div>
                    </MobileAccordion>
                ))}
            </div>

            {/* Importance Summary */}
            <MobileAccordion title="Why Vital Signs Monitoring Is Important" number="6">
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {[
                        "Detects early warning signs of deterioration",
                        "Guides clinical decisions (fluids, oxygen, meds)",
                        "Monitors treatment effectiveness",
                        "Helps assess overall health status in emergencies/illness"
                    ].map((item, index) => (
                        <li key={index} className="flex items-center gap-3 bg-blue-50 p-3 rounded-lg border border-blue-100">
                            <span className="text-secondary font-bold">✓</span>
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            </MobileAccordion>
        </div>
    );
};

export default VitalSignsContent;
