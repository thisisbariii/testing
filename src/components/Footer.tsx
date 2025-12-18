import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white font-semibold text-sm mb-4">About Us</h3>
            <p className="text-xs leading-relaxed">
              Trisaran Money is an Intermediary In 2018
              with a mission to generate liveli
              opportunities through financial
              services. We take pride in our
              organization is committed to supporting
              economically weaker sections to fund and
              secure their future
            </p>
          </div>

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

          <div>
            <h3 className="text-white font-semibold text-sm mb-4">Register Office</h3>
            <p className="text-xs leading-relaxed">
              Trisaran Money Pvt. Ltd. 39/17,
              FIDALAYA
            </p>
            <p className="text-xs leading-relaxed mt-2">
              Registration Number : 26-35-003
            </p>
            <p className="text-xs leading-relaxed">
              GSTN Number : 27AAACT81411Z1ZA
            </p>
            <p className="text-xs leading-relaxed">
              Email: contact@trisaranmoney.in
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold text-sm mb-4">Contact Us</h3>
            <p className="text-xs leading-relaxed">
              Company: Trisaran Money Pvt Ltd, GISMI,
              FIDALAYA
            </p>
            <p className="text-xs leading-relaxed mt-2">
              Company Secretary: Moushumi Finance Division
            </p>
            <p className="text-xs leading-relaxed">
              Address: 39/17 Trisaran Money Pvt. Ltd.
              Opposite Roadways, Kanth, Anupam,
              Gurugram, Sahiyangi, Maharashtra 410508
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6 text-center">
          <p className="text-xs">© 2025 | Trisaran Money - All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}
