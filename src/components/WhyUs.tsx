import { UserCheck, ShieldCheck, TrendingUp, FileCheck, Users, MessageSquare } from "lucide-react";
import site from "@/content/siteConfig";

const iconMap = [UserCheck, ShieldCheck, TrendingUp, FileCheck, Users, MessageSquare];

const WhyUs = () => {
  return (
    <section className="py-24 bg-[#1a1a1a]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#2ECC71] font-semibold uppercase tracking-wider text-sm">Why Us</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-4 mb-6">
            Why Homeowners Choose
            <span className="text-[#2ECC71]"> {site.businessName}</span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {site.whyUs.map((item, index) => {
            const Icon = iconMap[index % iconMap.length];
            return (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-[#2ECC71]/30 transition-colors"
              >
                <div className="w-12 h-12 bg-[#2ECC71]/10 rounded-xl flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-[#2ECC71]" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-white/60 leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
