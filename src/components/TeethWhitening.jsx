import theethWhitening from "./../assets/Teeth_Whitening_1.jpg";
import Container from "./ui/Container";
import teethWhiteningWallpaper from "./../assets/Teeth_Whitening.jpg";
import PageHeaderImage from "./ui/PageHeaderImage";

export default function TeethWhitening() {
  return (
    <section id="teethwhitening">
      <PageHeaderImage
        src={teethWhiteningWallpaper}
        alt="Teeth Whitening"
        textWhite="TEETH"
        textBlue="WHITENING"
      />
      <Container>
        <div className="items-center text-center pt-5">
          <h1 className="title-font text-2xl mb-2 font-bold ">
            Whiter & Brighter Smiles
          </h1>
          <p className="leading-normal text-justify p-3 md:px-5">
            Tooth discolouration is one of the most common cosmetic dental
            issues and affects countless patients who walk through our doors.
            While it may not necessarily indicate poor health, it often has a
            negative impact on self-esteem and confidence.
          </p>
        </div>
        <div className="relative overflow-hidden">
          <img
            className="absolute inset-0 w-full h-full object-cover object-top"
            alt="Teeth Whitening"
            src={theethWhitening}
          />
          <div className="relative w-full h-full bg-neutral-700 bg-opacity-70">
            <div className="text-center text-white py-3 px-1 md:p-5">
              <h1 className="title-font text-2xl mb-2 font-bold ">
                White Teeth In A Day
              </h1>
              <p className="leading-normal text-justify m-4 ">
                Consumption of certain foods and beverages such as tea, coffee,
                colas, and red wine can lead to staining and discolouration of
                the teeth over time. Medications and ageing can worsen the
                condition. Philips zoom teeth whitening is a bleaching procedure
                for your teeth developed to considerably lighten discoloured
                teeth and restore your beautiful smile.
                <br />
                <br />
                Before the procedure, it is advisable to go for a thorough oral
                checkup. Your dentist will then determine if you can undergo the
                treatment. On the tooth whitening appointment day, your dentist
                will cover your lips and gums as a first step, so that they are
                adequately protected. Then, tooth whitening gel containing
                hydrogen peroxide will be carefully applied, on to your teeth.
                Your teeth will then be exposed to a Zoom lamp for a total of 45
                minutes in three intervals of 15 minutes duration each.The light
                from the Zoom lamp breaks down the hydrogen peroxide in the gel,
                releasing oxygen which bleaches away any stains.
              </p>
              <div className="items-center lg:order-2 m-2 md:m-5"></div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
