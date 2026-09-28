import cosmeticDental from "./assets/Cosmetic_Dental.jpg";
import crownsAndBridges from "./assets/Crowns_And_Bridges.jpg";
import dentalFillings from "./assets/Dental Fillings.jpg"
import dentalImplants from "./assets/Dental_Implants.jpg";
import drHetal from "./assets/Dr_Hetal.jpg";
import drRavi from "./assets/Dr_Ravi.jpg";
import { FaBriefcaseMedical, FaCheckCircle, FaUser } from 'react-icons/fa';
import inlaysAndOnlays from "./assets/Inlays_And_Onlays.jpg";
import nurseKristi from "./assets/Nurse_Kristi.jpg";
import orthodontics from "./assets/Orthodontics.jpg";
import preventiveDental from "./assets/Preventive_Dental.jpg";
import periodontics from "./assets/Periodontics.jpg";
import sunlanderDentalTeam from "./assets/Sunlander_Dental_Team.jpg";
import teethWhitening from "./assets/Teeth_Whitening.jpg";
import veneers from "./assets/Veneers.jpg"

export const treatments = [
    {
        name: "Cosmetic Dental",
        description: "The staff at Sunlander Dental Centre are experts in all forms of cosmetic dental treatments.  Our experienced dentist can help your restore your beautiful smile and confidence.",
        link: "cosmeticdentistry",
        imgSrc: cosmeticDental,
        imgAlt: "Cosmetic Dental"
    },
    {
        name: "Preventive Dental",
        description: "We place a large focus on providing preventative dental treatments for our patients.  Regular checkups for the whole family play a large part in maintaining your dental health.",
        link: "",
        imgSrc: preventiveDental,
        imgAlt: "Preventive Dental"
    },
    {
        name: "Orthodontics",
        description: "At Sunlander, our dentists are at the forefront of orthodontic research and can offer their patients a wide variety of options for correcting your smile and ensuring your dental wellbeing.",
        link: "",
        imgSrc: orthodontics,
        imgAlt: "Orthodontics"
    },
    {
        name: "Dental Implants",
        description: "Today’s modern dental implants are designed to perfectly replace missing or damaged teeth.  We can help explain the procedure and clarify the benefits of implants.",
        link: "",
        imgSrc: dentalImplants,
        imgAlt: "Dental Implants"
    },
    {
        name: "Periodontics",
        description: "At Sunlander Dental Centre we offer gum disease treatments to restore your smile, and help you protect against further progression of the condition.",
        link: "",
        imgSrc: periodontics,
        imgAlt: "Periodontics"
    },
    {
        name: "Teeth Whitening",
        description: "Get a whiter, brighter smile today with our revolutionary teeth whitening treatments.  These are designed to ensure longer lasting and whiter teeth.",
        link: "",
        imgSrc: teethWhitening,
        imgAlt: "Teeth Whitening"
    },
];

export const aboutUsImages = 
    {
        coverImgSrc: sunlanderDentalTeam,
        coverImgAlt: "Sunlander Dental Team"
    }

