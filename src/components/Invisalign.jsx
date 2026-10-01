import Container from "./ui/Container";
import invisalignWallpaper from "./../assets/Invisalign.jpg";
import PageHeaderImage from "./ui/PageHeaderImage";

export default function Invisalign() {
  return (
    <section id="invisalign">
      <PageHeaderImage
        src={invisalignWallpaper}
        alt="Invisalign"
        textWhite="INVISALIGN"
        textBlue=""
      />
      <Container>
        <div className="items-center text-center pt-5">
          <h1 className="title-font text-2xl mb-2 font-bold ">
            Invisible Braces To Boost Your Smile & Confidence
          </h1>
          <p className="leading-normal text-justify m-4 ">
            At Sunlander Dental Centre, we can provide innovative dentistry to
            help patients achieve a perfect smile by using Invisalign. Without
            brackets or wires, Invisalign takes a modern approach to teeth
            straightening and is virtually invisible.
          </p>
          <h1 className="title-font text-2xl mb-2 font-bold ">
            What Is Invisalign?
          </h1>
          <p className="leading-normal text-justify m-4 ">
            Invisalign is the clear alternative to braces that can help you
            achieve a straighter smile. Invisalign uses a series of clear,
            custom-made aligners to gradually move your teeth into their desired
            position. These aligners are virtually invisible, comfortable to
            wear and easy to remove. Simply take them out for special occasions
            and brush and floss as normal throughout your treatment. Invisalign
            is the modern and hygienic way to straighten your teeth.
          </p>
          <h1 className="title-font text-2xl mb-2 font-bold ">
            How Does It Work?
          </h1>
          <p className="leading-normal text-justify m-4 ">
            Using the latest in 3D imaging technology, your dentist or
            orthodontist can depict the complete series of movements your teeth
            need to go through to achieve a straighter smile. A series of
            custom-made aligners are then produced, which you simply change
            yourself every two weeks to gradually move the teeth.
          </p>
        </div>
        <div className="relative overflow-hidden">
          <div className="relative w-full h-full bg-neutral-700">
            <div className="text-left text-white py-3 px-3 md:p-5">
              <h1 className="title-font text-3xl mb-2 font-bold text-center py-5 ">
                Clear & Virtually Invisible
              </h1>
              <h1 className="title-font text-2xl mb-2 font-bold ">
                Many Advantages of Using Invisalign® Clear Braces
              </h1>
              <p className="leading-normal text-justify m-4 ">
                Invisalign® clear braces provide an excellent, convenient and
                aesthetic way to straighten teeth that have mild to moderate
                malocclusion. They consist of soft plastic trays that are
                comfortable and gently align the teeth. Their transparency makes
                them nearly invisible, allowing the natural beauty of your teeth
                to shine throughout the treatment process. These trays are also
                removable, so regular diets can continue, and people can attend
                special occasions like weddings, reunions or graduations without
                their aligner trays.
              </p>
              <h1 className="title-font text-2xl mb-2 font-bold ">
                How Invisalign Straightens Teeth
              </h1>
              <p className="leading-normal text-justify m-4 ">
                At the first visit we scan your teeth, making a detailed
                three-dimensional print that will be used to devise your
                Invisalign trays. Our machine will create a series of clear
                trays that will gradually move your teeth into proper alignment.
                The Invisalign system also provides you with computer generated
                3D images that show you the virtual progression of your teeth as
                they straighten. There is no guesswork as to how your new smile
                will look.
              </p>
              <h1 className="title-font text-2xl mb-2 font-bold ">
                Time Saved with Clear Retainers
              </h1>
              <p className="leading-normal text-justify m-4 ">
                Faster treatment time is also an advantage of Invisalign clear
                trays. Patients receive their aligner trays at the second dental
                appointment, and subsequent appointments are typically scheduled
                every six weeks. Appointments also require less time because the
                dentist is monitoring your progress instead of changing wires
                and tightening brackets.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
