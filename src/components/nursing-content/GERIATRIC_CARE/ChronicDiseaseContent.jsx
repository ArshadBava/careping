import React from 'react';
import MobileAccordion from '../../MobileAccordion';

const ChronicDiseaseContent = () => {
    return (
        <div className="space-y-6 font-poppins text-gray-700">
            {/* Introduction */}
            <div className="bg-blue-50 p-6 rounded-2xl border-l-4 border-primary shadow-sm">
                <h2 className="text-2xl font-bold text-primary mb-4">Chronic Disease Management – Explanation</h2>
                <div className="space-y-3 leading-relaxed">
                    <p>
                        Chronic diseases are long-term health conditions that cannot usually be cured, but their progression and complications
                        can be managed with proper care. Examples include diabetes, hypertension, heart disease, COPD, arthritis, and kidney disease.
                    </p>
                    <p>
                        Chronic disease management (CDM) is a proactive approach that focuses on preventing complications, improving quality of life,
                        and supporting self-management.
                    </p>
                </div>
            </div>

            {/* 1. Goals */}
            <MobileAccordion title="Goals of Chronic Disease Management" number="1">
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {[
                        "Control symptoms and slow disease progression",
                        "Prevent acute complications and hospitalizations",
                        "Promote healthy lifestyle changes",
                        "Encourage self-care and patient education",
                        "Improve quality of life and functional status"
                    ].map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                            <span className="text-secondary mt-1">●</span>
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            </MobileAccordion>

            {/* 2. Key Components */}
            <MobileAccordion title="Key Components of Chronic Disease Management" number="2">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse rounded-xl overflow-hidden shadow-sm">
                        <thead className="bg-primary text-white">
                            <tr>
                                <th className="p-4">Component</th>
                                <th className="p-4">Description</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {[
                                { comp: "Assessment", desc: "Regular monitoring of vital signs, lab tests, and symptoms" },
                                { comp: "Medication Management", desc: "Ensuring adherence, adjusting doses, monitoring side effects" },
                                { comp: "Lifestyle Modification", desc: "Diet, exercise, stress management, smoking cessation" },
                                { comp: "Patient Education", desc: "Teaching about disease, self-monitoring, warning signs" },
                                { comp: "Psychosocial Support", desc: "Counseling, support groups, addressing anxiety or depression" },
                                { comp: "Coordination of Care", desc: "Collaboration with doctors, nurses, physiotherapists, dietitians" }
                            ].map((row, idx) => (
                                <tr key={idx} className={idx % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                                    <td className="p-4 font-semibold text-navy">{row.comp}</td>
                                    <td className="p-4">{row.desc}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </MobileAccordion>

            {/* 3. Nursing Interventions */}
            <MobileAccordion title="Nursing Interventions" number="3">
                <div className="space-y-4">
                    {[
                        { title: "A. Monitoring", items: ["Regular vital signs (BP, HR, SpO₂, blood glucose)", "Track weight, symptoms, and lab values", "Identify early signs of complications"] },
                        { title: "B. Medication Support", items: ["Educate on proper use and timing", "Monitor for side effects", "Encourage adherence"] },
                        { title: "C. Lifestyle and Behavioral Support", items: ["Promote balanced diet and fluid intake", "Encourage physical activity appropriate to condition", "Assist with smoking cessation or alcohol reduction", "Teach stress management techniques"] },
                        { title: "D. Patient Education", items: ["Self-monitoring (blood sugar, BP, weight)", "Recognize early warning signs of complications", "Know when to seek medical help"] },
                        { title: "E. Emotional and Social Support", items: ["Counseling for coping with chronic illness", "Connect patients with support groups or community resources"] }
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

            {/* 4. Examples */}
            <MobileAccordion title="Examples of Chronic Disease Management Plans" number="4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                        { disease: "Diabetes", action: "Monitor blood sugar, foot care, diet counseling, insulin administration education" },
                        { disease: "Hypertension", action: "BP monitoring, medication adherence, low-sodium diet, exercise encouragement" },
                        { disease: "COPD", action: "Breathing exercises, oxygen therapy, smoking cessation, infection prevention" },
                        { disease: "Heart Failure", action: "Monitor weight and fluid balance, medication adherence, low-salt diet, activity planning" }
                    ].map((item, index) => (
                        <div key={index} className="bg-light-teal p-4 rounded-xl border border-teal-100">
                            <h4 className="font-bold text-navy mb-2">{item.disease}</h4>
                            <p className="text-sm text-gray-700">{item.action}</p>
                        </div>
                    ))}
                </div>
            </MobileAccordion>

            {/* 5. Goals of Nursing */}
            <MobileAccordion title="Goals of Nursing in Chronic Disease" number="5">
                <ul className="space-y-2">
                    {[
                        "Promote self-management",
                        "Prevent complications",
                        "Maintain functional independence",
                        "Enhance quality of life",
                        "Provide ongoing education and support"
                    ].map((item, index) => (
                        <li key={index} className="flex items-center gap-2 bg-gray-50 p-3 rounded-lg">
                            <span className="text-secondary font-bold">✓</span>
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            </MobileAccordion>

            {/* Summary */}
            <div className="bg-green-50 p-6 rounded-2xl shadow-sm border border-green-100 text-center">
                <h3 className="text-xl font-bold text-green-700 mb-2"> Summary</h3>
                <p className="text-green-800 font-medium leading-relaxed">
                    Chronic disease management is a comprehensive, ongoing approach involving monitoring, education, lifestyle modification, and support.
                    The nurse plays a key role in helping patients manage their disease, prevent complications, and maintain quality of life.
                </p>
            </div>
        </div>
    );
};

export default ChronicDiseaseContent;
