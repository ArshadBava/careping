import React from 'react';
import MobileAccordion from '../../MobileAccordion';

const StrokeRehabContent = () => {
    return (
        <div className="space-y-6 font-poppins text-gray-700">
            {/* Introduction - Always Visible */}
            <div className="bg-blue-50 p-6 rounded-2xl border-l-4 border-primary shadow-sm">
                <h2 className="text-2xl font-bold text-primary mb-4">What Is Stroke Rehabilitation?</h2>
                <div className="space-y-3 leading-relaxed">
                    <p>
                        Stroke rehabilitation is a structured program of therapies designed to help a person recover skills, regain independence,
                        and improve quality of life after a stroke. Because a stroke damages parts of the brain, rehab helps the brain rewire itself
                        (a process called neuroplasticity) so the person can relearn lost abilities.
                    </p>
                </div>
            </div>

            {/* Goals */}
            <MobileAccordion title="Goals of Stroke Rehabilitation" number="1">
                <p className="mb-4 text-gray-600">Rehabilitation focuses on helping a person:</p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {[
                        "Regain movement and strength in affected limbs",
                        "Improve balance, walking, and coordination",
                        "Recover speech, language, and communication skills",
                        "Restore the ability to perform daily activities (eating, bathing, dressing)",
                        "Improve memory, thinking, and problem-solving",
                        "Maintain emotional well-being and prevent depression",
                        "Prevent complications such as muscle shortening, falls, or future strokes"
                    ].map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                            <span className="text-secondary mt-1">●</span>
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            </MobileAccordion>

            {/* Types of Therapies */}
            <MobileAccordion title="Types of Stroke Rehabilitation Therapies" number="2">
                <div className="space-y-4">
                    {[
                        { title: "Physical Therapy (PT)", desc: "Works on strengthening weak muscles, improving walking, balance, and flexibility, and relearning movements through repeated practice." },
                        { title: "Occupational Therapy (OT)", desc: "Helps with dressing, eating, bathing, cooking, using assistive devices, and improving hand and arm function." },
                        { title: "Speech and Language Therapy", desc: "For people with difficulty speaking (aphasia), trouble understanding language, slurred speech (dysarthria), or problems swallowing (dysphagia)." },
                        { title: "Cognitive Rehabilitation", desc: "Addresses memory, attention, planning, organization, and problem-solving skills." },
                        { title: "Psychological Support", desc: "Important for treating depression, anxiety, mood changes, motivation, and coping strategies." }
                    ].map((item, idx) => (
                        <div key={idx} className="bg-gray-50 p-4 rounded-xl border border-gray-100 transition-colors hover:bg-light-teal/30">
                            <h4 className="font-bold text-navy mb-1">{item.title}</h4>
                            <p className="text-sm text-gray-600">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </MobileAccordion>

            {/* Logistics Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* When */}
                <MobileAccordion title="When Does Rehab Start?" number="3">
                    <p className="text-gray-600 leading-relaxed bg-blue-50 p-4 rounded-xl">
                        Rehab usually begins as early as <span className="font-bold text-primary">24–48 hours</span> after the stroke, once the person is medically stable. Early rehab improves long-term recovery.
                    </p>
                </MobileAccordion>

                {/* Where */}
                <MobileAccordion title="Where Does Rehab Take Place?" number="4">
                    <ul className="space-y-2">
                        {[
                            "Inpatient rehabilitation center (most intensive)",
                            "Hospital outpatient therapy",
                            "Home-based therapy",
                            "Community rehab programs"
                        ].map((item, index) => (
                            <li key={index} className="flex items-center gap-2 bg-gray-50 p-2 rounded-lg text-sm">
                                <span className="text-secondary">📍</span>
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </MobileAccordion>
            </div>

            {/* How Long & Factors */}
            <MobileAccordion title="Duration & Key Factors" number="5">
                <div className="mb-6">
                    <h4 className="font-bold text-gray-800 mb-2">How Long Does It Last?</h4>
                    <p className="text-gray-600 text-sm bg-yellow-50 p-3 rounded-lg border border-yellow-100">
                        Recovery varies widely. Some recover within weeks; others need months or years. Neuroplasticity continues long after the stroke.
                    </p>
                </div>
                <div>
                    <h4 className="font-bold text-gray-800 mb-2">Factors Influencing Recovery:</h4>
                    <div className="flex flex-wrap gap-2">
                        {[
                            "Size/Location of stroke",
                            "Age & Health",
                            "How soon rehab begins",
                            "Consistency of therapy",
                            "Family support"
                        ].map((tag, i) => (
                            <span key={i} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium border border-gray-200">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </MobileAccordion>

            {/* Summary - Always Visible */}
            <div className="bg-green-50 p-6 rounded-2xl shadow-sm border border-green-100 text-center">
                <h3 className="text-xl font-bold text-green-700 mb-2">Summary</h3>
                <p className="text-green-800 font-medium leading-relaxed">
                    Stroke rehabilitation helps retrain the brain after injury. Through physical, occupational, speech, cognitive, and emotional therapies,
                    stroke survivors can regain independence and improve daily functioning.
                </p>
            </div>
        </div>
    );
};

export default StrokeRehabContent;
