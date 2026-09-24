import React from "react";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";

export default function Header() {
  const style = { color: "white", fontSize: "1.5em" };

  return (
    <footer className="xl:sticky bottom-0 z-10 w-full h-50">
      <div className="mx-auto max-w-screen flex-col md:flex-row pt-2.5">
        <div className="items-center grid grid-cols-1 md:grid-cols-5 bg-[#3513cd]">
          <div className="px-5 md:px-12 py-2 col-span-2">
            <h1 className="title-font sm:text-2xl text-2xl mb-2 font-semibold text-white ">
              New patients welcome
            </h1>
            <p className="text-white text-sm">
              To make an appointment at our high quality dental clinic, call our
              friendly team today! Monday – Saturday 8am – 5pm
            </p>
          </div>
          <div className="justify-center flex items-center py-2 md:py-0 border-x border-black">
            <a
              href="https://github.com/sharmik-hirpara"
              rel="noreferrer"
              target="_blank"
              className="inline-flex items-center bg-white m-5 focus:outline-none rounded-lg text-base"
            >
              <button
                type="button"
                data-twe-ripple-init
                data-twe-ripple-color="light"
                className="inline-block rounded-lg bg-[#1877f2] p-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:bg-indigo-600 focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
              >
                <span className="[&>svg]:h-7 [&>svg]:w-7">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 320 512"
                  >
                    <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
                  </svg>
                </span>
              </button>
            </a>
            <a
              href="https://github.com/sharmik-hirpara"
              rel="noreferrer"
              target="_blank"
              className="inline-flex items-center bg-white m-5 focus:outline-none rounded-lg text-base "
            >
              <button
                type="button"
                data-twe-ripple-init
                data-twe-ripple-color="light"
                className="inline-block rounded-lg bg-[#c13584] p-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:bg-pink-700 focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
              >
                <span className="[&>svg]:h-7 [&>svg]:w-7">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 448 512"
                  >
                    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                  </svg>
                </span>
              </button>
            </a>
          </div>
          <div className="mx-5 mb-2 md:m-4 col-span-2">
            <table className="table-auto">
              <tbody>
                <tr className="m-1">
                  <td className="py-1">
                    <FaLocationDot
                      className="w-5 h-5"
                      size="100"
                      style={style}
                    />
                  </td>
                  <td className="pl-2 text-white">
                    Unit 2-10 Sunlander Dr, Currambine WA 6028
                  </td>
                </tr>
                <tr className="m-1">
                  <td className="py-1 pl-1">
                    <FaPhone className="w-4 h-4" size="100" style={style} />
                  </td>
                  <td className="pl-2 text-white">(08) 6200 9060</td>
                </tr>
                <tr className="m-1">
                  <td className="py-1">
                    <IoIosMail className="w-5 h-5" size="100" style={style} />
                  </td>
                  <td className="pl-2 text-white">
                    admin@sunlanderdentalcentre.com.au
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </footer>
  );
}
