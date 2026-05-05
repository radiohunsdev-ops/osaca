"use client";

import { useState } from "react";

export default function MembershipPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    social: "",
    address: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log(form);
  };

  return (
    <div className="min-h-screen bg-[#f5f5f5] flex flex-col justify-between px-6 py-12">
      {/* Heading */}
      <div className="max-w-8xl container mx-auto w-full">
        <h1 className="text-[70px] text-center md:text-[110px] font-bold text-[#0d2c8f] leading-none mb-16">
          Individual Membership
        </h1>

        {/* Form */}
        <div className="grid md:grid-cols-2 gap-x-20 gap-y-14">
          {/* Full Name */}
          <div>
            <label className="text-[#0d2c8f] text-lg">
              Full name <span>*</span>
            </label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full bg-transparent border-b border-gray-300 focus:outline-none py-3 mt-2"
            />
          </div>

          {/* Email */}
          <div>
            <label className="text-[#0d2c8f] text-lg">
              Email address <span>*</span>
            </label>
            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full bg-transparent border-b border-gray-300 focus:outline-none py-3 mt-2"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="text-[#0d2c8f] text-lg">
              Mobile phone number <span>*</span>
            </label>
            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              className="w-full bg-transparent border-b border-gray-300 focus:outline-none py-3 mt-2"
            />
          </div>

          {/* Social */}
          <div>
            <label className="text-[#0d2c8f] text-lg">Social media site</label>
            <input
              name="social"
              value={form.social}
              onChange={handleChange}
              className="w-full bg-transparent border-b border-gray-300 focus:outline-none py-3 mt-2"
            />
          </div>

          {/* Address (full width) */}
          <div className="md:col-span-2">
            <label className="text-[#0d2c8f] text-lg">
              Mailing address <span>*</span>
            </label>
            <textarea
              name="address"
              value={form.address}
              onChange={handleChange}
              rows={3}
              className="w-full bg-transparent border-b border-gray-300 focus:outline-none py-3 mt-2 resize-none"
            />
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between mt-16">
          <p className="text-[#0d2c8f] text-sm">* Mandatory fields</p>

          <button
            onClick={handleSubmit}
            className="flex items-center gap-3 text-red-500 text-lg font-medium group"
          >
            Send
            <span className="w-9 h-9 rounded-full border border-red-500 flex items-center justify-center group-hover:bg-red-500 group-hover:text-white transition">
              →
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
