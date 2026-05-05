"use client";

import { useState } from "react";

type FormType = {
  membership: string;
  revenue2020: string;
  revenue2019: string;
  covidImpact: string;
  experience1: string;
  experience2: string;
  radioAds: string;
  digitalAds: string;
  radioHuns: string;
  hasCopy: string;
};

type ErrorType = Partial<Record<keyof FormType, string>>;

export default function HunsClubForm() {
  const [form, setForm] = useState<FormType>({
    membership: "",
    revenue2020: "",
    revenue2019: "",
    covidImpact: "",
    experience1: "",
    experience2: "",
    radioAds: "No",
    digitalAds: "No",
    radioHuns: "No",
    hasCopy: "No",
  });

  const [errors, setErrors] = useState<ErrorType>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // ✅ Handle Input
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // ✅ Handle Radio
  const handleRadio = (name: keyof FormType, value: string) => {
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // ✅ Validation
  const validate = () => {
    const newErrors: ErrorType = {};

    if (!form.membership) newErrors.membership = "Required";
    if (!form.revenue2020) newErrors.revenue2020 = "Required";
    if (!form.revenue2019) newErrors.revenue2019 = "Required";
    if (!form.covidImpact) newErrors.covidImpact = "Required";

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
    <main className="min-h-screen px-6 md:px-16 py-12 bg-[#f5f1ea] text-[#1e3a8a]">
      <h1 className="text-center text-5xl md:text-6xl font-bold mb-16">
        Huns Club
      </h1>

      {success && (
        <div className="text-center mb-10 text-green-600 font-semibold">
          Form submitted successfully ✅
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-12 md:gap-20">
        {/* LEFT */}
        <div className="space-y-12">
          <Input
            label="OSACA membership number *"
            name="membership"
            value={form.membership}
            onChange={handleChange}
            error={errors.membership}
          />

          <Input
            label="Gross business revenue 2020 *"
            name="revenue2020"
            value={form.revenue2020}
            onChange={handleChange}
            error={errors.revenue2020}
          />

          <Radio
            label="Have you used radio advertising before? *"
            value={form.radioAds}
            onChange={(val) => handleRadio("radioAds", val)}
          />

          <Radio
            label="Have you used digital advertising before? *"
            value={form.digitalAds}
            onChange={(val) => handleRadio("digitalAds", val)}
          />

          <Radio
            label="Have you advertised with Radio Huns before? *"
            value={form.radioHuns}
            onChange={(val) => handleRadio("radioHuns", val)}
          />
        </div>

        {/* RIGHT */}
        <div className="space-y-12">
          <Input
            label="Gross business revenue 2019 *"
            name="revenue2019"
            value={form.revenue2019}
            onChange={handleChange}
            error={errors.revenue2019}
          />

          <Input
            label="How has Covid-19 affected your business? *"
            name="covidImpact"
            value={form.covidImpact}
            onChange={handleChange}
            error={errors.covidImpact}
          />

          <Input
            label="How was your experience?"
            name="experience1"
            value={form.experience1}
            onChange={handleChange}
          />

          <Input
            label="How was your experience?"
            name="experience2"
            value={form.experience2}
            onChange={handleChange}
          />

          <Radio
            label="Do you have a digital copy of your previous radio advertisement?"
            value={form.hasCopy}
            onChange={(val) => handleRadio("hasCopy", val)}
          />
        </div>
      </div>

      {/* Submit */}
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
    </main>
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
      <label className="block mb-2 text-lg">{label}</label>
      <input
        name={name}
        value={value}
        onChange={onChange}
        className="w-full border-b border-gray-400 bg-transparent outline-none py-2"
      />
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
}

/* 🔹 Radio */
function Radio({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (val: string) => void;
}) {
  return (
    <div>
      <label className="block mb-4 text-lg">{label}</label>

      <div className="flex gap-8">
        {["Yes", "No"].map((item) => (
          <label key={item} className="flex items-center gap-2 cursor-pointer">
            <span>{item}</span>
            <input
              type="radio"
              checked={value === item}
              onChange={() => onChange(item)}
              className="hidden peer"
            />
            <div
              className={`w-6 h-6 rounded-full border-2 border-blue-900 flex items-center justify-center ${
                value === item ? "bg-blue-900" : ""
              }`}
            >
              {value === item && (
                <div className="w-3 h-3 bg-white rounded-full"></div>
              )}
            </div>
          </label>
        ))}
      </div>

      <div className="border-b border-gray-400 mt-4"></div>
    </div>
  );
}
