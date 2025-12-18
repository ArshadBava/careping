import React from 'react';
import MobileAccordion from '../../MobileAccordion';

const PostnatalCareContent = () => {
    return (
        <div className="space-y-6 font-poppins text-gray-700">
            {/* Introduction */}
            <div className="bg-blue-50 p-6 rounded-2xl border-l-4 border-primary shadow-sm">
                <h2 className="text-2xl font-bold text-primary mb-4">Postnatal (Postpartum) Care for Mother – Explanation</h2>
                <div className="space-y-3 leading-relaxed">
                    <p>
                        Postnatal care is the care provided to a mother after childbirth, usually within the first 6 weeks (42 days).
                        The goal is to ensure physical and emotional recovery, prevent complications, and promote healthy adaptation to motherhood.
                    </p>
                </div>
            </div>

            {/* 1. Objectives */}
            <MobileAccordion title="Objectives of Postnatal Care" number="1">
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {[
                        "Promote recovery from childbirth",
                        "Monitor and prevent complications such as hemorrhage, infection, and thromboembolism",
                        "Support breastfeeding and lactation",
                        "Provide emotional and psychological support",
                        "Educate mother about self-care, infant care, and family planning"
                    ].map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                            <span className="text-secondary mt-1">●</span>
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            </MobileAccordion>

            {/* 2. Key Components */}
            <MobileAccordion title="Key Components of Postnatal Care" number="2">
                <div className="space-y-6">
                    {[
                        { title: "A. Physical Assessment", items: ["Vital signs – BP, pulse, temperature", "Uterus – Check for involution and firmness", "Lochia – Observe amount, color, and odor", "Perineal care – Assess healing", "Breasts – Inspect for engorgement", "Bladder & bowel – Monitor function"] },
                        { title: "B. Pain Management", items: ["Administer prescribed analgesics", "Encourage comfortable positioning", "Support perineal hygiene"] },
                        { title: "C. Psychological and Emotional Support", items: ["Observe for postpartum blues or depression", "Encourage bonding with the baby", "Provide reassurance and counseling"] },
                        { title: "D. Nutrition & Hydration", items: ["Encourage balanced diet rich in protein, vitamins, and iron", "Promote adequate fluid intake"] },
                        { title: "E. Education for Mother", items: ["Breastfeeding techniques", "Personal hygiene and perineal care", "Exercise and ambulation", "Warning signs", "Family planning and contraception"] }
                    ].map((section, idx) => (
                        <div key={idx} className="bg-light-teal p-5 rounded-xl border border-teal-100">
                            <h4 className="font-bold text-navy mb-3">{section.title}</h4>
                            <ul className="list-disc pl-5 space-y-1 text-sm bg-white/60 p-3 rounded-lg">
                                {section.items.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </MobileAccordion>

            {/* 3. Interventions */}
            <MobileAccordion title="Nursing Interventions" number="3">
                <ul className="space-y-3">
                    {[
                        "Monitor vital signs and observe for complications",
                        "Assist with ambulation and encourage early mobility",
                        "Provide perineal care and maintain hygiene",
                        "Support breastfeeding and educate on proper latch",
                        "Offer emotional support and counseling",
                        "Encourage rest and relaxation",
                        "Document observations and progress"
                    ].map((item, index) => (
                        <li key={index} className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg">
                            <span className="text-secondary font-bold text-lg">✓</span>
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            </MobileAccordion>

            {/* 4. Complications */}
            <MobileAccordion title="Common Postnatal Complications to Watch For" number="4">
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
                                { comp: "Hemorrhage", signs: "Heavy bleeding, drop in BP, pallor", action: "Monitor vitals, uterine massage, report immediately" },
                                { comp: "Infection", signs: "Fever, foul lochia, redness/swelling", action: "Maintain hygiene, antibiotics as prescribed" },
                                { comp: "Thrombophlebitis", signs: "Pain, swelling, redness in legs", action: "Encourage ambulation, compression stockings" },
                                { comp: "Mastitis", signs: "Breast pain, redness, fever", action: "Support breastfeeding, warm compress, antibiotics" },
                                { comp: "Postpartum depression", signs: "Sadness, anxiety, withdrawal", action: "Provide emotional support, refer for counseling" }
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

            {/* 5. Goals */}
            <MobileAccordion title="Goals of Postnatal Care" number="5" className="bg-green-50 border-green-100">
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {[
                        "Ensure physical recovery and wound healing",
                        "Promote breastfeeding and infant bonding",
                        "Prevent maternal complications",
                        "Support mental and emotional well-being",
                        "Educate mother for self-care and family planning"
                    ].map((item, index) => (
                        <li key={index} className="flex items-center gap-2 text-green-800">
                            <span className="text-green-600">🎯</span>
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            </MobileAccordion>

            {/* Summary */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center mt-6">
                <h3 className="text-xl font-bold text-navy mb-2">Summary</h3>
                <p className="text-gray-600 font-medium leading-relaxed">
                    Postnatal care for the mother is a holistic approach that addresses physical recovery, emotional well-being, and education.
                    Nurses play a critical role in monitoring, supporting, and guiding the mother to ensure a safe and healthy postpartum period.
                </p>
            </div>
        </div>
    );
};

export default PostnatalCareContent;
