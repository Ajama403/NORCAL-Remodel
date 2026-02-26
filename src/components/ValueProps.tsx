import { Award, Clock, Star, ShieldCheck } from "lucide-react";
import site from "@/content/siteConfig";

const iconMap: Record<string, React.ElementType> = {
  Award,
  Clock,
  Star,
  ShieldCheck,
};

const ValueProps = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {site.valuePropositions.map((prop, index) => {
            const Icon = iconMap[prop.icon] || Award;
            return (
              <div
                key={index}
                className="bg-card p-6 rounded-2xl shadow-card hover:shadow-elegant transition-all duration-300 text-center"
              >
                <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-7 h-7 text-secondary" />
                </div>
                <div className="text-2xl font-bold text-foreground mb-1">{prop.value}</div>
                <div className="text-sm font-semibold text-foreground mb-2">{prop.title}</div>
                <p className="text-muted-foreground text-sm leading-relaxed">{prop.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ValueProps;
