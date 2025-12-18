import React from 'react';
import MobileAccordion from '../../MobileAccordion';

const MedicationAdminContent = () => {
    return (
        <div className="space-y-6 font-poppins text-gray-700">
            {/* Introduction */}
            <div className="bg-blue-50 p-6 rounded-2xl border-l-4 border-primary shadow-sm">
                <h2 className="text-2xl font-bold text-primary mb-4">Medication Administration</h2>
                <div className="space-y-3 leading-relaxed">
                    <p>
                        Medication administration is the process of safely giving medicines to a patient to treat illness, prevent disease, or manage symptoms.
                        It is a key nursing responsibility that requires accuracy, knowledge, and careful observation.
                    </p>
                </div>
            </div>

            {/* Purpose */}
            <MobileAccordion title="Purpose" number="1">
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {["Treat diseases (e.g., antibiotics)", "Relieve symptoms (e.g., painkillers)", "Prevent illness (e.g., vaccines)", "Maintain health (e.g., insulin)"].map((p, i) => (
                        <li key={i} className="flex items-center gap-2 bg-gray-50 p-2 rounded-lg text-sm border border-gray-100">
                            <span className="text-secondary font-bold">✓</span> {p}
                        </li>
                    ))}
                </ul>
            </MobileAccordion>

            {/* The Five Rights */}
            <MobileAccordion title="The “Five Rights” (Safety Principles)" number="2" className="bg-blue-100 border-l-4 border-blue-600">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                    {[
                        { title: "Right Patient", desc: "Check Name/ID" },
                        { title: "Right Medication", desc: "Check Label" },
                        { title: "Right Dose", desc: "Calculate & Confirm" },
                        { title: "Right Time", desc: "Correct Frequency" },
                        { title: "Right Route", desc: "Oral/IV/IM etc." }
                    ].map((right, i) => (
                        <div key={i} className="bg-white p-3 rounded-xl text-center shadow-sm">
                            <div className="text-2xl font-bold text-blue-600 mb-1">{i + 1}</div>
                            <h4 className="font-bold text-navy text-sm mb-1">{right.title}</h4>
                            <p className="text-xs text-gray-500">{right.desc}</p>
                        </div>
                    ))}
                </div>
                <p className="text-xs text-gray-600 mt-4 text-center italic">
                    *Always check for allergies and rights documentation.
                </p>
            </MobileAccordion>

            {/* Routes */}
            <MobileAccordion title="Routes of Administration" number="3">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {[
                        { title: "Oral", desc: "Tablets, capsules, liquid (Swallowed)" },
                        { title: "Topical", desc: "Creams, ointments (Skin)" },
                        { title: "Inhalation", desc: "Inhalers, nebulizers (Lungs)" },
                        { title: "Rectal/Vaginal", desc: "Suppositories, creams" },
                        { title: "Sublingual/Buccal", desc: "Under tongue / Cheek" },
                        { title: "Injection", desc: "IM, SC, IV (Needle)" }
                    ].map((route, i) => (
                        <div key={i} className="bg-gray-50 border border-gray-100 p-4 rounded-xl hover:bg-light-teal/20 transition-colors">
                            <h4 className="font-bold text-navy mb-1">{route.title}</h4>
                            <p className="text-sm text-gray-600">{route.desc}</p>
                        </div>
                    ))}
                </div>
            </MobileAccordion>

            {/* Steps */}
            <MobileAccordion title="Steps in Administration" number="4">
                <ol className="relative border-l-2 border-primary/20 ml-3 space-y-4">
                    {[
                        "Check prescription (Verify order)",
                        "Wash hands & Cleanliness",
                        "Prepare medication (Dose/Route)",
                        "Identify patient (2 Identifiers)",
                        "Explain purpose & effects",
                        "Administer safely",
                        "Monitor for side effects",
                        "Document"
                    ].map((step, i) => (
                        <li key={i} className="pl-6 relative">
                            <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-primary ring-4 ring-white"></div>
                            <span className="font-medium text-gray-700">{step}</span>
                        </li>
                    ))}
                </ol>
            </MobileAccordion>

            {/* Importance & Responsibilities */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <MobileAccordion title="Importance" number="5">
                    <ul className="space-y-2 text-sm text-gray-600">
                        {["Prevents errors & harm", "Ensures effectiveness", "Tracks progress", "Promotes trust"].map((item, i) => (
                            <li key={i} className="flex gap-2"><span>•</span> {item}</li>
                        ))}
                    </ul>
                </MobileAccordion>
                <MobileAccordion title="Nurse’s Responsibilities" number="6">
                    <ul className="space-y-2 text-sm text-gray-600">
                        {["Know drug actions/doses", "Assess before/after", "Report adverse reactions", "Teach patient"].map((item, i) => (
                            <li key={i} className="flex gap-2"><span>•</span> {item}</li>
                        ))}
                    </ul>
                </MobileAccordion>
            </div>
        </div>
    );
};

export default MedicationAdminContent;
