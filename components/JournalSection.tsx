"use client";

import Image from "next/image";
import { FaInstagram, FaTwitter, FaFacebookF } from "react-icons/fa";

export default function JournalSection() {
  return (
    <section className="w-full min-h-screen flex">
      <div className="w-1/2 bg-[#f4f4f4] px-16 py-20 flex flex-col justify-start">
        <h1 className="text-6xl font-bold text-blue-900 mb-10">Journal</h1>

        <div className="space-y-14">
          <div>
            <h3 className="text-red-500 font-semibold text-2xl leading-snug">
              01.05.2021 - Fineqia Presents Ottawa&apos;s South Asian Fest Wins
              the Best Food Event & Festival Award by Faces Magazine
            </h3>
            <p className="text-gray-600 mt-3 text-xl leading-relaxed">
              OTTAWA, ON, March 1, 2021 /CNW/ – The Ontario South Asian
              Community Association’s (OSACA) annual showcase event, the South
              Asian Festival.
            </p>
          </div>

          <div>
            <h3 className="text-red-500 font-semibold text-2xl">
              28.08.2020 - Mirch Masala Radio is now Radio Huns
            </h3>
            <p className="text-gray-600 mt-3 text-xl leading-relaxed">
              Radio Huns, the voice of the South Asian community in Ottawa has
              been running since 2001 and has become the longest running South
              Asian radio program in North America...
            </p>
          </div>

          <div>
            <h3 className="text-red-500 font-semibold text-2xl">
              20.08.2020 - Bundeep&apos;s Radio Interview
            </h3>
            <p className="text-gray-600 text-xl mt-3 leading-relaxed">
              Bundeep Singh Rangar Radio Interview
            </p>
          </div>
        </div>
      </div>

      <div className="w-1/2 relative overflow-hidden">
        <Image
          src="/home/OSACA-Homepage-04-960x909.jpg"
          alt="journal"
          fill
          className="object-contain"
        />

        {/* <div className="absolute top-1/3 left-0 w-64 h-48 bg-red-500 flex items-center justify-center gap-6 z-10">
          <FaInstagram className="text-white text-xl" />
          <FaTwitter className="text-white text-xl" />
          <FaFacebookF className="text-white text-xl" />
        </div> */}

        <div className="absolute bottom-0 right-0 w-full h-40% bg-[#0D2C9B] flex items-end justify-end p-10">
          <div className="relative w-64 h-64">
            <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 324.01 324.02">
              <path d="M235.51,324a12.37,12.37,0,0,0,12.37-12.38,63.83,63.83,0,0,1,63.76-63.75,12.38,12.38,0,0,0,0-24.75,88.6,88.6,0,0,0-88.51,88.5A12.38,12.38,0,0,0,235.51,324Z"></path>
              <path d="M180.64,324A12.38,12.38,0,0,0,193,311.64,118.75,118.75,0,0,1,311.64,193a12.38,12.38,0,0,0,0-24.75c-79.06,0-143.37,64.32-143.37,143.37A12.37,12.37,0,0,0,180.64,324Z"></path>
              <path d="M125.54,324a12.38,12.38,0,0,0,12.38-12.38c0-95.79,77.93-173.72,173.72-173.72a12.38,12.38,0,0,0,0-24.75c-109.44,0-198.47,89-198.47,198.47A12.37,12.37,0,0,0,125.54,324Z"></path>
              <path d="M69.07,324a12.38,12.38,0,0,0,12.38-12.38c0-126.93,103.26-230.19,230.19-230.19a12.38,12.38,0,0,0,0-24.75C171.06,56.7,56.7,171.07,56.7,311.64A12.37,12.37,0,0,0,69.07,324Z"></path>
              <path d="M12.37,324a12.38,12.38,0,0,0,12.38-12.38c0-158.19,128.7-286.89,286.89-286.89a12.38,12.38,0,0,0,0-24.75C139.8,0,0,139.8,0,311.64A12.37,12.37,0,0,0,12.37,324Z"></path>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
