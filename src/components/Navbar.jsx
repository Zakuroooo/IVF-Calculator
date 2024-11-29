import logo from "../assets/logo.png"; // Add your logo to assets folder

function Navbar() {
  return (
    <nav className="border-b p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <div className="flex items-center">
            <span className="text-xl font-bold bg-black text-white px-2 py-1">
              IVF
            </span>
            <span className="ml-2 text-xl font-semibold">Pulse</span>
          </div>
        </div>

        <div className="hidden md:flex space-x-6">
          <a href="#" className="hover:text-gray-600">
            Donor Programme
          </a>
          <a href="#" className="hover:text-gray-600">
            Fertility Preservation
          </a>
          <a href="#" className="hover:text-gray-600">
            Advanced Treatments
          </a>
          <a href="#" className="hover:text-gray-600">
            Infertility Treatments
          </a>
          <a href="#" className="hover:text-gray-600">
            IVF Testing
          </a>
          <a href="#" className="hover:text-gray-600">
            About Us
          </a>
        </div>

        <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">
          Talk to Us →
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
