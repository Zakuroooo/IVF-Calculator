import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-b sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center gap-2">
            <div className="bg-black px-2 py-1">
              <span className="text-white font-bold text-xl">IVF</span>
            </div>
            <span className="text-xl">Pulse</span>
          </Link>

          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span
                className={`w-full h-0.5 bg-black transition-all ${
                  isMenuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              ></span>
              <span
                className={`w-full h-0.5 bg-black transition-all ${
                  isMenuOpen ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`w-full h-0.5 bg-black transition-all ${
                  isMenuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              ></span>
            </div>
          </button>

          <div className="hidden lg:flex items-center space-x-8">
            <a href="#" className="text-gray-800 hover:text-gray-600">
              Donor Programme
            </a>
            <a href="#" className="text-gray-800 hover:text-gray-600">
              Fertility Preservation
            </a>
            <a href="#" className="text-gray-800 hover:text-gray-600">
              Advanced Treatments
            </a>
            <a href="#" className="text-gray-800 hover:text-gray-600">
              Infertility Treatments
            </a>
            <a href="#" className="text-gray-800 hover:text-gray-600">
              IVF Testing
            </a>
            <a href="#" className="text-gray-800 hover:text-gray-600">
              About Us
            </a>
          </div>

          <button className="hidden lg:flex bg-[#C94F4F] text-white px-6 py-2 rounded items-center gap-2">
            Talk to Us →
          </button>
        </div>

        <div
          className={`lg:hidden absolute left-0 right-0 bg-white px-4 py-2 border-b transition-all duration-300 ${
            isMenuOpen ? "top-16 opacity-100" : "-top-96 opacity-0"
          }`}
        >
          <div className="flex flex-col space-y-4 py-4">
            <a href="#" className="text-gray-800 hover:text-gray-600">
              Donor Programme
            </a>
            <a href="#" className="text-gray-800 hover:text-gray-600">
              Fertility Preservation
            </a>
            <a href="#" className="text-gray-800 hover:text-gray-600">
              Advanced Treatments
            </a>
            <a href="#" className="text-gray-800 hover:text-gray-600">
              Infertility Treatments
            </a>
            <a href="#" className="text-gray-800 hover:text-gray-600">
              IVF Testing
            </a>
            <a href="#" className="text-gray-800 hover:text-gray-600">
              About Us
            </a>
            <button className="bg-[#C94F4F] text-white px-6 py-2 rounded text-left">
              Talk to Us →
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
