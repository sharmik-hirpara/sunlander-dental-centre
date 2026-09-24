import cosmeticDental from "./assets/shutterstock_471137213.jpg";
import dentalImplants from "./assets/shutterstock_155611865.jpg";
import drHetal from "./assets/DSC_0029.jpg";
import drRavi from "./assets/DSC_0035.jpg";
import { FaBriefcaseMedical, FaCheckCircle, FaUser } from 'react-icons/fa';
import nurseKristi from "./assets/DSC_0046.jpg";
import orthodontics from "./assets/shutterstock_342760937.jpg";
import preventiveDental from "./assets/shutterstock_69641287.jpg";
import periodontics from "./assets/shutterstock_294243569.jpg";
import sunlanderDentalTeam from "./assets/DSC_0004.jpg";
import teethWhitening from "./assets/shutterstock_551513599.jpg";


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