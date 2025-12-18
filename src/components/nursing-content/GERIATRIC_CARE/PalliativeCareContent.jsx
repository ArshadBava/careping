import React from 'react';
import MobileAccordion from '../../MobileAccordion';

const PalliativeCareContent = () => {
    return (
        <div className="space-y-6 font-poppins text-gray-700">
            {/* Introduction */}
            <div className="bg-blue-50 p-6 rounded-2xl border-l-4 border-primary shadow-sm">
                <h2 className="text-2xl font-bold text-primary mb-4">Palliative and End-of-Life Care – Explanation</h2>
                <div className="space-y-3 leading-relaxed">
                    <p>
                        Palliative care is specialized medical care focused on relieving the symptoms, pain, and stress of serious illnesses,
                        regardless of the prognosis. It aims to improve quality of life for patients and their families.
                    </p>
                    <p>
                        End-of-life care is provided when a patient is in the final phase of life, focusing on comfort, dignity, and support
                        rather than curative treatment.
                    </p>
                </div>
            </div>

            {/* 1. Goals */}
            <MobileAccordion title="Goals of Palliative and End-of-Life Care" number="1">
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {[
                        "Relieve physical symptoms such as pain, shortness of breath, nausea, fatigue",
                        "Address psychological, social, and spiritual needs",
                        "Promote dignity and comfort",
                        "Support family members and caregivers",
                        "Facilitate decision-making and advance care planning"
                    ].map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                            <span className="text-secondary mt-1">●</span>
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            </MobileAccordion>

            {/* 2. Key Principles */}
            <MobileAccordion title="Key Principles" number="2">
                <ul className="space-y-3">
                    {[
                        { title: "Patient-centered care", desc: "Respect wishes, values, and cultural preferences" },
                        { title: "Symptom management", desc: "Pain relief, nausea control, breathlessness management" },
                        { title: "Communication", desc: "Open discussions about prognosis, goals, and treatment choices" },
                        { title: "Holistic care", desc: "Address emotional, social, and spiritual needs" },
                        { title: "Team approach", desc: "Collaboration with doctors, nurses, social workers, counselors, chaplains" }
                    ].map((item, index) => (
                        <li key={index} className="flex items-start gap-3 bg-gray-50 p-3 rounded-lg">
                            <span className="text-secondary font-bold mt-1">{index + 1}.</span>
                            <div>
                                <span className="font-bold text-navy">{item.title}</span> – <span className="text-gray-700">{item.desc}</span>
                            </div>
                        </li>
                    ))}
                </ul>
            </MobileAccordion>

            {/* 3. Symptoms & Interventions */}
            <MobileAccordion title="Common Symptoms and Nursing Interventions" number="3">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse rounded-xl overflow-hidden shadow-sm">
                        <thead className="bg-primary text-white">
                            <tr>
                                <th className="p-4">Symptom</th>
                                <th className="p-4">Nursing Intervention</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {[
                                { sym: "Pain", int: "Administer prescribed analgesics, reposition patient, relaxation techniques" },
                                { sym: "Dyspnea (shortness of breath)", int: "Oxygen therapy, positioning, fan airflow, calm reassurance" },
                                { sym: "Nausea & vomiting", int: "Anti-emetics, small frequent meals, oral care" },
                                { sym: "Anxiety / depression", int: "Emotional support, counseling, relaxation techniques" },
                                { sym: "Agitation / restlessness", int: "Gentle touch, calm environment, medication if prescribed" },
                                { sym: "Fatigue", int: "Plan care to conserve energy, assist with ADLs, encourage rest" }
                            ].map((row, idx) => (
                                <tr key={idx} className={idx % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                                    <td className="p-4 font-semibold text-navy">{row.sym}</td>
                                    <td className="p-4">{row.int}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </MobileAccordion>

            {/* 4 & 5. Support Sections Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Psych Support */}
                <MobileAccordion title="Psychological & Emotional Support" number="4">
                    <ul className="space-y-2 text-sm">
                        {[
                            "Encourage expression of feelings",
                            "Provide reassurance and presence",
                            "Involve family in care and support",
                            "Facilitate legacy activities (letters, memory projects, spiritual rituals)"
                        ].map((item, index) => (
                            <li key={index} className="flex items-center gap-2">
                                <span className="text-secondary">♡</span>
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </MobileAccordion>

                {/* Family Support */}
                <MobileAccordion title="Family Support" number="5">
                    <ul className="space-y-2 text-sm">
                        {[
                            "Educate about disease progression and care needs",
                            "Encourage participation in care if they wish",
                            "Provide emotional and bereavement support",
                            "Discuss advance directives, living wills, and hospice care"
                        ].map((item, index) => (
                            <li key={index} className="flex items-center gap-2">
                                <span className="text-secondary">👥</span>
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </MobileAccordion>
            </div>

            {/* 6. Ethical */}
            <MobileAccordion title="Ethical Considerations" number="6" className="bg-purple-50 border-purple-100 mt-6">
                <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                    <li className="bg-white p-3 rounded-lg shadow-sm text-sm">Respect patient autonomy and wishes</li>
                    <li className="bg-white p-3 rounded-lg shadow-sm text-sm">Avoid unnecessary invasive interventions</li>
                    <li className="bg-white p-3 rounded-lg shadow-sm text-sm">Focus on comfort and quality of life rather than prolonging life at all costs</li>
                </ul>
            </MobileAccordion>

            {/* 7. Nursing Role */}
            <MobileAccordion title="Nursing Role in Palliative & End-of-Life Care" number="7" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                        { role: "Assessment", desc: "Monitor symptoms, physical and emotional needs" },
                        { role: "Symptom Management", desc: "Administer medications, comfort measures" },
                        { role: "Emotional Support", desc: "Support patient and family psychologically" },
                        { role: "Education", desc: "Teach family about care, medications, and expected changes" },
                        { role: "Coordination", desc: "Collaborate with interdisciplinary team for holistic care" },
                        { role: "Advocacy", desc: "Respect patient wishes and dignity" }
                    ].map((item, index) => (
                        <div key={index} className="bg-light-teal p-3 rounded-lg border border-teal-100">
                            <span className="font-bold text-navy block text-sm">{item.role}</span>
                            <span className="text-gray-600 text-sm">{item.desc}</span>
                        </div>
                    ))}
                </div>
            </MobileAccordion>

            {/* 8. Goals of Care */}
            <MobileAccordion title="Goals of Care" number="8" className="bg-green-50 border-green-100 mt-6 md:col-span-2">
                <ul className="grid grid-cols-1 md:grid-cols-4 gap-3 text-center">
                    {[
                        "Minimize pain and distress",
                        "Promote comfort and dignity",
                        "Support family and caregivers",
                        "Provide holistic, compassionate care"
                    ].map((item, index) => (
                        <li key={index} className="bg-white p-3 rounded-xl border border-green-100 text-green-800 font-medium text-sm flex items-center justify-center shadow-sm">
                            {item}
                        </li>
                    ))}
                </ul>
            </MobileAccordion>

            {/* Summary */}
            <div className="bg-gray-50 p-6 rounded-2xl shadow-sm border border-gray-100 mt-6 text-center">
                <h3 className="text-xl font-bold text-gray-700 mb-2">Summary</h3>
                <p className="text-gray-600 font-medium leading-relaxed">
                    Palliative and end-of-life care is holistic, patient-centered care that focuses on relief from suffering, emotional support,
                    and maintaining dignity during serious illness and the final stages of life. Nurses play a key role in symptom management,
                    emotional support, family education, and advocacy.
                </p>
            </div>
        </div>
    );
};

export default PalliativeCareContent;
