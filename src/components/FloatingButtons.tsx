// FloatingButtons.tsx
import { Phone } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

const whatsappNumber = "9718998780";
const callNumber = "9816451000";
const whatsappMessage = "Hello, I'm visiting from the HIMGIRI LOANS website and would like to get more information.";

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
      <a
        href={`https://wa.me/91${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#25D366] text-white w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center shadow-lg hover:bg-[#20BA5A] transition-all hover:scale-110 group"
        aria-label="Contact on WhatsApp"
        title="WhatsApp: +91 9718998780"
      >
        <FaWhatsapp className="w-6 h-6 md:w-7 md:h-7" />
        <span className="absolute right-14 bg-gray-900 text-white text-xs py-1 px-2 rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          WhatsApp
        </span>
      </a>

      <a
        href={`tel:+91${callNumber}`}
        className="bg-[#3b82f6] text-white w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center shadow-lg hover:bg-[#2563eb] transition-all hover:scale-110 group"
        aria-label="Call us"
        title="Call: +91 9816451000"
      >
        <Phone className="w-5 h-5 md:w-6 md:h-6" />
        <span className="absolute right-14 bg-gray-900 text-white text-xs py-1 px-2 rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          Call Us
        </span>
      </a>
    </div>
  );
}