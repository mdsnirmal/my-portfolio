import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Phone } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbwx-sz19ULuYCbeYmfIdxm5ZQGTcd5WBde4NOKquZdbRCVaDIbPNWhvXJRm0ZgGIHg/exec",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to send message.");
      }

      const result = await response.json();

      if (result.status === "Success") {
        setSuccess({ type: "success", message: "Message sent successfully!" });
        setFormData({ name: "", email: "", message: "" });
      } else {
        setSuccess({ type: "error", message: "Failed to send message. Try again." });
      }
    } catch (error) {
      setSuccess({ type: "error", message: "Error sending message. Try again later." });
    }

    setLoading(false);
  };

  return (
    <section id="contact" className="py-16 px-6 md:px-8 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto text-center">
        {/* Section Title */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-blue-400"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Get in Touch
        </motion.h2>

        <p className="mt-4 text-lg text-gray-300">
          I'm always open to new opportunities and collaborations. Feel free to drop a message!
        </p>

        {/* Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          className="mt-8 bg-gray-800 p-8 rounded-2xl shadow-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          {/* Name & Email Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-400 font-medium">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-700 rounded-lg bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="block text-gray-400 font-medium">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-700 rounded-lg bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Your Email"
              />
            </div>
          </div>

          {/* Message Field */}
          <div className="mt-6">
            <label className="block text-gray-400 font-medium">Message</label>
            <textarea
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-700 rounded-lg bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Your Message"
            ></textarea>
          </div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            className="mt-6 w-full bg-blue-500 text-white p-3 rounded-lg font-bold hover:bg-blue-600 transition relative overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Message"}
          </motion.button>

          {/* Success/Error Message */}
          {success && (
            <p className={`mt-4 text-lg ${success.type === "success" ? "text-green-400" : "text-red-400"}`}>
              {success.message}
            </p>
          )}
        </motion.form>

        {/* Social Media & Contact Details */}
        <div className="mt-10 flex justify-center space-x-6">
          <a href="mailto:mdsnirmal@gmail.com" className="text-gray-400 hover:text-blue-400 transition">
            <Mail size={32} />
          </a>
          <a href="https://github.com/mdsnirmal" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition">
            <Github size={32} />
          </a>
          <a href="https://linkedin.com/in/sachintha-nirmal/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition">
            <Linkedin size={32} />
          </a>
          <a href="tel:+94767278015" className="text-gray-400 hover:text-blue-400 transition">
            <Phone size={32} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
