import { useState } from "react"; // <-- add this at the top
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false); // <-- mobile menu state

  const isActive = (path: string) =>
    location.pathname === path
      ? "text-blue-600 border-b-2 border-blue-600"
      : "text-gray-700 hover:text-blue-600";

  return (
    <header className="bg-white border-b border-gray-200 font-['Poppins']">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-3">
            <img src="/assets/logo.webp" alt="Trisaran Money" className="h-10 w-auto" />
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

          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className={`text-sm font-medium pb-1 ${isActive("/")}`}>Home</Link>
            <Link to="/about" className={`text-sm font-medium pb-1 ${isActive("/about")}`}>About Us</Link>
            <Link to="/privacy" className={`text-sm font-medium pb-1 ${isActive("/privacy")}`}>Privacy Policy</Link>
            <Link to="/terms" className={`text-sm font-medium pb-1 ${isActive("/terms")}`}>Terms & Conditions</Link>
            <Link to="/become-partner" className={`text-sm font-medium pb-1 ${isActive("/become-partner")}`}>Become A Partner</Link>
          </nav>

         <Link
  to="/advisor-login"
  className="hidden md:inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full text-sm font-medium transition"
>
  Advisor Login
</Link>

        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4">
          <Link to="/" className={`block py-2 ${isActive("/")}`}>Home</Link>
          <Link to="/about" className={`block py-2 ${isActive("/about")}`}>About Us</Link>
          <Link to="/privacy" className={`block py-2 ${isActive("/privacy")}`}>Privacy Policy</Link>
          <Link to="/terms" className={`block py-2 ${isActive("/terms")}`}>Terms & Conditions</Link>
          <Link to="/become-partner" className={`block py-2 ${isActive("/become-partner")}`}>Become A Partner</Link>
          <Link
            to="/advisor-login"
            className="block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full text-sm font-medium mt-2"
          >
            Advisor Login
          </Link>
        </div>
      )}
    </header>
  );
}
