import logo from "./../assets/Sunlander-text-n-Logo-new.png";

export default function Header(){
  return(    
    <header className="bg-white sticky top-0 z-10 pb-1.5">
      <div className="flex flex-wrap justify-between items-center">
        <a href="./">
          <img src={logo} className="mr-3 h-16 sm:h-28" alt="Flowbite Logo" />
        </a>
          <a href="https://www.hotdoc.com.au/medical-centres/book/appointment/start?clinic=6381&amp;viaElement=practice-listing-main-cta" 
            className="text-gray-800 bg-[#e8b413] font-medium text-lg px-4 lg:px-5 py-2 lg:py-2.5 mx-2 ">
            Book Appointment
          </a>
      </div>
      <div className="justify-between items-center grid grid-cols-3 bg-black">
        <div>
          <a href="./" className="block text-white text-center text-xl border-l border-white p-5 hover:bg-[#3513cd]">Home</a>
        </div>
        <div>
          <a href="/AboutUs" className="block text-white text-center text-xl border-x border-white p-5 hover:bg-[#3513cd]">About Us</a>
        </div>
        <div>
          <a href="/ContactUs" className="block text-white text-center text-xl border-r border-white p-5 hover:bg-[#3513cd]">Contact Us</a>
        </div>
      </div>
    </header>      
  );
}