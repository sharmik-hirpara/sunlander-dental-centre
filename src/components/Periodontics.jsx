import brushYourTheeth from "./../assets/Brush_Your_Theeth.jpg";
import Container from "./ui/Container";
import periodonticsWallpaper from "./../assets/Periodontics.jpg";
import PageHeaderImage from "./ui/PageHeaderImage";

export default function Periodontics() {
  return (
    <section id="periodontics">
      <PageHeaderImage
        src={periodonticsWallpaper}
        alt="Periodontics"
        textWhite="PERIODONTICS"
        textBlue=""
      />
      <Container>
        <div className="items-center text-center pt-5">
          <h1 className="title-font text-2xl mb-2 font-bold ">Periodontics</h1>
          <p className="leading-normal text-justify p-3 md:px-5">
            At Sunlander Dental Centre we offer gum disease treatments to
            restore your smile, and help you protect against further progression
            of the condition. Gum (periodontal) disease, or periodontitis,
            represents the number one cause of tooth loss in Australia and may
            develop without any symptoms, so your dentist is often the first to
            identify it. Gum disease damages the bone surrounding the teeth in
            response to certain oral bacteria. Around 15% of the population has
            periodontitis to some degree, whether it is mild, moderate, or
            advanced destruction.
          </p>
        </div>
        <div className="relative overflow-hidden">
          <img
            className="absolute inset-0 w-full h-full object-cover object-center"
            alt="Brush Your Theeth"
            src={brushYourTheeth}
          />
          <div className="relative w-full h-full bg-neutral-700 bg-opacity-70">
            <div className="text-center text-white py-3 px-1 md:p-5">
              <h1 className="title-font text-2xl mb-2 font-bold ">
                Treatment of Gum Disease
              </h1>
              <p className="leading-normal text-justify m-4 ">
                Advanced stages of periodontal disease can cause serious damage
                to teeth, gums and bone that support the teeth. As a result, the
                teeth can become loose, infected and may require extraction.
                <br />
                <br />
                Periodontal disease is the inflammation and infection of the
                gums. It is caused by plaque:, a thick and sticky film of
                bacteria that builds up on the teeth. Plaque can harden to
                become calculus, also known as tartar. Plaque and calculus are
                caused by poor oral hygiene.
                <br />
                <br />
                <p className="font-semibold">Signs of periodontal disease:</p>
                <ol className="list-disc px-10">
                  <li>Red, swollen, tender, painful or bleeding gums</li>
                  <li>Gums that have shrunk away from the teeth</li>
                  <li>Persistent bad breath</li>
                  <li>A bad taste in the mouth</li>
                  <li>Abscesses between teeth and gums</li>
                  <li>Loose teeth and gaps appearing between teeth</li>
                </ol>
                <br />
                Periodontal treatment involves the complete definitive removal
                of calculus on tooth and root surfaces, followed by and precise
                oral hygiene instructions, including brushing technique and
                frequency, as well as cleaning between teeth. This treatment is
                provided by our team of experienced dental hygienists. On
                occasions, referral to a specialist periodontist will be
                necessary.
              </p>
              <div className="items-center lg:order-2 m-2 md:m-5"></div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
