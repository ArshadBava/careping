import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { nursingData } from '../data/nursingData';
import { ChevronRight, ArrowLeft } from 'lucide-react';
import StrokeRehabContent from '../components/nursing-content/REHABILITATION/StrokeRehabContent';
import PsychiatricNursingContent from '../components/nursing-content/REHABILITATION/PsychiatricNursingContent';
import SampleCollectionContent from '../components/nursing-content/REHABILITATION/SampleCollectionContent';
import VaccinationsContent from '../components/nursing-content/REHABILITATION/VaccinationsContent';
import VitalSignsContent from '../components/nursing-content/REHABILITATION/VitalSignsContent';
import WoundCareContent from '../components/nursing-content/REHABILITATION/WoundCareContent';
import CatheterCareContent from '../components/nursing-content/REHABILITATION/CatheterCareContent';
import OstomyCareContent from '../components/nursing-content/REHABILITATION/OstomyCareContent';
import MedicationAdminContent from '../components/nursing-content/REHABILITATION/MedicationAdminContent';
import IVInfusionContent from '../components/nursing-content/SPECIALIZED_NURSING/IVInfusionContent';
import TracheostomyContent from '../components/nursing-content/SPECIALIZED_NURSING/TracheostomyContent';
import VentilatorContent from '../components/nursing-content/SPECIALIZED_NURSING/VentilatorContent';
import PEGTubeContent from '../components/nursing-content/SPECIALIZED_NURSING/PEGTubeContent';
import PostOpCareContent from '../components/nursing-content/SPECIALIZED_NURSING/PostOpCareContent';
import ADLAssistanceContent from '../components/nursing-content/GERIATRIC_CARE/ADLAssistanceContent';
import ChronicDiseaseContent from '../components/nursing-content/GERIATRIC_CARE/ChronicDiseaseContent';
import PalliativeCareContent from '../components/nursing-content/GERIATRIC_CARE/PalliativeCareContent';
import PostnatalCareContent from '../components/nursing-content/MATERNAL_INFANT/PostnatalCareContent';
import NewbornCareContent from '../components/nursing-content/MATERNAL_INFANT/NewbornCareContent';


const contentMap = {
    "stroke-rehab": StrokeRehabContent,
    "psychiatric-nursing": PsychiatricNursingContent,
    "sample-collection": SampleCollectionContent,
    "vaccinations": VaccinationsContent,
    "vital-signs": VitalSignsContent,
    "wound-care": WoundCareContent,
    "catheter-care": CatheterCareContent,
    "ostomy-care": OstomyCareContent,
    "medication-admin": MedicationAdminContent,
    "iv-infusion": IVInfusionContent,
    "tracheostomy-care": TracheostomyContent,
    "ventilator-care": VentilatorContent,
    "peg-tube-care": PEGTubeContent,
    "post-op-care": PostOpCareContent,
    "adl-assistance": ADLAssistanceContent,
    "chronic-disease-mgmt": ChronicDiseaseContent,
    "palliative-care": PalliativeCareContent,
    "postnatal-care": PostnatalCareContent,
    "newborn-care": NewbornCareContent
};

const NursingServiceDetail = () => {
    const { id } = useParams();
    const [service, setService] = useState(null);
    const [category, setCategory] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);

        // Find the service and its category
        for (const cat of nursingData) {
            const foundService = cat.services.find(s => s.id === id);
            if (foundService) {
                setService(foundService);
                setCategory(cat);
                break;
            }
        }
    }, [id]);

    if (!service) {
        return (
            <div className="w-full min-h-screen pt-32 flex flex-col items-center justify-center font-poppins">
                <h2 className="text-2xl font-bold text-navy mb-4">Service Not Found</h2>
                <Link to="/nursing-services" className="text-primary hover:underline">Back to Services</Link>
            </div>
        );
    }

    const ContentComponent = contentMap[id];

    return (
        <div className="w-full pt-20 font-poppins bg-gray-50 min-h-screen">
            {/* Hero Section */}
            <div className="w-full bg-navy text-white py-16 px-4 md:px-8 relative overflow-hidden">
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="flex items-center gap-2 text-sm text-gray-300 mb-4">
                        <Link to="/nursing-services" className="hover:text-white">Services</Link>
                        <ChevronRight className="w-4 h-4" />
                        <span>{category?.categoryTitle}</span>
                    </div>
                    <h1 className="text-3xl md:text-5xl font-bold mb-4">{service.title}</h1>
                </div>
                {/* Decorative background element */}
                <div className="absolute top-0 right-0 w-1/3 h-full bg-primary opacity-10 skew-x-12 transform translate-x-12"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 flex flex-col lg:flex-row gap-12">
                {/* Main Content */}
                <div className="w-full lg:w-2/3">
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                        {/* Large Image (using placeholder logic similar to listing) */}
                        <div className="w-full h-64 md:h-96 bg-gray-100 rounded-xl overflow-hidden mb-8">
                            <img
                                src={service.image}
                                alt={service.title}
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.src = "https://placehold.co/800x600?text=Service+Detail+Image";
                                }}
                            />
                        </div>

                        {/* Content */}
                        <div className="prose prose-lg text-gray-700 max-w-none">
                            {ContentComponent ? (
                                <ContentComponent />
                            ) : (
                                <p className="italic text-gray-500">
                                    Full details for {service.title} will be available soon.
                                    Please contact us directly for more information on this specific service.
                                </p>
                            )}
                        </div>

                        {/* CTA */}
                        <div className="mt-12 p-6 bg-light-teal/20 rounded-xl border border-light-teal flex flex-col md:flex-row items-center justify-between gap-4">
                            <div>
                                <h3 className="font-bold text-navy text-lg">Need this service?</h3>
                                <p className="text-gray-600">Our team is ready to assist you.</p>
                            </div>
                            <Link to="/contact">
                                <button className="bg-primary text-white py-3 px-8 rounded-full font-semibold hover:bg-secondary transition-colors shadow-md">
                                    Book Now
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Sidebar: Other Services in Category */}
                <div className="w-full lg:w-1/3">
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 sticky top-24">
                        <h3 className="font-bold text-lg text-navy mb-6 border-b pb-2">More in {category?.categoryTitle}</h3>
                        <ul className="space-y-4">
                            {category?.services.map(s => {
                                const isActive = s.id === service.id;
                                return (
                                    <li key={s.id}>
                                        <Link
                                            to={`/nursing-services/${s.id}`}
                                            className={`flex items-center justify-between group p-3 rounded-lg transition-colors ${isActive
                                                ? 'bg-primary text-white shadow-md'
                                                : 'hover:bg-gray-50 text-gray-700 hover:text-primary'
                                                }`}
                                        >
                                            <span className={`font-medium ${isActive ? 'font-bold' : ''}`}>
                                                {s.title}
                                            </span>
                                            {isActive ? (
                                                <div className="w-2 h-2 bg-white rounded-full" />
                                            ) : (
                                                <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-primary" />
                                            )}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                        <div className="mt-8 pt-4 border-t">
                            <Link to="/nursing-services" className="flex items-center gap-2 text-primary font-semibold hover:underline">
                                <ArrowLeft className="w-4 h-4" />
                                Back to All Services
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NursingServiceDetail;
