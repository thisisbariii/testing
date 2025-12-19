import { HandCoins, Headset, Landmark, Star, Phone } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { useState } from 'react';

// Import all images from src/assets/
import mobileLogo from '@/assets/mobile-logo.webp';
import shake from '@/assets/shake.webp';
import creditCard from '@/assets/credit-card.webp';
import instantLoan from '@/assets/instant-loan.webp';
import personalLoan from '@/assets/personal-loan.webp';
import businessLoan from '@/assets/business-loan.webp';
import homeLoan from '@/assets/home-loan.webp';
import loanAgainst from '@/assets/loan-against.webp';
import educationLoan from '@/assets/education-loan.webp';
import newCarLoan from '@/assets/new-car-loan.webp';
import usedCarLoan from '@/assets/used-car-loan.webp';
import savingAccount from '@/assets/saving-account.webp';
import dematAccount from '@/assets/demat-account.webp';
import insurance from '@/assets/insurance.webp';
import kotak from '@/assets/kotak.webp';
import bajaj from '@/assets/bajaj.webp';
import idfc from '@/assets/idfc.webp';
import b from '@/assets/b.webp';
import l from '@/assets/l.webp';
import h from '@/assets/h.webp';
import axis from '@/assets/axis.webp';
import aditya from '@/assets/aditya.webp';

// WhatsApp and Call numbers from footer
const whatsappNumber1 = "9718998780";
const whatsappNumber2 = "9816451000";
const callNumber1 = "8076520212";
const callNumber2 = "9816451000";
const whatsappMessage = "Hello, I'm visiting from the HIMGIRI LOANS website and would like to get more information.";

// Floating Action Buttons Component - Will be displayed on all pages
function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
      {/* WhatsApp Button */}
      <a
        href={`https://wa.me/91${whatsappNumber1}?text=${encodeURIComponent(whatsappMessage)}`}
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

      {/* Phone Call Button */}
      <a
        href={`tel:+91${callNumber2}`}
        className="bg-[#3b82f6] text-white w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center shadow-lg hover:bg-[#2563eb] transition-all hover:scale-110 group"
        aria-label="Call us"
        title="Call: +91 9816451000"
      >
        <Phone className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" />
        <span className="absolute right-14 bg-gray-900 text-white text-xs py-1 px-2 rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          Call Us
        </span>
      </a>
    </div>
  );
}

