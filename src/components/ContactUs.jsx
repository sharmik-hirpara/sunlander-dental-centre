import contactUsWallpaper from "./../assets/shutterstock_735971812.jpg";
import PageHeaderImage from "./ui/PageHeaderImage";
import { workingHours } from "../data";

export default function ContactUs(){
    return (
        <section id="contactus">
            <PageHeaderImage src={contactUsWallpaper} alt="Contact Us" textWhite="CONTACT" textBlue="US" />
            <div className="text-center">
                <h1 className="title-font text-5xl md:text-3xl sm:text-2xl my-5 font-bold text-[#3513cd]">
                    To Make An Appointment
                </h1>
                <p>
                    Call our friendly staff today on 
                </p>
                <p className="font-extrabold text-4xl md:text-3xl sm:text-2xl">
                    (08) 6200 9060
                </p>
                <h2 className="font-bold text-2xl underline underline-offset-2 my-5">
                    Working Hours
                </h2>
                {workingHours.map((hour, index) => (
                    <p key={index} className="text-xl py-1">
                        {hour.day} - {hour.time}
                    </p>
                ))}
            </div>
        </section>
    )
}