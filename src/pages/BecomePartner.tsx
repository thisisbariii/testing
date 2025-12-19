import React from "react";
import { 
  Users, 
  TrendingUp, 
  Wallet, 
  Smartphone, 
  Download, 
  BadgeDollarSign, 
  PackageSearch, 
  HistoryIcon 
} from "lucide-react";

// Import all images from src/assets/
import indiaIntro from "@/assets/india-intro.png";
import home from "@/assets/home.jpeg";
import bankTile from "@/assets/bank-tile.jpeg";
import profile from "@/assets/profile.jpeg";
import withdrawal from "@/assets/withdrawal.jpeg";
import loanAgainst from "@/assets/loan-against.webp";
import bankEmployee from "@/assets/bank-employee.png";
import insAgent from "@/assets/ins-agent.png";
import piggy from "@/assets/piggy.png";
import bfsi from "@/assets/bfsi.png";
import aakash from "@/assets/aakash.png";
import sanjay from "@/assets/sanjay.png";
import vinay from "@/assets/vinay.png";
import shake from "@/assets/shake.webp";

// WhatsApp numbers
const whatsappNumber = "9718998780";
const whatsappMessage = "Hello, I'm visiting from the HIMGIRI LOANS website and would like to get more information about becoming a partner.";

export default function BecomePartner() {
  return (
    <div className="bg-white overflow-x-hidden font-poppins">
      
      {/* HERO SECTION */}
      <section className="relative bg-white overflow-hidden pt-8 md:pt-16 pb-8 md:pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          
          {/* Left Text Content */}
          <div className="z-10 text-center lg:text-left order-2 lg:order-1">
            <h1 className="text-2xl sm:text-3xl md:text-[44px] font-bold text-gray-900 mb-3 md:mb-4 tracking-tight leading-snug md:leading-[1.2]">
              Aapki apni finance ki dukaan
            </h1>

            <div className="w-16 h-1 bg-[#4caf50] mb-4 md:mb-6 mx-auto lg:mx-0"></div>
            
            <div className="max-w-xl mx-auto lg:mx-0 space-y-4 md:space-y-6">
              <p className="text-[#6b7280] text-sm md:text-[18px] leading-relaxed font-normal">
                Your reliable partner for personal, home, business, and car 
                loans. We simplify the loan process with expert guidance, 
                bank partnerships, and fast approvals.
              </p>
              
              <p className="text-[#4b5563] text-xs md:text-[15px] font-medium">
                Finance ki online dukaan app in 5 languages to reach customers online and offline.
              </p>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="relative flex justify-center lg:justify-end order-1 lg:order-2">
            <img 
              src={indiaIntro} 
              alt="India Map and Family" 
              className="w-full h-auto object-contain max-w-[280px] sm:max-w-[350px] md:max-w-[500px] lg:max-w-[600px]"
            />
          </div>
        </div>
      </section>

      {/* Dark CTA Band - DYNAMIC BUTTON */}
      <section className="bg-[#334155] py-4 md:py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-center gap-3 md:gap-8">
          <h2 className="text-white text-base md:text-[22px] font-medium text-center">
            Are you looking to become a Himgiri Loans Partner?
          </h2>
          
          {/* Single button that changes based on screen size */}
          <div>
            {/* Mobile: APK Download */}
            <a 
              href="https://himgiriloans.in/download.php"
              download="Himgiri-Partner-App.apk"
              className="md:hidden bg-[#00a651] hover:bg-[#008f45] text-white px-6 py-2 rounded-full text-sm font-semibold transition-all active:scale-95 shadow-md inline-block"
            >
              Download APK
            </a>
            
            {/* Desktop: Contact Us (WhatsApp) */}
            <a 
              href="https://wa.me/919718998780?text=Hello%2C%20I'm%20visiting%20from%20the%20HIMGIRI%20LOANS%20website%20and%20would%20like%20to%20get%20more%20information%20about%20becoming%20a%20partner."
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-block bg-[#00a651] hover:bg-[#008f45] text-white px-10 py-2.5 rounded-full text-[15px] font-semibold transition-all active:scale-95 shadow-md"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* APP FEATURES */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-xl md:text-[36px] font-bold text-[#1e293b] leading-tight">
              Aapki apni finance ki dukaan
            </h2>
            <div className="w-16 h-[5px] bg-[#4caf50] mx-auto mt-3 md:mt-4"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              { text: "A personalized app built just for you", img: home },
              { text: "Quickly create, organize, and track your customer leads", img: bankTile },
              { text: "Promote your business using your referral code", img: profile },
              { text: "One app to manage all your transactions effortlessly", img: withdrawal },
            ].map((item, i) => (
              <div 
                key={i} 
                className="bg-white rounded-[20px] md:rounded-[24px] p-6 md:p-8 flex flex-col items-center w-full shadow-[0_5px_20px_rgba(0,0,0,0.05)] md:shadow-[0_10px_50px_rgba(0,0,0,0.06)] border border-gray-50/50"
              >
                <div className="relative flex-grow flex items-center justify-center w-full mb-4 md:mb-6">
                  <div className="absolute w-20 h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 bg-[#f8fafc] rounded-full"></div>
                  <img 
                    src={item.img} 
                    alt="app-preview" 
                    className="relative z-10 h-32 md:h-40 lg:h-44 w-auto object-contain drop-shadow-lg md:drop-shadow-xl" 
                  />
                </div>
                <div className="text-center">
                  <p className="text-[#4b5563] text-sm md:text-[17px] font-semibold leading-snug">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY Himgiri */}
      <section className="py-12 md:py-20 bg-slate-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-xl md:text-[40px] font-bold text-[#1e293b] leading-tight max-w-4xl mx-auto">
              Why is Himgiri the #1 trusted platform for financial consultants
            </h2>
            <div className="w-16 md:w-20 h-[5px] bg-[#4caf50] mx-auto mt-4 md:mt-6"></div>
          </div>

          <div className="grid grid-cols-2 gap-y-8 md:gap-y-12 gap-x-4 md:gap-x-6 max-w-6xl mx-auto">
            <StatItem icon={<Users className="w-6 h-6 md:w-10 md:h-10"/>} label="1000+ of Partners" color="bg-blue-50" />
            <StatItem icon={<Download className="w-6 h-6 md:w-10 md:h-10"/>} label="Weekly payments" color="bg-green-50" />
            <StatItem icon={<Smartphone className="w-6 h-6 md:w-10 md:h-10"/>} label="Himgiri mobile app" color="bg-purple-50" />
            <StatItem icon={<Wallet className="w-6 h-6 md:w-10 md:h-10"/>} label="Upto Rs. 50,000/-" color="bg-yellow-50" />
          </div>
        </div>
      </section>

      {/* WHO CAN EARN */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-xl md:text-[38px] font-bold text-[#1e293b] mb-3 md:mb-4 leading-tight">
              Who can earn with Himgiri?
            </h2>
            <div className="w-16 md:w-20 h-[5px] bg-[#4caf50] mx-auto"></div>
          </div>

          <div className="bg-white rounded-[16px] md:rounded-[20px] shadow-[0_4px_20px_rgba(0,0,0,0.04)] md:shadow-[0_8px_40px_rgba(0,0,0,0.06)] border border-gray-100 p-4 md:p-12">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-4">
              {[
                { role: "Loan agents", img: loanAgainst },
                { role: "Former bank employee", img: bankEmployee },
                { role: "Insurance agents", img: insAgent },
                { role: "Wealth advisors", img: piggy },
                { role: "BFSI professionals", img: bfsi },
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center text-center group">
                  <div className="mb-2 md:mb-4 h-12 md:h-16 flex items-center justify-center">
                    <img 
                      src={item.img} 
                      alt={item.role} 
                      className="w-8 md:w-12 lg:w-16 h-8 md:h-12 lg:h-16 object-contain grayscale group-hover:grayscale-0 transition-all duration-300" 
                    />
                  </div>
                  <p className="text-[#1e293b] text-xs md:text-sm lg:text-[15px] font-semibold px-1">
                    {item.role}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* GROW BUSINESS */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-xl md:text-[38px] font-bold text-[#1e293b] mb-3 md:mb-4 leading-tight">
              Grow your business
            </h2>
            <div className="w-16 h-[5px] bg-[#4caf50] mx-auto"></div>
          </div>

          <div className="max-w-3xl mx-auto space-y-3 md:space-y-4">
            <StepCard title="GET CERTIFIED" desc="Learn from video courses and webinars to become an expert." />
            <StepCard title="ACQUIRE CUSTOMERS" desc="Use your personalized website and marketing materials." />
            <StepCard title="SELL FINANCIAL PRODUCTS" desc="Sell our products and earn leading commissions." />
          </div>
        </div>
      </section>

      {/* SUCCESS SECTION */}
      <section className="relative overflow-hidden bg-[#f8fafc] py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-xl md:text-[40px] font-bold text-[#1e293b] leading-tight">
              How we ensure your success
            </h2>
            <div className="w-16 md:w-20 h-[5px] bg-[#4caf50] mx-auto mt-3 md:mt-4"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 md:gap-x-12 gap-y-8 md:gap-y-12 max-w-6xl mx-auto">
            <SuccessFeature icon={<PackageSearch />} title="Customized products" desc="Created for people traditional institutions do not serve." />
            <SuccessFeature icon={<TrendingUp />} title="Huge unmet demand" desc="300Mn customers in small towns across India." />
            <SuccessFeature icon={<BadgeDollarSign />} title="Great commissions" desc="Enjoy the industry's leading commissions." />
            <SuccessFeature icon={<HistoryIcon />} title="7-day payment cycle" desc="Earnings credited 4 times in a month!" />
            <SuccessFeature icon={<Users />} title="Own your customers" desc="We don't sell directly to customers." />
            <SuccessFeature icon={<Smartphone />} title="App in your language" desc="5 languages to choose from." />
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4 leading-tight">
              What our Himgiri Partners say
            </h2>
            <div className="w-16 h-1 bg-green-500 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Testimonial 1 - Aakash Saxena */}
            <div className="bg-gray-50 p-6 md:p-8 rounded-xl md:rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <p className="text-gray-600 leading-relaxed mb-4 md:mb-6 text-sm md:text-base">
                I joined Himgiri 5 months ago. The app is very user friendly and the personalized website and marketing features helped me get more customers. The partner support team is very supportive and cooperative as well. All my queries have been resolved by them quickly.
              </p>
              <div className="flex items-center gap-3 md:gap-4">
                <img 
                  src={aakash} 
                  alt="Aakash Saxena" 
                  className="w-12 h-12 md:w-16 md:h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold text-gray-900 text-sm md:text-base">Aakash Saxena</h3>
                  <p className="text-xs md:text-sm text-gray-500">Himgiri Certified Partner</p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 - Sanjay Yadav */}
            <div className="bg-gray-50 p-6 md:p-8 rounded-xl md:rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <p className="text-gray-600 leading-relaxed mb-4 md:mb-6 text-sm md:text-base">
                I feel proud to be a Himgiri Partner. This job has earned me respect in society. Also I am very happy to help people when they are in financial difficulties. The appreciation that I get from my customers motivates me to always do my best.
              </p>
              <div className="flex items-center gap-3 md:gap-4">
                <img 
                  src={sanjay} 
                  alt="Sanjay Yadav" 
                  className="w-12 h-12 md:w-16 md:h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold text-gray-900 text-sm md:text-base">Sanjay Yadav</h3>
                  <p className="text-xs md:text-sm text-gray-500">Himgiri Certified Partner</p>
                </div>
              </div>
            </div>

            {/* Testimonial 3 - Adesh Chaudhary */}
            <div className="bg-gray-50 p-6 md:p-8 rounded-xl md:rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <p className="text-gray-600 leading-relaxed mb-4 md:mb-6 text-sm md:text-base">
                I am glad that I chose to associate myself with Himgiri. They have some unique financial products and selling those to people in need makes me very happy because through Himgiri I could make an impact in people's lives. They have the best commissions in the market.
              </p>
              <div className="flex items-center gap-3 md:gap-4">
                <img 
                  src={vinay} 
                  alt="Adesh Chaudhary" 
                  className="w-12 h-12 md:w-16 md:h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold text-gray-900 text-sm md:text-base">Adesh Chaudhary</h3>
                  <p className="text-xs md:text-sm text-gray-500">Himgiri Certified Partner</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA - DYNAMIC BUTTON */}
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
    </div>
  );
}

// Sub-components
function StatItem({ icon, label, color }: { icon: React.ReactNode; label: string; color: string }) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className={`w-14 h-14 md:w-20 md:h-20 lg:w-24 lg:h-24 ${color} rounded-full flex items-center justify-center mb-3 md:mb-6 shadow-sm`}>
        {icon}
      </div>
      <p className="text-[#1e293b] text-xs md:text-base lg:text-xl font-semibold leading-tight px-1 md:px-2">{label}</p>
    </div>
  );
}

function StepCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="bg-white border border-gray-200 rounded-[12px] md:rounded-[14px] px-4 md:px-8 py-3 md:py-5 shadow-sm hover:border-[#4caf50] transition-colors">
      <h3 className="text-[#0f172a] text-sm md:text-[17px] font-bold mb-1 tracking-tight">{title}</h3>
      <p className="text-[#64748b] text-xs md:text-[15px] leading-relaxed">{desc}</p>
    </div>
  );
}

function SuccessFeature({ icon, title, desc }: { icon: React.ReactElement; title: string; desc: string }) {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start gap-3 md:gap-4 text-center md:text-left">
      <div className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-full border-2 border-dashed border-gray-300 flex items-center justify-center bg-white">
        {React.cloneElement(icon, { className: "w-6 h-6 md:w-8 md:h-8 text-[#4caf50] stroke-[1.5]" })}
      </div>
      <div className="flex flex-col">
        <h3 className="text-[#1e293b] text-base md:text-[19px] font-bold mb-1">{title}</h3>
        <p className="text-[#64748b] text-xs md:text-[15px] leading-relaxed max-w-[240px]">{desc}</p>
      </div>
    </div>
  );
}