"use client";

import { useState } from "react";

type FormType = {
  name: string;
  email: string;
  phone: string;
  social: string;
  address: string;
};

type ErrorType = Partial<Record<keyof FormType, string>>;

export default function MembershipPage() {
  const [form, setForm] = useState<FormType>({
    name: "",
    email: "",
    phone: "",
    social: "",
    address: "",
  });

  const [errors, setErrors] = useState<ErrorType>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // ✅ Handle Change (typed correctly)
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // ✅ Validation
  const validate = () => {
    const newErrors: ErrorType = {};

    if (!form.name) newErrors.name = "Required";

    if (!form.email) newErrors.email = "Required";
    else if (!/\S+@\S+\.\S+/.test(form.email))
      newErrors.email = "Invalid email";

    if (!form.phone) newErrors.phone = "Required";
    else if (!/^[0-9]{10}$/.test(form.phone)) newErrors.phone = "Invalid phone";

    if (!form.address) newErrors.address = "Required";

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
      console.log(form);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#f5f5f5] flex flex-col justify-between px-6 py-12">
      <div className="max-w-7xl container mx-auto w-full">
        <h1 className="text-[70px] text-center md:text-[110px] font-bold text-[#0d2c8f] leading-none mb-16">
          Individual Membership
        </h1>

        {success && (
          <div className="text-center mb-10 text-green-600 font-semibold">
            Membership sent successfully ✅
          </div>
        )}

        {/* Form */}
        <div className="grid md:grid-cols-2 gap-x-20 gap-y-14">
          {/* Name */}
          <Field
            label="Full name *"
            name="name"
            value={form.name}
            onChange={handleChange}
            error={errors.name}
          />

          {/* Email */}
          <Field
            label="Email address *"
            name="email"
            value={form.email}
            onChange={handleChange}
            error={errors.email}
          />

          {/* Phone */}
          <Field
            label="Mobile phone number *"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            error={errors.phone}
          />

          {/* Social */}
          <Field
            label="Social media site"
            name="social"
            value={form.social}
            onChange={handleChange}
          />

          {/* Address */}
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
            {errors.address && (
              <p className="text-red-500 text-sm mt-1">{errors.address}</p>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between mt-16">
          <p className="text-[#0d2c8f] text-sm">* Mandatory fields</p>

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

/* 🔹 Reusable Field */
type FieldProps = {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
};

function Field({ label, name, value, onChange, error }: FieldProps) {
  return (
    <div>
      <label className="text-[#0d2c8f] text-lg">{label}</label>
      <input
        name={name}
        value={value}
        onChange={onChange}
        className="w-full bg-transparent border-b border-gray-300 focus:outline-none py-3 mt-2"
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
}
