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

type FormDataType = {
  businessName: string;
  ownerName: string;
  email: string;
  phone: string;
  website: string;
  mailingAddress: string;
  registeredAddress: string;
  locations: string;
  products: string;
};

type ErrorType = Partial<Record<keyof FormDataType | "industry", string>>;

export default function BusinessMembership() {
  const [open, setOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);

  const [formData, setFormData] = useState<FormDataType>({
    businessName: "",
    ownerName: "",
    email: "",
    phone: "",
    website: "",
    mailingAddress: "",
    registeredAddress: "",
    locations: "",
    products: "",
  });

  const [selectedIndustry, setSelectedIndustry] = useState<string>("");
  const [errors, setErrors] = useState<ErrorType>({});

  // ✅ Handle change (fixed typing)
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // ✅ Validation
  const validate = () => {
    const newErrors: ErrorType = {};

    if (!formData.businessName) newErrors.businessName = "Required";
    if (!formData.ownerName) newErrors.ownerName = "Required";

    if (!formData.email) newErrors.email = "Required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Invalid email";

    if (!formData.phone) newErrors.phone = "Required";
    else if (!/^[0-9]{10}$/.test(formData.phone))
      newErrors.phone = "Invalid phone";

    if (!formData.website) newErrors.website = "Required";
    if (!formData.mailingAddress) newErrors.mailingAddress = "Required";
    if (!formData.registeredAddress) newErrors.registeredAddress = "Required";
    if (!formData.locations) newErrors.locations = "Required";
    if (!selectedIndustry) newErrors.industry = "Required";
    if (!formData.products) newErrors.products = "Required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // ✅ Submit
  const handleSubmit = () => {
    if (!validate()) return;

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-[#f5f1ea] px-6 py-12">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-center text-5xl md:text-6xl font-bold text-blue-800 mb-16">
          Business Membership
        </h1>

        {success && (
          <div className="text-center mb-8 text-green-600 font-semibold">
            Membership sent successfully ✅
          </div>
        )}

        <div className="grid md:grid-cols-2 gap-x-20 gap-y-12">
          <Input
            label="Local business name *"
            name="businessName"
            value={formData.businessName}
            onChange={handleChange}
            error={errors.businessName}
          />

          <Input
            label="Owner's full name *"
            name="ownerName"
            value={formData.ownerName}
            onChange={handleChange}
            error={errors.ownerName}
          />

          <FileUpload label="Upload company registration and owner's ID" />

          <Input
            label="Email address *"
            name="email"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
          />

          <Input
            label="Mobile phone number *"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            error={errors.phone}
          />

          <Input
            label="Website *"
            name="website"
            value={formData.website}
            onChange={handleChange}
            error={errors.website}
          />

          <Textarea
            label="Mailing address *"
            name="mailingAddress"
            value={formData.mailingAddress}
            onChange={handleChange}
            error={errors.mailingAddress}
          />

          <Textarea
            label="Registered business address *"
            name="registeredAddress"
            value={formData.registeredAddress}
            onChange={handleChange}
            error={errors.registeredAddress}
          />

          <Input
            label="Number of locations *"
            name="locations"
            value={formData.locations}
            onChange={handleChange}
            error={errors.locations}
          />

          {/* Dropdown */}
          <div className="relative">
            <label className="block text-blue-800 mb-2">
              What service or industry does your business operate in?
            </label>

            <div
              className="flex items-center justify-between border-b border-gray-400 pb-2 cursor-pointer"
              onClick={() => setOpen(!open)}
            >
              <span className="text-blue-800">
                {selectedIndustry || "Select industry"}
              </span>
              <ChevronDown
                className={`transition-transform ${open ? "rotate-180" : ""}`}
              />
            </div>

            {errors.industry && (
              <p className="text-red-500 text-sm mt-1">{errors.industry}</p>
            )}

            {open && (
              <div className="absolute left-0 right-0 bg-white shadow-lg border mt-2 max-h-64 overflow-y-auto z-50">
                {industries.map((item) => (
                  <div
                    key={item}
                    onClick={() => {
                      setSelectedIndustry(item);
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

          <Textarea
            label="What kind of products do you sell*"
            name="products"
            value={formData.products}
            onChange={handleChange}
            error={errors.products}
          />
        </div>

        {/* Submit Button */}
        <div className="mt-16 flex justify-end">
          <button
            onClick={handleSubmit}
            disabled={loading}
            className="flex items-center gap-3 text-red-500 text-lg font-medium group disabled:opacity-50"
          >
            {loading ? "Sending..." : "Send"}
            <span className="w-9 h-9 rounded-full border border-red-500 flex items-center justify-center group-hover:bg-red-500 group-hover:text-white transition">
              →
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

/* 🔹 Input */
type InputProps = {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
};

function Input({ label, name, value, onChange, error }: InputProps) {
  return (
    <div>
      <label className="block text-blue-800 mb-2">{label}</label>
      <input
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        className="w-full bg-transparent border-b border-gray-400 outline-none py-2 text-blue-800"
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
}

/* 🔹 Textarea */
type TextareaProps = {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  error?: string;
};

function Textarea({ label, name, value, onChange, error }: TextareaProps) {
  return (
    <div>
      <label className="block text-blue-800 mb-2">{label}</label>
      <textarea
        rows={2}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full bg-transparent border-b border-gray-400 outline-none py-2 text-blue-800 resize-none"
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
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
