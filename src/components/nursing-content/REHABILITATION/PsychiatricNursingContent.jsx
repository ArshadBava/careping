import React from 'react';
import MobileAccordion from '../../MobileAccordion';

const PsychiatricNursingContent = () => {
    return (
        <div className="space-y-6 font-poppins text-gray-700">
            {/* Introduction */}
            <div className="bg-blue-50 p-6 rounded-2xl border-l-4 border-primary shadow-sm">
                <h2 className="text-2xl font-bold text-primary mb-4">What Is Psychiatric Nursing?</h2>
                <div className="space-y-3 leading-relaxed">
                    <p>
                        Psychiatric Nursing (also called Mental Health Nursing) is a specialized field of nursing that focuses on the care, treatment,
                        and rehabilitation of individuals with mental health disorders. These nurses support patients’ emotional, psychological, and social well-being.
                    </p>
                </div>
            </div>

            {/* Goals */}
            <MobileAccordion title="GOALS OF PSYCHIATRIC NURSING" number="1">
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {[
                        "Promote mental health and emotional stability",
                        "Prevent mental illness when possible",
                        "Help patients cope with stress or life problems",
                        "Assist in recovery and rehabilitation",
                        "Ensure patient safety",
                        "Enhance the patient’s ability to live independently",
                        "Support families and caregivers"
                    ].map((item, index) => (
                        <li key={index} className="flex items-start gap-3 bg-gray-50 p-3 rounded-lg">
                            <span className="text-secondary mt-1">●</span>
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            </MobileAccordion>

            {/* Roles */}
            <MobileAccordion title="ROLES AND RESPONSIBILITIES" number="2">
                <div className="space-y-4">
                    {[
                        { title: "Assessment", items: ["Observe behavior, mood, and speech", "Assess thought processes and perception", "Evaluate suicide risk"] },
                        { title: "Therapeutic Communication", items: ["Use empathy, active listening", "Establish trust and build rapport", "Encourage expression of feelings"] },
                        { title: "Medication Management", items: ["Administer psychotropic medications safely", "Monitor side effects", "Educate on compliance"] },
                        { title: "Crisis Intervention", items: ["Manage panic attacks or aggression", "Maintain safety", "De-escalation techniques"] },
                        { title: "Patient Education", items: ["Teach coping skills", "Provide illness info", "Support healthy habits"] },
                        { title: "Milieu Management", items: ["Maintain safe, structured environment", "Encourage social interaction"] },
                        { title: "Collaboration", items: ["Work with psychiatrists, psychologists, social workers"] }
                    ].map((role, idx) => (
                        <div key={idx} className="bg-light-teal p-4 rounded-xl border border-teal-100">
                            <h4 className="font-bold text-navy mb-2">{idx + 1}. {role.title}</h4>
                            <ul className="list-disc pl-5 space-y-1 text-sm bg-white/60 p-2 rounded-lg">
                                {role.items.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </MobileAccordion>

            {/* Principles & Disorders Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <MobileAccordion title="Key Principles" number="3">
                    <ul className="space-y-2 text-sm">
                        {[
                            { title: "Acceptance", desc: "Respect without judgment" },
                            { title: "Confidentiality", desc: "Keep info private" },
                            { title: "Consistency", desc: "Stable routines" },
                            { title: "Self-awareness", desc: "Understand own feelings" },
                            { title: "Therapeutic comm.", desc: "Purposeful interactions" },
                            { title: "Individualization", desc: "Tailored care" }
                        ].map((item, index) => (
                            <li key={index} className="flex gap-2">
                                <span className="font-bold text-primary">{item.title}:</span>
                                <span className="text-gray-600">{item.desc}</span>
                            </li>
                        ))}
                    </ul>
                </MobileAccordion>

                <MobileAccordion title="Common Disorders" number="4">
                    <div className="flex flex-wrap gap-2">
                        {[
                            "Depression", "Bipolar Disorder", "Anxiety Disorders",
                            "Schizophrenia", "Substance Use", "Personality Disorders",
                            "PTSD", "Dementia/Delirium"
                        ].map((tag, i) => (
                            <span key={i} className="bg-purple-50 text-purple-700 px-3 py-1 rounded-full text-xs font-semibold border border-purple-100">
                                {tag}
                            </span>
                        ))}
                    </div>
                </MobileAccordion>
            </div>

            {/* Therapeutic Communication */}
            <MobileAccordion title="Therapeutic Communication" number="5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-green-50 p-4 rounded-xl border border-green-100">
                        <h4 className="font-bold text-green-800 mb-2">DO Use:</h4>
                        <ul className="list-check space-y-1 text-sm text-green-700">
                            <li>✓ Active listening</li>
                            <li>✓ Reflection</li>
                            <li>✓ Clarification</li>
                            <li>✓ Open-ended questions</li>
                            <li>✓ Silence (allowing time)</li>
                            <li>✓ Validation</li>
                        </ul>
                    </div>
                    <div className="bg-red-50 p-4 rounded-xl border border-red-100">
                        <h4 className="font-bold text-red-800 mb-2">AVOID:</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-red-700">
                            <li>Giving advice</li>
                            <li>False reassurance</li>
                            <li>Asking "why" questions</li>
                            <li>Minimizing feelings</li>
                        </ul>
                    </div>
                </div>
            </MobileAccordion>

            {/* Prevention & Ethics */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <MobileAccordion title="Levels of Prevention" number="6">
                    <ul className="space-y-3 text-sm">
                        <li className="bg-gray-50 p-3 rounded-lg"><span className="font-bold text-navy">Primary:</span> Prevent mental illness (Education)</li>
                        <li className="bg-gray-50 p-3 rounded-lg"><span className="font-bold text-navy">Secondary:</span> Early diagnosis & treatment (Screening)</li>
                        <li className="bg-gray-50 p-3 rounded-lg"><span className="font-bold text-navy">Tertiary:</span> Rehab & relapse prevention</li>
                    </ul>
                </MobileAccordion>

                <MobileAccordion title="Ethical & Legal Aspects" number="7">
                    <ul className="space-y-3 text-sm">
                        <li className="flex items-center gap-2"><span className="text-secondary text-lg">⚖️</span> <span>Patients’ rights (privacy, consent)</span></li>
                        <li className="flex items-center gap-2"><span className="text-secondary text-lg">⚖️</span> <span>Restraints only as last resort</span></li>
                        <li className="flex items-center gap-2"><span className="text-secondary text-lg">⚖️</span> <span>Legal dutes in suicide/aggression risk</span></li>
                    </ul>
                </MobileAccordion>
            </div>

            {/* Summary */}
            <div className="bg-green-50 p-6 rounded-2xl shadow-sm border border-green-100 text-center">
                <h3 className="text-xl font-bold text-green-700 mb-2">Summary</h3>
                <p className="text-green-800 font-medium leading-relaxed">
                    Psychiatric Nursing is a vital specialty focused on helping individuals achieve emotional and mental well-being.
                    Through skilled communication, assessment, safe medication practices, and a therapeutic environment, psychiatric nurses play a crucial role in patient recovery and support.
                </p>
            </div>
        </div>
    );
};

export default PsychiatricNursingContent;
