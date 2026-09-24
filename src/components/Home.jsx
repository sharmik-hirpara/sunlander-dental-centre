import Container from "./ui/Container";
import image1 from "./../assets/shutterstock_143336314.jpg";
import image2 from "./../assets/shutterstock_592802387.jpg";
import React, { useEffect, useRef } from "react";
import video from "./../assets/Home-page-video.mp4";
import { treatments } from "../data";

export default function Home() {
  const videoEl = useRef(null);

  const attemptPlay = () => {
    videoEl &&
      videoEl.current &&
      videoEl.current.play().catch((error) => {
        console.error("Error attempting to play", error);
      });
  };

  useEffect(() => {
    attemptPlay();
  }, []);

  return (
    <Container>
      <section id="home">
        <video
          style={{ maxWidth: "100%", margin: "0 auto" }}
          playsInline
          loop
          muted
          alt="All the devices"
          src={video}
          ref={videoEl}
          className="pb-5"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-items-center mb-5">
          <div className=" items-center text-center px-5">
            <div className="border-b-2 border-black mb-2">
              <h1 className="title-font sm:text-2xl text-2xl mb-2 font-bold text-black ">
                SUNLANDER DENTAL, CURRAMBINE PERTH
              </h1>
            </div>
            <p className="leading-normal text-black text-justify">
              As one of Perth’s leading general dental clinics, Sunlander Dental
              Centre provides an extensive range of dental services, led by our
              dedicated team of dental surgeons and assistants. Coupled with
              quality equipment, resources and training, we pride ourselves as a
              quality, affordable clinic. As a family-run practice, we aim to
              provide all our patients with the level of care we would offer to
              our own family and friends.
              <br /> <br />
              Here at Sunlander Dental Centre, we are not happy until you are.
              <br /> <br />
              Whether it be cracked teeth, missing teeth, discoloured teeth or
              wisdom teeth, we offer a full range of dental treatments to cover
              all your general oral health needs. We love children, so please
              feel free to bring your little ones along! For your convenience,
              we are able to offer instant health insurance claim rebates using
              HICAPS. We also offer Saturday appointment times and
              obligation-free quotes during your initial appointment. We take a
              holistic approach to your oral health.
            </p>
          </div>
          <img
            className="object-cover object-center py-3 md:p-0 w-11/12 md:w-full"
            alt="Dental care"
            src={image1}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-items-center mb-5 py-3 bg-[#3513cd]">
          <div className=" items-center text-center px-5">
            <img
              className="object-cover object-center py-3 md:p-0 w-full"
              alt="Family"
              src={image2}
              width="100%"
            />
          </div>
          <div className=" items-center text-center px-5 text-white bg-[#3513cd]">
            <div className="border-b-2 border-white mb-2">
              <h1 className="title-font sm:text-2xl text-2xl mb-2 font-bold ">
                YOUR LOCAL DENTAL TEAM
              </h1>
            </div>
            <p className="leading-normal text-justify">
              Located in Currambine, Sunlander Dental Centre is a family
              friendly practice where new patients are always welcome.
              <br /> <br />
              Many people don’t see a dentist on a regular basis. They go only
              when they feel they have a problem. While these patients may feel
              they are saving money, it usually ends up costing much more in
              both dollars and time. The reason for this is that most dental
              problems don’t have any symptoms until they reach the advanced
              stages. At Sunlander Dental Centre, we want to help you help
              yourself to maintain your oral health, and we strive to provide a
              comfortable and reassuring atmosphere so that you will want to
              return on a regular basis.
              <br /> <br />
              If you are new the area, or haven’t been to a dentist for a while,
              contact one of our friendly team and book your appointment today.
            </p>
          </div>
        </div>
        <div className="border-b-2 border-black mb-2 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-2 font-bold ">
            Complete Family Dental Care
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2">
          {treatments.map((treatment) => (
            <div className="relative overflow-hidden">
              <img
                className="absolute inset-0 w-full h-full object-cover object-center"
                alt={treatment.imgAlt}
                src={treatment.imgSrc}
              />
              <div className="relative w-full h-full bg-neutral-200 bg-opacity-75">
                <div className="text-center p-3 md:p-5">
                  <h2 className="text-2xl font-semibold ">{treatment.name}</h2>
                  <p className="leading-normal text-justify m-4 ">
                    {treatment.description}
                  </p>
                  <div className="items-center lg:order-2 m-2 md:m-5">
                    <a
                      href={treatment.link}
                      className="inline-block text-white bg-[#3513cd] font-medium text-lg px-4 lg:px-5 py-2 lg:py-2.5 mx-2 "
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>
              
            </div>
          ))}
        </div>

        {/* <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2">
          {treatments.map((treatment) => (
            <div className="relative">
              <div className="absolute w-full h-full bg-neutral-200 bg-opacity-75">
                <div className="text-center p-5">
                  <h2 className="text-2xl font-semibold ">{treatment.name}</h2>
                  <p className="leading-normal text-justify m-4 ">
                    {treatment.description}
                  </p>
                  <div className="items-center lg:order-2 m-5">
                    <a
                      href="https:www.hotdoc.com.au/medical-centres/book/appointment/start?clinic=6381&amp;viaElement=practice-listing-main-cta"
                      className="inline-block text-white bg-[#3513cd] font-medium text-lg px-4 lg:px-5 py-2 lg:py-2.5 mx-2 "
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>
              <img
                className="object-cover object-center"
                alt={treatment.imgAlt}
                src={treatment.imgSrc}
              />
            </div>
          ))}
        </div> */}
      </section>
    </Container>
  );
}
