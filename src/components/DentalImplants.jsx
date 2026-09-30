import Container from "./ui/Container";
import dentalImplantsWallpaper from "./../assets/Dental_Implants.jpg";
import dentalImplants from "./../assets/Dental Implants_1.jpg";
import PageHeaderImage from "./ui/PageHeaderImage";

export default function DentalImplants() {
  return (
    <section id="dentalImplants">
      <PageHeaderImage
        src={dentalImplantsWallpaper}
        alt="Dental Implants"
        textWhite="DENTAL"
        textBlue="IMPLANTS"
      />
      <Container>
        <div className="items-center text-center pt-5">
          <h1 className="title-font text-2xl mb-2 font-bold ">
            Dental Implants
          </h1>
          <p className="leading-normal text-justify p-3 md:px-5">
            Dental implant placement combines delicate minor surgery and modern
            dental techniques to replace badly broken teeth, a single missing
            tooth, a group of teeth or all teeth. The roots of missing teeth are
            replaced with a special screw or cylinder (dental implant), and a
            crown is later connected to the implant. Dental implants look, work
            and feel like natural teeth and can be used in adults, regardless of
            age and medical history.
          </p>
        </div>
        <div className="relative overflow-hidden">
          <img
            className="absolute inset-0 w-full h-full object-cover object-center"
            alt="Brush Your Theeth"
            src={dentalImplants}
          />
          <div className="relative w-full h-full bg-neutral-700 bg-opacity-70">
            <div className="text-center text-white py-3 px-1 md:p-5">
              <h1 className="title-font text-2xl mb-2 font-bold ">
                Benefits of implants
              </h1>
              <p className="leading-normal text-justify m-4 ">
                Millions of people worldwide have dental implants. They are the
                natural choice where teeth are missing, require extensive
                restoration, or need to be removed. In some situations implants
                are the only viable option – such as when conventional dentistry
                has failed, or the patient has lost teeth because of an accident
                or cancer surgery. Quite simply, dental implants are the next
                best thing to natural teeth.
              </p>
              <div className="items-center lg:order-2 m-2 md:m-5"></div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
