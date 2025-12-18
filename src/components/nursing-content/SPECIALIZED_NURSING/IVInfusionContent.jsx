import React from 'react';
import MobileAccordion from '../../MobileAccordion';

const IVInfusionContent = () => {
    return (
        <div className="space-y-6 font-poppins text-gray-700">
            {/* Introduction */}
            <div className="bg-blue-50 p-6 rounded-2xl border-l-4 border-primary shadow-sm">
                <h2 className="text-2xl font-bold text-primary mb-4">IV Infusion Therapy – Explanation</h2>
                <p className="leading-relaxed">
                    IV infusion therapy (Intravenous infusion therapy) is the process of giving fluids, medications, or nutrients
                    directly into a patient’s vein using an IV line. It is commonly used when patients need quick treatment,
                    cannot take medicines orally, or require continuous fluid replacement.
                </p>
            </div>

            {/* 1. Purpose */}
            <MobileAccordion title="Purpose of IV Infusion Therapy" number="1">
                <p className="mb-4">IV therapy is used to:</p>
                <ul className="space-y-3">
                    {[
                        "Maintain hydration (e.g., dehydration, fever, vomiting)",
                        "Replace fluids and electrolytes",
                        "Give medications (antibiotics, painkillers, chemotherapy)",
                        "Provide nutrition (TPN – total parenteral nutrition)",
                        "Maintain blood volume in shock or trauma",
                        "Deliver blood or blood products",
                        "Ensure rapid action of drugs"
                    ].map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                            <span className="text-secondary mt-1">●</span>
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            </MobileAccordion>

            {/* 2. Components */}
            <MobileAccordion title="Components of an IV Infusion System" number="2">
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                        "IV Cannula (catheter inserted into the vein)",
                        "IV Fluids (e.g., Normal Saline, Dextrose solutions)",
                        "IV Tubing/IV Set",
                        "Drip chamber (controls flow rate)",
                        "Roller clamp (adjusts the speed of fluid flow)",
                        "IV pole (to hang the fluid bag)",
                        "Injection ports (for medications)"
                    ].map((item, index) => (
                        <li key={index} className="bg-gray-50 p-3 rounded-lg border border-gray-100 flex items-center gap-3">
                            <div className="w-2 h-2 bg-primary rounded-full"></div>
                            {item}
                        </li>
                    ))}
                </ul>
            </MobileAccordion>

            {/* 3. Types */}
            <MobileAccordion title="Types of IV Infusions" number="3">
                <div className="space-y-4">
                    <div className="p-4 bg-light-teal rounded-xl">
                        <h4 className="font-bold text-navy mb-1">1. Continuous Infusion</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                            <li>Fluid runs non-stop at a set rate.</li>
                            <li>Used for hydration or steady medication delivery.</li>
                        </ul>
                    </div>
                    <div className="p-4 bg-light-teal rounded-xl">
                        <h4 className="font-bold text-navy mb-1">2. Intermittent Infusion</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                            <li>Given for a short period (e.g., IV antibiotics).</li>
                            <li>Includes IV piggyback or bolus doses.</li>
                        </ul>
                    </div>
                    <div className="p-4 bg-light-teal rounded-xl">
                        <h4 className="font-bold text-navy mb-1">3. IV Bolus (IV Push)</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                            <li>Medication given quickly through a syringe into the IV line.</li>
                            <li>Used for emergencies or rapid drug action.</li>
                        </ul>
                    </div>
                    <div className="p-4 bg-light-teal rounded-xl">
                        <h4 className="font-bold text-navy mb-1">4. Total Parenteral Nutrition (TPN)</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                            <li>Special nutrient solution given through a central line when the patient cannot eat.</li>
                        </ul>
                    </div>
                </div>
            </MobileAccordion>

            {/* 4. Procedure */}
            <MobileAccordion title="Procedure for IV Infusion (Basic Steps)" number="4">
                <p className="text-sm italic text-gray-500 mb-4">(Steps may vary by facility protocols)</p>

                <div className="space-y-4">
                    {[
                        { title: "A. Preparation", steps: ["Wash hands, gather equipment, and wear gloves.", "Verify the doctor’s order (fluid type, rate, additives).", "Explain the procedure to the patient.", "Select and prepare the IV fluid and tubing."] },
                        { title: "B. Priming the IV Set", steps: ["Remove air by letting fluid run through the tubing.", "Hang the bag on the IV pole."] },
                        { title: "C. Inserting the IV Cannula (Cannulation)", steps: ["Clean the skin with antiseptic.", "Insert the cannula into the vein at the correct angle.", "Once blood return is seen, advance the cannula.", "Secure with tape and connect the tubing."] },
                        { title: "D. Regulating the Flow Rate", steps: ["Use the roller clamp or an IV pump.", "Ensure correct drops per minute (gtt/min) or pump settings (mL/hr)."] },
                        { title: "E. Monitoring", steps: ["Check the IV site for: Swelling, Redness, Pain, Leaking.", "Observe patient response and fluid balance.", "Check the infusion rate frequently."] }
                    ].map((section, idx) => (
                        <div key={idx} className="border-l-2 border-primary pl-4">
                            <h4 className="font-bold text-primary mb-2">{section.title}</h4>
                            <ul className="list-decimal pl-5 space-y-1 text-sm">
                                {section.steps.map((step, sIdx) => (
                                    <li key={sIdx}>{step}</li>
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
                    Complications of IV Infusion
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                        { name: "1. Infiltration", desc: "Fluid leaks into tissue → swelling, cool skin." },
                        { name: "2. Phlebitis", desc: "Vein inflammation → redness, pain, warmth." },
                        { name: "3. Air Embolism", desc: "Air enters bloodstream → rare but serious." },
                        { name: "4. Speed Shock", desc: "Medication given too fast → dizziness, chest tightness." },
                        { name: "5. Fluid Overload", desc: "Too much fluid → shortness of breath, edema." },
                        { name: "6. Infection", desc: "Local or systemic infection from poor technique." }
                    ].map((item, index) => (
                        <div key={index} className="bg-white p-3 rounded-lg shadow-sm">
                            <span className="font-bold block text-red-600 mb-1">{item.name}</span>
                            <span className="text-sm text-gray-700">{item.desc}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* 6. Nursing Responsibilities */}
            <MobileAccordion title="Nursing Responsibilities" number="6">
                <ul className="space-y-3">
                    {[
                        "Use aseptic technique",
                        "Ensure correct fluid, rate, and patient",
                        "Monitor IV site regularly",
                        "Document intake, changes, and patient condition",
                        "Educate patient on signs of complications",
                        "Report problems immediately"
                    ].map((item, index) => (
                        <li key={index} className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-secondary rounded-full"></div>
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            </MobileAccordion>

            {/* 7. Advantages */}
            <MobileAccordion title="Advantages of IV Infusion Therapy" number="7" className="bg-green-50 border-green-100">
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {[
                        "Fast absorption",
                        "Accurate dosing",
                        "Suitable for patients unable to take oral meds",
                        "Can deliver large volumes or irritating drugs safely"
                    ].map((item, index) => (
                        <li key={index} className="flex items-center gap-2 text-green-800">
                            <span className="text-green-600">✔</span>
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            </MobileAccordion>
        </div>
    );
};

export default IVInfusionContent;
