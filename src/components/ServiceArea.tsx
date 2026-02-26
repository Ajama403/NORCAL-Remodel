import { MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import site from "@/content/siteConfig";

const ServiceArea = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-secondary font-semibold uppercase tracking-wider text-sm">
            Service Area
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
            Serving Orange County &
            <span className="text-gradient"> Surrounding Areas</span>
          </h2>
        </div>

        {/* Neighborhood Pills */}
        <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
          {site.neighborhoods.map((area) => (
            <span
              key={area}
              className="inline-flex items-center gap-2 bg-card px-4 py-2 rounded-full shadow-card text-sm font-medium text-foreground"
            >
              <MapPin className="w-4 h-4 text-secondary" />
              {area}
            </span>
          ))}
        </div>

        {/* Don't see your area CTA */}
        <div className="text-center mt-10">
          <p className="text-muted-foreground mb-4">
            Don't see your area? Give us a call — we may still be able to help.
          </p>
          <Button
            variant="outline"
            className="border-secondary text-secondary hover:bg-secondary hover:text-white font-semibold"
            asChild
          >
            <a href={`tel:${site.phoneTel}`} className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              {site.phoneDisplay}
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServiceArea;
