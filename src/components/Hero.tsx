import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck, Star } from "lucide-react";
import site from "@/content/siteConfig";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 bg-[#1a1a1a]">
      {/* Background Image with Dark Overlay */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('${site.images.hero}')` }}
      >
        <div className="absolute inset-0 bg-[#1a1a1a]/85" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-8 animate-fade-up">
          {/* Rating Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
            <Star className="w-4 h-4 text-[#2ECC71] fill-[#2ECC71]" />
            <span className="text-sm font-medium text-white">
              {site.tagline}
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-white">
            {site.heroHeadline}
          </h1>

          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
            {site.heroSubheadline}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-[#2ECC71] hover:bg-[#27AE60] text-white font-semibold text-lg px-8 h-14"
              asChild
            >
              <a href="#contact" className="flex items-center gap-2">
                {site.primaryCtaLabel}
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white/30 text-white bg-white/5 hover:bg-white/10 h-14 px-8"
              asChild
            >
              <a href="#gallery">{site.secondaryCtaLabel}</a>
            </Button>
          </div>

          {/* Trust Bar */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 pt-4 text-sm text-white/70">
            {site.trust.map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#2ECC71]" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
