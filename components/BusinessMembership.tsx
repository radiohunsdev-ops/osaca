"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const industries = [
  "Consulting",
  "IT and software services",
  "Banking and financial services",
  "Design & marketing",
  "Training",
  "Travel & tourism",
  "Restaurant & catering",
  "Retail, distribution & logistics",
  "Real estate & construction",
  "Waste management",
  "Safety & security",
  "Beauty, health and fitness",
];

export default function BusinessMembership() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("");

  return (
    <div className="min-h-screen bg-[#f5f1ea] px-6 py-12">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h1 className="text-center text-5xl md:text-6xl font-bold text-blue-800 mb-16">
          Business Membership
        </h1>

        {/* Form Grid */}
        <div className="grid md:grid-cols-2 gap-x-20 gap-y-12">
          {/* LEFT SIDE */}
          <Input label="Local business name *" />
          <Input label="Owner's full name *" />

          <FileUpload label="Upload company registration and owner's ID" />
          <Input label="Email address *" />

          <Input label="Mobile phone number *" />
          <Input label="Website *" />

          <Textarea label="Mailing address *" />
          <Textarea label="Registered business address *" />

          <Input label="Number of locations *" />

          {/* CUSTOM DROPDOWN */}
          <div className="relative">
            <label className="block text-blue-800 mb-2">
              What service or industry does your business operate in?
            </label>

            {/* Input + Arrow */}
            <div
              className="flex items-center justify-between border-b border-gray-400 pb-2 cursor-pointer"
              onClick={() => setOpen(!open)}
            >
              <span className="text-blue-800">
                {selected || "Select industry"}
              </span>
              <ChevronDown
                className={`transition-transform ${
                  open ? "rotate-180" : ""
                }`}
              />
            </div>

            {/* Dropdown */}
            {open && (
              <div className="absolute left-0 right-0 bg-white shadow-lg border mt-2 max-h-64 overflow-y-auto z-50">
                {industries.map((item, index) => (
                  <div
                    key={index}
                    onClick={() => {
                      setSelected(item);
                      setOpen(false);
                    }}
                    className="px-4 py-3 hover:bg-blue-600 hover:text-white cursor-pointer text-blue-800"
                  >
                    {item}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

/* 🔹 Reusable Input */
function Input({ label }: { label: string }) {
  return (
    <div>
      <label className="block text-blue-800 mb-2">{label}</label>
      <input
        type="text"
        className="w-full bg-transparent border-b border-gray-400 outline-none py-2 text-blue-800"
      />
    </div>
  );
}

/* 🔹 Textarea */
function Textarea({ label }: { label: string }) {
  return (
    <div>
      <label className="block text-blue-800 mb-2">{label}</label>
      <textarea
        rows={2}
        className="w-full bg-transparent border-b border-gray-400 outline-none py-2 text-blue-800 resize-none"
      />
    </div>
  );
}

/* 🔹 File Upload */
function FileUpload({ label }: { label: string }) {
  return (
    <div className="relative">
      <label className="block text-blue-800 mb-2">{label}</label>
      <input
        type="file"
        className="w-full opacity-0 absolute inset-0 cursor-pointer"
      />
      <div className="border-b border-gray-400 py-2 flex justify-center">
        <span className="text-red-500 text-xl">↑</span>
      </div>
    </div>
  );
}