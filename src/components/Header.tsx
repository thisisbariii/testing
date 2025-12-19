import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/logo.jpeg";

export default function Header() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (path: string) =>
    location.pathname === path
      ? "text-blue-600 border-b-2 border-blue-600"
      : "text-gray-700 hover:text-blue-600";

  // Function to handle link click and close menu
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header className="bg-white border-b border-gray-200 font-['Poppins']">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-24"> {/* Increased height even more on desktop */}
          <Link to="/" className="flex items-center gap-3" onClick={handleLinkClick}>
            <img 
              src={logo} 
              alt="Himgiri Loans" 
              className="h-10 md:h-20 w-auto" // h-20 for desktop (much bigger!)
            />
          </Link>

          {/* Hamburger button for mobile */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-10">
            {[
              { path: "/", label: "Home" },
              { path: "/about", label: "About Us" },
              { path: "/privacy", label: "Privacy Policy" },
              { path: "/terms", label: "Terms & Conditions" },
              { path: "/become-partner", label: "Become A Partner" },
            ].map((item) => (
              <Link key={item.path} to={item.path} className="text-base font-medium pb-1">
                <span className={isActive(item.path)}>{item.label}</span>
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 flex flex-col gap-1">
          {[
            { path: "/", label: "Home" },
            { path: "/about", label: "About Us" },
            { path: "/privacy", label: "Privacy Policy" },
            { path: "/terms", label: "Terms & Conditions" },
            { path: "/become-partner", label: "Become A Partner" },
          ].map((item) => (
            <Link 
              key={item.path} 
              to={item.path} 
              className="block py-2"
              onClick={handleLinkClick} // Add click handler here
            >
              <span className={isActive(item.path)}>{item.label}</span>
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}