import React from 'react';
import { 
  Users, Wallet, Smartphone, Landmark, 
  ShieldCheck, PiggyBank, Briefcase, 
  CheckCircle 
} from 'lucide-react';

// --- TYPES / INTERFACES ---
interface StatItemProps {
  icon: React.ReactElement;
  label: string;
}

interface WhoCardProps {
  icon: React.ReactElement;
  title: string;
}

interface TextContentProps {
  title: string;
  desc: string;
}

interface TestimonialProps {
  name: string;
  text: string;
}

export default function BecomePartner() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-800">
      
      {/* --- HERO SECTION --- */}
      <section className="bg-white py-12 md:py-20 px-6 max-w-7xl mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
            Aapki apni finance ki dukaan
          </h1>
          <p className="text-gray-600 text-lg mb-8 max-w-lg">
            Your reliable partner for personal, home, business, and car loans. We simplify the loan process with expert guidance, bank partnerships, and fast approvals with ensuring the best interest rates, easy documentation, and quick disbursal.
          </p>
          <p className="text-sm text-gray-500 italic">Finance ki online dukaan app in 5 languages to reach customers online and offline</p>
        </div>
        <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
          {/* Placeholder for the Map/Team image */}
          <div className="w-full aspect-video bg-gray-100 border-2 border-dashed border-gray-300 flex items-center justify-center rounded-xl">
            <p className="text-gray-400">Hero Image Placeholder</p>
          </div>
        </div>
      </section>

      {/* --- CTA STRIP --- */}
      <div className="bg-[#2D3E50] py-5 px-6 flex flex-col md:flex-row justify-center items-center gap-6 text-white">
        <span className="text-lg font-medium text-center">Are you looking to become a Trisaran Money Partner?</span>
        <button className="bg-[#00A859] hover:bg-green-600 px-8 py-2 rounded-md font-semibold transition shadow-md">
          Register
        </button>
      </div>

      {/* --- APP FEATURES --- */}
      <section className="py-20 px-6 max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-2">Aapki apni finance ki dukaan</h2>
        <div className="w-20 h-1 bg-[#00A859] mx-auto mb-12"></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[
            "A personalized app built just for you",
            "Quickly create, organize, and track your customer leads",
            "Promote your business using your referral code",
            "One app to manage all your transactions effortlessly"
          ].map((text, i) => (
            <div key={i} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
              <div className="h-48 bg-gray-50 mb-4 rounded border border-dashed border-gray-200 flex items-center justify-center">
                <span className="text-xs text-gray-400">App Screen {i+1}</span>
              </div>
              <p className="text-sm font-medium text-gray-700">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- TRUST STATS --- */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">Why is Trisaran the #1 trusted platform for financial consultants</h2>
          <div className="w-20 h-1 bg-[#00A859] mx-auto mb-16"></div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <StatItem icon={<Users className="text-yellow-600" />} label="1000+ of Partners" />
            <StatItem icon={<Wallet className="text-yellow-600" />} label="Weekly payments" />
            <StatItem icon={<Smartphone className="text-yellow-600" />} label="Trisaran mobile app" />
            <StatItem icon={<Landmark className="text-yellow-600" />} label="Upto Rs. 50,000/-" />
          </div>
        </div>
      </section>

      {/* --- WHO CAN EARN --- */}
      <section className="py-20 px-6 max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-2">Who can earn with Trisaran?</h2>
        <div className="w-20 h-1 bg-[#00A859] mx-auto mb-12"></div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          <WhoCard icon={<Briefcase />} title="Loan agents" />
          <WhoCard icon={<Landmark />} title="Former bank employee" />
          <WhoCard icon={<ShieldCheck />} title="Insurance agents" />
          <WhoCard icon={<PiggyBank />} title="Wealth advisors" />
          <WhoCard icon={<Users />} title="BFSI professionals" />
        </div>
      </section>

      {/* --- GROWTH STEPS --- */}
      <section className="py-16 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-2">Grow your financial consultancy business</h2>
        <div className="w-20 h-1 bg-[#00A859] mx-auto mb-12"></div>
        <div className="space-y-4">
          <GrowthStep title="GET CERTIFIED" desc="Learn from a series of video courses and webinars to become an expert in our financial products" />
          <GrowthStep title="ACQUIRE CUSTOMERS" desc="Use your personalized website and online/offline marketing materials to grow your customers base" />
          <GrowthStep title="SELL FINANCIAL PRODUCTS" desc="Advise and sell our financial products to customers and earn the industry's leading commissions" />
        </div>
      </section>

      {/* --- SUCCESS METRICS --- */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-2">How we ensure your success</h2>
          <div className="w-20 h-1 bg-[#00A859] mx-auto mb-16"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <FeatureItem title="Customized products" desc="Especially created for people that traditional finance institution do not serve" />
            <FeatureItem title="Huge unmet demand" desc="300Mn customers and their families in small towns across India" />
            <FeatureItem title="Great commissions" desc="Enjoy the industry's leading commissions" />
            <FeatureItem title="7-day payment cycle" desc="Your earnings credited 4 times in a month!" />
            <FeatureItem title="Own your customers" desc="We don't sell directly to customers" />
            <FeatureItem title="App in your language" desc="5 languages to choose from" />
          </div>
        </div>
      </section>

      {/* --- TESTIMONIALS --- */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-2">What our Trisaran Partners say</h2>
        <div className="w-20 h-1 bg-[#00A859] mx-auto mb-12"></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Testimonial name="Aakash Saxena" text="I joined Trisaran 5 months ago. The app is very user friendly and the personalized website and marketing features helped me get more customers." />
          <Testimonial name="Sanjay Yadav" text="I feel proud to be a Trisaran Partner. This job has earned me respect in society. Also I am very happy to help people when they are in financial difficulties." />
          <Testimonial name="Adesh Chaudhary" text="I am glad that I chose to associate myself with Trisaran. They have some unique financial products and selling those to people in need makes me very happy." />
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-[#101828] text-white py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 text-sm">
          <div>
            <h4 className="font-bold mb-4 border-b border-gray-700 pb-2">About Us</h4>
            <p className="text-gray-400">TRISARAN MONEY was established in 2024 with a mission to promote rural development, financial inclusion, and women empowerment across India.</p>
          </div>
          <div>
            <h4 className="font-bold mb-4 border-b border-gray-700 pb-2">Useful Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Home</li>
              <li>About Us</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
              <li>Partner</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 border-b border-gray-700 pb-2">Register Office</h4>
            <p className="text-gray-400">TRISARAN GRAMEEN MICRO APPEX FEDERATION</p>
            <p className="text-gray-400">CIN: U88900MH2024NPL431405</p>
            <p className="text-gray-400">Email: contact@trisaranmoney.in</p>
          </div>
          <div>
            <h4 className="font-bold mb-4 border-b border-gray-700 pb-2">Contact Us</h4>
            <p className="text-gray-400">Anjanvel Bouddhwadi, Guhagar, Ratnagiri, Maharashtra 415634</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

{/* --- TYPED SUB-COMPONENTS --- */}

const StatItem = ({ icon, label }: StatItemProps) => (
  <div className="flex flex-col items-center">
    <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center mb-4">
      {React.cloneElement(icon, { size: 32 })}
    </div>
    <p className="font-semibold text-gray-800 text-sm">{label}</p>
  </div>
);

const WhoCard = ({ icon, title }: WhoCardProps) => (
  <div className="flex flex-col items-center p-4">
    <div className="mb-3 text-gray-600">
      {React.cloneElement(icon, { size: 40, strokeWidth: 1.5 })}
    </div>
    <p className="text-[10px] md:text-xs font-bold uppercase text-gray-500 text-center">{title}</p>
  </div>
);

const GrowthStep = ({ title, desc }: TextContentProps) => (
  <div className="border border-gray-200 p-6 rounded-lg hover:border-[#00A859] transition group">
    <h4 className="font-bold text-sm mb-2 group-hover:text-[#00A859]">{title}</h4>
    <p className="text-gray-600 text-sm">{desc}</p>
  </div>
);

const FeatureItem = ({ title, desc }: TextContentProps) => (
  <div className="flex gap-4">
    <div className="text-[#00A859] shrink-0"><CheckCircle size={24} /></div>
    <div>
      <h4 className="font-bold text-lg mb-1">{title}</h4>
      <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
    </div>
  </div>
);

const Testimonial = ({ name, text }: TestimonialProps) => (
  <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm">
    <p className="text-gray-600 text-sm mb-6 italic leading-relaxed">"{text}"</p>
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 bg-gray-200 rounded-full overflow-hidden"></div>
      <div>
        <p className="font-bold text-sm text-gray-900">{name}</p>
        <p className="text-[10px] text-[#00A859] font-bold">TRISARAN CERTIFIED PARTNER</p>
      </div>
    </div>
  </div>
);