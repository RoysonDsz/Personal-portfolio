import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    from_phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e:any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="relative py-10 sm:px-10 flex flex-col items-center">
      <h2 className="text-5xl sm:text-5xl md:text-6xl font-bold mb-6 text-center">
        Contact <span className="text-blue-400">Me!</span>
      </h2>
      <div className="w-full max-w-[95%] sm:max-w-[80%] backdrop-blur-md p-6 sm:p-10 rounded-lg">
        <form 
          id="contact-form" 
          className="w-full p-4 sm:p-6" 
          action="https://formspree.io/f/meoaaara" 
          method="POST"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input 
              type="text" 
              name="from_name" 
              placeholder="Full Name" 
              required
              className="p-3 border-2 border-black rounded w-full"
              onChange={handleChange}
            />
            <input 
              type="email" 
              name="from_email" 
              placeholder="Email Address" 
              required
              className="p-3 border-2 border-black rounded w-full"
              onChange={handleChange}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input 
              type="tel" 
              name="from_phone" 
              placeholder="Mobile Number"
              className="p-3 border-2 border-black rounded w-full"
              onChange={handleChange}
            />
            <input 
              type="text" 
              name="subject" 
              placeholder="Email Subject" 
              required
              className="p-3 border-2 border-black rounded w-full"
              onChange={handleChange}
            />
          </div>
          <textarea 
            name="message" 
            placeholder="Your Message" 
            required
            className="p-3 border-2 border-black rounded w-full mb-4"
            onChange={handleChange}
          ></textarea>
          <input 
            type="submit" 
            value="Send Message" 
            className="w-full md:w-80 bg-gradient-to-r from-green-400 to-blue-500 text-white py-3 rounded cursor-pointer hover:bg-blue-600 transition"
          />
        </form>
      </div>
    </section>
  );
}
