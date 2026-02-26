import { Award, ShieldCheck, Star, Trophy } from "lucide-react";
import site from "@/content/siteConfig";

const iconMap: Record<string, React.ElementType> = {
  Award,
  ShieldCheck,
  Star,
  Trophy,
};

const ValueProps = () => {
  return (
    <section className="py-16 bg-[#1a1a1a]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {site.valuePropositions.map((prop, index) => {
            const Icon = iconMap[prop.icon] || Award;
            return (
              <div
                key={index}
                className="text-center p-6"
              >
                <div className="w-14 h-14 bg-[#2ECC71]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-7 h-7 text-[#2ECC71]" />
                </div>
                <div className="text-3xl font-bold text-[#2ECC71] mb-1">{prop.value}</div>
                <div className="text-sm font-semibold text-white mb-2">{prop.title}</div>
                <p className="text-white/60 text-sm leading-relaxed">{prop.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ValueProps;
