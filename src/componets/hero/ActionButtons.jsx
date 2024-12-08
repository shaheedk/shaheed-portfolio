const ActionButtons = () => {
    return (
      <div className="flex space-x-6 justify-center mt-8">
        {/* View My Works Button */}
        <a
          href="#works" // Link to your "Works" section
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