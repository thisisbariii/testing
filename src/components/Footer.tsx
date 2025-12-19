import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          {/* About Us */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4">About Us</h3>
            <p className="text-xs leading-relaxed">
              TRISARAN MONEY was established in 2024 with a mission to promote
              rural development, financial inclusion, and women empowerment
              across India. The organization is committed to supporting
              economically weaker sections in rural and semi-urban areas.
            </p>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4">Useful Links</h3>
            <ul className="space-y-2 text-xs">
              <li><Link to="/" className="hover:text-white">Home</Link></li>
              <li><Link to="/about" className="hover:text-white">About Us</Link></li>
              <li><Link to="/privacy" className="hover:text-white">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-white">Terms And Conditions</Link></li>
              <li><Link to="/become-partner" className="hover:text-white">Partner</Link></li>
            </ul>
          </div>

          {/* Register Office */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4">Register Office</h3>
            <p className="text-xs leading-relaxed">
              TRISARAN GRAMEEN MICRO APPEX FEDERATION
            </p>
            <p className="text-xs leading-relaxed mt-2">
              Registration Date : 29-08-2024
            </p>
            <p className="text-xs leading-relaxed">
              CIN: U88900MH2024NPL431405
            </p>
            <p className="text-xs leading-relaxed">
              Email: contact@trisaranmoney.in
            </p>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4">Contact Us</h3>
            <p className="text-xs leading-relaxed">
              TRISARAN GRAMEEN MICRO APPEX FEDERATION
            </p>
            <p className="text-xs leading-relaxed mt-2">
              Company Category : Microfinance (Section 8)
            </p>
            <p className="text-xs leading-relaxed">
              Section 8 Licence No: 159984
            </p>
            <p className="text-xs leading-relaxed">
              Address: Anjanvel Bouddhwadi, RGPPL Anjanvel, Guhagar,
              Ratnagiri, Maharashtra 415634
            </p>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-6 text-center">
          <p className="text-xs">
            © 2025 | Trisaran Money - All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
