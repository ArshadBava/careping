import React from 'react';
import MobileAccordion from '../../MobileAccordion';

const OstomyCareContent = () => {
    return (
        <div className="space-y-6 font-poppins text-gray-700">
            {/* Introduction */}
            <div className="bg-blue-50 p-6 rounded-2xl border-l-4 border-primary shadow-sm">
                <h2 className="text-2xl font-bold text-primary mb-4">What Is an Ostomy?</h2>
                <div className="space-y-3 leading-relaxed">
                    <p>
                        An ostomy is a surgically created opening on the abdomen that allows stool or urine to leave the body when the normal route is not possible.
                        The opening on the skin is called a <span className="font-bold">stoma</span>.
                    </p>
                </div>
            </div>

            {/* Types */}
            <MobileAccordion title="Types of Ostomies" number="1">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                        { title: "Colostomy", from: "Colon (Large Intestine)", stool: "Formed or semi-formed" },
                        { title: "Ileostomy", from: "Ileum (Small Intestine)", stool: "Liquid/Semi-liquid (Irritating)" },
                        { title: "Urostomy", from: "Ureters/Small Bowel", stool: "Continuous Urine" }
                    ].map((type, i) => (
                        <div key={i} className="bg-gray-50 p-4 rounded-xl border border-gray-200 text-center hover:bg-light-teal/20 transition-colors">
                            <h4 className="font-bold text-navy text-lg mb-2">{type.title}</h4>
                            <p className="text-xs text-gray-500 uppercase font-semibold mb-1">Origin</p>
                            <p className="text-sm text-gray-700 mb-3">{type.from}</p>
                            <p className="text-xs text-gray-500 uppercase font-semibold mb-1">Output</p>
                            <p className="text-sm text-gray-700">{type.stool}</p>
                        </div>
                    ))}
                </div>
            </MobileAccordion>

            {/* Care & Healthy Stoma */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <MobileAccordion title="What is Ostomy Care?" number="2">
                    <ul className="space-y-2 text-sm text-gray-600">
                        {["Cleaning stoma/skin", "Changing ostomy bag", "Preventing irritation", "Monitoring stoma", "Ensuring comfort"].map((item, i) => (
                            <li key={i} className="flex gap-2"><span>•</span> {item}</li>
                        ))}
                    </ul>
                </MobileAccordion>
                <MobileAccordion title="Healthy Stoma Signs" number="3">
                    <ul className="space-y-2 text-sm font-medium text-green-700 bg-green-50 p-4 rounded-xl">
                        <li>✓ Pink or red (like inside of mouth)</li>
                        <li>✓ Moist and shiny</li>
                        <li>✓ Slightly raised above skin</li>
                        <li>✓ Painless (no nerves in stoma)</li>
                    </ul>
                </MobileAccordion>
            </div>

            {/* Steps in Care */}
            <MobileAccordion title="Steps in Ostomy Care" number="4">
                <div className="space-y-4">
                    {[
                        { step: "Preparation", desc: "Wash hands, gather supplies, privacy." },
                        { step: "Remove Old Bag", desc: "Remove top-to-bottom, dispose, check skin." },
                        { step: "Clean Stoma", desc: "Warm water only, soft towel. Do not scrub." },
                        { step: "Measure & Prepare", desc: "Measure stoma, cut opening 1/8 inch larger, apply barrier." },
                        { step: "Apply New Bag", desc: "Center opening, press to seal, close bottom." }
                    ].map((s, i) => (
                        <div key={i} className="flex items-start gap-3 bg-gray-50 p-3 rounded-lg border border-gray-100">
                            <span className="bg-primary text-white w-6 h-6 rounded-full flex items-center justify-center text-xs flex-shrink-0 mt-0.5">{i + 1}</span>
                            <div>
                                <h4 className="font-bold text-navy text-sm">{s.step}</h4>
                                <p className="text-sm text-gray-600">{s.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </MobileAccordion>

            {/* Tips & Complications */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                    <h3 className="text-lg font-bold text-navy mb-3">💡 Care Tips</h3>
                    <ul className="list-disc pl-5 text-gray-700 text-sm space-y-1">
                        <li>Empty bag when 1/3 full</li>
                        <li>Avoid heavy lifting</li>
                        <li>Wear loose clothing</li>
                        <li>Keep skin clean/dry</li>
                        <li>Hydrate well</li>
                    </ul>
                </div>
                <div className="bg-red-50 p-6 rounded-xl border border-red-100">
                    <h3 className="text-lg font-bold text-red-800 mb-3">⚠️ Complications</h3>
                    <ul className="list-disc pl-5 text-red-800 text-sm space-y-1">
                        <li>Dark/Purple/Black stoma (Emergency!)</li>
                        <li>Persistent bleeding</li>
                        <li>Rash/Ulcers</li>
                        <li>Foul odor/unusual discharge</li>
                        <li>Swelling/Retraction</li>
                        <li>Leakage</li>
                    </ul>
                </div>
            </div>

            {/* Support */}
            <div className="bg-gray-100 p-6 rounded-xl border-t-4 border-secondary text-center">
                <h3 className="text-navy font-bold text-xl mb-2">Psychological Support</h3>
                <p className="text-gray-600 mb-2">Living with an ostomy affects body image, emotions, and confidence.</p>
                <p className="font-bold text-primary">Patients need reassurance, education, and support groups.</p>
            </div>
        </div>
    );
};

export default OstomyCareContent;