export default function Home() {
  const [loanAmount, setLoanAmount] = useState(1000000);
  const [interestRate, setInterestRate] = useState(10.5);
  const [tenure, setTenure] = useState(120);

  const allReviews = [
    { name: "Yash", text: "I had taken my personal loan from Tata Capital and executive Nitu Chauhan supported her best throughout the process. The approval was quick and with a good rate of interest." },
    { name: "Goutham N", text: "I got a call from Sapna Motwani who explained the Standard Chartered Credit Card so well. My card got approved in no time. Excellent support throughout!" },
    { name: "Sabdar Ali Shaikh", text: "Excellent service — thank you Monica and Mukesh for helping me complete the loan process smoothly and professionally. I really appreciate your hard work." },
    { name: "Kiran Kumar", text: "Would like to appreciate Mr. Manjeet Dahiya for taking accountability and staying connected through every query. Great job and excellent service!" },
    { name: "Bhanu Naidu", text: "I applied for a personal loan on Himgiri Loans. Manish Sharma was knowledgeable and efficient — great follow-ups and excellent communication. Highly recommended!" }
  ];

  const calculateEMI = () => {
    const principal = loanAmount;
    const ratePerMonth = interestRate / 12 / 100;
    const months = tenure;
    if (ratePerMonth === 0) return Math.round(principal / months);
    const emi = (principal * ratePerMonth * Math.pow(1 + ratePerMonth, months)) /
      (Math.pow(1 + ratePerMonth, months) - 1);
    return Math.round(emi);
  };

  // Product data with imported images
  const products = [
    { name: "CREDIT CARD", icon: creditCard, bg: "bg-cyan-100" },
    { name: "INSTANT LOAN", icon: instantLoan, bg: "bg-blue-200" },
    { name: "PERSONAL LOAN", icon: personalLoan, bg: "bg-yellow-100" },
    { name: "BUSINESS LOAN", icon: businessLoan, bg: "bg-red-100" },
    { name: "HOME LOAN", icon: homeLoan, bg: "bg-green-100" },
    { name: "LOAN AGAINST PROPERTY", icon: loanAgainst, bg: "bg-orange-100" },
    { name: "EDUCATION LOAN", icon: educationLoan, bg: "bg-blue-200" },
    { name: "NEW CAR LOAN", icon: newCarLoan, bg: "bg-blue-200" },
    { name: "USED CAR LOAN", icon: usedCarLoan, bg: "bg-yellow-100" },
    { name: "SAVING ACCOUNT", icon: savingAccount, bg: "bg-red-100" },
    { name: "DEMAT ACCOUNT", icon: dematAccount, bg: "bg-green-100" },
    { name: "INSURANCE", icon: insurance, bg: "bg-orange-100" },
  ];

  // Bank logos data
  const bankLogos = [
    { src: kotak, alt: "kotak" },
    { src: bajaj, alt: "bajaj" },
    { src: idfc, alt: "idfc" },
    { src: b, alt: "b" },
    { src: l, alt: "l" },
    { src: h, alt: "h" },
    { src: axis, alt: "axis" },
    { src: aditya, alt: "aditya" },
  ];

  return (
    <div className="bg-white overflow-x-hidden font-['Poppins']">
      <FloatingButtons />
      
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-8 md:py-16 mb-6 md:mb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="text-center lg:text-left order-2 lg:order-1">
            <h1 className="text-2xl sm:text-3xl md:text-[45px] font-semibold leading-[1.2] md:leading-[1.1] text-[#232625]/70">
              Best Platform to sell <span className="text-green-500">Financial and Banking Services</span> online
            </h1>
            <p className="mt-6 md:mt-6 text-gray-600 text-base md:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Learn & Earn From Anywhere By Referring Customers And Educating Them On The Products Being Offered.
            </p>
            
            {/* Responsive Hero Button */}
            <div className="mt-8 md:mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              {/* Mobile: APK Download Button */}
              <a 
                href="https://himgiriloans.in/download.php"
                download="Himgiri-Loans-App.apk"
                className="md:hidden bg-blue-600 text-white px-10 py-3.5 rounded-full text-base font-medium hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl text-center"
              >
                Download Now
              </a>
              
              {/* Desktop: Contact Us Button (WhatsApp) */}
              <a 
                href="https://wa.me/919718998780?text=Hello%2C%20I'm%20visiting%20from%20the%20HIMGIRI%20LOANS%20website%20and%20would%20like%20to%20get%20more%20information."
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:inline-block bg-blue-600 text-white px-12 py-4 rounded-full text-lg font-medium hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl"
              >
                Contact Us
              </a>
            </div>
          </div>
          <div className="flex items-center justify-center order-1 lg:order-2">
            <img src={mobileLogo} alt="App" className="w-[65%] md:w-[80%] h-auto" />
          </div>
        </div>
      </section>

      {/* Grid Products */}
      <section className="py-8 md:py-10 bg-white mb-6 md:mb-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-center text-gray-700 text-sm md:text-lg mb-6 md:mb-8 px-4">
            Bringing you the <span className="font-semibold text-gray-900">Best Products</span> from <span className="font-semibold text-gray-900">Top Banks</span>
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
            {products.map((item, index) => (
              <div key={index} className="flex flex-col items-center text-center p-3 md:p-6 bg-white rounded-xl border border-gray-50 shadow-sm">
                <div className={`w-10 h-10 md:w-16 md:h-16 ${item.bg} rounded-xl flex items-center justify-center mb-3 md:mb-4`}>
                  <img src={item.icon} alt={item.name} className="w-5 h-5 md:w-10 md:h-10 object-contain" />
                </div>
                <span className="text-[8px] md:text-[10px] font-bold text-gray-700 tracking-wider uppercase">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
     <section className="bg-[#3b4758] pt-8 pb-20 md:pb-24 relative mb-6 md:mb-12">
  <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
    <div className="mb-6">
      <h2 className="text-xl md:text-2xl font-medium text-white mb-2">Millions of Wishes, Enabled!</h2>
      <p className="text-gray-300 text-[10px] md:text-xs">
        We achieve such numbers, because you are more than a number to us.
      </p>
    </div>

    {/* Desktop stays same */}
    <div className="hidden md:flex flex-col md:flex-row items-center justify-center gap-6 md:gap-0">
      <div className="flex-1">
        <div className="text-3xl font-bold text-[#4ade80]">1,000Cr+</div>
        <div className="text-[10px] text-gray-400 mt-1 uppercase tracking-widest">Loan Disbursement</div>
      </div>
      <div className="hidden md:block h-12 border-l border-dotted border-gray-500 mx-8 opacity-50"></div>
      <div className="flex-1">
        <div className="text-3xl font-bold text-[#4ade80]">100+</div>
        <div className="text-[10px] text-gray-400 mt-1 uppercase tracking-widest">DSA partners</div>
      </div>
      <div className="hidden md:block h-12 border-l border-dotted border-gray-500 mx-8 opacity-50"></div>
      <div className="flex-1">
        <div className="text-3xl font-bold text-[#4ade80]">80+</div>
        <div className="text-[10px] text-gray-400 mt-1 uppercase tracking-widest">Bank Partnerships</div>
      </div>
    </div>

    {/* Mobile Improved - Better spacing and layout */}
    <div className="md:hidden flex flex-col items-center space-y-6 mt-8 mb-16">
      <div className="text-center">
        <div className="text-4xl font-bold text-[#4ade80]">1,000Cr+</div>
        <div className="text-xs text-gray-400 mt-2 uppercase tracking-widest">
          LOAN DISBURSEMENT
        </div>
      </div>

      <div className="text-center">
        <div className="text-4xl font-bold text-[#4ade80]">100+</div>
        <div className="text-xs text-gray-400 mt-2 uppercase tracking-widest">
          DSA PARTNERS
        </div>
      </div>

      <div className="text-center">
        <div className="text-4xl font-bold text-[#4ade80]">80+</div>
        <div className="text-xs text-gray-400 mt-2 uppercase tracking-widest">
          BANK PARTNERSHIPS
        </div>
      </div>
    </div>
  </div>

  {/* Brand Bar - Fixed positioning for mobile */}
  <div className="absolute left-1/2 -translate-x-1/2 bottom-[-20px] md:bottom-[-30px] w-[90%] max-w-5xl bg-white rounded-xl shadow-xl py-4 md:py-5 overflow-hidden z-20">
    <div className="flex animate-marquee-faster whitespace-nowrap items-center gap-4 md:gap-16">
      {[...Array(2)].map((_, set) => (
        <div key={set} className="flex items-center gap-4 md:gap-16 px-4 min-w-max">
          {bankLogos.map((bank) => (
            <img 
              key={bank.alt} 
              src={bank.src} 
              alt={bank.alt} 
              className="h-8 md:h-14 w-auto object-contain flex-shrink-0"
            />
          ))}
        </div>
      ))}
    </div>
  </div>

  {/* Keyframes animation for faster infinite scroll */}
  <style>
    {`
      @keyframes marquee-faster {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
      .animate-marquee-faster {
        display: flex;
        animation: marquee-faster 15s linear infinite;
      }
      .animate-marquee-faster:hover {
        animation-play-state: paused;
      }
    `}
  </style>
</section>

      {/* EMI Calculator - Reduced gap */}
      <section className="py-12 md:py-20 bg-white font-poppins flex items-center justify-center overflow-visible mb-6 md:mb-12">
        <div className="max-w-7xl mx-auto px-4 md:px-6 w-full">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-24">
            {/* TEXT CONTENT — FIRST ON MOBILE */}
            <div className="order-1 lg:order-2 text-center lg:text-left max-w-lg">
              <h2 className="text-2xl sm:text-3xl lg:text-[46px] font-bold text-[#1a2b49] mb-4 md:mb-6 leading-tight">
                EMI Calculator
              </h2>
              <p className="text-gray-500 text-base md:text-lg leading-relaxed mb-6 md:mb-8">
                Measure twice, cut once. Calculate your monthly outflow before you take a decision.
              </p>
              
              <div className="inline-flex lg:flex items-start gap-4 md:gap-6 border-l-4 border-[#3bb54a] pl-4 md:pl-6 py-2 text-left">
                <div>
                  <h4 className="text-lg md:text-xl font-bold text-[#1a2b49] mb-1">
                    Loan EMI Calculator
                  </h4>
                  <p className="text-gray-500 text-sm md:text-base">
                    Calculate how much it will take to enable short-term liquidity.
                  </p>
                </div>
              </div>
            </div>

            {/* CALCULATOR — SECOND ON MOBILE */}
            <div className="order-2 lg:order-1 relative w-full max-w-[440px]">
              <div className="bg-white rounded-xl py-8 md:py-16 px-6 md:px-10 md:pr-24 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] md:shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] border border-gray-50/50">
                <div className="mb-8 md:mb-10">
                  <p className="text-[11px] md:text-[12px] font-bold text-gray-400 uppercase tracking-widest mb-1">
                    EMI Calculator for
                  </p>
                  <h4 className="text-xl md:text-2xl font-extrabold text-[#1a2b49]">LOAN</h4>
                </div>

                <div className="space-y-10 md:space-y-12">
                  {[
                    { label: 'Loan Amount', val: loanAmount, set: setLoanAmount, min: 100000, max: 10000000, unit: '₹' },
                    { label: 'Interest Rate (%)', val: interestRate, set: setInterestRate, min: 1, max: 20, unit: '%' },
                    { label: 'Tenure (months)', val: tenure, set: setTenure, min: 1, max: 360, unit: '' }
                  ].map((item) => (
                    <div key={item.label} className="relative">
                      <div className="flex justify-between text-sm md:text-[15px] font-medium text-gray-500 mb-3 md:mb-4">
                        <span>{item.label}</span>
                        <span className="text-gray-900 font-bold pr-2">
                          {item.unit === '₹' ? '₹' : ''}
                          {item.val.toLocaleString('en-IN')}
                          {item.unit === '%' ? '%' : ''}
                        </span>
                      </div>
                      <input
                        type="range"
                        min={item.min}
                        max={item.max}
                        value={item.val}
                        onChange={(e) => item.set(+e.target.value)}
                        className="w-full accent-[#3bb54a] h-[6px] bg-gray-100 rounded-full appearance-none cursor-pointer"
                      />
                    </div>
                  ))}
                </div>

                {/* Mobile EMI Box */}
                <div className="mt-8 md:mt-10 lg:hidden p-4 md:p-5 bg-green-50/50 rounded-xl text-center border border-green-100">
                  <p className="text-[11px] text-gray-500 font-bold mb-1 uppercase tracking-wider">
                    Monthly EMI
                  </p>
                  <p className="text-2xl md:text-3xl font-bold text-[#3bb54a]">
                    ₹{calculateEMI().toLocaleString('en-IN')}
                  </p>
                </div>
              </div>

              {/* Desktop Floating Box */}
              <div className="hidden lg:block absolute top-1/2 -right-8 -translate-y-1/2 bg-white rounded-xl px-4 py-6 text-center shadow-[0_15px_40px_rgba(0,0,0,0.1)] border border-gray-50 z-30 min-w-[140px]">
                <p className="text-[11px] text-gray-500 font-bold mb-1 uppercase">
                  Monthly EMI
                </p>
                <p className="text-[24px] font-bold text-[#3bb54a] leading-tight">
                  ₹{calculateEMI().toLocaleString('en-IN')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section - Reduced gap */}
      <section className="py-12 md:py-16 bg-white mb-6 md:mb-12">
        <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
          
          {/* Heading */}
          <h2 className="text-2xl md:text-[42px] font-semibold text-[#1a2b49] leading-tight">
            Why is Himgiri the <span className="text-[#3bb54a]">#1</span> trusted
            <br className="hidden md:block" />
            financial brand across India
          </h2>

          {/* Green underline */}
          <div className="w-14 h-[3px] bg-[#3bb54a] mx-auto mt-4 md:mt-6 mb-8 md:mb-12 rounded-full" />

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Card 1 */}
            <div className="bg-[#ecfeff] rounded-2xl px-6 md:px-8 py-8 md:py-10 shadow-sm">
              <div className="mb-6 flex justify-center">
                <Landmark className="w-12 h-12 md:w-14 md:h-14 text-[#1a2b49]" strokeWidth={1.5} />
              </div>
              <h3 className="text-base md:text-lg font-semibold text-[#1a2b49] mb-3">
                Trusted Banking Partnerships
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Collaborate with leading banks to build credibility and expand your
                business reach.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-[#eff6ff] rounded-2xl px-6 md:px-8 py-8 md:py-10 shadow-sm">
              <div className="mb-6 flex justify-center">
                <HandCoins className="w-12 h-12 md:w-14 md:h-14 text-[#1a2b49]" strokeWidth={1.5} />
              </div>
              <h3 className="text-base md:text-lg font-semibold text-[#1a2b49] mb-3">
                High Payouts for Our Partners
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Enjoy higher returns with clear, transparent payout structures and
                reliable support.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-[#f0fdf4] rounded-2xl px-6 md:px-8 py-8 md:py-10 shadow-sm">
              <div className="mb-6 flex justify-center">
                <Headset className="w-12 h-12 md:w-14 md:h-14 text-[#1a2b49]" strokeWidth={1.5} />
              </div>
              <h3 className="text-base md:text-lg font-semibold text-[#1a2b49] mb-3">
                Dedicated Guidance & Support
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We understand your unique goals and guide you toward sustainable
                success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories - Reduced gap */}
      <section className="py-12 md:py-16 overflow-hidden mb-6 md:mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-[#000000] mb-6 md:mb-8">
         Himgiri Loan's Success Stories
        </h2>

        <div className="relative w-full overflow-hidden group">
          <div className="flex w-max gap-6 md:gap-8 animate-infinite-scroll-fast will-change-transform group-hover:[animation-play-state:paused]">
            {[...allReviews, ...allReviews].map((rev, i) => (
              <div
                key={i}
                className="w-[280px] md:w-[380px] flex-shrink-0 bg-white rounded-[24px] md:rounded-[28px] p-5 md:p-6 shadow-sm border border-gray-100"
              >
                <p className="text-gray-600 italic text-sm mb-4 md:mb-5 leading-relaxed">
                  "{rev.text}"
                </p>

                <div className="w-full h-px bg-gray-100 mb-4" />

                <h4 className="text-[#3bb54a] font-medium mb-1">
                  {rev.name}
                </h4>

                <div className="flex gap-1">
                  {[...Array(5)].map((_, j) => (
                    <Star
                      key={j}
                      className="w-3 h-3 fill-[#ffcc00] text-[#ffcc00]"
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Reduced gap */}
      <section className="w-full bg-white py-8 md:py-16 font-poppins mb-6 md:mb-12">
  <div className="max-w-[95%] mx-auto bg-[#3b4758] rounded-[40px] md:rounded-[80px] relative flex flex-col md:flex-row items-center overflow-hidden py-10 md:py-16">
    {/* Content Area */}
    <div className="z-20 w-full md:w-3/5 px-4 md:px-24 flex flex-col items-center md:items-start">
      <h2 className="text-white text-xl md:text-[38px] font-normal leading-[1.15] mb-2 tracking-tight text-center md:text-left">
        Register as a Himgiri Partner
      </h2>

      <p className="text-white/90 text-sm md:text-[22px] mb-4 md:mb-8 font-normal text-center md:text-left">
        Grow your business. Grow your career
      </p>

      <div className="flex gap-2">
        {/* Mobile: APK Download */}
        <a 
          href="https://himgiriloans.in/download.php"
          download="Himgiri-Partner-App.apk"
          className="md:hidden bg-white text-black px-6 py-2.5 rounded-full text-sm font-medium hover:bg-gray-100 transition-all shadow-sm"
        >
          Download Now
        </a>
        
        {/* Desktop: Contact Us */}
        <a 
          href="https://wa.me/919718998780?text=Hello%2C%20I'm%20visiting%20from%20the%20HIMGIRI%20LOANS%20website%20and%20would%20like%20to%20get%20more%20information%20about%20becoming%20a%20partner."
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-block bg-white text-black px-12 py-3 rounded-full text-[17px] font-medium hover:bg-gray-100 transition-all shadow-sm"
        >
          Contact Us
        </a>
      </div>
    </div>

    {/* Handshake Image - Hidden on Mobile, visible on md+ */}
    <div className="hidden md:flex md:absolute md:right-0 md:bottom-0 md:h-auto md:w-1/2 justify-end items-end pointer-events-none z-10">
      <img
        src={shake}
        alt="Partner Handshake"
        className="h-auto max-h-[250px] md:max-h-[300px] w-auto object-contain object-right-bottom mr-6 md:mr-20 lg:mr-32"
      />
    </div>

    {/* Mobile Gradient for readability */}
    <div className="absolute inset-0 bg-gradient-to-r from-[#3b4758] via-[#3b4758]/30 to-transparent md:hidden z-15"></div>
  </div>
</section>

      {/* REQUIRED STYLES */}
      <style>{`
        @keyframes infinite-scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        .animate-infinite-scroll-fast {
          animation: infinite-scroll 35s linear infinite;
        }
      `}</style>

    </div>  
  );
}