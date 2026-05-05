export default function HunsClubForm() {
  return (
    <main className="min-h-screen px-6 md:px-16 py-12 bg-[#f5f1ea] text-[#1e3a8a]">
      
      {/* Title */}
      <h1 className="text-center text-5xl md:text-6xl font-bold mb-16">
        Huns Club
      </h1>

      {/* Grid Layout */}
      <div className="grid md:grid-cols-2 gap-12 md:gap-20">

        {/* LEFT COLUMN */}
        <div className="space-y-12">

          {/* Input */}
          <div>
            <label className="block mb-2 text-lg">
              OSACA membership number *
            </label>
            <input className="w-full border-b border-gray-400 bg-transparent outline-none py-2" />
          </div>

          <div>
            <label className="block mb-2 text-lg">
              Gross business revenue 2020 *
            </label>
            <input className="w-full border-b border-gray-400 bg-transparent outline-none py-2" />
          </div>

          {/* Radio */}
          <div>
            <label className="block mb-4 text-lg">
              Have you used radio advertising before? *
            </label>

            <div className="flex items-center gap-8">
              
              {/* YES */}
              <label className="flex items-center gap-2 cursor-pointer">
                <span>Yes</span>
                <input type="radio" name="radio1" className="hidden peer" />
                <div className="w-6 h-6 rounded-full border-2 border-blue-900 flex items-center justify-center peer-checked:bg-blue-900">
                  <div className="w-3 h-3 bg-white rounded-full hidden peer-checked:block"></div>
                </div>
              </label>

              {/* NO (selected style like image) */}
              <label className="flex items-center gap-2 cursor-pointer">
                <span>No</span>
                <input type="radio" name="radio1" className="hidden peer" defaultChecked />
                <div className="w-6 h-6 rounded-full border-4 border-blue-900"></div>
              </label>

            </div>

            <div className="border-b border-gray-400 mt-4"></div>
          </div>

          {/* Radio */}
          <div>
            <label className="block mb-4 text-lg">
              Have you used digital advertising before? *
            </label>

            <div className="flex items-center gap-8">
              
              <label className="flex items-center gap-2 cursor-pointer">
                <span>Yes</span>
                <input type="radio" name="radio2" className="hidden peer" />
                <div className="w-6 h-6 rounded-full border-2 border-blue-900 flex items-center justify-center peer-checked:bg-blue-900">
                  <div className="w-3 h-3 bg-white rounded-full hidden peer-checked:block"></div>
                </div>
              </label>

              <label className="flex items-center gap-2 cursor-pointer">
                <span>No</span>
                <input type="radio" name="radio2" className="hidden peer" defaultChecked />
                <div className="w-6 h-6 rounded-full border-4 border-blue-900"></div>
              </label>

            </div>

            <div className="border-b border-gray-400 mt-4"></div>
          </div>

          {/* Radio */}
          <div>
            <label className="block mb-4 text-lg">
              Have you advertised with Radio Huns before? *
            </label>

            <div className="flex items-center gap-8">
              
              <label className="flex items-center gap-2 cursor-pointer">
                <span>Yes</span>
                <input type="radio" name="radio3" className="hidden peer" />
                <div className="w-6 h-6 rounded-full border-2 border-blue-900 flex items-center justify-center peer-checked:bg-blue-900">
                  <div className="w-3 h-3 bg-white rounded-full hidden peer-checked:block"></div>
                </div>
              </label>

              <label className="flex items-center gap-2 cursor-pointer">
                <span>No</span>
                <input type="radio" name="radio3" className="hidden peer" defaultChecked />
                <div className="w-6 h-6 rounded-full border-4 border-blue-900"></div>
              </label>

            </div>

            <div className="border-b border-gray-400 mt-4"></div>
          </div>

        </div>

        {/* RIGHT COLUMN */}
        <div className="space-y-12">

          <div>
            <label className="block mb-2 text-lg">
              Gross business revenue 2019 *
            </label>
            <input className="w-full border-b border-gray-400 bg-transparent outline-none py-2" />
          </div>

          <div>
            <label className="block mb-2 text-lg">
              How has Covid-19 affected your business? *
            </label>
            <input className="w-full border-b border-gray-400 bg-transparent outline-none py-2" />
          </div>

          <div>
            <label className="block mb-2 text-lg">
              How was your experience?
            </label>
            <input className="w-full border-b border-gray-400 bg-transparent outline-none py-2" />
          </div>

          <div>
            <label className="block mb-2 text-lg">
              How was your experience?
            </label>
            <input className="w-full border-b border-gray-400 bg-transparent outline-none py-2" />
          </div>

          {/* Final Radio */}
          <div>
            <label className="block mb-4 text-lg">
              Do you have a digital copy of your previous radio advertisement?
            </label>

            <div className="flex items-center gap-8">
              
              <label className="flex items-center gap-2 cursor-pointer">
                <span>Yes</span>
                <input type="radio" name="radio4" className="hidden peer" />
                <div className="w-6 h-6 rounded-full border-2 border-blue-900 flex items-center justify-center peer-checked:bg-blue-900">
                  <div className="w-3 h-3 bg-white rounded-full hidden peer-checked:block"></div>
                </div>
              </label>

              <label className="flex items-center gap-2 cursor-pointer">
                <span>No</span>
                <input type="radio" name="radio4" className="hidden peer" defaultChecked />
                <div className="w-6 h-6 rounded-full border-4 border-blue-900"></div>
              </label>

            </div>

            <div className="border-b border-gray-400 mt-4"></div>
          </div>

        </div>

      </div>
    </main>
  );
}