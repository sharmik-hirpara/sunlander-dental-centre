import brushYourTheeth from "./../assets/Brush_Your_Theeth.jpg";
import Container from "./ui/Container";
import preventiveDentalWallpaper from "./../assets/Preventive_Dental_1.jpg";
import PageHeaderImage from "./ui/PageHeaderImage";

export default function PreventiveDental() {
  return (
    <section id="preventivedental">
      <PageHeaderImage
        src={preventiveDentalWallpaper}
        alt="Preventive Dental"
        textWhite="PREVENTIVE"
        textBlue="DENTAL"
      />
      <Container>
        <div className="items-center text-center pt-5">
          <h1 className="title-font text-2xl mb-2 font-bold ">
            Complete Family Dental Care
          </h1>
          <p className="leading-normal text-justify p-3 md:px-5">
            Preventive dental care is important throughout your life, no matter
            your age. By practising good oral hygiene at home and scheduling
            regular checkups with your dentist, you can help keep your smile
            bright and healthy for many years to come.
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
                Keep Smiling All Year Round
              </h1>
              <p className="leading-normal text-justify m-4 ">
                There is no question that we all want to avoid toothaches, tooth
                decay or gum disease. Ultimately, we all want the same thing:
                our teeth for life.
                <br />
                <br />
                The best way to maintain excellent oral health is by brushing
                and flossing daily using a high-quality toothbrush, toothpaste
                and floss, as well as having regular dental check-ups and
                cleaning by a dental health professional.
                <br />
                <br />
                At Sunlander Dental Centre, we focus on keeping your teeth and
                gums healthy. We are a proactive dental practice with a strong
                belief in preventative dental care – at a minimum we recommend
                six-monthly hygiene visits and will encourage you to book
                appointments in advance.
                <br />
                <br />
                <p className="font-semibold">
                  Our preventive dentistry service includes:
                </p>
                <ol className="list-decimal px-10">
                  <li>
                    <span className="italic">Tooth cleaning: </span>removing the
                    build up of plaque and calculus from the teeth and restoring
                    soft tissue health.
                  </li>
                  <li>
                    <span className="italic">
                      Comprehensive dental examination:{" "}
                    </span>
                    includes examination of teeth and soft tissues using visual,
                    tactile and imaging techniques, and x-ray analysis.
                  </li>
                  <li>
                    <span className="italic">Education programs: </span>advice
                    on at-home care and nutrition.
                  </li>
                </ol>
                <br />
                Preventive dentistry also means healthy teeth and gums for your
                children. Our professionals will help you to develop a
                combination of Sunlander Dental Centre and at-home preventive
                dental care, to ensure your children establish lifelong habits
                for happy teeth.
              </p>
              <div className="items-center lg:order-2 m-2 md:m-5"></div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
