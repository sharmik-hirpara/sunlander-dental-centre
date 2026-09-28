import Container from "./ui/Container";
import dentalFillingsWallpaper from "./../assets/Dental Fillings.jpg";
import PageHeaderImage from "./ui/PageHeaderImage";

export default function DentalFillings() {
  return (
    <section id="dentalfillings">
      <PageHeaderImage
        src={dentalFillingsWallpaper}
        alt="Dental Fillings"
        textWhite="DENTAL"ß
        textBlue="FILLINGS"
      />
      <Container>
        <div className="items-center text-center pt-5">
          <h1 className="title-font text-2xl mb-2 font-bold ">
            Chew With Confidence
          </h1>
          <p className="leading-normal text-justify p-3 md:px-5">
            Today’s modern dental fillings, include gold, porcelain, and
            composite. The strength and durability of traditional dental
            materials make them useful for situations where restored teeth must
            withstand extreme forces that result from chewing, such as in the
            back of the mouth.
            <br /> <br />
            Unsightly silver fillings are a thing of the past. We use composite
            resins to create tooth-coloured fillings that match the shade and
            shape of your original teeth. The filling materials are quick and
            simple to bond into place, making it a very straight forward
            cosmetic dental procedure.
          </p>
        </div>
        <div className="items-center text-center pt-5 bg-gray-100">
          <h1 className="title-font text-2xl mb-2 font-bold ">
            Composite Filling
          </h1>
          <p className="leading-normal text-justify p-3 md:px-5">
            A composite (tooth coloured) filling is used to repair a tooth that
            is affected by decay, cracks, fractures, etc. The decayed or
            affected portion of the tooth will be removed and then filled with a
            composite filling.
            <br /> <br />
            There are many types of filling materials available, each with their
            own advantages and disadvantages. You and your dentist can discuss
            the best options for restoring your teeth. Composite fillings, along
            with silver amalgam fillings, are the most widely used today.
            Because composite fillings are tooth coloured, they can be closely
            matched to the colour of existing teeth, and are more aesthetically
            suited for use in front teeth or the more visible areas of the
            mouth.
            <br /> <br />
            As with most dental restorations, composite fillings are not
            permanent and may someday have to be replaced. However, they are
            very durable, and will last many years, giving you a long lasting,
            beautiful smile.
          </p>
        </div>
      </Container>
    </section>
  );
}
