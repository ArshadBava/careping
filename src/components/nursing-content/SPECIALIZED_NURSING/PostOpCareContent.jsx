import React from 'react';
import MobileAccordion from '../../MobileAccordion';

const PostOpCareContent = () => {
    return (
        <div className="space-y-6 font-poppins text-gray-700">
            {/* Introduction */}
            <div className="bg-blue-50 p-6 rounded-2xl border-l-4 border-primary shadow-sm">
                <h2 className="text-2xl font-bold text-primary mb-4">Post-Operative Care and Support – Explanation</h2>
                <div className="space-y-3 leading-relaxed">
                    <p>
                        Post-operative care refers to the nursing and medical care provided to a patient after surgery to ensure safe recovery,
                        prevent complications, and promote comfort and healing. It begins immediately after surgery in the recovery room
                        and continues until the patient fully recovers.
                    </p>
                </div>
            </div>

            {/* 1. Objectives */}
            <MobileAccordion title="Objectives of Post-Operative Care" number="1">
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {[
                        "Maintain airway, breathing, and circulation",
                        "Manage pain effectively",
                        "Prevent post-surgical complications",
                        "Monitor for signs of infection or bleeding",
                        "Promote healing and mobility",
                        "Support emotional well-being"
                    ].map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                            <span className="text-secondary mt-1">●</span>
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            </MobileAccordion>

            {/* 2. Phases */}
            <MobileAccordion title="Phases of Post-Operative Care" number="2">
                <div className="space-y-4">
                    {[
                        { title: "1. Immediate Post-Operative (Recovery Room / PACU)", items: ["Monitor vital signs", "Assess airway and breathing", "Observe for hemorrhage or shock", "Ensure patient comfort"] },
                        { title: "2. Intermediate Post-Operative (Ward / Unit)", items: ["Pain management", "Wound care and dressing changes", "Early mobilization", "Nutrition and hydration", "Monitor for complications"] },
                        { title: "3. Long-Term Post-Operative", items: ["Rehabilitation and physiotherapy", "Education on self-care and wound management", "Follow-up visits"] }
                    ].map((phase, idx) => (
                        <div key={idx} className="bg-light-teal p-5 rounded-xl">
                            <h4 className="font-bold text-navy mb-2">{phase.title}</h4>
                            <ul className="list-disc pl-5 space-y-1 text-sm">
                                {phase.items.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </MobileAccordion>

            {/* 3. Assessments */}
            <MobileAccordion title="Nursing Assessments" number="3">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                        { label: "Airway and breathing", val: "Oxygen saturation, respiratory rate" },
                        { label: "Circulation", val: "Pulse, BP, capillary refill" },
                        { label: "Pain", val: "Intensity, location, type" },
                        { label: "Wound/Incision", val: "Bleeding, drainage, signs of infection" },
                        { label: "Level of consciousness", val: "Alertness, orientation" },
                        { label: "Urine and bowel function", val: "Output, constipation" },
                        { label: "Mobility", val: "Ability to move safely" }
                    ].map((item, index) => (
                        <div key={index} className="bg-gray-50 p-3 rounded-lg border border-gray-100">
                            <span className="font-bold block text-navy text-sm">{item.label}</span>
                            <span className="text-sm text-gray-600">{item.val}</span>
                        </div>
                    ))}
                </div>
            </MobileAccordion>

            {/* 4. Complications */}
            <MobileAccordion title="Common Post-Operative Complications to Monitor" number="4">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse rounded-xl overflow-hidden shadow-sm text-sm">
                        <thead className="bg-red-500 text-white">
                            <tr>
                                <th className="p-4">Complication</th>
                                <th className="p-4">Signs</th>
                                <th className="p-4">Nursing Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-red-100 bg-red-50">
                            {[
                                { comp: "Hemorrhage", signs: "Rapid pulse, low BP, pale, sweating", action: "Notify surgeon, apply pressure, monitor vitals" },
                                { comp: "Shock", signs: "Weak pulse, hypotension, restlessness", action: "Maintain airway, IV fluids, monitor closely" },
                                { comp: "Respiratory Complications", signs: "Dyspnea, cyanosis, crackles", action: "Encourage deep breathing, suction, monitor O₂" },
                                { comp: "Infection", signs: "Redness, swelling, pus, fever", action: "Maintain asepsis, notify doctor, antibiotics" },
                                { comp: "Pain", signs: "Restlessness, grimacing", action: "Administer analgesics, reposition, comfort measures" },
                                { comp: "Thrombosis / DVT", signs: "Swelling, redness, warmth of limb", action: "Encourage early ambulation, compression stockings" },
                                { comp: "Constipation / Ileus", signs: "Abdominal distension, no bowel movement", action: "Monitor diet, stool softeners if ordered" }
                            ].map((row, idx) => (
                                <tr key={idx}>
                                    <td className="p-3 font-bold text-red-700">{row.comp}</td>
                                    <td className="p-3">{row.signs}</td>
                                    <td className="p-3">{row.action}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </MobileAccordion>

            {/* 5. Interventions */}
            <MobileAccordion title="Nursing Interventions" number="5">
                <ul className="space-y-3">
                    {[
                        { title: "Airway Management", desc: "Ensure patency, suction if needed, monitor SpO₂" },
                        { title: "Vital Signs Monitoring", desc: "Frequent assessment, especially in first 24 hrs" },
                        { title: "Pain Management", desc: "Administer analgesics as prescribed, use comfort measures" },
                        { title: "Wound Care", desc: "Maintain aseptic technique during dressing changes" },
                        { title: "Fluid and Electrolyte Balance", desc: "Monitor IV fluids, urine output" },
                        { title: "Early Mobilization", desc: "Encourage movement to prevent DVT and pulmonary complications" },
                        { title: "Nutrition", desc: "Gradual reintroduction of diet as tolerated" },
                        { title: "Patient Education", desc: "Teach self-care, wound management, signs of complications" }
                    ].map((item, index) => (
                        <li key={index} className="flex items-start gap-3 bg-gray-50 p-3 rounded-lg">
                            <span className="text-secondary font-bold mt-1">✓</span>
                            <div>
                                <span className="font-bold text-navy">{item.title}: </span>
                                <span className="text-gray-700 text-sm">{item.desc}</span>
                            </div>
                        </li>
                    ))}
                </ul>
            </MobileAccordion>

            {/* 6. Support */}
            <MobileAccordion title="Patient Support" number="6" className="bg-blue-50 border-blue-100">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                    <div className="bg-white p-4 rounded-xl shadow-sm">
                        <span className="block font-bold text-navy mb-2">Psychological Support</span>
                        <p className="text-sm text-gray-600">Reassure and educate the patient, reduce anxiety</p>
                    </div>
                    <div className="bg-white p-4 rounded-xl shadow-sm">
                        <span className="block font-bold text-navy mb-2">Emotional Support</span>
                        <p className="text-sm text-gray-600">Involve family, provide comfort and explanation</p>
                    </div>
                    <div className="bg-white p-4 rounded-xl shadow-sm">
                        <span className="block font-bold text-navy mb-2">Pain and Comfort</span>
                        <p className="text-sm text-gray-600">Positioning, relaxation techniques, analgesics</p>
                    </div>
                </div>
            </MobileAccordion>

            {/* 7. Goals */}
            <MobileAccordion title="Goals of Post-Operative Care" number="7" className="bg-green-50 border-green-100">
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {[
                        "Ensure patient safety",
                        "Prevent post-surgical complications",
                        "Promote comfort and pain control",
                        "Support early recovery and rehabilitation",
                        "Educate the patient for self-care at home"
                    ].map((item, index) => (
                        <li key={index} className="flex items-center gap-2 text-green-800">
                            <span className="text-green-600">🎯</span>
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            </MobileAccordion>
        </div>
    );
};

export default PostOpCareContent;
