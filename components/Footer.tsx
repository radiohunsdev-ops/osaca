/* eslint-disable @next/next/no-img-element */
"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { IoArrowForward } from "react-icons/io5";

type FormDataType = {
  firstName: string;
  surname: string;
  email: string;
  subject: string;
  message: string;
};

type ErrorsType = Partial<FormDataType>;

const Input = ({
  label,
  name,
  value,
  onChange,
  error,
}: {
  label: string;
  name: keyof FormDataType;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}) => (
  <div>
    <label className="block mb-2 text-sm md:text-base text-[#01249E]">
      {label}
    </label>
    <input
      name={name}
      value={value}
      onChange={onChange}
      className="w-full py-2 bg-transparent border-b border-gray-400 focus:outline-none"
    />
    {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
  </div>
);

const InputGrid = ({
  fields,
  formData,
  handleChange,
  errors,
}: {
  fields: { label: string; name: keyof FormDataType }[];
  formData: FormDataType;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  errors: ErrorsType;
}) => (
  <div className="grid gap-10 text-black md:grid-cols-2">
    {fields.map((field) => (
      <Input
        key={field.name}
        label={field.label}
        name={field.name}
        value={formData[field.name]}
        onChange={handleChange}
        error={errors[field.name]}
      />
    ))}
  </div>
);

const NavLinks = () => (
  <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm md:text-base">
    {navItems.map((item, i) => (
      <div key={item.label} className="flex items-center">
        <a href={item.href} className="cursor-pointer hover:underline">
          {item.label}
        </a>
        {i !== navItems.length - 1 && (
          <span className="mx-3 opacity-50">|</span>
        )}
      </div>
    ))}
  </div>
);

const SocialLinks = () => (
  <div className="flex gap-3">
    {socialIcons.map((item, i) => (
      <a
        key={i}
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-10 h-10 text-sm text-orange-400 border border-orange-400 rounded-full hover:bg-orange-400 hover:text-white transition"
      >
        {item.icon}
      </a>
    ))}
  </div>
);

const navItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Events", href: "/events" },
  { label: "Memberships", href: "/memberships" },
  { label: "Huns Club", href: "/huns-club" },
  { label: "Journal", href: "/journal" },
  { label: "Contact", href: "/contact" },
];

const socialIcons = [
  { icon: <FaFacebookF />, href: "https://www.facebook.com/southasianfest/" },
  { icon: <FaTwitter />, href: "https://twitter.com/southasianfest" },
  { icon: <FaInstagram />, href: "https://www.instagram.com/southasianfest/" },
  { icon: <FaYoutube />, href: "https://www.youtube.com/user/MirchMasalaOne" },
];

