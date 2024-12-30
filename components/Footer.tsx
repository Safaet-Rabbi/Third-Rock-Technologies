import { socialMedia } from "@/data/socialMedia"; // Make sure this file exports `socialMedia` array
import { navItems } from "@/data/index"; // Import the `navItems` for quick links
import { FaArrowUp } from "react-icons/fa"; // Import the up arrow icon
import Contact from "./Contact";

const Footer = () => {
  // Function to scroll to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scroll animation
    });
  };
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="w-full bg-gray-900 text-gray-200 pt-16 pb-12 mb-[100px]"
      id="footer"
    >
      {/* Contact Section Component */}
      <Contact />
      {/* Background Grid */}
      <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-between items-center">
        {/* Company Information */}
        <div className="w-full md:w-1/3 mb-6 md:mb-0">
          <h2 className="text-2xl font-bold mb-2 text-purple-500">
            Third Rock Technologies
          </h2>
          <p>
            Empowering businesses to achieve{" "}
            <span className="font-semibold text-blue-400">
              digital excellence
            </span>
            .
          </p>
          <p>
            <span className="font-bold">Address:</span> Daripara, Jamalpur
            Sadar, Jamalpur.
          </p>
          <p>
            <span className="font-bold">Email:</span>{" "}
            <a
              href="mailto:info@thirdrock-tech.com"
              className="text-purple-400 hover:underline"
            >
              info@thirdrock-tech.com
            </a>
          </p>
          <p>
            <span className="font-bold">Phone:</span> +8801784818346
          </p>
        </div>

        {/* Quick Links */}
        <div className="w-full md:w-1/4 mb-6 md:mb-0">
          <h2 className="text-xl font-bold mb-4">Quick Links</h2>
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.name} className="hover:text-purple-400 transition">
                <a href={item.link}>{item.name}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Media Links */}
        <div className="w-full mt-6 md:mt-0 flex items-center space-x-6">
          {socialMedia?.map((info) => (
            <a
              key={info.id}
              href={info.link} // Add the link for each social media item
              target="_blank" // Open the link in a new tab
              rel="noopener noreferrer" // For security
            >
              <div className="w-12 h-12 rounded-full flex justify-center items-center bg-gray-800 hover:bg-purple-500 transition">
                <img src={info.img} alt="social" width={24} height={24} />
              </div>
            </a>
          ))}
        </div>
      </div>
      {/* Footer Bottom */}
      <div className="mt-8 text-center border-t pt-4 border-gray-700">
        <p>
          &copy; {currentYear} Third Rock Technologies | All Rights Reserved
        </p>
        <p>Designed and developed by the Third Rock Technologies team 🚀</p>
      </div>
      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-purple-500 text-white p-3 rounded-full shadow-lg hover:bg-purple-600 transition"
      >
        <FaArrowUp size={24} />
      </button>
    </footer>
  );
};

export default Footer;
