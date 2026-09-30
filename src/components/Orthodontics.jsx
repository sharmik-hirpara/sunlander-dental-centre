import Container from "./ui/Container";
import orthodonticsWallpaper from "./../assets/Orthodontics.jpg";
import { orthodonticsPageData } from "./../data";
import PageHeaderImage from "./ui/PageHeaderImage";
import { Link } from "react-router-dom";

export default function Orthodontics() {
  return (
    <section id="orthodontics">
      <PageHeaderImage
        src={orthodonticsWallpaper}
        alt="Orthodontics"
        textWhite="ORTHODONTICS"
        textBlue=""
      />
      <Container>
        <div className="items-center text-center pt-5">
          <h1 className="title-font text-2xl mb-2 font-bold ">
            Get Back Your Beautiful Smile Today
          </h1>
          <p className="leading-normal text-justify p-3">
            Cosmetic dentistry can enhance the appearance of patients’ smiles,
            and at Sunlander Dental Centre, if you’re unhappy with any facet of
            your smile, our dentists offer a variety of cosmetic solutions to
            give you a perfect flawless smile.
            <br /> <br />
            At Sunlander Dental Centre we provide all cosmetic dental procedures
            including dental crowns, dental bridges, tooth implants, porcelain
            veneers, bonding, replacing old silver coloured fillings (amalgams)
            with durable tooth-coloured ceramic, or composite resin and teeth
            whitening. With constant training and study, our team keeps
            up-to-date with advancements in cosmetic dental techniques and
            technology.
          </p>
        </div>
        <div>
          {orthodonticsPageData.map((item, index) => (
            <div
              key={item.heading}
              className="grid grid-cols-1 md:grid-cols-2 bg-gray-100"
            >
              {/* Image */}
              <div
                className={`${
                  index % 2 === 0 ? "md:order-1" : "md:order-2"
                } order-1`}
              >
                <img
                  src={item.imageSrc}
                  alt={item.imageAlt}
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>

              {/* Text */}
              <div
                className={`${
                  index % 2 === 0 ? "md:order-2" : "md:order-1"
                } order-2 flex items-center justify-center p-8`}
              >
                <div>
                  <h2 className="text-2xl font-semibold">{item.heading}</h2>

                  <p className="leading-normal text-justify mt-4">
                    {item.detail}
                  </p>

                  {item.needReadmoreOption && (
                    <Link
                      to={item.link}
                      className="inline-block mt-4 text-white bg-[#3513cd] px-5 py-2"
                    >
                      Read More
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
