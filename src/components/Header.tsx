import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();

  const isActive = (path: string) =>
    location.pathname === path
      ? "text-blue-600 border-b-2 border-blue-600"
      : "text-gray-700 hover:text-blue-600";

  return (
    <header className="bg-white border-b border-gray-200 font-['Poppins']">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          <Link to="/" className="flex items-center gap-3">
            <img
              src="/assets/logo.webp"
              alt="Trisaran Money"
              className="h-10 w-auto"
            />
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className={`text-sm font-medium pb-1 ${isActive("/")}`}>
              Home
            </Link>
            <Link to="/about" className={`text-sm font-medium pb-1 ${isActive("/about")}`}>
              About Us
            </Link>
            <Link to="/privacy" className={`text-sm font-medium pb-1 ${isActive("/privacy")}`}>
              Privacy Policy
            </Link>
            <Link to="/terms" className={`text-sm font-medium pb-1 ${isActive("/terms")}`}>
              Terms & Conditions
            </Link>
            <Link to="/become-partner" className={`text-sm font-medium pb-1 ${isActive("/become-partner")}`}>
              Become A Partner
            </Link>
          </nav>

          <Link
            to="/advisor-login"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full text-sm font-medium transition"
          >
            Advisor Login
          </Link>
        </div>
      </div>
    </header>
  );
}
