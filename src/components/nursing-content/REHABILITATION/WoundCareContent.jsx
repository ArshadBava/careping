import React from 'react';
import MobileAccordion from '../../MobileAccordion';

const WoundCareContent = () => {
    return (
        <div className="space-y-6 font-poppins text-gray-700">
            {/* Introduction */}
            <div className="bg-blue-50 p-6 rounded-2xl border-l-4 border-primary shadow-sm">
                <h2 className="text-2xl font-bold text-primary mb-4">What Are Wounds?</h2>
                <div className="space-y-3 leading-relaxed">
                    <p>
                        A wound is any break or damage to the skin or underlying tissues. Wounds can occur due to injury, surgery, pressure, burns, or disease.
                    </p>
                </div>
            </div>

            {/* Types & Stages */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <MobileAccordion title="Types of Wounds" number="1">
                    <ul className="space-y-3 text-sm">
                        <li className="bg-gray-50 p-2 rounded"><span className="font-bold text-navy">Open:</span> Skin broken (cuts, abrasions)</li>
                        <li className="bg-gray-50 p-2 rounded"><span className="font-bold text-navy">Closed:</span> Skin intact (bruises)</li>
                        <li className="bg-gray-50 p-2 rounded"><span className="font-bold text-navy">Acute:</span> Heal quickly (surgical cuts)</li>
                        <li className="bg-gray-50 p-2 rounded"><span className="font-bold text-navy">Chronic:</span> Heal slowly (pressure ulcers, diabetic ulcers)</li>
                    </ul>
                </MobileAccordion>
                <MobileAccordion title="Stages of Healing" number="2">
                    <ol className="space-y-3 text-sm relative border-l-2 border-gray-200 ml-3 pl-5">
                        {[
                            { name: "Hemostasis", desc: "Bleeding stops" },
                            { name: "Inflammatory", desc: "Body fights infection" },
                            { name: "Proliferative", desc: "New tissue forms" },
                            { name: "Maturation", desc: "Wound strengthens/closes" }
                        ].map((stage, i) => (
                            <li key={i} className="relative">
                                <span className="absolute -left-[29px] top-0 bg-secondary text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">{i + 1}</span>
                                <span className="font-bold text-navy">{stage.name}:</span> <span className="text-gray-600">{stage.desc}</span>
                            </li>
                        ))}
                    </ol>
                </MobileAccordion>
            </div>

            {/* Dressings Section */}
            <MobileAccordion title="Wound Dressings" number="3">
                <p className="mb-4 text-gray-600">Material placed over a wound to protect it, promote healing, and absorb drainage.</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <h4 className="font-bold text-gray-800 mb-2">Functions:</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-gray-600">
                            <li>Protect from infection</li>
                            <li>Keep clean and moist</li>
                            <li>Absorb fluid (exudate)</li>
                            <li>Reduce split/pain</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold text-gray-800 mb-2">Common Types:</h4>
                        <div className="flex flex-wrap gap-2">
                            {["Gauze", "Transparent film", "Hydrocolloid", "Hydrogel", "Foam", "Alginate", "Pressure"].map((t, i) => (
                                <span key={i} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs border border-gray-200">{t}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </MobileAccordion>

            {/* Wound Care Steps */}
            <MobileAccordion title="Steps in Basic Wound Care" number="4">
                <div className="space-y-2">
                    {[
                        { step: "Hand hygiene", desc: "Wash hands to prevent infection" },
                        { step: "Assess wound", desc: "Size, depth, color, drainage, odor" },
                        { step: "Clean wound", desc: "Use sterile saline or prescribed solution" },
                        { step: "Apply dressing", desc: "Based on wound type" },
                        { step: "Secure dressing", desc: "Tape or bandage" },
                        { step: "Monitor", desc: "Check for healing/complications" },
                        { step: "Document", desc: "Record condition and care" }
                    ].map((item, idx) => (
                        <div key={idx} className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg border border-gray-100">
                            <span className="font-bold text-primary text-lg">{idx + 1}.</span>
                            <div>
                                <span className="font-bold text-navy">{item.step}</span> <span className="text-gray-500 text-sm">– {item.desc}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </MobileAccordion>

            {/* Healthy vs Infected */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-green-50 p-6 rounded-2xl border border-green-100">
                    <h3 className="text-lg font-bold text-green-800 mb-3 flex items-center gap-2">
                        <span>✅</span> Signs of Healing
                    </h3>
                    <ul className="list-disc pl-5 text-green-700 space-y-1 text-sm">
                        <li>Pink/red granulation tissue</li>
                        <li>Decreasing size</li>
                        <li>Minimal clear drainage</li>
                        <li>No foul smell</li>
                    </ul>
                </div>
                <div className="bg-red-50 p-6 rounded-2xl border border-red-100">
                    <h3 className="text-lg font-bold text-red-800 mb-3 flex items-center gap-2">
                        <span>⚠️</span> Signs of Infection
                    </h3>
                    <ul className="list-disc pl-5 text-red-700 space-y-1 text-sm">
                        <li>Increased redness/swelling</li>
                        <li>Warmth around wound</li>
                        <li>Pus / thick yellow-green drainage</li>
                        <li>Foul odor</li>
                        <li>Fever or increased pain</li>
                    </ul>
                </div>
            </div>

            {/* Summary/Goals */}
            <div className="bg-gray-100 p-6 rounded-xl border-l-4 border-secondary mt-8">
                <h3 className="text-navy font-bold text-xl mb-3">Goals of Wound Care</h3>
                <ul className="flex flex-wrap gap-4 text-gray-700">
                    {["Prevent infection", "Reduce pain", "Promote healing", "Protect skin", "Improve comfort"].map((g, i) => (
                        <li key={i} className="flex items-center gap-2 font-medium">
                            <span className="text-secondary text-xl">•</span> {g}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default WoundCareContent;