export default function Footer() {
  const [formData, setFormData] = useState<FormDataType>({
    firstName: "",
    surname: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<ErrorsType>({});
  const [loading, setLoading] = useState<boolean>(false);
  const [showToast, setShowToast] = useState<boolean>(false);

  const validate = (): ErrorsType => {
    const newErrors: ErrorsType = {};

    if (!formData.firstName) newErrors.firstName = "First name is required";
    if (!formData.surname) newErrors.surname = "Surname is required";

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = "Invalid email address";
    }

    if (!formData.message) newErrors.message = "Message is required";

    return newErrors;
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target as {
      name: keyof FormDataType;
      value: string;
    };

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setShowToast(true);
      setFormData({
        firstName: "",
        surname: "",
        email: "",
        subject: "",
        message: "",
      });

      setTimeout(() => setShowToast(false), 3000);
    }, 2000);
  };

  return (
    <main className="w-full font-sans relative">
      {showToast && (
        <div className="fixed z-50 px-6 py-3 text-white bg-green-600 rounded-lg shadow-lg top-6 right-6">
          Form submitted successfully
        </div>
      )}

      <div className="grid md:grid-cols-[40%_60%]">
        <div className="flex flex-col">
          <div className="px-8 md:px-14 py-16 text-white h-[50vh] bg-linear-to-br from-[#01249E] to-[#01249E]">
            <h1 className="text-5xl md:text-7xl font-light leading-tight">
              Get in <br />
              touch
            </h1>
            <div className="mt-10 space-y-2 text-lg">
              <p>T. +1-613-518-8075</p>
              <p>E. info@SouthAsianFest.net</p>
            </div>
          </div>

          <div className="relative h-[55vh] flex justify-between items-end px-10 pb-10 overflow-hidden bg-[#B371D8]">
            <div className="text-white text-2xl ">
                Ontario <br />
                South <br/>
                Asian <br/>
                Community <br/>
                Association <br/>
            </div>
            <div className="w-80 h-80">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 327.83 325.12"
                fill="#ffffff"
              >
                <path d="M140.13,89.28A27.16,27.16,0,0,0,163.93,103a27.74,27.74,0,0,0,13.79-3.65,26.91,26.91,0,0,0,10-10.09L228.25,19a12.21,12.21,0,0,0,0-12.64c-4.59-8-17.37-7.94-22,0l-42.34,73.3L121.57,6.37a12.71,12.71,0,1,0-22,12.7Z"></path>
                <path d="M12.71,146.66H93.82a27.51,27.51,0,0,0,23.79-41.23L77,35.22c-4.62-8.14-17.25-8.13-22,0a13,13,0,0,0,0,12.71l42.36,73.28H12.71a12.78,12.78,0,0,0-10.93,6.35,12.32,12.32,0,0,0,0,12.69A12.31,12.31,0,0,0,12.71,146.66Z"></path>
                <path d="M93.82,175.77H12.71a12.28,12.28,0,0,0-10.93,6.34,12.28,12.28,0,0,0,0,12.7,12.58,12.58,0,0,0,11,6.32H97.44l-42.38,73.4a13,13,0,0,0,0,12.71c4.67,7.92,17.45,7.92,22,0L117.62,217a27.47,27.47,0,0,0-23.8-41.22Z"></path>
                <path d="M187.75,236.22c-7.44-12.79-24.59-17.42-37.69-10.05a27.2,27.2,0,0,0-10,10.08L99.58,306.5a12.71,12.71,0,0,0,0,12.72c4.57,7.8,17.34,7.89,21.94,0l42.36-73.38,42.36,73.32c4.57,8,17.37,8,22,0a12.58,12.58,0,0,0,0-12.69Z"></path>
                <path d="M315.11,175.7H234A27.53,27.53,0,0,0,210.2,217l40.45,70,0,0c5.08,8.55,17.55,8.08,22.06.23a12.63,12.63,0,0,0,0-12.68l-42.29-73.41h84.65a12.79,12.79,0,0,0,11-6.37,12.71,12.71,0,0,0-11-19.06Z"></path>
                <path d="M234,146.66h81.11a12.65,12.65,0,0,0,11-19,12.81,12.81,0,0,0-11-6.36H230.46L272.74,48a12.59,12.59,0,0,0,0-12.66c-4.56-7.9-16.69-8.23-21.75-.53l-.29.51-40.52,70.15A27.48,27.48,0,0,0,234,146.66Z"></path>
              </svg>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-between bg-gray-100">
          <div className="px-8 md:px-20 py-16">
            <form onSubmit={handleSubmit} className="space-y-12">
              <InputGrid
                fields={[
                  { label: "First name *", name: "firstName" },
                  { label: "Surname *", name: "surname" },
                ]}
                formData={formData}
                handleChange={handleChange}
                errors={errors}
              />

              <InputGrid
                fields={[
                  { label: "Email address *", name: "email" },
                  { label: "Subject", name: "subject" },
                ]}
                formData={formData}
                handleChange={handleChange}
                errors={errors}
              />

              <div className="text-black">
                <label className="block mb-2 text-[#01249E]">Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full h-24 py-2 bg-transparent border-b border-gray-400 outline-none resize-none"
                />
                {errors.message && (
                  <p className="mt-1 text-xs text-red-500">{errors.message}</p>
                )}
              </div>

              <p className="text-sm text-[#01249E]">* Mandatory fields</p>

              <div className="flex justify-end mt-10">
                <button
                  type="submit"
                  disabled={loading}
                  className="flex items-center gap-3 text-lg text-[#01249E] disabled:opacity-50"
                >
                  {loading ? "Sending..." : "Send"}
                  <span className="flex items-center justify-center w-10 h-10 border border-[#01249E] rounded-full">
                    <IoArrowForward size={18} />
                  </span>
                </button>
              </div>
            </form>
          </div>

          <div className="relative flex h-[26vh] bg-[#B371D8]">
            <div className="absolute bottom-0 left-0 w-[85%] md:w-[75%] h-[30vh] px-8 md:px-12 py-10 text-white shadow-2xl bg-linear-to-r from-[#01249E] to-[#01249E]">
              <div className="flex flex-col justify-between h-full gap-6">
                <NavLinks />
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                  <div className="flex flex-wrap gap-4 text-[#B371D8]">
                    <a href="/faqs" className="hover:underline">
                      Terms of Use
                    </a>
                    <span className="mx-1 opacity-50">|</span>
                    <a href="/contact" className="hover:underline">
                      Legal Disclaimer
                    </a>
                  </div>
                  <SocialLinks />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
