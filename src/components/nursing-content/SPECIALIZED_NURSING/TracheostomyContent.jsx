import React from 'react';
import MobileAccordion from '../../MobileAccordion';

const TracheostomyContent = () => {
    return (
        <div className="space-y-6 font-poppins text-gray-700">
            {/* Introduction */}
            <div className="bg-blue-50 p-6 rounded-2xl border-l-4 border-primary shadow-sm">
                <h2 className="text-2xl font-bold text-primary mb-4">Tracheostomy Care – Explanation</h2>
                <div className="space-y-3 leading-relaxed">
                    <p>
                        A tracheostomy is a surgical opening made in the neck into the trachea (windpipe) to help a person breathe.
                        A tube called a tracheostomy tube is inserted into this opening to maintain an airway.
                    </p>
                    <p>
                        Tracheostomy care involves cleaning the stoma (opening), replacing dressings, and maintaining the tube
                        to keep it clean, safe, and free from infection or blockage.
                    </p>
                </div>
            </div>

            {/* 1. Purpose */}
            <MobileAccordion title="Purpose of a Tracheostomy" number="1">
                <p className="mb-4">A tracheostomy is done to:</p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {[
                        "Help patients who cannot breathe normally",
                        "Bypass a blocked airway",
                        "Allow long-term ventilation",
                        "Remove secretions more easily",
                        "Protect airway during serious illness or surgery"
                    ].map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                            <span className="text-secondary mt-1">●</span>
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            </MobileAccordion>

            {/* 2. Parts */}
            <MobileAccordion title="Parts of a Tracheostomy Tube" number="2">
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
                                { part: "Outer cannula", func: "Keeps the stoma open" },
                                { part: "Inner cannula", func: "Can be removed and cleaned" },
                                { part: "Obturator", func: "Used during insertion" },
                                { part: "Flange/Neck plate", func: "Secures tube to neck" },
                                { part: "Cuff (if present)", func: "Seals airway for ventilation" }
                            ].map((row, i) => (
                                <tr key={i} className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                                    <td className="p-4 font-semibold text-navy">{row.part}</td>
                                    <td className="p-4">{row.func}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </MobileAccordion>

            {/* 3. Why Important */}
            <MobileAccordion title="Why Tracheostomy Care Is Important" number="3">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {[
                        "Prevents infection",
                        "Prevents blockage from mucus",
                        "Keeps airway clear",
                        "Ensures patient can breathe comfortably",
                        "Protects skin around the stoma"
                    ].map((item, index) => (
                        <div key={index} className="bg-light-teal p-3 rounded-lg text-center text-sm font-medium text-navy">
                            {item}
                        </div>
                    ))}
                </div>
            </MobileAccordion>

            {/* 4. Steps */}
            <MobileAccordion title="Steps in Tracheostomy Care" number="4">
                <p className="text-sm italic text-gray-500 mb-6">(General steps; may vary by hospital policy)</p>

                <div className="space-y-6">
                    {[
                        { title: "A. Preparation", steps: ["Wash hands.", "Gather supplies (sterile gloves, cotton-tipped applicators, saline, gauze, ties).", "Explain the procedure to the patient."] },
                        { title: "B. Cleaning the Stoma", steps: ["Wear sterile gloves.", "Remove the old dressing.", "Inspect the skin for redness, swelling, or discharge.", "Clean the stoma with normal saline using cotton swabs.", "Pat dry fully to prevent irritation."] },
                        { title: "C. Cleaning the Inner Cannula (Only for tubes with removable inner cannula)", steps: ["Remove the inner cannula carefully.", "Clean with saline to remove mucus.", "Dry and reinsert securely."] },
                        { title: "D. Changing the Dressing and Ties", steps: ["Place a new sterile tracheostomy dressing under the flange.", "Replace trach ties or Velcro straps one side at a time to avoid accidental dislodging.", "Ensure ties are snug but not too tight (one finger should fit under)."] }
                    ].map((section, idx) => (
                        <div key={idx} className="bg-gray-50 p-5 rounded-xl border border-gray-100">
                            <h4 className="font-bold text-primary mb-3 text-lg">{section.title}</h4>
                            <ul className="list-decimal pl-5 space-y-2 text-sm">
                                {section.steps.map((step, sIdx) => (
                                    <li key={sIdx}>{step}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </MobileAccordion>

            {/* 5. Suctioning */}
            <MobileAccordion title="Suctioning a Tracheostomy (If Needed)" number="5">
                <p className="mb-4">When the patient cannot clear mucus, suctioning is done to open the airway.</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-red-50 p-4 rounded-xl border border-red-100">
                        <h4 className="font-bold text-red-600 mb-2">Signs suctioning is needed:</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
                            <li>Noisy breathing</li>
                            <li>Visible mucus</li>
                            <li>Difficulty breathing</li>
                            <li>Low oxygen saturation</li>
                        </ul>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
                        <h4 className="font-bold text-blue-600 mb-2">Basic suction steps:</h4>
                        <ol className="list-decimal pl-5 space-y-1 text-sm text-gray-700">
                            <li>Use sterile catheter.</li>
                            <li>Insert without suction, then withdraw while suctioning.</li>
                            <li>Limit suction time to 10 seconds.</li>
                            <li>Oxygenate the patient if required.</li>
                        </ol>
                    </div>
                </div>
            </MobileAccordion>

            {/* 6. Complications */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-navy mb-4 flex items-center gap-2">
                    <span className="bg-red-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">6</span>
                    Signs of Complications
                </h3>
                <p className="mb-4 font-semibold text-red-600">Report immediately if you see:</p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {[
                        "Redness, swelling, or pus around stoma",
                        "Bleeding",
                        "Difficulty breathing",
                        "Tube displacement",
                        "Increased secretions",
                        "Fever",
                        "Skin breakdown"
                    ].map((item, index) => (
                        <div key={index} className="flex items-center gap-2 text-sm bg-red-50 p-3 rounded-lg text-gray-800">
                            <span className="text-red-500">⚠</span>
                            {item}
                        </div>
                    ))}
                </div>
            </div>

            {/* 7 & 8 Education & Goals */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <MobileAccordion title="Patient & Family Education" number="7" className="bg-light-teal border-transparent">
                    <ul className="space-y-2">
                        {[
                            "Keep the area clean and dry",
                            "Use cough techniques to clear secretions",
                            "Stay hydrated (helps thin mucus)",
                            "Avoid powders/creams near stoma",
                            "Keep emergency equipment nearby (obturator, spare tube, suction)"
                        ].map((item, index) => (
                            <li key={index} className="flex items-start gap-2 text-sm">
                                <span className="text-primary mt-1">✔</span>{item}
                            </li>
                        ))}
                    </ul>
                </MobileAccordion>

                <MobileAccordion title="Goals of Tracheostomy Care" number="8" className="bg-green-50 border-green-100">
                    <ul className="space-y-2">
                        {[
                            "Maintain airway patency",
                            "Prevent infection",
                            "Ensure comfort and safety",
                            "Promote effective breathing",
                            "Protect the skin"
                        ].map((item, index) => (
                            <li key={index} className="flex items-start gap-2 text-sm">
                                <span className="text-green-600 mt-1">★</span>{item}
                            </li>
                        ))}
                    </ul>
                </MobileAccordion>
            </div>
        </div>
    );
};

export default TracheostomyContent;
