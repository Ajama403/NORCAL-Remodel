import { Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import site from "@/content/siteConfig";

const CTABanner = () => {
  return (
    <section className="py-16 relative overflow-hidden" style={{
      background: "linear-gradient(135deg, #F9A826 0%, #E8931E 40%, #FFC107 100%)",
    }}>
      <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-transparent to-white/5" />
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
          Schedule Your Free Consultation Today!
        </h2>
        <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
          Ready to start your project? Get a free, no-obligation estimate from Orange County's trusted remodeling team.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-white text-foreground hover:bg-white/90 font-semibold text-lg px-8 h-14"
            asChild
          >
            <a href={`tel:${site.phoneTel}`} className="flex items-center gap-2">
              <Phone className="w-5 h-5" />
              {site.phoneDisplay}
            </a>
          </Button>
          <Button
            size="lg"
            className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-semibold text-lg px-8 h-14"
            asChild
          >
            <a href="#contact" className="flex items-center gap-2">
              {site.primaryCtaLabel}
              <ArrowRight className="w-5 h-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
