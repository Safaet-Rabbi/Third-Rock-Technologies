import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Your ticket has been submitted successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        const error = await response.json();
        setStatus(`Failed to send: ${error.error || "Unknown error"}`);
      }
    } catch (err) {
      setStatus("An error occurred. Please try again.");
    }
  };

  return (
    <section
      id="contact"
      className="overflow-hidden py-16 md:py-20 lg:py-28 bg-gray-900"
    >
      <div className="container mx-auto px-6">
        <h2 className="mb-6 text-3xl font-bold text-white text-center">
          Need Help? Open a Ticket
        </h2>
        <p className="mb-8 text-center text-gray-300">
          Our support team will get back to you ASAP via email.
        </p>
        <form
          onSubmit={handleSubmit}
          className="w-full bg-gray-800 p-8 rounded-lg shadow-lg"
        >
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4 md:w-1/2 mb-4">
              <label htmlFor="name" className="block text-gray-300 font-medium">
                Your Name
              </label>
              <input
                id="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full mt-2 rounded bg-gray-700 p-3 text-gray-200 outline-none focus:border-blue-500"
                required
              />
            </div>

            <div className="w-full px-4 md:w-1/2 mb-4">
              <label
                htmlFor="email"
                className="block text-gray-300 font-medium"
              >
                Your Email
              </label>
              <input
                id="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full mt-2 rounded bg-gray-700 p-3 text-gray-200 outline-none focus:border-blue-500"
                required
              />
            </div>

            <div className="w-full px-4">
              <label
                htmlFor="message"
                className="block text-gray-300 font-medium mt-2"
              >
                Your Message
              </label>
              <textarea
                id="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                placeholder="Enter your message"
                className="w-full mt-2 rounded bg-gray-700 p-3 text-gray-200 outline-none focus:border-blue-500"
                required
              ></textarea>
            </div>

            <div className="w-full mt-4 flex justify-end">
              <button
                type="submit"
                className="relative px-6 py-2 bg-blue-500 rounded text-white font-bold text-sm group"
              >
                Send as email
              </button>
            </div>
          </div>
        </form>
        {status && <p className="mt-4 text-center text-gray-300">{status}</p>}
      </div>
    </section>
  );
};

export default Contact;
