import React from 'react';
import MobileAccordion from '../../MobileAccordion';

const VentilatorContent = () => {
    return (
        <div className="space-y-6 font-poppins text-gray-700">
            {/* Introduction */}
            <div className="bg-blue-50 p-6 rounded-2xl border-l-4 border-primary shadow-sm">
                <h2 className="text-2xl font-bold text-primary mb-4">Ventilator Care and Support – Explanation</h2>
                <div className="space-y-3 leading-relaxed">
                    <p>
                        A ventilator is a machine that helps a patient breathe when they cannot breathe adequately on their own.
                        It delivers oxygen-rich air to the lungs and removes carbon dioxide.
                    </p>
                    <p>
                        Ventilator care and support includes all the nursing activities that ensure the ventilator works correctly,
                        the patient remains safe, and complications are prevented.
                    </p>
                </div>
            </div>

            {/* 1. Purpose */}
            <MobileAccordion title="Purpose of Ventilator Support" number="1">
                <p className="mb-4">A ventilator is used to:</p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {[
                        "Support breathing during serious illness",
                        "Treat respiratory failure (e.g., COPD, pneumonia, ARDS)",
                        "Assist patients during surgery and anesthesia",
                        "Maintain airway after injury",
                        "Ensure adequate oxygenation and ventilation"
                    ].map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                            <span className="text-secondary mt-1">●</span>
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            </MobileAccordion>

            {/* 2. Types */}
            <MobileAccordion title="Types of Ventilators" number="2">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-light-teal p-5 rounded-xl">
                        <h4 className="font-bold text-navy mb-2">1. Invasive Ventilation</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                            <li>Air delivered through an endotracheal tube (ET tube) or tracheostomy.</li>
                            <li>Used in ICU for critically ill patients.</li>
                        </ul>
                    </div>
                    <div className="bg-light-teal p-5 rounded-xl">
                        <h4 className="font-bold text-navy mb-2">2. Non-invasive Ventilation (NIV)</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                            <li>Uses a mask (CPAP or BiPAP).</li>
                            <li>Used for mild to moderate respiratory distress.</li>
                        </ul>
                    </div>
                </div>
            </MobileAccordion>

            {/* 3. Settings */}
            <MobileAccordion title="Ventilator Settings (Basic Overview)" number="3">
                <div className="overflow-x-auto mb-4">
                    <table className="w-full text-left border-collapse rounded-xl overflow-hidden shadow-sm">
                        <thead className="bg-primary text-white">
                            <tr>
                                <th className="p-4">Setting</th>
                                <th className="p-4">Meaning</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {[
                                { setting: "FiO₂", meaning: "% of oxygen delivered" },
                                { setting: "Tidal Volume (VT)", meaning: "Amount of air given per breath" },
                                { setting: "Respiratory Rate (RR)", meaning: "Breaths per minute" },
                                { setting: "PEEP", meaning: "Keeps lungs open; prevents collapse" },
                                { setting: "Mode", meaning: "How the ventilator supports breathing (AC, SIMV, CPAP/BiPAP)" }
                            ].map((row, idx) => (
                                <tr key={idx} className={idx % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                                    <td className="p-4 font-semibold text-navy">{row.setting}</td>
                                    <td className="p-4">{row.meaning}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <p className="text-sm italic text-gray-500">Adjustment of these settings is a doctor/therapist’s responsibility.</p>
            </MobileAccordion>

            {/* 4. Responsibilities */}
            <MobileAccordion title="Nursing Responsibilities" number="4">
                <div className="space-y-6">
                    {[
                        { title: "A. Airway Care", items: ["Ensure ET tube or trach tube is secure", "Check tube placement and markings", "Provide humidification to keep secretions thin", "Perform suctioning only when needed"] },
                        { title: "B. Monitor the Patient", items: ["Check oxygen saturation (SpO₂)", "Assess chest rise and breathing pattern", "Monitor vital signs (HR, BP, RR)", "Watch for restlessness, anxiety, difficulty breathing", "Assess breath sounds regularly"] },
                        { title: "C. Prevent Complications", items: ["Reposition patient every 2 hours", "Maintain head of bed at 30–45° to prevent aspiration", "Perform oral care (chlorhexidine if available)", "Prevent ventilator-associated pneumonia (VAP)"] },
                        { title: "D. Monitor the Ventilator System", items: ["Check alarms and troubleshoot", "Ensure tubing is not kinked or leaking", "Ensure humidifier chamber has water", "Verify correct settings every shift"] },
                        { title: "E. Communication and Comfort", items: ["Offer alternative communication tools (writing board, gestures)", "Reduce anxiety through reassurance", "Provide sedation only as ordered"] }
                    ].map((section, idx) => (
                        <div key={idx} className="bg-gray-50 p-5 rounded-xl border border-gray-100">
                            <h4 className="font-bold text-primary mb-3">{section.title}</h4>
                            <ul className="list-disc pl-5 space-y-1 text-sm">
                                {section.items.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </MobileAccordion>

            {/* 5. Alarms */}
            <MobileAccordion title="Common Ventilator Alarms" number="5">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse rounded-xl overflow-hidden shadow-sm">
                        <thead className="bg-red-500 text-white">
                            <tr>
                                <th className="p-4">Alarm Type</th>
                                <th className="p-4">Meaning</th>
                                <th className="p-4">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-red-100 bg-red-50">
                            {[
                                { alarm: "High pressure alarm", meaning: "Obstruction, coughing, secretions", action: "Suction, check tubing" },
                                { alarm: "Low pressure/low volume alarm", meaning: "Disconnection or leak", action: "Reconnect tubing" },
                                { alarm: "Apnea alarm", meaning: "No breathing detected", action: "Assess patient immediately" }
                            ].map((row, idx) => (
                                <tr key={idx}>
                                    <td className="p-4 font-bold text-red-700">{row.alarm}</td>
                                    <td className="p-4">{row.meaning}</td>
                                    <td className="p-4 font-semibold">{row.action}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </MobileAccordion>

            {/* 6. Suctioning */}
            <MobileAccordion title="Suctioning in Ventilator Patients" number="6">
                <p className="mb-4 text-sm">Suctioning removes mucus blocking the airway.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-yellow-50 p-4 rounded-xl border border-yellow-100">
                        <h4 className="font-bold text-yellow-700 mb-2">Indications:</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                            <li>Noisy breathing</li>
                            <li>Low oxygen saturation</li>
                            <li>Visible secretions</li>
                            <li>Increased respiratory effort</li>
                        </ul>
                    </div>
                    <div className="bg-green-50 p-4 rounded-xl border border-green-100">
                        <h4 className="font-bold text-green-700 mb-2">Steps:</h4>
                        <ol className="list-decimal pl-5 space-y-1 text-sm">
                            <li>Hyperoxygenate if needed</li>
                            <li>Use sterile technique</li>
                            <li>Limit suction to 10 seconds</li>
                            <li>Observe patient throughout</li>
                        </ol>
                    </div>
                </div>
            </MobileAccordion>

            {/* 7 & 8 VAP & Weaning */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <MobileAccordion title="Preventing VAP" number="7">
                    <p className="text-xs text-gray-500 mb-2">Ventilator-Associated Pneumonia</p>
                    <ul className="space-y-2 text-sm">
                        {[
                            "Maintain head of bed 30–45°",
                            "Perform oral care every 2–4 hours",
                            "Suction oral and airway secretions",
                            "Avoid unnecessary disconnections",
                            "Ensure proper hand hygiene"
                        ].map((item, index) => (
                            <li key={index} className="flex items-start gap-2">
                                <span className="text-secondary">✓</span>{item}
                            </li>
                        ))}
                    </ul>
                </MobileAccordion>

                <MobileAccordion title="Weaning from Ventilator" number="8">
                    <div className="space-y-3 text-sm">
                        <div>
                            <span className="font-bold block text-primary">Indicators:</span>
                            Stable vital signs, Adequate oxygenation, Improved lung function, Patient awake.
                        </div>
                        <div>
                            <span className="font-bold block text-primary">Methods:</span>
                            Decreasing support, CPAP/Pressure support, Trial of spontaneous breathing.
                        </div>
                    </div>
                </MobileAccordion>
            </div>

            {/* 9. Complications */}
            <div className="bg-red-50 p-6 rounded-2xl shadow-sm border border-red-100">
                <h3 className="text-xl font-bold text-red-600 mb-4 flex items-center gap-2">
                    <span className="bg-red-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">9</span>
                    Complications to Watch For
                </h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                    {[
                        "Ventilator-associated pneumonia (VAP)",
                        "Tube dislodgement",
                        "Barotrauma (pressure injury to lungs)",
                        "Oxygen toxicity",
                        "Skin breakdown from straps",
                        "Anxiety and communication problems"
                    ].map((item, index) => (
                        <li key={index} className="flex items-center gap-2">
                            <span className="text-red-500">●</span>{item}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Goal */}
            <div className="bg-green-50 p-6 rounded-2xl shadow-sm border border-green-100 text-center">
                <h3 className="text-xl font-bold text-green-700 mb-2">Goal of Ventilator Care</h3>
                <p className="text-green-800 font-medium">
                    To maintain effective breathing, protect the airway, prevent complications, and support the patient until they can breathe independently.
                </p>
            </div>
        </div>
    );
};

export default VentilatorContent;
