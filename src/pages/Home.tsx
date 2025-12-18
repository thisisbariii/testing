import { Star } from 'lucide-react';
import { useState } from 'react';

export default function Home() {
  const [loanAmount, setLoanAmount] = useState(1000000);
  const [interestRate, setInterestRate] = useState(10.5);
  const [tenure, setTenure] = useState(120);

  const allReviews = [
    { name: "Yash", text: "I had taken my personal loan from Tata Capital and executive Nitu Chauhan supported her best throughout the process. The approval was quick and with a good rate of interest." },
    { name: "Goutham N", text: "I got a call from Sapna Motwani who explained the Standard Chartered Credit Card so well. My card got approved in no time. Excellent support throughout!" },
    { name: "Sabdar Ali Shaikh", text: "Excellent service — thank you Monica and Mukesh for helping me complete the loan process smoothly and professionally. I really appreciate your hard work." },
    { name: "Kiran Kumar", text: "Would like to appreciate Mr. Manjeet Dahiya for taking accountability and staying connected through every query. Great job and excellent service!" },
    { name: "Bhanu Naidu", text: "I applied for a personal loan on Trisaran Money. Manish Sharma was knowledgeable and efficient — great follow-ups and excellent communication. Highly recommended!" }
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

  return (
    <div className="bg-white overflow-x-hidden font-['Poppins']">
      
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-10 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="text-center lg:text-left order-2 lg:order-1">
            <h1 className="text-3xl md:text-[45px] font-semibold leading-tight text-[#232625]/70">
              Best Platform to sell <span className="text-green-500">Financial and Banking Services</span> online
            </h1>
            <p className="mt-4 text-gray-600 text-sm md:text-base">
              Learn & Earn From Anywhere By Referring Customers And Educating Them On The Products Being Offered.
            </p>
            
            {/* Responsive Hero Button */}
            <button className="mt-8 bg-blue-600 text-white px-10 py-3 rounded-full text-base font-medium hover:bg-blue-700 transition-all shadow-lg">
              <span className="md:hidden">Download Now</span>
              <span className="hidden md:block">Register Now</span>
            </button>
          </div>
          <div className="flex items-center justify-center order-1 lg:order-2">
            <img src="/assets/mobile-logo.webp" alt="App" className="w-[65%] md:w-[80%] h-auto" />
          </div>
        </div>
      </section>

      {/* Grid Products */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-center text-gray-700 text-sm md:text-lg mb-10 px-4">
            Bringing you the <span className="font-semibold text-gray-900">Best Products</span> from <span className="font-semibold text-gray-900">Top Banks</span>
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
            {[
              { name: "CREDIT CARD", icon: "credit-card.webp", bg: "bg-cyan-100" },
              { name: "INSTANT LOAN", icon: "instant-loan.webp", bg: "bg-blue-200" },
              { name: "PERSONAL LOAN", icon: "personal-loan.webp", bg: "bg-yellow-100" },
              { name: "BUSINESS LOAN", icon: "business-loan.webp", bg: "bg-red-100" },
              { name: "HOME LOAN", icon: "home-loan.webp", bg: "bg-green-100" },
              { name: "LOAN AGAINST PROPERTY", icon: "loan-against.webp", bg: "bg-orange-100" },
              { name: "EDUCATION LOAN", icon: "education-loan.webp", bg: "bg-blue-200" },
              { name: "NEW CAR LOAN", icon: "new-car-loan.webp", bg: "bg-blue-200" },
              { name: "USED CAR LOAN", icon: "used-car-loan.webp", bg: "bg-yellow-100" },
              { name: "SAVING ACCOUNT", icon: "saving-account.webp", bg: "bg-red-100" },
              { name: "DEMAT ACCOUNT", icon: "demat-account.webp", bg: "bg-green-100" },
              { name: "INSURANCE", icon: "insurance.webp", bg: "bg-orange-100" },
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center text-center p-4 md:p-6 bg-white rounded-xl border border-gray-50 shadow-sm">
                <div className={`w-12 h-12 md:w-16 md:h-16 ${item.bg} rounded-xl flex items-center justify-center mb-4`}>
                  <img src={`/assets/${item.icon}`} alt={item.name} className="w-6 h-6 md:w-10 md:h-10 object-contain" />
                </div>
                <span className="text-[9px] md:text-[10px] font-bold text-gray-700 tracking-wider uppercase">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-[#3b4758] pt-10 pb-20 relative">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="mb-8">
            <h2 className="text-xl md:text-2xl font-medium text-white mb-2">Millions of Wishes, Enabled!</h2>
            <p className="text-gray-300 text-[10px] md:text-xs">We achieve such numbers, because you are more than a number to us.</p>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-0">
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
        </div>

        {/* Brand Bar */}
        {/* Brand Bar - Restored Color and Spacing */}
<div className="absolute left-1/2 -translate-x-1/2 bottom-[-30px] w-[90%] max-w-5xl bg-white rounded-xl shadow-xl py-5 overflow-hidden z-20">
  <div className="flex animate-infinite-scroll whitespace-nowrap items-center">
     {[1,2].map((set) => (
      <div key={set} className="flex items-center gap-10 md:gap-16 px-4 min-w-max">
        {['kotak','bajaj','idfc','b','l','h','Axis','aditya'].map((img) => (
          <img 
            key={img} 
            src={`/assets/${img}.webp`} 
            alt={img} 
            className="h-9 md:h-14 w-auto object-contain flex-shrink-0" 
            /* Removed grayscale and opacity filters */
          />
        ))}
      </div>
     ))}
  </div>
</div>
      </section>

      {/* EMI Calculator */}

<section className="py-20 md:py-28 bg-white font-poppins flex items-center justify-center overflow-visible">
  <div className="max-w-7xl mx-auto px-6 w-full">
    <div className="flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-36">
      
      {/* Calculator Container */}
      <div className="relative w-full max-w-[440px]">
        {/* Main Card: md:pr-24 provides space for the overlapping box */}
        <div className="bg-white rounded-xl py-12 md:py-16 px-10 md:pr-24 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] border border-gray-50/50">
          <div className="mb-10">
            <p className="text-[12px] font-bold text-gray-400 uppercase tracking-widest mb-1">EMI Calculator for</p>
            <h4 className="text-2xl font-extrabold text-[#1a2b49]">LOAN</h4>
          </div>

          <div className="space-y-12">
            {[
              { label: 'Loan Amount', val: loanAmount, set: setLoanAmount, min: 100000, max: 10000000, unit: '₹' },
              { label: 'Interest Rate (%)', val: interestRate, set: setInterestRate, min: 1, max: 20, unit: '%' },
              { label: 'Tenure (months)', val: tenure, set: setTenure, min: 1, max: 360, unit: '' }
            ].map((item) => (
              <div key={item.label} className="relative">
                <div className="flex justify-between text-[15px] font-medium text-gray-500 mb-4">
                  <span>{item.label}</span>
                  {/* pr-2 ensures numbers stay left of the floating box overlap */}
                  <span className="text-gray-900 font-bold pr-2">
                    {item.unit === '₹' ? '₹' : ''}{item.val.toLocaleString('en-IN')}{item.unit === '%' ? '%' : ''}
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

          {/* Mobile View Result Box */}
          <div className="mt-10 lg:hidden p-5 bg-green-50/50 rounded-xl text-center border border-green-100">
             <p className="text-[11px] text-gray-500 font-bold mb-1 uppercase tracking-wider">Monthly EMI</p>
             <p className="text-3xl font-bold text-[#3bb54a]">₹{calculateEMI().toLocaleString('en-IN')}</p>
          </div>
        </div>

        {/* REFINED OVERLAPPING BOX:
            1. Narrowed (min-w-[140px])
            2. Shifted further left (-right-8) to overlap properly
            3. Reduced padding for a tighter "Real" look
        */}
        <div className="hidden lg:block absolute top-1/2 -right-8 -translate-y-1/2 bg-white rounded-xl px-4 py-6 text-center shadow-[0_15px_40px_rgba(0,0,0,0.1)] border border-gray-50 z-30 min-w-[140px]">
          <p className="text-[11px] text-gray-500 font-bold mb-1 uppercase">Monthly EMI</p>
          <p className="text-[24px] font-bold text-[#3bb54a] leading-tight">
            ₹{calculateEMI().toLocaleString('en-IN')}
          </p>
        </div>
      </div>

      {/* Text Content Area */}
      <div className="text-center lg:text-left max-w-lg">
        <h2 className="text-4xl lg:text-[46px] font-bold text-[#1a2b49] mb-6 leading-tight tracking-tight">EMI Calculator</h2>
        <p className="text-gray-500 text-lg leading-relaxed mb-10">
          Measure twice, cut once. Calculate your monthly outflow before you take a decision.
        </p>
        
        <div className="inline-flex lg:flex items-start gap-6 border-l-4 border-[#3bb54a] pl-6 py-2 text-left">
          <div>
            <h4 className="text-xl font-bold text-[#1a2b49] mb-1">Loan EMI Calculator</h4>
            <p className="text-gray-500 text-sm md:text-base">Calculate how much it will take to enable short-term liquidity.</p>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

      {/* Success Stories */}
      <section className="py-20 overflow-hidden">
        <h2 className="text-3xl font-bold text-center text-[#1a2b49] mb-12">Success Stories</h2>
        <div className="flex animate-infinite-scroll-slow gap-8">
          {[...allReviews, ...allReviews].map((rev, i) => (
            <div key={i} className="w-[300px] md:w-[400px] flex-shrink-0 bg-white rounded-[32px] p-8 shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-gray-50">
              <p className="text-gray-600 italic text-sm mb-6 leading-relaxed">"{rev.text}"</p>
              <div className="w-full h-[1px] bg-gray-100 mb-5" />
              <h4 className="text-[#3bb54a] font-medium mb-1">{rev.name}</h4>
              <div className="flex gap-1">
                {[...Array(5)].map((_, j) => <Star key={j} className="w-3 h-3 fill-[#ffcc00] text-[#ffcc00]" />)}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Partner Section - FIXED PROPORTIONS */}
 <section className="w-full bg-white py-12 md:py-20 font-poppins">
  {/* The outer container width and deep corners (80px) to match the screenshot */}
  <div className="max-w-[95%] mx-auto bg-[#3b4758] rounded-[60px] md:rounded-[80px] relative h-[320px] md:h-[300px] flex items-center overflow-hidden">
    
    {/* Content Area - Aligned exactly like the 'real' image */}
    <div className="pl-10 md:pl-24 z-20 w-full lg:w-3/5">
      {/* - font-normal is weight 400 
          - tracking-tight makes the Poppins 400 look more professional 
      */}
      <h2 className="text-white text-3xl md:text-[38px] font-normal leading-[1.15] mb-2 tracking-tight">
        Register as a Trisaran Partner
      </h2>
      
      <p className="text-white/90 text-lg md:text-[22px] mb-10 font-normal">
        Grow your business. Grow your career
      </p>
      
      {/* Button: Pill shape, weight 500/medium for readability */}
      <button className="bg-white text-black px-12 py-3 rounded-full text-[17px] font-medium hover:bg-gray-100 transition-all shadow-sm">
        Register Now
      </button>
    </div>

    {/* Handshake Image:
        - Positioned to overlap the bottom edge slightly
        - 'h-[95%]' keeps them tall within the frame 
    */}
    <div className="absolute right-0 bottom-0 h-full w-1/2 flex justify-end items-end pointer-events-none z-10">
      <img 
        src="/assets/shake.webp" 
        alt="Partner Handshake" 
        className="h-[95%] w-auto object-contain object-right-bottom mr-6 md:mr-20 lg:mr-32" 
      />
    </div>

    {/* Mobile Gradient: Ensures text is readable over the image on small screens */}
    <div className="absolute inset-0 bg-gradient-to-r from-[#3b4758] via-[#3b4758]/30 to-transparent md:hidden z-15"></div>
  </div>
</section>

      <style>{`
        @keyframes scroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        .animate-infinite-scroll { animation: scroll 30s linear infinite; }
        .animate-infinite-scroll-slow { animation: scroll 50s linear infinite; }
      `}</style>

    </div>
  );
}