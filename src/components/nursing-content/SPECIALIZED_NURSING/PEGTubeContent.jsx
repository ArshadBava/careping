import React from 'react';
import MobileAccordion from '../../MobileAccordion';

const PEGTubeContent = () => {
    return (
        <div className="space-y-6 font-poppins text-gray-700">
            {/* Introduction */}
            <div className="bg-blue-50 p-6 rounded-2xl border-l-4 border-primary shadow-sm">
                <h2 className="text-2xl font-bold text-primary mb-4">PEG Tube Care and Feeding – Explanation</h2>
                <div className="space-y-3 leading-relaxed">
                    <p>
                        A PEG tube (Percutaneous Endoscopic Gastrostomy tube) is a feeding tube placed through the abdominal wall
                        directly into the stomach. It is used for patients who cannot eat or swallow safely but have a working digestive system.
                    </p>
                    <p>
                        PEG tube care is important to keep the site clean, prevent infection, and ensure safe feeding.
                    </p>
                </div>
            </div>

            {/* 1. Purpose */}
            <MobileAccordion title="Purpose of a PEG Tube" number="1">
                <p className="mb-4">A PEG tube is used when a patient:</p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {[
                        "Has difficulty swallowing (dysphagia)",
                        "Has neurological problems (stroke, dementia)",
                        "Has head and neck cancers",
                        "Needs long-term nutritional support",
                        "Cannot meet nutritional needs by mouth"
                    ].map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                            <span className="text-secondary mt-1">●</span>
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            </MobileAccordion>

            {/* 2. Parts */}
            <MobileAccordion title="Parts of a PEG Tube" number="2">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse rounded-xl overflow-hidden shadow-sm">
                        <thead className="bg-primary text-white">
                            <tr>
                                <th className="p-4">Part</th>
                                <th className="p-4">Function</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {[
                                { part: "External bumper/plate", func: "Keeps tube stable on the skin" },
                                { part: "Internal bumper/balloon", func: "Keeps tube inside the stomach" },
                                { part: "Opening/connector", func: "Where feeding and medications enter" },
                                { part: "Clamps", func: "Open/close the tube" }
                            ].map((row, idx) => (
                                <tr key={idx} className={idx % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                                    <td className="p-4 font-semibold text-navy">{row.part}</td>
                                    <td className="p-4">{row.func}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </MobileAccordion>

            {/* 3. Daily Care */}
            <MobileAccordion title="PEG Tube Care (Daily Care Steps)" number="3">
                <div className="space-y-6">
                    {[
                        { title: "A. Preparation", steps: ["Wash hands thoroughly.", "Gather supplies (gloves, warm water, gauze, mild soap if needed).", "Explain the procedure to the patient."] },
                        { title: "B. Cleaning the PEG Site", steps: ["Wear clean gloves.", "Remove any old dressing (if used).", "Check the site for: Redness, Swelling, Leakage, Odor.", "Clean the skin around the tube using warm water or mild soap.", "Pat dry completely.", "Apply a clean dry dressing only if the site is leaking.", "Rotate the tube gently 360° once daily (unless contraindicated) to prevent skin sticking."] },
                        { title: "C. Tube Flushing", desc: "Flushing prevents blockage. Flush with 30–50 mL of warm water:", steps: ["Before feeding", "After feeding", "Before and after giving medications", "Every 4–6 hours during continuous feeding"] }
                    ].map((section, idx) => (
                        <div key={idx} className="bg-gray-50 p-5 rounded-xl border border-gray-100">
                            <h4 className="font-bold text-primary mb-2 text-lg">{section.title}</h4>
                            {section.desc && <p className="text-sm mb-2 italic">{section.desc}</p>}
                            <ul className="list-decimal pl-5 space-y-2 text-sm">
                                {section.steps.map((step, sIdx) => (
                                    <li key={sIdx}>{step}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </MobileAccordion>

            {/* 4. Feeding Procedure */}
            <MobileAccordion title="PEG Tube Feeding (Types & Procedure)" number="4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div className="bg-light-teal p-3 rounded-lg text-center">
                        <span className="font-bold block text-navy mb-1">Bolus Feeding</span>
                        <span className="text-xs">Larger volume at intervals via syringe/gravity</span>
                    </div>
                    <div className="bg-light-teal p-3 rounded-lg text-center">
                        <span className="font-bold block text-navy mb-1">Intermittent</span>
                        <span className="text-xs">Feeding given several times a day</span>
                    </div>
                    <div className="bg-light-teal p-3 rounded-lg text-center">
                        <span className="font-bold block text-navy mb-1">Continuous</span>
                        <span className="text-xs">Given slowly using an electric pump</span>
                    </div>
                </div>

                <div className="bg-blue-50 p-5 rounded-xl border border-blue-100">
                    <h4 className="font-bold text-blue-700 mb-4 flex items-center gap-2">Step-by-Step PEG Feeding Procedure</h4>
                    <div className="space-y-4">
                        <div>
                            <span className="font-bold block text-navy text-sm mb-1">Before Feeding:</span>
                            <ul className="list-disc pl-5 text-sm space-y-1">
                                <li>Wash hands and wear gloves.</li>
                                <li>Check doctor’s order (formula, rate, volume).</li>
                                <li>Position patient at 30–45° (Fowler’s).</li>
                                <li>Check tube placement (markings, dislodgement).</li>
                                <li>Flush with 30 mL warm water.</li>
                            </ul>
                        </div>
                        <div className="border-t border-blue-200 py-3">
                            <span className="font-bold block text-navy text-sm mb-1">During Feeding:</span>
                            <ul className="list-disc pl-5 text-sm space-y-1">
                                <li>Pour formula into bag or syringe.</li>
                                <li>Allow to run by gravity or pump.</li>
                                <li>Ensure no air enters the tube.</li>
                                <li>Monitor for nausea, vomiting, distension, leakage.</li>
                            </ul>
                        </div>
                        <div className="border-t border-blue-200 pt-3">
                            <span className="font-bold block text-navy text-sm mb-1">After Feeding:</span>
                            <ul className="list-disc pl-5 text-sm space-y-1">
                                <li>Flush with 30 mL water.</li>
                                <li>Keep patient sitting up for at least 30 mins.</li>
                                <li>Close/clamp the tube.</li>
                                <li>Clean connector and secure tube.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </MobileAccordion>

            {/* 5. Medication */}
            <MobileAccordion title="Giving Medications Through PEG" number="5">
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                    {[
                        "Use liquid medications when possible.",
                        "If using crushed tablets: Crush finely & mix with warm water.",
                        "Give one medication at a time.",
                        "Flush with 15–30 mL water between each medication."
                    ].map((item, index) => (
                        <li key={index} className="bg-gray-50 p-3 rounded-lg flex items-center gap-2 border border-gray-100">
                            <span className="text-secondary font-bold"></span>{item}
                        </li>
                    ))}
                </ul>
            </MobileAccordion>

            {/* 6. Complications */}
            <div className="bg-red-50 p-6 rounded-2xl shadow-sm border border-red-100">
                <h3 className="text-xl font-bold text-red-600 mb-4 flex items-center gap-2">
                    <span className="bg-red-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">6</span>
                    Complications to Watch For
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <h4 className="font-bold text-red-700 mb-2 text-sm uppercase">Tube Site Problems</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
                            <li>Redness, swelling, or bleeding</li>
                            <li>Foul smell or pus</li>
                            <li>Skin irritation</li>
                            <li>Leakage around the tube</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold text-red-700 mb-2 text-sm uppercase">Feeding Problems</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
                            <li>Vomiting / Diarrhea</li>
                            <li>Aspiration (coughing, breathing difficulty)</li>
                            <li>Abdominal distension</li>
                            <li>Tube blockage or displacement</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* 7. Goals */}
            <MobileAccordion title="Goals of PEG Tube Care" number="7" className="bg-green-50 border-green-100">
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {[
                        "Provide safe nutrition",
                        "Prevent infection",
                        "Maintain skin integrity",
                        "Ensure tube works properly",
                        "Promote patient comfort and safety"
                    ].map((item, index) => (
                        <li key={index} className="flex items-center gap-2 text-green-800">
                            <span className="text-green-600">●</span>
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            </MobileAccordion>
        </div>
    );
};

export default PEGTubeContent;
