import AOS from "aos";
import "aos/dist/aos.css"; // Ensure you import the AOS styles
import { useEffect } from "react";

const ActionButtons = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []); // Add an empty dependency array to avoid reinitialization on every render

  return (
    <div className="flex space-x-6 justify-center mt-8" data-aos="fade-up">
      {/* View My Works Button */}
      <a
        href="#projects" // Link to your "Works" section
        className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-600 transition-colors"
      >
        View My Works
      </a>

      {/* Contact Me Button */}
      <a
        href="#contact" // Link to your "Contact" section
        className="px-6 py-3 bg-green-500 text-white font-semibold rounded-lg shadow-lg hover:bg-green-600 transition-colors"
      >
        Contact Me
      </a>
    </div>
  );
};

export default ActionButtons;

