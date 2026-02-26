import { ArrowRight, Utensils, Bath, Layers, Grid3X3, Hammer, Home, HardHat } from "lucide-react";
import { Button } from "@/components/ui/button";
import site from "@/content/siteConfig";

const Services = () => {
  const serviceIcons = [Utensils, Bath, Layers, Grid3X3, Hammer, Home, HardHat];
  const serviceImages = [
    "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1556909114-44e3e70034e2?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80",
  ];
  const services = site.services.map((service, index) => ({
    ...service,
    description: service.desc,
    icon: serviceIcons[index % serviceIcons.length],
    image: serviceImages[index % serviceImages.length],
  }));

  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#2ECC71] font-semibold uppercase tracking-wider text-sm">Our Services</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#333] mt-4 mb-6">
            Kitchen, Bath & Home Remodeling
            <span className="text-[#2ECC71]"> in {site.baseCity}</span>
          </h2>
          <p className="text-gray-600 text-lg">
            From kitchens and bathrooms to full home additions, {site.businessName} handles it all with our own crew. Licensed, bonded, and owner-operated.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-[#f5f5f5] rounded-2xl overflow-hidden hover:shadow-elegant transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={`${service.title} service in ${site.baseCity}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/80 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <div className="w-12 h-12 bg-[#2ECC71] rounded-xl flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#333] mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                {service.items && service.items.length > 0 && (
                  <ul className="space-y-1.5 mb-4">
                    {service.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#2ECC71] shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
                <a
                  href="#contact"
                  className="inline-flex items-center text-[#2ECC71] font-semibold hover:gap-3 gap-2 transition-all"
                >
                  Get Free Quote
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6 text-lg">Not sure what you need? Call us and we'll figure it out together.</p>
          <Button className="bg-[#2ECC71] hover:bg-[#27AE60] text-white font-semibold h-12 px-8" asChild>
            <a href="#contact">{site.contact.button}</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
