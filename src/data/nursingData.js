import StrokeRehabImg from '../assets/Nursing Services/REHABILITATION/StrokeRehabilitation.avif';
import PsychNursingImg from '../assets/Nursing Services/REHABILITATION/PsychiatricNursing.jpg';
import SampleCollectionImg from '../assets/Nursing Services/REHABILITATION/SampleCollection.jpg';
import VaccinationsImg from '../assets/Nursing Services/REHABILITATION/VaccinationsHome.jpg';
import VitalSignsImg from '../assets/Nursing Services/REHABILITATION/VitalSignsMonitoring.jpg';
import MedAdminImg from '../assets/Nursing Services/REHABILITATION/MedicationAdministration.jpg';
import WoundCareImg from '../assets/Nursing Services/REHABILITATION/WoundDressingCare.jpg';
import CatheterCareImg from '../assets/Nursing Services/REHABILITATION/CatheterCareProcedures.jpg';
import OstomyCareImg from '../assets/Nursing Services/REHABILITATION/OstomyCareandSupport.jpg';

import IVInfusionImg from '../assets/Nursing Services/SPECIALIZEDNURSINGSERVICES/IVInfusionTherapy.jpg';
import TracheostomyImg from '../assets/Nursing Services/SPECIALIZEDNURSINGSERVICES/TracheostomyCare.jpg';
import VentilatorImg from '../assets/Nursing Services/SPECIALIZEDNURSINGSERVICES/VentilatorCareSupport.jpg';
import PEGTubeImg from '../assets/Nursing Services/SPECIALIZEDNURSINGSERVICES/PEGTubeCare.jpg';
import PostOpImg from '../assets/Nursing Services/SPECIALIZEDNURSINGSERVICES/PostOperativeCare.jpg';

import ADLAssistanceImg from '../assets/Nursing Services/GERIATRICNURSINGCARE/AssistanceDailyLivingActivities.jpg';
import ChronicDiseaseImg from '../assets/Nursing Services/GERIATRICNURSINGCARE/ChronicDiseaseManagement.jpg';
import PalliativeCareImg from '../assets/Nursing Services/GERIATRICNURSINGCARE/PalliativeEndofLifeCare.jpg';

import PostnatalCareImg from '../assets/Nursing Services/INFANTNURSING/PostnatalCareMothers.jpg';
import NewbornCareImg from '../assets/Nursing Services/INFANTNURSING/NewbornCare.jpg';

