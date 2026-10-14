export const site = {
  name: "Sunlander Dental Centre",
  shortName: "Sunlander Dental",
  url: "https://www.sunlanderdentalcentre.com.au",
  description:
    "Family-run general dental clinic in Currambine, Perth. Check-ups, cosmetic dentistry, implants, orthodontics, and teeth whitening, with Saturday appointments and HICAPS rebates.",
  phoneDisplay: "(08) 6200 9060",
  phoneHref: "tel:+61862009060",
  email: "admin@sunlanderdentalcentre.com.au",
  address: "Unit 2-10 Sunlander Dr, Currambine WA 6028",
  bookingUrl:
    "https://www.hotdoc.com.au/medical-centres/book/appointment/start?clinic=6381",
  mapUrl:
    "https://maps.google.com/maps?q=Unit%202-10%20Sunlander%20Dr%2C%20Currambine%20WA%206028",
  mapEmbed:
    "https://maps.google.com/maps?q=Unit%202-10%20Sunlander%20Dr%2C%20Currambine%20WA%206028&z=16&output=embed",
  facebook: "https://www.facebook.com/sunlanderdentalcentre",
  instagram: "https://www.instagram.com/sunlanderdental/",
};

export const hours = [
  { day: "Monday", time: "8:00am to 5:00pm" },
  { day: "Tuesday", time: "8:00am to 5:00pm" },
  { day: "Wednesday", time: "8:00am to 2:00pm" },
  { day: "Thursday", time: "8:00am to 5:00pm" },
  { day: "Friday", time: "8:00am to 5:00pm" },
  { day: "Saturday", time: "8:00am to 2:00pm" },
  { day: "Sunday", time: "Closed" },
];

export const doctors = [
  {
    name: "Dr Hetal Hirpara",
    image: "/images/dr-hetal.jpg",
    alt: "Dr Hetal Hirpara",
    credentials: "Dentist, Female, BDS, ADC Certificate",
    bio: "Dr Hetal Hirpara graduated from dental school in India in 2009. After completing her degree, she worked for a few years in India before moving to Australia in 2017 when she got married to Dr Ravi Haria. In 2020 after successfully completing the ADC exam she started her dental career at Sunlander Dental Centre. Dr Hetal is known for her gentle and perfectionist approach for all aspects of dentistry with all age groups and treating them with genuine care and reassurance. Dr Hetal performs general dentistry with a holistic approach to treatment, she enjoys doing cosmetic dentistry and believes in a preventative approach to dentistry. She also believes in educating and motivating the patient to make the best decision for their dental and general health care for which she keeps herself updated through continuing professional education (CPD). Dr Hetal is a member of the Australian Dental Association (ADA) and she is a certified Invisalign Go provider. In her free time Dr Hetal loves gardening, cooking, painting and reading.",
    languages: "English, Gujarati, Hindi, and Marathi",
    interests: ["General Dentistry", "Cosmetic Dentistry"],
    bookingUrl:
      "https://www.hotdoc.com.au/medical-centres/book/appointment/patient?clinic=6381&doctor=99525",
  },
  {
    name: "Dr Ravi Haria",
    image: "/images/dr-ravi.jpg",
    alt: "Dr Ravi Haria",
    credentials: "Dentist, Male, BDS, ADC Certificate, MPH",
    bio: "Dr Ravi Haria has been a dentist at Sunlander Dental Centre since 2014. He has always believed in treating people, not just teeth. This reflects in his passion towards comprehensive and preventative care for his patients and their families. He is approachable and available to answer any queries or concerns about oral health. He strives to enhance his professional skills through continuing professional education to provide the highest standard of care. His time outside the dental office is spent in the kitchen trying new curries, catching up with cricket, and gardening.",
    languages: "English, Gujarati, Hindi, and Marathi",
    interests: ["General Dentistry", "Implant Dentistry", "Restorative Dentistry"],
    bookingUrl:
      "https://www.hotdoc.com.au/request/appointment/patient?clinic=6381&doctor=99522",
  },
];

