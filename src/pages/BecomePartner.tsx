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

export default function BecomePartner() {
  return (
    <div className="bg-white overflow-x-hidden font-poppins">
      
      {/* HERO SECTION */}
      <section className="relative bg-white overflow-hidden pt-8 md:pt-16 pb-12">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          
          {/* Left Text Content */}
          <div className="z-10 text-center md:text-left">
            <h1 className="text-3xl md:text-[44px] font-bold text-gray-900 mb-4 tracking-tight leading-tight">
              Aapki apni finance ki dukaan
            </h1>
            <div className="w-16 h-1 bg-[#4caf50] mb-6 mx-auto md:mx-0"></div>
            
            <div className="max-w-xl space-y-6">
              <p className="text-[#6b7280] text-base md:text-[18px] leading-relaxed font-normal">
                Your reliable partner for personal, home, business, and car 
                loans. We simplify the loan process with expert guidance, 
                bank partnerships, and fast approvals.
              </p>
              
              <p className="text-[#4b5563] text-sm md:text-[15px] font-medium">
                Finance ki online dukaan app in 5 languages to reach customers online and offline.
              </p>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="relative flex justify-center md:justify-end">
            <img 
              src="/assets/india-intro.png" 
              alt="India Map and Family" 
              className="w-full h-auto object-contain max-w-[350px] md:max-w-[600px]"
            />
          </div>
        </div>
      </section>

      {/* Dark CTA Band - DYNAMIC BUTTON */}
      <section className="bg-[#334155] py-6 md:py-5">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
          <h2 className="text-white text-lg md:text-[22px] font-medium text-center">
            Are you looking to become a Trisaran Money Partner?
          </h2>
          <button className="bg-[#00a651] hover:bg-[#008f45] text-white px-10 py-2.5 rounded-full text-[15px] font-semibold transition-all active:scale-95 shadow-md">
            <span className="md:hidden">Download Now</span>
            <span className="hidden md:block">Register</span>
          </button>
        </div>
      </section>

      {/* APP FEATURES */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-[36px] font-bold text-[#1e293b]">
              Aapki apni finance ki dukaan
            </h2>
            <div className="w-16 h-[5px] bg-[#4caf50] mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { text: "A personalized app built just for you", img: "/assets/home.jpeg" },
              { text: "Quickly create, organize, and track your customer leads", img: "/assets/bank-tile.jpeg" },
              { text: "Promote your business using your referral code", img: "/assets/profile.jpeg" },
              { text: "One app to manage all your transactions effortlessly", img: "/assets/withdrawal.jpeg" },
            ].map((item, i) => (
              <div 
                key={i} 
                className="bg-white rounded-[24px] p-8 flex flex-col items-center w-full shadow-[0_10px_50px_rgba(0,0,0,0.06)] border border-gray-50/50"
              >
                <div className="relative flex-grow flex items-center justify-center w-full mb-6">
                  <div className="absolute w-28 h-28 md:w-32 md:h-32 bg-[#f8fafc] rounded-full"></div>
                  <img 
                    src={item.img} 
                    alt="app-preview" 
                    className="relative z-10 h-40 md:h-44 w-auto object-contain drop-shadow-xl" 
                  />
                </div>
                <div className="text-center">
                  <p className="text-[#4b5563] text-base md:text-[17px] font-semibold leading-snug">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY TRISARAN */}
      <section className="py-16 md:py-24 bg-slate-50/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-[40px] font-bold text-[#1e293b] leading-tight max-w-4xl mx-auto">
              Why is Trisaran the #1 trusted platform for financial consultants
            </h2>
            <div className="w-20 h-[5px] bg-[#4caf50] mx-auto mt-6"></div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-6 max-w-6xl mx-auto">
            <StatItem icon={<Users className="w-8 h-8 md:w-10 md:h-10"/>} label="1000+ of Partners" color="bg-blue-50" />
            <StatItem icon={<Download className="w-8 h-8 md:w-10 md:h-10"/>} label="Weekly payments" color="bg-green-50" />
            <StatItem icon={<Smartphone className="w-8 h-8 md:w-10 md:h-10"/>} label="Trisaran mobile app" color="bg-purple-50" />
            <StatItem icon={<Wallet className="w-8 h-8 md:w-10 md:h-10"/>} label="Upto Rs. 50,000/-" color="bg-yellow-50" />
          </div>
        </div>
      </section>

      {/* WHO CAN EARN */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-[38px] font-bold text-[#1e293b] mb-4">
              Who can earn with Trisaran?
            </h2>
            <div className="w-20 h-[5px] bg-[#4caf50] mx-auto"></div>
          </div>

          <div className="bg-white rounded-[20px] shadow-[0_8px_40px_rgba(0,0,0,0.06)] border border-gray-100 p-6 md:p-12">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-4">
              {[
                { role: "Loan agents", img: "/assets/loan-against.webp" },
                { role: "Former bank employee", img: "/assets/bank-employee.png" },
                { role: "Insurance agents", img: "/assets/ins-agent.png" },
                { role: "Wealth advisors", img: "/assets/piggy.png" },
                { role: "BFSI professionals", img: "/assets/bfsi.png" },
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center text-center group">
                  <div className="mb-4 h-16 flex items-center justify-center">
                    <img 
                      src={item.img} 
                      alt={item.role} 
                      className="w-12 md:w-16 h-12 md:h-16 object-contain grayscale group-hover:grayscale-0 transition-all duration-300" 
                    />
                  </div>
                  <p className="text-[#1e293b] text-sm md:text-[15px] font-semibold">
                    {item.role}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* GROW BUSINESS */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-[38px] font-bold text-[#1e293b] mb-4">
              Grow your business
            </h2>
            <div className="w-16 h-[5px] bg-[#4caf50] mx-auto"></div>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            <StepCard title="GET CERTIFIED" desc="Learn from video courses and webinars to become an expert." />
            <StepCard title="ACQUIRE CUSTOMERS" desc="Use your personalized website and marketing materials." />
            <StepCard title="SELL FINANCIAL PRODUCTS" desc="Sell our products and earn leading commissions." />
          </div>
        </div>
      </section>

      {/* SUCCESS SECTION */}
      <section className="relative overflow-hidden bg-[#f8fafc] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-[40px] font-bold text-[#1e293b]">
              How we ensure your success
            </h2>
            <div className="w-20 h-[5px] bg-[#4caf50] mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12 max-w-6xl mx-auto">
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
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What our Partners say
            </h2>
            <div className="w-16 h-1 bg-green-500 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Testimonial 
              name="Aakash Saxena" 
              text="I joined Trisaran 5 months ago. The app is very user friendly and the personalized website features helped me get more customers."
              img="/assets/aakash.png"
            />
            <Testimonial 
              name="Sanjay Yadav" 
              text="I feel proud to be a Trisaran Partner. This job has earned me respect in society. I am happy to help people in difficulties."
              img="/assets/Sanjay.png"
            />
          </div>
        </div>
      </section>

      {/* FINAL CTA - DYNAMIC BUTTON */}
      <section className="w-full bg-white py-12 md:py-20">
        <div className="max-w-[95%] mx-auto bg-[#3b4758] rounded-[40px] md:rounded-[80px] relative min-h-[300px] flex items-center overflow-hidden p-8 md:p-0">
          <div className="md:pl-24 z-20 w-full lg:w-3/5 text-center md:text-left">
            <h2 className="text-white text-2xl md:text-[38px] font-normal leading-tight mb-4">
              Register as a Trisaran Partner
            </h2>
            <p className="text-white/90 text-base md:text-[22px] mb-8">
              Grow your business. Grow your career.
            </p>
            <button className="bg-white text-black px-10 py-3 rounded-full text-base font-semibold hover:bg-gray-100 transition-all shadow-lg active:scale-95">
              <span className="md:hidden">Download Now</span>
              <span className="hidden md:block">Register Now</span>
            </button>
          </div>

          <div className="hidden md:flex absolute right-0 bottom-0 h-full w-1/2 justify-end items-end pointer-events-none z-10">
            <img 
              src="/assets/shake.webp" 
              alt="Handshake" 
              className="h-[90%] w-auto object-contain mr-10 lg:mr-32" 
            />
          </div>
        </div>
      </section>
    </div>
  );
}

// Sub-components
function StatItem({ icon, label, color }: { icon: React.ReactNode; label: string; color: string }) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className={`w-20 h-20 md:w-24 md:h-24 ${color} rounded-full flex items-center justify-center mb-4 md:mb-6 shadow-sm`}>
        {icon}
      </div>
      <p className="text-[#1e293b] text-base md:text-xl font-semibold leading-tight px-2">{label}</p>
    </div>
  );
}

function StepCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="bg-white border border-gray-200 rounded-[14px] px-6 md:px-8 py-5 shadow-sm hover:border-[#4caf50] transition-colors">
      <h3 className="text-[#0f172a] text-base md:text-[17px] font-bold mb-1 tracking-tight">{title}</h3>
      <p className="text-[#64748b] text-sm md:text-[15px] leading-relaxed">{desc}</p>
    </div>
  );
}

function SuccessFeature({ icon, title, desc }: { icon: React.ReactElement; title: string; desc: string }) {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start gap-4 text-center md:text-left">
      <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-dashed border-gray-300 flex items-center justify-center bg-white">
        {React.cloneElement(icon, { className: "w-8 h-8 text-[#4caf50] stroke-[1.5]" })}
      </div>
      <div className="flex flex-col">
        <h3 className="text-[#1e293b] text-lg md:text-[19px] font-bold mb-1">{title}</h3>
        <p className="text-[#64748b] text-sm md:text-[15px] leading-relaxed max-w-[240px]">{desc}</p>
      </div>
    </div>
  );
}

function Testimonial({ name, text, img }: { name: string; text: string; img: string }) {
  return (
    <div className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-gray-100">
      <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6 italic">"{text}"</p>
      <div className="flex items-center gap-4">
        <img src={img} alt={name} className="w-12 h-12 md:w-16 md:h-16 rounded-full object-cover border-2 border-green-100" />
        <div>
          <h4 className="font-bold text-gray-900 text-sm md:text-base">{name}</h4>
          <p className="text-[11px] md:text-xs text-gray-500 uppercase tracking-wider">Certified Partner</p>
        </div>
      </div>
    </div>
  );
}