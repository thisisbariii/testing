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
              HIMGIRI LOANS was established with a mission to provide accessible
              financial solutions and promote economic growth in Himachal Pradesh.
              The organization is committed to supporting individuals and businesses
              with reliable loan services across the region.
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

          {/* Main Office */}
          <div>
            
            <h3 className="text-white font-semibold text-sm mb-4">Main Office</h3>
            <p className="text-xs font-medium text-white mt-3">
              HIMGIRI LOANS
            </p>
            <p className="text-xs leading-relaxed">
              VPO Baijnath, Distt Kangra, Himachal Pradesh
            </p>
            
            <div className="mt-3 space-y-1">
              <p className="text-xs leading-relaxed">
                <span className="font-medium text-gray-200">Mobile:</span> +91 9718998780
              </p>
              <p className="text-xs leading-relaxed">
                <span className="font-medium text-gray-200">Business:</span> +91 8076520212
              </p>
              <p className="text-xs leading-relaxed">
                <span className="font-medium text-gray-200">Phone:</span> +91 9816451000
              </p>
            </div>
            
            <p className="text-xs leading-relaxed mt-3">
              Email: enquiry.himcoinwealth@himgiriloans.in
            </p>
            
            
          </div>

          {/* Branch Office */}
          <div>
           
            <h3 className="text-white font-semibold text-sm mb-4">Branch Office</h3>
             <p className="text-xs font-medium text-white mt-3">
              HIMGIRI LOANS
            </p>
            <p className="text-xs leading-relaxed">
              Bhuntar Bazar, Kullu, Himachal Pradesh
            </p>
            
            <div className="mt-3 space-y-1">
              <p className="text-xs leading-relaxed">
                <span className="font-medium text-gray-200">Mobile:</span> +91 9718998780
              </p>
              <p className="text-xs leading-relaxed">
                <span className="font-medium text-gray-200">Business:</span> +91 8076520212
              </p>
              <p className="text-xs leading-relaxed">
                <span className="font-medium text-gray-200">Phone:</span> +91 9816451000
              </p>
            </div>

            <p className="text-xs leading-relaxed mt-3">
              Email: enquiry.himcoinwealth@himgiriloans.in
            </p>
            
            
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-6 text-center">
          <p className="text-xs">
            © 2025 | HIMGIRI LOANS - All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}