export const doctorsImages = [
    {
        imgSrc: drHetal,
        imgAlt: "Dr. Hetal",
        fullName: "Dr. Hetal Hirpara",
        briefInfo:"Dentist, Female, BDS, ADC Certificate",
        detailedInfo:"Dr Hetal Hirpara graduated from dental school in India in 2009. After completing her degree, she worked for a few years in India before moving to Australia in 2017 when she got married to Dr Ravi Haria. In 2020 after successfully completing the ADC exam she started her dental career at Sunlander Dental Centre Dr Hetal is known for her gentle and perfectionist approach for all aspects of dentistry with all age groups and treating them with genuine care and reassurance. Dr Hetal performs general dentistry with holistic approach to treatment, she enjoys doing cosmetic dentistry and believes in preventative approach to dentistry. She also believes in educating and motivating the patient to make the best decision for their dental and general health care for which she keeps herself updated through Continuing professional education (CPD). Dr Hetal is a member of Australian Dental Association (ADA) and she is certified Invisalign Go provider. In her free time Dr Hetal loves gardening, cooking, painting and reading.",
        languages:"English, Gujarati, Hindi, and Marathi",
        areaOfInterest:[
            "General Dentistry",
            "Cosmetic Dentistry"
        ],
        bookingLink:"https://www.hotdoc.com.au/medical-centres/book/appointment/patient?clinic=6381&doctor=99525"
    },
    {
        imgSrc: drRavi,
        imgAlt: "Dr. Ravi",
        fullName: "Dr. Ravi Haria",
        briefInfo:"Dentist, Male, BDS, ADC Certificate, MPH",
        detailedInfo:"Dr Ravi Haria and has been a Dentist at Sunlander Dental Centre since 2014. He has always believed in treating people, not just teeth. This reflects in his passion towards comprehensive and preventative care for his patients and their families. He is approachable and available to answer any queries or concerns about oral health. He strives to enhance his professional skills through continuing professional education to provide highest standard of care. His time outside the dental office is spent in the kitchen trying new curries, catching up with cricket, and gardening.",
        languages:"English, Gujarati, Hindi, and Marathi",
        areaOfInterest:[
            "General Dentistry",
            "Implant Dentistry",
            "Restorative Dentistry"
        ],
        bookingLink:"https://www.hotdoc.com.au/request/appointment/patient?clinic=6381&doctor=99522"
    }
]

export const practiceManager = [
    {
        imgSrc: nurseKristi,
        imgAlt: "Nurse Kristi",
        fullName: "Kristi Milne",
    }
]

export const workingHours = [
    {
        day: "Monday",
        time: "8:00am to 5:00pm"
    },
    {
        day: "Tuesday",
        time: "8:00am to 5:00pm"
    },
    {
        day: "Wednesday",
        time: "8:00am to 2:00pm"
    },
    {
        day: "Thursday",
        time: "8:00am to 5:00pm"
    },
    {
        day: "Friday",
        time: "8:00am to 5:00pm"
    },
    {
        day: "Saturday",
        time: "9:00am to 2:00pm"
    },
    {
        day: "Sunday",
        time: "Closed"
    }
]

export const features = [
  {
    icon: FaUser,
    title: "New Patients Always Welcome",
    background: "bg-black",
  },
  {
    icon: FaCheckCircle,
    title: "Easy Finance Options Available",
    background: "bg-[#3513cd]",
  },
  {
    icon: FaBriefcaseMedical,
    title: "All Health Funds Accepted",
    background: "bg-black",
  },
];

export const cosmeticdentistry = [
{
    imageSrc: inlaysAndOnlays,
    imageAlt: "Inlays and Onlays",
    heading: "Inlays and Onlays",
    detail: "Porcelain inlays or onlays are often recommended when broken or decayed teeth are located at the back of the mouth. We can offer the latest in ceramic reconstruction technology right here in our dental surgery.",
    needReadmoreOption: false,
    link: ""
},
{
    imageSrc: crownsAndBridges,
    imageAlt: "Crowns and Bridges",
    heading: "Crowns and Bridges",
    detail: "A dental crown, also known as a dental cap or tooth cap, is often the best way to improve the structural strength and cosmetic look of teeth that have been chipped, worn excessively, heavily filled or broken down by tooth decay. If you have missing teeth, a dental bridge could be the solution. Our dentists will create a “bridge” with two dental crowns for the teeth on either side of the gap and custom-made teeth in between. Once bonded, the dental bridge fills the area left by the missing teeth.",
    needReadmoreOption: false,
    link: ""
},
{
    imageSrc: veneers,
    imageAlt: "Veneers",
    heading: "Veneers",
    detail: "Veneers are often a quick and easy way to fix cosmetic issues of the front teeth. We provide safe adhesives and porcelain laminate veneers because they provide the look, feel and strength of natural teeth.",
    needReadmoreOption: false,
    link: ""
},
{
    imageSrc: dentalFillings,
    imageAlt: "Dental Fillings",
    heading: "Dental Fillings",
    detail: "Our experienced team of dentists and dental nurses can assist with all forms of dental fillings.  Today’s modern filling are seamless and designed to last longer.",
    needReadmoreOption: true,
    link: "/dentalfillings"
}
]