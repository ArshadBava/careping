import React from 'react';
import MobileAccordion from '../../MobileAccordion';

const NewbornCareContent = () => {
    return (
        <div className="space-y-6 font-poppins text-gray-700">
            {/* Introduction */}
            <div className="bg-blue-50 p-6 rounded-2xl border-l-4 border-primary shadow-sm">
                <h2 className="text-2xl font-bold text-primary mb-4">Newborn Care – Explanation</h2>
                <div className="space-y-3 leading-relaxed">
                    <p>
                        Newborn care refers to the care provided to an infant immediately after birth and during the first 28 days of life (neonatal period).
                        The goal is to ensure health, growth, safety, and development.
                    </p>
                </div>
            </div>

            {/* 1. Objectives */}
            <MobileAccordion title="Objectives of Newborn Care" number="1">
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {[
                        "Ensure airway, breathing, and circulation",
                        "Maintain body temperature",
                        "Promote nutrition and feeding",
                        "Prevent infection and complications",
                        "Support bonding with parents",
                        "Monitor for developmental milestones and growth"
                    ].map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                            <span className="text-secondary mt-1">●</span>
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            </MobileAccordion>

            {/* 2. Immediate Care */}
            <MobileAccordion title="Immediate Newborn Care (First Hour after Birth)" number="2">
                <div className="space-y-4">
                    {[
                        { title: "1. Airway and Breathing", items: ["Clear mouth and nose of mucus", "Dry and stimulate baby if needed"] },
                        { title: "2. APGAR Assessment (at 1 and 5 minutes)", items: ["Appearance (skin color)", "Pulse (heart rate)", "Grimace (reflexes)", "Activity (muscle tone)", "Respiration (breathing effort)"] },
                        { title: "3. Thermoregulation", items: ["Dry newborn immediately", "Place under radiant warmer or skin-to-skin with mother", "Wrap in warm blankets"] },
                        { title: "4. Identification", items: ["Apply ID bands to baby and mother", "Record birth details"] },
                        { title: "5. Prophylaxis", items: ["Vitamin K injection (prevents bleeding)", "Eye prophylaxis (prevents infection)"] }
                    ].map((section, idx) => (
                        <div key={idx} className="bg-light-teal p-4 rounded-xl">
                            <h4 className="font-bold text-navy mb-2">{section.title}</h4>
                            <ul className="list-disc pl-5 space-y-1 text-sm bg-white/60 p-2 rounded-lg">
                                {section.items.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </MobileAccordion>

            {/* 3. Routine Care */}
            <MobileAccordion title="Routine Newborn Care" number="3">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse rounded-xl overflow-hidden shadow-sm">
                        <thead className="bg-primary text-white">
                            <tr>
                                <th className="p-4">Care Area</th>
                                <th className="p-4">Nursing Interventions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {[
                                { area: "Temperature", int: "Keep baby warm, use hats, monitor body temperature" },
                                { area: "Umbilical Cord Care", int: "Keep cord clean and dry, observe for infection" },
                                { area: "Feeding & Nutrition", int: "Encourage breastfeeding within 1 hour, monitor intake and output" },
                                { area: "Hygiene & Bathing", int: "Sponge bath until cord falls off, maintain cleanliness" },
                                { area: "Sleep & Positioning", int: "Place on back to prevent SIDS, safe sleep practices" },
                                { area: "Monitoring", int: "Vital signs, weight, reflexes, jaundice" },
                                { area: "Immunization", int: "Hepatitis B, BCG, or as per national schedule" }
                            ].map((row, idx) => (
                                <tr key={idx} className={idx % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                                    <td className="p-4 font-semibold text-navy">{row.area}</td>
                                    <td className="p-4">{row.int}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </MobileAccordion>

            {/* 4. Nursing Interventions */}
            <MobileAccordion title="Nursing Interventions for Newborn Safety" number="4">
                <ul className="space-y-3">
                    {[
                        "Maintain infection control (handwashing, clean equipment)",
                        "Avoid hypothermia by proper clothing and warming",
                        "Monitor signs of distress: poor feeding, lethargy, difficulty breathing",
                        "Encourage bonding and skin-to-skin contact",
                        "Educate parents on handling, feeding, and hygiene"
                    ].map((item, index) => (
                        <li key={index} className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg">
                            <span className="text-secondary font-bold text-lg">✓</span>
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            </MobileAccordion>

            {/* 5. Complications */}
            <MobileAccordion title="Common Newborn Complications to Monitor" number="5">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse rounded-xl overflow-hidden shadow-sm">
                        <thead className="bg-red-500 text-white">
                            <tr>
                                <th className="p-4">Complication</th>
                                <th className="p-4">Signs</th>
                                <th className="p-4">Nursing Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-red-100 bg-red-50">
                            {[
                                { comp: "Hypothermia", signs: "Cold extremities, lethargy", action: "Keep warm, monitor temperature" },
                                { comp: "Jaundice", signs: "Yellow skin/eyes", action: "Assess bilirubin, phototherapy if ordered" },
                                { comp: "Hypoglycemia", signs: "Tremors, poor feeding", action: "Monitor blood sugar, feed or give IV" },
                                { comp: "Respiratory Distress", signs: "Tachypnea, grunting, nasal flaring", action: "Assess, oxygen if needed, notify doctor" },
                                { comp: "Infection", signs: "Fever, poor feeding, lethargy", action: "Maintain hygiene, antibiotics if prescribed" }
                            ].map((row, idx) => (
                                <tr key={idx}>
                                    <td className="p-4 font-bold text-red-700">{row.comp}</td>
                                    <td className="p-4 text-sm">{row.signs}</td>
                                    <td className="p-4 text-sm">{row.action}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </MobileAccordion>

            {/* 6. Parent Education */}
            <MobileAccordion title="Parent Education" number="6" className="bg-yellow-50 border-yellow-100">
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {[
                        "Safe sleeping position",
                        "Breastfeeding techniques and frequency",
                        "Umbilical cord care",
                        "Signs of illness (fever, lethargy, feeding difficulties)",
                        "Immunization schedule"
                    ].map((item, index) => (
                        <li key={index} className="flex items-center gap-2 text-yellow-800">
                            <span className="text-yellow-600">●</span>
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            </MobileAccordion>

            {/* Summary */}
            <div className="bg-green-50 p-6 rounded-2xl shadow-sm border border-green-100 text-center">
                <h3 className="text-xl font-bold text-green-700 mb-2">Summary</h3>
                <p className="text-green-800 font-medium leading-relaxed">
                    Newborn care is a comprehensive approach to ensure the baby’s physical stability, safety, and healthy development. Nurses play a critical role in monitoring, feeding support, hygiene, immunization, and parent education to promote a healthy start to life.
                </p>
            </div>
        </div>
    );
};

export default NewbornCareContent;
