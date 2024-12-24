const Contact = () => {
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
        <form className="w-full bg-gray-800 p-8 rounded-lg shadow-lg">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4 md:w-1/2 mb-4">
              <label htmlFor="name" className="block text-gray-300 font-medium">
                Your Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Enter your name"
                className="w-full mt-2 rounded bg-gray-700 p-3 text-gray-200 outline-none focus:border-blue-500"
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
                placeholder="Enter your email"
                className="w-full mt-2 rounded bg-gray-700 p-3 text-gray-200 outline-none focus:border-blue-500"
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
                placeholder="Enter your message"
                className="w-full mt-2 rounded bg-gray-700 p-3 text-gray-200 outline-none focus:border-blue-500"
              ></textarea>
            </div>

            <div className="w-full mt-4 flex justify-end">
              <a
                href="mailto:info@thirdrock-tech.com"
                className="relative px-6 py-2 bg-blue-500 rounded text-white font-bold text-sm group"
              >
                <span className="absolute inset-0 transition-transform transform scale-0 bg-blue-700 rounded group-hover:scale-100"></span>
                <span className="relative z-10">Submit Ticket</span>
              </a>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
