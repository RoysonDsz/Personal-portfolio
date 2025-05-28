import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    from_phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section
      id="contact"
      className="min-h-screen w-full flex items-center justify-center px-4 py-10 "
    >
      <div className="w-full max-w-5xl backdrop-blur-md bg-gradient-to-br from-black via-gray-900 to-gray-800 border border-white/30 rounded-2xl shadow-lg shadow-blue-500/30 p-8 md:p-12 text-white text-center">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold mb-10 text-center">
          Contact <span className="text-blue-400">Me!</span>
        </h2>
        <div className="w-full max-w-[95%] sm:max-w-[80%] mx-auto">
          <form
            id="contact-form"
            className="w-full p-4 sm:p-6 space-y-4"
            action="https://formspree.io/f/meoaaara"
            method="POST"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="from_name"
                placeholder="Full Name"
                required
                className="p-3 border-2 border-black rounded w-full text-white"
                onChange={handleChange}
              />
              <input
                type="email"
                name="from_email"
                placeholder="Email Address"
                required
                className="p-3 border-2 border-black rounded w-full text-white"
                onChange={handleChange}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="tel"
                name="from_phone"
                placeholder="Mobile Number"
                className="p-3 border-2 border-black rounded w-full text-white"
                onChange={handleChange}
              />
              <input
                type="text"
                name="subject"
                placeholder="Email Subject"
                required
                className="p-3 border-2 border-black rounded w-full text-white"
                onChange={handleChange}
              />
            </div>
            <textarea
              name="message"
              placeholder="Your Message"
              required
              rows={5}
              className="p-3 border-2 border-black rounded w-full text-white"
              onChange={handleChange}
            ></textarea>
            <input
              type="submit"
              value="Send Message"
              className="w-full md:w-80 bg-gradient-to-r from-green-400 to-blue-500 text-white py-3 rounded cursor-pointer hover:opacity-90 transition"
            />
          </form>
        </div>
      </div>
    </section>
  );
}
