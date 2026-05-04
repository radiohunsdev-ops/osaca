export default function SubmitEventSection() {
  return (
    <section className="min-h-screen   lg:grid lg:grid-cols-[40%_60%]">
      {/* Left Panel */}
      <div className="bg-[#01249E] flex flex-col justify-between">
        <div className="px-6 py-10 sm:px-10 sm:py-14 lg:px-20 lg:py-24">
          <h1 className="  text-[48px] sm:text-[64px] lg:text-[80px] font-extrabold leading-[0.95] text-white">
            Submit an <br /> event
          </h1>
          <p className="mt-6 lg:mt-10 max-w-md text-white text-base sm:text-lg leading-relaxed">
            Please submit your event details using the form.
            <br />
            Once your event has been approved, it will be added to the community
            calendar.
          </p>
        </div>

        <div className="relative w-full h-[80vh] bg-[#37E8DA]  items-end justify-end content-end p-5 overflow-hidden  flex">
          <div className="w-100 h-100 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 324.01 324.02"
              fill="white"
            >
              <path d="M235.51,324a12.37,12.37,0,0,0,12.37-12.38,63.83,63.83,0,0,1,63.76-63.75,12.38,12.38,0,0,0,0-24.75,88.6,88.6,0,0,0-88.51,88.5A12.38,12.38,0,0,0,235.51,324Z"></path>
              <path d="M180.64,324A12.38,12.38,0,0,0,193,311.64,118.75,118.75,0,0,1,311.64,193a12.38,12.38,0,0,0,0-24.75c-79.06,0-143.37,64.32-143.37,143.37A12.37,12.37,0,0,0,180.64,324Z"></path>
              <path d="M125.54,324a12.38,12.38,0,0,0,12.38-12.38c0-95.79,77.93-173.72,173.72-173.72a12.38,12.38,0,0,0,0-24.75c-109.44,0-198.47,89-198.47,198.47A12.37,12.37,0,0,0,125.54,324Z"></path>
              <path d="M69.07,324a12.38,12.38,0,0,0,12.38-12.38c0-126.93,103.26-230.19,230.19-230.19a12.38,12.38,0,0,0,0-24.75C171.06,56.7,56.7,171.07,56.7,311.64A12.37,12.37,0,0,0,69.07,324Z"></path>
              <path d="M12.37,324a12.38,12.38,0,0,0,12.38-12.38c0-158.19,128.7-286.89,286.89-286.89a12.38,12.38,0,0,0,0-24.75C139.8,0,0,139.8,0,311.64A12.37,12.37,0,0,0,12.37,324Z"></path>
            </svg>
          </div>
        </div>
      </div>

      <div className="bg-[#F6F1E7] px-6 py-10 sm:px-10 sm:py-14 lg:px-24 lg:py-20">
        <form className="space-y-8 sm:space-y-10 lg:space-y-14 max-w-3xl">
          <FormField label="Organiser's name *" />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10 lg:gap-16">
            <FormField label="Email address *" />
            <FormField label="Telephone number *" />
          </div>

          <FormField label="Event title *" />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10 lg:gap-16">
            <FormField label="Event date *" />
            <FormField label="Event time *" />
          </div>

          <FormTextarea label="Event location/address *" rows={2} />
          <FormTextarea
            label="Free or paid? (Add ticketing links if applicable) *"
            rows={3}
          />
          <FormTextarea label="Event description *" rows={3} />

          <div className="flex items-center justify-between pt-4 sm:pt-6 lg:pt-8">
            <p className="text-sm text-[#01249E]">* Mandatory fields</p>
            <button className="flex items-center gap-3 lg:gap-4 text-[#01249E] font-semibold text-base lg:text-lg">
              Send
              <span className="w-9 h-9 lg:w-10 lg:h-10 rounded-full border border-[#01249E] flex items-center justify-center">
                →
              </span>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

function FormField({ label }: { label: string }) {
  return (
    <div className="flex flex-col gap-2 lg:gap-3">
      <label className="text-[#01249E] text-[14px] sm:text-[15px] lg:text-[16px] font-bold">
        {label}
      </label>
      <input
        type="text"
        className="bg-transparent border-b border-black/70 focus:outline-none focus:border-[#01249E] py-1"
      />
    </div>
  );
}

function FormTextarea({ label, rows }: { label: string; rows: number }) {
  return (
    <div className="flex flex-col gap-2 lg:gap-3">
      <label className="text-[#01249E] text-[14px] sm:text-[15px] lg:text-[16px] font-bold">
        {label}
      </label>
      <textarea
        rows={rows}
        className="bg-transparent border-b border-black/70 focus:outline-none focus:border-[#01249E] resize-none"
      />
    </div>
  );
}
