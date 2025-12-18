import React from 'react';
import MobileAccordion from '../../MobileAccordion';

const ADLAssistanceContent = () => {
    return (
        <div className="space-y-6 font-poppins text-gray-700">
            {/* Introduction */}
            <div className="bg-blue-50 p-6 rounded-2xl border-l-4 border-primary shadow-sm">
                <h2 className="text-2xl font-bold text-primary mb-4">Assistance with Daily Living Activities (ADLs) – Explanation</h2>
                <div className="space-y-3 leading-relaxed">
                    <p>
                        Activities of Daily Living (ADLs) are the basic tasks that a person needs to perform every day to care for themselves
                        and maintain personal independence.
                    </p>
                    <p>
                        Assisting with ADLs means helping patients who are unable to perform these tasks due to illness, injury,
                        disability, or old age. Nursing care often involves supporting patients while promoting as much independence as possible.
                    </p>
                </div>
            </div>

            {/* 1. Types of ADLs */}
            <MobileAccordion title="Types of Activities of Daily Living" number="1">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse rounded-xl overflow-hidden shadow-sm">
                        <thead className="bg-primary text-white">
                            <tr>
                                <th className="p-4">ADL</th>
                                <th className="p-4">Description</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {[
                                { adl: "Bathing / Personal Hygiene", desc: "Washing the body, brushing teeth, oral care, grooming, hair care" },
                                { adl: "Dressing", desc: "Choosing appropriate clothes, putting on and taking off garments" },
                                { adl: "Feeding / Eating", desc: "Helping with meals, cutting food, feeding when needed" },
                                { adl: "Toileting", desc: "Assisting with using the toilet, catheter care, maintaining hygiene" },
                                { adl: "Mobility / Ambulation", desc: "Helping the patient move, walk, transfer, or use mobility aids" },
                                { adl: "Continence Care", desc: "Managing bladder and bowel function, changing incontinence products" },
                                { adl: "Positioning / Turning in Bed", desc: "Preventing bedsores and promoting comfort" },
                                { adl: "Communication", desc: "Helping patients express needs if speech or cognition is affected" }
                            ].map((row, idx) => (
                                <tr key={idx} className={idx % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                                    <td className="p-4 font-semibold text-navy">{row.adl}</td>
                                    <td className="p-4">{row.desc}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </MobileAccordion>

            {/* 2. Goals */}
            <MobileAccordion title="Goals of Assisting with ADLs" number="2">
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {[
                        "Promote personal hygiene and comfort",
                        "Maintain dignity and self-esteem",
                        "Prevent complications (infections, pressure ulcers, falls)",
                        "Promote independence and rehabilitation",
                        "Improve quality of life"
                    ].map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                            <span className="text-secondary mt-1">●</span>
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            </MobileAccordion>

            {/* 3. Principles */}
            <MobileAccordion title="Nursing Principles in Assisting ADLs" number="3">
                <ul className="space-y-3">
                    {[
                        "Respect patient privacy and dignity",
                        "Encourage independence as much as possible",
                        "Use proper body mechanics to prevent injury",
                        "Communicate clearly and explain each step",
                        "Ensure safety – e.g., non-slip mats, handrails, gait belts",
                        "Observe for changes in condition – pain, skin issues, mood changes"
                    ].map((item, index) => (
                        <li key={index} className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg">
                            <div className="w-6 h-6 rounded-full bg-light-teal flex items-center justify-center text-primary font-bold text-xs">
                                {index + 1}
                            </div>
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            </MobileAccordion>

            {/* 4. Examples */}
            <MobileAccordion title="Examples of ADL Assistance" number="4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                        { title: "A. Bathing", items: ["Use gentle soap, warm water, and gloves", "Wash from clean to dirty areas", "Maintain patient privacy with towels and drapes"] },
                        { title: "B. Feeding", items: ["Sit patient upright (60–90°)", "Cut food into small pieces if needed", "Ensure proper swallowing technique"] },
                        { title: "C. Mobility", items: ["Support with transfer belts", "Encourage active participation", "Assist with walking aids"] },
                        { title: "D. Toileting", items: ["Assist with bedpan or commode", "Maintain hygiene to prevent infection", "Change incontinence products as needed"] },
                        { title: "E. Dressing", items: ["Encourage patient to do one limb at a time", "Provide clothing that is easy to manage"] }
                    ].map((section, idx) => (
                        <div key={idx} className="bg-light-teal p-4 rounded-xl">
                            <h4 className="font-bold text-navy mb-2">{section.title}</h4>
                            <ul className="list-disc pl-5 space-y-1 text-sm bg-white/50 p-2 rounded-lg">
                                {section.items.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </MobileAccordion>

            {/* 5. Complications */}
            <div className="bg-red-50 p-6 rounded-2xl shadow-sm border border-red-100">
                <h3 className="text-xl font-bold text-red-600 mb-4 flex items-center gap-2">
                    <span className="bg-red-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">5</span>
                    Complications of Poor ADL Assistance
                </h3>
                <div className="flex flex-wrap gap-3">
                    {[
                        "Pressure ulcers",
                        "Muscle weakness or contractures",
                        "Infections (urinary, skin)",
                        "Falls or injuries",
                        "Loss of independence and self-esteem"
                    ].map((item, index) => (
                        <span key={index} className="bg-white text-red-700 px-3 py-1 rounded-full text-sm font-medium shadow-sm border border-red-100">
                            {item}
                        </span>
                    ))}
                </div>
            </div>

            {/* 6. Role */}
            <MobileAccordion title="Role of the Nurse" number="6">
                <ul className="space-y-2">
                    {[
                        "Assess patient’s abilities and limitations",
                        "Plan care according to individual needs",
                        "Assist safely while promoting independence",
                        "Document care and changes in patient condition",
                        "Educate family or caregivers for ongoing support"
                    ].map((item, index) => (
                        <li key={index} className="flex items-center gap-2">
                            <span className="text-secondary">✓</span>
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            </MobileAccordion>

            {/* Summary */}
            <div className="bg-green-50 p-6 rounded-2xl shadow-sm border border-green-100 text-center">
                <h3 className="text-xl font-bold text-green-700 mb-2">Summary</h3>
                <p className="text-green-800 font-medium leading-relaxed">
                    Assistance with ADLs is a fundamental part of nursing care. It ensures that patients are clean, nourished, mobile,
                    and safe, while maintaining dignity, independence, and overall well-being.
                </p>
            </div>
        </div>
    );
};

export default ADLAssistanceContent;