export const staff = [
  { name: "Ivannia Castillo", image: "/images/ivannia-castillo.jpg" },
  { name: "Katie Milne", image: "/images/katie-milne.jpg" },
  { name: "Kimberley Morris", image: "/images/kimberley-morris.jpg" },
  { name: "Kristi Milne", image: "/images/kristi-milne.jpg" },
  { name: "Suneha Amin", image: "/images/suneha-amin.jpg" },
];

type Checklist = {
  kind: "checklist";
  heading: string;
  image: string;
  alt: string;
  paragraphs: string[];
  itemsHeading?: string;
  ordered?: boolean;
  items: { title?: string; text: string }[];
  closing?: string[];
};

type Split = {
  kind: "split";
  image: string;
  alt: string;
  heading: string;
  paragraphs: string[];
  href?: string;
  hrefLabel?: string;
};

type Prose = {
  kind: "prose";
  heading: string;
  paragraphs: string[];
};

export type ServiceSection = Checklist | Split | Prose;

export type Service = {
  slug: string;
  title: string;
  summary: string;
  image: string;
  alt: string;
  featured?: boolean;
  introHeading: string;
  intro: string[];
  sections: ServiceSection[];
};

export const services: Service[] = [
  {
    slug: "cosmetic-dentistry",
    title: "Cosmetic Dental",
    summary:
      "The staff at Sunlander Dental Centre are experienced in cosmetic dental treatments, and can help you restore your smile and confidence.",
    image: "/images/cosmetic.jpg",
    alt: "Cosmetic dental treatment",
    featured: true,
    introHeading: "Get back your smile",
    intro: [
      "Cosmetic dentistry can enhance the appearance of a smile. If you are unhappy with any facet of yours, our dentists offer a variety of cosmetic solutions.",
      "At Sunlander Dental Centre we provide dental crowns, dental bridges, tooth implants, porcelain veneers, bonding, replacement of old silver-coloured fillings with durable tooth-coloured ceramic or composite resin, and teeth whitening. With constant training and study, our team keeps up to date with advancements in cosmetic dental techniques and technology.",
    ],
    sections: [
      {
        kind: "split",
        image: "/images/inlays.jpg",
        alt: "Porcelain inlays and onlays",
        heading: "Inlays and onlays",
        paragraphs: [
          "Porcelain inlays or onlays are often recommended when broken or decayed teeth are located at the back of the mouth. We can offer ceramic reconstruction technology here in our dental surgery.",
        ],
      },
      {
        kind: "split",
        image: "/images/crowns-bridges.jpg",
        alt: "Dental crowns and bridges",
        heading: "Crowns and bridges",
        paragraphs: [
          "A dental crown, also known as a dental cap or tooth cap, is often the best way to improve the structural strength and cosmetic look of teeth that have been chipped, worn excessively, heavily filled, or broken down by tooth decay.",
          "If you have missing teeth, a dental bridge could be the solution. Our dentists will create a bridge with two dental crowns for the teeth on either side of the gap and custom-made teeth in between. Once bonded, the dental bridge fills the area left by the missing teeth.",
        ],
      },
      {
        kind: "split",
        image: "/images/veneers.jpg",
        alt: "Porcelain veneers",
        heading: "Veneers",
        paragraphs: [
          "Veneers are often a direct way to address cosmetic issues of the front teeth. We provide porcelain laminate veneers because they provide the look, feel, and strength of natural teeth.",
        ],
      },
      {
        kind: "split",
        image: "/images/fillings.jpg",
        alt: "Tooth-coloured dental fillings",
        heading: "Dental fillings",
        paragraphs: [
          "Our experienced team of dentists and dental nurses can assist with all forms of dental fillings. Today's modern fillings are seamless and designed to last longer.",
        ],
        href: "/services/dental-fillings",
        hrefLabel: "Read about fillings",
      },
    ],
  },
  {
    slug: "preventive-dental",
    title: "Preventive Dental",
    summary:
      "Regular check-ups for the whole family play a large part in maintaining dental health. Prevention is a focus of the practice.",
    image: "/images/preventive.jpg",
    alt: "Preventive dental care",
    introHeading: "Complete family dental care",
    intro: [
      "Preventive dental care matters throughout your life, no matter your age. By practising good oral hygiene at home and scheduling regular check-ups, you can help keep your smile healthy for many years.",
    ],
    sections: [
      {
        kind: "checklist",
        heading: "Keep smiling all year round",
        image: "/images/brush-teeth.jpg",
        alt: "Brushing teeth as part of daily care",
        paragraphs: [
          "There is no question that we all want to avoid toothaches, tooth decay, or gum disease. Ultimately, we all want the same thing: our teeth for life.",
          "The best way to maintain oral health is by brushing and flossing daily using a suitable toothbrush, toothpaste, and floss, as well as having regular dental check-ups and cleaning by a dental health professional.",
          "At Sunlander Dental Centre, we focus on keeping your teeth and gums healthy. We are a proactive dental practice with a strong belief in preventative dental care. At a minimum we recommend six-monthly hygiene visits and will encourage you to book appointments in advance.",
        ],
        itemsHeading: "Our preventive dentistry service includes:",
        ordered: true,
        items: [
          {
            title: "Tooth cleaning",
            text: "Removing the build-up of plaque and calculus from the teeth and restoring soft tissue health.",
          },
          {
            title: "Comprehensive dental examination",
            text: "Examination of teeth and soft tissues using visual, tactile, and imaging techniques, and x-ray analysis.",
          },
          {
            title: "Education programs",
            text: "Advice on at-home care and nutrition.",
          },
        ],
        closing: [
          "Preventive dentistry also means healthy teeth and gums for your children. Our team will help you combine visits here with at-home care, so children can establish habits that last.",
        ],
      },
    ],
  },
  {
    slug: "orthodontics",
    title: "Orthodontics",
    summary:
      "A range of options for correcting your smile, from braces to clear aligners, chosen after a careful diagnosis.",
    image: "/images/orthodontics.jpg",
    alt: "Orthodontic treatment",
    introHeading: "Straightening that suits your life",
    intro: [
      "At Sunlander, our dentists offer a wide variety of options for correcting your smile and supporting your dental wellbeing.",
    ],
    sections: [
      {
        kind: "split",
        image: "/images/orthodontics-custom.jpg",
        alt: "Custom orthodontic treatment",
        heading: "Custom orthodontic treatments",
        paragraphs: [
          "Our dentists provide a careful diagnosis and evaluate individual needs before deciding on a treatment plan. While braces are effective, they may not fit everybody's lifestyle, which is why we also offer clear braces or bespoke aligners.",
          "We provide treatments aimed at improving the health and function of your smile as well as straightening your teeth. Our dentists recommend the option that fits your case. Clear aligners may be suitable depending on your condition and the diagnosis.",
        ],
      },
      {
        kind: "split",
        image: "/images/invisalign.jpg",
        alt: "Clear aligner treatment",
        heading: "Invisalign",
        paragraphs: [
          "At Sunlander Dental Centre, we can help patients work towards a straighter smile with Invisalign. Without brackets or wires, Invisalign takes a modern approach to teeth straightening and is virtually invisible.",
        ],
        href: "/services/invisalign",
        hrefLabel: "How Invisalign works",
      },
    ],
  },
  {
    slug: "dental-implants",
    title: "Dental Implants",
    summary:
      "Modern dental implants are designed to replace missing or damaged teeth. We explain the procedure and the benefits at your visit.",
    image: "/images/implants.jpg",
    alt: "Dental implant treatment",
    introHeading: "Replace missing teeth",
    intro: [
      "Dental implant placement combines delicate minor surgery and modern dental techniques to replace badly broken teeth, a single missing tooth, a group of teeth, or all teeth. The roots of missing teeth are replaced with a special screw or cylinder, and a crown is later connected to the implant.",
      "Dental implants look, work, and feel like natural teeth and can be used in adults, regardless of age and medical history.",
    ],
    sections: [
      {
        kind: "checklist",
        heading: "Benefits of implants",
        image: "/images/implants-detail.jpg",
        alt: "Close view of a dental implant result",
        paragraphs: [
          "Millions of people worldwide have dental implants. They are a natural choice where teeth are missing, require extensive restoration, or need to be removed. In some situations implants are the viable option, such as when conventional dentistry has failed, or teeth have been lost because of an accident or surgery. Quite simply, dental implants are the next best thing to natural teeth.",
        ],
        items: [],
      },
    ],
  },
  {
    slug: "dental-fillings",
    title: "Dental Fillings",
    summary:
      "Our dentists and dental nurses assist with all forms of dental fillings. Modern fillings are tooth-coloured and made to last.",
    image: "/images/fillings.jpg",
    alt: "Dental fillings",
    introHeading: "Chew with confidence",
    intro: [
      "Today's modern dental fillings include porcelain and composite, alongside materials chosen for strength. Durable materials are useful where restored teeth must withstand the forces of chewing, such as in the back of the mouth.",
      "Unsightly silver fillings are no longer the only option. We use composite resins to create tooth-coloured fillings that match the shade and shape of your original teeth. The materials bond into place as a straightforward cosmetic dental procedure.",
    ],
    sections: [
      {
        kind: "prose",
        heading: "Composite filling",
        paragraphs: [
          "A composite (tooth-coloured) filling is used to repair a tooth affected by decay, cracks, or fractures. The affected portion of the tooth is removed and then filled.",
          "There are many filling materials available, each with advantages and disadvantages. You and your dentist can discuss the best option for restoring your teeth. Composite fillings, along with silver amalgam fillings, are widely used today. Because composite fillings are tooth-coloured, they can be closely matched to existing teeth, and suit front teeth or the more visible areas of the mouth.",
          "As with most dental restorations, composite fillings are not permanent and may someday have to be replaced. They are durable, and will last many years.",
        ],
      },
    ],
  },
  {
    slug: "periodontics",
    title: "Periodontics",
    summary:
      "Gum disease treatment to restore comfort and help protect against further progression of the condition.",
    image: "/images/periodontics.jpg",
    alt: "Gum health care",
    introHeading: "Care for your gums",
    intro: [
      "At Sunlander Dental Centre we offer gum disease treatments to restore your smile, and help you protect against further progression of the condition. Gum (periodontal) disease, or periodontitis, represents a leading cause of tooth loss in Australia and may develop without symptoms, so your dentist is often the first to identify it.",
      "Gum disease damages the bone surrounding the teeth in response to certain oral bacteria. A significant share of the population has periodontitis to some degree, whether mild, moderate, or advanced.",
    ],
    sections: [
      {
        kind: "checklist",
        heading: "Treatment of gum disease",
        image: "/images/brush-teeth.jpg",
        alt: "Daily cleaning to protect gum health",
        paragraphs: [
          "Advanced stages of periodontal disease can cause serious damage to teeth, gums, and the bone that supports the teeth. As a result, teeth can become loose, infected, and may require extraction.",
          "Periodontal disease is the inflammation and infection of the gums. It is caused by plaque, a thick and sticky film of bacteria that builds up on the teeth. Plaque can harden to become calculus, also known as tartar. Plaque and calculus are linked to poor oral hygiene.",
        ],
        itemsHeading: "Signs of periodontal disease:",
        items: [
          { text: "Red, swollen, tender, painful, or bleeding gums" },
          { text: "Gums that have shrunk away from the teeth" },
          { text: "Persistent bad breath" },
          { text: "A bad taste in the mouth" },
          { text: "Abscesses between teeth and gums" },
          { text: "Loose teeth and gaps appearing between teeth" },
        ],
        closing: [
          "Periodontal treatment involves the complete removal of calculus on tooth and root surfaces, followed by precise oral hygiene instructions, including brushing technique and frequency, as well as cleaning between teeth. This treatment is provided by our team of experienced dental hygienists. On occasions, referral to a specialist periodontist will be necessary.",
        ],
      },
    ],
  },
  {
    slug: "teeth-whitening",
    title: "Teeth Whitening",
    summary:
      "Whitening treatments designed to lighten discolouration and give you a brighter smile.",
    image: "/images/whitening.jpg",
    alt: "Teeth whitening",
    introHeading: "Whiter, brighter smiles",
    intro: [
      "Tooth discolouration is one of the most common cosmetic dental issues. While it may not necessarily indicate poor health, it often affects confidence.",
    ],
    sections: [
      {
        kind: "checklist",
        heading: "White teeth in a day",
        image: "/images/whitening-detail.jpg",
        alt: "A brighter smile after whitening",
        paragraphs: [
          "Consumption of certain foods and beverages such as tea, coffee, colas, and red wine can lead to staining and discolouration of the teeth over time. Medications and ageing can worsen the condition. Philips Zoom teeth whitening is a bleaching procedure developed to lighten discoloured teeth.",
          "Before the procedure, a thorough oral check-up is advisable. Your dentist will determine if you can undergo the treatment. On the day, your dentist will cover your lips and gums so they are protected. Tooth whitening gel containing hydrogen peroxide is then applied to your teeth. Your teeth are exposed to a Zoom lamp for a total of 45 minutes, in three intervals of 15 minutes. The light breaks down the hydrogen peroxide in the gel, releasing oxygen which bleaches stains.",
        ],
        items: [],
      },
    ],
  },
  {
    slug: "invisalign",
    title: "Invisalign",
    summary:
      "Clear aligners that straighten teeth without brackets or wires, and can be removed for eating and cleaning.",
    image: "/images/invisalign.jpg",
    alt: "Invisalign clear aligners",
    introHeading: "Clear aligners for a straighter smile",
    intro: [
      "At Sunlander Dental Centre, we can provide Invisalign to help patients achieve a straighter smile. Without brackets or wires, Invisalign takes a modern approach to teeth straightening and is virtually invisible.",
    ],
    sections: [
      {
        kind: "prose",
        heading: "What is Invisalign?",
        paragraphs: [
          "Invisalign is the clear alternative to braces. It uses a series of clear, custom-made aligners to gradually move your teeth. These aligners are virtually invisible, comfortable to wear, and easy to remove. Take them out for meals and brush and floss as normal throughout treatment.",
        ],
      },
      {
        kind: "prose",
        heading: "How does it work?",
        paragraphs: [
          "Using 3D imaging, your dentist can depict the series of movements your teeth need to go through. A series of custom-made aligners is then produced, which you change yourself about every two weeks to gradually move the teeth.",
          "At the first visit we scan your teeth, making a detailed three-dimensional record that is used to devise your aligner trays. The system also provides computer-generated 3D images that show the virtual progression of your teeth as they straighten.",
        ],
      },
      {
        kind: "split",
        image: "/images/orthodontics-custom.jpg",
        alt: "Planning clear aligner treatment",
        heading: "Clear, and easier to live with",
        paragraphs: [
          "Invisalign clear aligners are an option for teeth with mild to moderate crowding or spacing. They are soft plastic trays that gently align the teeth. Their transparency makes them nearly invisible. Because the trays are removable, you can keep your usual diet and take them out for occasions.",
          "Patients receive their aligner trays at the second dental appointment, and later appointments are typically scheduled about every six weeks. Those visits are for monitoring progress rather than changing wires and tightening brackets.",
        ],
      },
    ],
  },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}

export const homeServices = services.filter((service) => service.slug !== "invisalign");