export const nursingData = [
    {
        id: "rehab-mental-health",
        categoryTitle: "REHABILITATION & MENTAL HEALTH",
        services: [
            {
                id: "stroke-rehab",
                title: "Stroke Rehabilitation",
                shortDesc: "Stroke rehabilitation is a comprehensive program designed to help stroke survivors regain lost skills, improve independence, and enhance their quality of life. It involves physical, occupational, and speech therapies tailored to individual needs.",
                image: StrokeRehabImg
            },
            {
                id: "psychiatric-nursing",
                title: "Psychiatric Nursing",
                shortDesc: "Psychiatric nursing involves specialized care for individuals with mental health disorders. Nurses provide therapeutic communication, medication management, and emotional support to help patients achieve mental stability and recovery.",
                image: PsychNursingImg
            },
            {
                id: "sample-collection",
                title: "Sample Collection & Health Monitoring",
                shortDesc: "Professional sample collection ensures accurate diagnostic results for blood, urine, and other specimens. Continuous health monitoring tracks vital signs and physical conditions to detect issues early and guide effective treatment.",
                image: SampleCollectionImg
            },
            {
                id: "vaccinations",
                title: "Vaccinations at Home",
                shortDesc: "Home vaccination services provide safe immunization for infants, elderly, and bedridden patients. Nurses ensure proper cold chain maintenance, safe administration, and monitoring for any adverse reactions in the comfort of your home.",
                image: VaccinationsImg
            },
            {
                id: "vital-signs",
                title: "Vital Signs Monitoring",
                shortDesc: "Regular monitoring of vital signs like temperature, pulse, respiration, and blood pressure is crucial for assessing health status. It helps in the early detection of medical problems and evaluating the effectiveness of treatments.",
                image: VitalSignsImg
            },
            {
                id: "medication-admin",
                title: "Medication Administration",
                shortDesc: "Safe medication administration involves ensuring the right patient receives the right drug, dose, and route at the right time. Nurses play a key role in preventing errors and educating patients about their medications.",
                image: MedAdminImg
            },
            {
                id: "wound-care",
                title: "Wound Dressing and Care",
                shortDesc: "Proper wound care prevents infection and promotes faster healing. It involves cleaning, assessing, and dressing wounds using appropriate materials and techniques to ensure optimal recovery and comfort.",
                image: WoundCareImg
            },
            {
                id: "catheter-care",
                title: "Catheter Care and Procedures",
                shortDesc: "Catheter care ensures the safe insertion, maintenance, and removal of urinary catheters. It focuses on preventing urinary tract infections, ensuring proper drainage, and maintaining patient hygiene and comfort.",
                image: CatheterCareImg
            },
            {
                id: "ostomy-care",
                title: "Ostomy Care and Support",
                shortDesc: "Ostomy care involves managing the stoma and changing pouches for patients with colostomies, ileostomies, or urostomies. It includes skin care, education, and emotional support to help patients adapt to life with an ostomy.",
                image: OstomyCareImg
            }
        ]
    },
    {
        id: "specialized-nursing",
        categoryTitle: "SPECIALIZED NURSING SERVICES",
        services: [
            {
                id: "iv-infusion",
                title: "IV Infusion Therapy",
                shortDesc: "IV infusion therapy (Intravenous infusion therapy) is the process of giving fluids, medications, or nutrients directly into a patient’s vein using an IV line. It is commonly used when patients need quick treatment, cannot take medicines orally, or require continuous fluid replacement",
                image: IVInfusionImg
            },
            {
                id: "tracheostomy-care",
                title: "Tracheostomy Care",
                shortDesc: "A tracheostomy is a surgical opening made in the neck into the trachea (windpipe) to help a person breathe. A tube called a tracheostomy tube is inserted into this opening to maintain an airway",
                image: TracheostomyImg
            },
            {
                id: "ventilator-care",
                title: "Ventilator Care and Support",
                shortDesc: "A ventilator is a machine that helps a patient breathe when they cannot breathe adequately on their own. It delivers oxygen-rich air to the lungs and removes carbon dioxide. Ventilator care and support includes all the nursing activities that ensure the ventilator works correctly, the patient remains safe, and complications are prevented ",
                image: VentilatorImg
            },
            {
                id: "peg-tube-care",
                title: "PEG Tube Care and Feeding",
                shortDesc: "A PEG tube (Percutaneous Endoscopic Gastrostomy tube) is a feeding tube placed through the abdominal wall directly into the stomach. It is used for patients who cannot eat or swallow safely but have a working digestive system.",
                image: PEGTubeImg
            },
            {
                id: "post-op-care",
                title: "Post-Operative Care",
                shortDesc: "Post-operative care (post-op care) is the nursing care a patient receives after surgery. It begins immediately after the operation and continues until the patient has recovered. The goal is to prevent complications, manage pain, and promote healing.",
                image: PostOpImg
            }
        ]
    },
    {
        id: "elderly-care",
        categoryTitle: "ELDERLY/GERIATRIC NURSING CARE",
        services: [
            {
                id: "adl-assistance",
                title: "Assistance with Daily Living Activities",
                shortDesc: "Assisting with ADLs means helping patients who are unable to perform these tasks due to illness, injury, disability, or old age. Nursing care often involves supporting patients while promoting as much independence as possible",
                image: ADLAssistanceImg
            },
            {
                id: "chronic-disease-mgmt",
                title: "Chronic Disease Management",
                shortDesc: "Chronic disease management (CDM) is a proactive approach that focuses on preventing complications, improving quality of life, and supporting self-management",
                image: ChronicDiseaseImg
            },
            {
                id: "palliative-care",
                title: "Palliative and End of Life Care",
                shortDesc: "Palliative care is specialized medical care focused on relieving the symptoms, pain, and stress of serious illnesses, regardless of the prognosis. It aims to improve quality of life for patients and their families",
                image: PalliativeCareImg
            }
        ]
    },
    {
        id: "maternal-infant",
        categoryTitle: "MATERNAL AND INFANT NURSING",
        services: [
            {
                id: "postnatal-care",
                title: "Postnatal Care for Mothers",
                shortDesc: "Postnatal care is the care provided to a mother after childbirth, usually within the first 6 weeks (42 days). The goal is to ensure physical and emotional recovery, prevent complications, and promote healthy adaptation to motherhood",
                image: PostnatalCareImg
            },
            {
                id: "newborn-care",
                title: "Newborn Care",
                shortDesc: "Newborn care refers to the care provided to an infant immediately after birth and during the first 28 days of life (neonatal period). The goal is to ensure health, growth, safety, and development",
                image: NewbornCareImg
            }
        ]
    }
];

