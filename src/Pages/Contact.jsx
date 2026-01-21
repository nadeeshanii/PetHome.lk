import React from "react";
import { colors } from "../theme/colors";

export default function Contact() {
  return (
    <div className="w-full bg-[#fff9f7] font-poppins">

      {/* HERO HEADER */}
      <div className="bg-[#3D211A] text-white py-8 px-6 text-center">
        <h1 className="text-3xl font-black tracking-wide">
          Get In Touch With Happy Paws
        </h1>
        <p className="text-xs opacity-90 mt-2 max-w-xl mx-auto">
          Reach out for adoptions, volunteering, or support.
        </p>
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-6xl mx-auto px-6 md:px-14 py-8">

        <div className="grid md:grid-cols-3 gap-8">

          {/* CONTACT INFO */}
          <div className="space-y-4">
            <h2 className="text-xl font-black" style={{ color: colors.bistre }}>
              Contact Information
            </h2>

            <p className="text-xs text-gray-600 leading-relaxed">
              Our rescue team is available every day to guide you through
              adoption procedures and animal care inquiries.
            </p>

            <div className="space-y-2 text-xs font-medium text-gray-700">
              <p>📍 Colombo, Sri Lanka</p>
              <p>📞 +94 77 123 4567</p>
              <p>📧 happypaws.adopt@gmail.com</p>
            </div>

            <div className="bg-white rounded-lg p-4 shadow-sm text-[11px] text-gray-500">
              Response time: within 24 hours <br />
              Visiting hours: 9.00 AM – 6.00 PM
            </div>
          </div>

          {/* FORM SECTION */}
          <div className="md:col-span-2 bg-white rounded-xl shadow-sm p-6">

            <h2 className="text-lg font-black mb-4" style={{ color: colors.bistre }}>
              Send a Message
            </h2>

            <form className="grid md:grid-cols-2 gap-4 text-xs">

              <div>
                <label className="font-semibold">Full Name</label>
                <input
                  type="text"
                  className="w-full border rounded-md p-2 mt-1 focus:outline-none focus:ring-1 focus:ring-[#dba6a6]"
                  required
                />
              </div>

              <div>
                <label className="font-semibold">Email Address</label>
                <input
                  type="email"
                  className="w-full border rounded-md p-2 mt-1 focus:outline-none focus:ring-1 focus:ring-[#dba6a6]"
                  required
                />
              </div>

              <div>
                <label className="font-semibold">Phone Number</label>
                <input
                  type="text"
                  className="w-full border rounded-md p-2 mt-1"
                />
              </div>

              <div>
                <label className="font-semibold">Subject</label>
                <input
                  type="text"
                  className="w-full border rounded-md p-2 mt-1"
                />
              </div>

              <div className="md:col-span-2">
                <label className="font-semibold">Message</label>
                <textarea
                  className="w-full border rounded-md p-2 mt-1 h-24 resize-none"
                  required
                ></textarea>
              </div>

              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="w-full bg-[#3D211A] text-white py-2 rounded-full font-bold hover:bg-[#3d1d28] transition"
                >
                  Send Message
                </button>
              </div>

            </form>
          </div>
        </div>
      </div>

      {/* FOOTER NOTE */}
      <div className="text-center pb-6 text-[11px] text-gray-500">
        Together, we give abandoned pets a loving future ❤️
      </div>
    </div>
  );
}
