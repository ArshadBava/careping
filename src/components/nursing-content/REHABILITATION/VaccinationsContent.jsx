import React from 'react';
import MobileAccordion from '../../MobileAccordion';

const VaccinationsContent = () => {
    return (
        <div className="space-y-6 font-poppins text-gray-700">
            {/* Introduction */}
            <div className="bg-blue-50 p-6 rounded-2xl border-l-4 border-primary shadow-sm">
                <h2 className="text-2xl font-bold text-primary mb-4">Vaccination at Home – Nursing Notes</h2>
                <div className="space-y-3 leading-relaxed">
                    <p>
                        Vaccination at home refers to providing immunization services in a patient’s residence rather than a clinic or hospital.
                        It is commonly used for infants, elderly, bedridden patients, disabled individuals, or those in remote areas.
                    </p>
                </div>
            </div>

            {/* Purpose & Advantages Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <MobileAccordion title="Purpose" number="1">
                    <ul className="space-y-2 text-sm text-gray-600">
                        {[
                            "Increase access to immunization",
                            "Protect vulnerable populations",
                            "Reduce travel difficulties",
                            "Prevent hospital exposure",
                            "Improve community coverage"
                        ].map((item, i) => <li key={i} className="flex gap-2"><span>•</span> {item}</li>)}
                    </ul>
                </MobileAccordion>
                <MobileAccordion title="Advantages" number="2">
                    <ul className="space-y-2 text-sm text-gray-600">
                        {[
                            "Convenient for parents/caregivers",
                            "Safe for non-mobile patients",
                            "Reduces hospital overcrowding",
                            "Lower risk of cross-infections",
                            "Personalized care"
                        ].map((item, i) => <li key={i} className="flex gap-2"><span>✓</span> {item}</li>)}
                    </ul>
                </MobileAccordion>
            </div>

            {/* Contraindications Warning */}
            <div className="bg-red-50 p-6 rounded-2xl border border-red-100">
                <h3 className="text-xl font-bold text-red-700 mb-4 flex items-center gap-2">
                    <span className="bg-red-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">!</span>
                    Contraindications (When to Postpone)
                </h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
                    {["High fever", "Severe infection", "Allergic reaction to previous vaccines", "Uncontrolled chronic illness"].map((item, i) => (
                        <li key={i} className="bg-white p-2 rounded border border-red-100 text-red-800 text-sm text-center font-medium">
                            {item}
                        </li>
                    ))}
                </ul>
                <p className="text-sm text-red-600 italic text-center">
                    * Nurses should not make independent decisions about contraindications without consulting a healthcare provider.
                </p>
            </div>

            {/* Requirements */}
            <MobileAccordion title="Requirements for Safety" number="3">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
                        <h4 className="font-bold text-navy mb-2">Cold Chain Maintenance</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
                            <li>Keep at 2–8 °C</li>
                            <li>Use carriers with ice packs</li>
                            <li>Do NOT freeze sensitive vaccines</li>
                        </ul>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                        <h4 className="font-bold text-navy mb-2">Equipment Needed</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
                            <li>Sterile syringes/needles, Swabs</li>
                            <li>Gloves, Vaccine carrier</li>
                            <li>Sharps container</li>
                            <li>Emergency kit (Adrenaline etc.)</li>
                        </ul>
                    </div>
                </div>
            </MobileAccordion>

            {/* Role of Nurse */}
            <MobileAccordion title="Role of the Nurse" number="4">
                <div className="space-y-4">
                    <div className="border-l-4 border-yellow-400 pl-4 py-2 bg-yellow-50/50 rounded-r-lg">
                        <h4 className="font-bold text-navy text-sm uppercase mb-1">Pre-Vaccination</h4>
                        <p className="text-sm text-gray-600">ID patient, history check, consent, verify vaccine expiry/temp.</p>
                    </div>
                    <div className="border-l-4 border-green-400 pl-4 py-2 bg-green-50/50 rounded-r-lg">
                        <h4 className="font-bold text-navy text-sm uppercase mb-1">During Vaccination</h4>
                        <p className="text-sm text-gray-600">Aseptic technique, correct site (IM/Subcut), ensure comfort.</p>
                    </div>
                    <div className="border-l-4 border-blue-400 pl-4 py-2 bg-blue-50/50 rounded-r-lg">
                        <h4 className="font-bold text-navy text-sm uppercase mb-1">Post-Vaccination</h4>
                        <p className="text-sm text-gray-600">Observe (30 mins), educate on side effects (fever/soreness), document.</p>
                    </div>
                </div>
            </MobileAccordion>

            {/* Documentation & Safety Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <MobileAccordion title="Documentation" number="5">
                    <ul className="list-disc pl-5 space-y-1 text-sm text-gray-600">
                        <li>Date, time, vaccine name, batch #</li>
                        <li>Dose, route, site</li>
                        <li>Reactions observed</li>
                        <li>Signature</li>
                    </ul>
                </MobileAccordion>
                <MobileAccordion title="Who Benefits?" number="6">
                    <div className="flex flex-wrap gap-2">
                        {["Newborns", "Elderly", "Bedridden", "Mobility Issues", "Immunocompromised"].map((tag, i) => (
                            <span key={i} className="bg-purple-50 text-purple-700 px-3 py-1 rounded-full text-xs font-semibold">
                                {tag}
                            </span>
                        ))}
                    </div>
                </MobileAccordion>
            </div>

            {/* Summary */}
            <div className="bg-green-50 p-6 rounded-2xl shadow-sm border border-green-100 text-center">
                <h3 className="text-xl font-bold text-green-700 mb-2"> Summary</h3>
                <p className="text-green-800 font-medium leading-relaxed">
                    Vaccination at home increases access to immunization. Nurses play a key role in assessment, preparation,
                    vaccine administration, monitoring, and documentation to ensure safety and effectiveness.
                </p>
            </div>
        </div>
    );
};

export default VaccinationsContent;
