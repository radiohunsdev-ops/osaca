"use client";

import Image from "next/image";
import { FaInstagram, FaTwitter, FaFacebookF } from "react-icons/fa";

export default function JournalSection() {
  return (
    <section className="w-full min-h-screen flex">
      
      <div className="w-1/2 bg-[#f4f4f4] px-16 py-20 flex flex-col justify-start">
        <h1 className="text-6xl font-bold text-blue-900 mb-10">
          Journal
        </h1>

        <div className="space-y-10">
          <div>
            <h3 className="text-red-500 font-semibold text-lg leading-snug">
              01.05.2021 - Fineqia Presents Ottawa&apos;s South Asian Fest Wins the Best Food Event & Festival Award by Faces Magazine
            </h3>
            <p className="text-gray-600 mt-3 leading-relaxed">
              OTTAWA, ON, March 1, 2021 /CNW/ – The Ontario South Asian Community Association’s (OSACA) annual showcase event, the South Asian Festival (www...
            </p>
          </div>

          <div>
            <h3 className="text-red-500 font-semibold text-lg">
              28.08.2020 - Mirch Masala Radio is now Radio Huns
            </h3>
            <p className="text-gray-600 mt-3 leading-relaxed">
              Radio Huns, the voice of the South Asian community in Ottawa has been running since 2001 and has become the longest running South Asian radio program in North America...
            </p>
          </div>

          <div>
            <h3 className="text-red-500 font-semibold text-lg">
              20.08.2020 - Bundeep&apos;s Radio Interview
            </h3>
            <p className="text-gray-600 mt-3 leading-relaxed">
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
          className="object-cover"
        />

        <div className="absolute top-1/3 left-0 w-64 h-48 bg-red-500 flex items-center justify-center gap-6 z-10">
          <FaInstagram className="text-white text-xl" />
          <FaTwitter className="text-white text-xl" />
          <FaFacebookF className="text-white text-xl" />
        </div>

        <div className="absolute bottom-0 right-0 w-full h-1/2 bg-blue-900 flex items-end justify-end p-10">
          <div className="relative w-64 h-64">
            <div className="absolute inset-0 border-10 border-white rounded-full scale-100"></div>
            <div className="absolute inset-6 border-10 border-white rounded-full scale-90"></div>
            <div className="absolute inset-12 border-10 border-white rounded-full scale-75"></div>
            <div className="absolute inset-16 border-10 border-white rounded-full scale-60"></div>
          </div>
        </div>
      </div>

    </section>
  );
}