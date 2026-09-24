import aboutUsWallpaper from "./../assets/shutterstock_735971812.jpg";
import Button from "./ui/Button";
import Container from "./ui/Container";
import { aboutUsImages, doctorsImages, practiceManager } from "../data";
import PageHeaderImage from "./ui/PageHeaderImage";

export default function AboutUs() {
  return (
    <section id="aboutus">
      <PageHeaderImage
        src={aboutUsWallpaper}
        alt="About Us"
        textWhite="ABOUT"
        textBlue="US"
      />
      <Container>
        <div className="w-full h-full md:w-75% lg:w-4/5 mx-auto">
          <img
            className="object-cover object-center w-full my-5"
            alt={aboutUsImages.coverImgAlt}
            src={aboutUsImages.coverImgSrc}
          />
        </div>
        <div className="items-center text-center pt-5">
          <h1 className="title-font text-2xl mb-2 font-bold ">
            SUNLANDER DENTAL, CURRAMBINE PERTH
          </h1>
          <p className="leading-normal text-justify bg-[#3513cd] text-white p-3">
            As one of Perth’s leading general dental clinics, Sunlander Dental
            Centre provides an extensive range of dental services, led by our
            dedicated team of dental surgeons and assistants. Coupled with
            quality equipment, resources and training, we pride ourselves as a
            quality, affordable clinic. As a family-run practice, we aim to
            provide all our patients with the level of care we would offer to
            our own family and friends.
            <br /> <br />
            Here at Sunlander Dental Centre we are not happy until you are.
            <br /> <br />
            Whether it be cracked teeth, missing teeth, discoloured teeth or
            wisdom teeth, we offer a full range of dental treatments to cover
            all your general oral health needs. We love children, so please feel
            free to bring your little ones along! For your convenience, we are
            able to offer instant health insurance claim rebates using HICAPS.
            We also offer Saturday appointment times and obligation-free quotes
            during your initial appointment. We are also part of a busy medical
            centre, and take a holistic approach to your oral health.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full">
          {doctorsImages.map((doctor) => (
            <div
              classname="items-center text-center pt-5"
              key={doctor.fullName}
            >
              <div className="w-full h-full md:w-75% lg:w-4/5 mx-auto">
                <img
                  className="mx-auto object-cover object-center w-3/4 md:w-5/6 my-5"
                  alt={doctor.imgAlt}
                  src={doctor.imgSrc}
                />
                <h1 className="title-font text-3xl mb-2 font-bold text-[#3513cd]">
                  {doctor.fullName}
                </h1>
                <p className="font-semibold text-2xl">{doctor.briefInfo}</p>
                <div className="text-[#7A7A7A]">
                  <p className="my-5 text-justify">{doctor.detailedInfo}</p>
                  <p className="font-semibold text-gray-700">
                    Areas of interest:
                  </p>
                  <ul className="list-disc list-inside text-justify">
                    {doctor.areaOfInterest.map((interest, index) => (
                      <li key={index}>{interest}</li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-col items-center mt-7">
                  <Button
                    onClick={() => (window.location.href = doctor.bookingLink)}
                    className="bg-[#3513cd] text-white items-center text-center"
                  >
                    Book Appointment
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full my-10">
          <hr className="my-10 border-black w-full" />
          <h1 className="text-center title-font text-2xl mb-2 font-bold ">
            Practice Manager
          </h1>
          <img
            className="object-cover object-center w-3/4 md:w-2/5 my-5 mx-auto"
            alt={practiceManager[0].imgAlt}
            src={practiceManager[0].imgSrc}
          />
          <h1 className="text-center title-font text-3xl mb-2 font-bold text-[#3513cd]">
            {practiceManager[0].fullName}
          </h1>
        </div>
      </Container>
    </section>
  );
}
