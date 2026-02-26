import { Award, Users, Clock, ShieldCheck, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import site from "@/content/siteConfig";

const About = () => {
  const stats = [
    { icon: Award, value: `${site.yearsInBusiness}+ Years`, label: "Serving the Bay Area" },
    { icon: Users, value: "Top 13%", label: "CA Contractors on BuildZoom" },
    { icon: Clock, value: site.businessHours.shortDisplay, label: "Business Hours" },
    { icon: ShieldCheck, value: site.licenseNumber, label: site.accreditationLabel },
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Grid */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80"
                alt={`Kitchen remodel project in ${site.baseCity}`}
                className="rounded-2xl shadow-card h-64 object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1556909114-44e3e70034e2?auto=format&fit=crop&w=800&q=80"
                alt={`Flooring installation project in ${site.baseCity}`}
                className="rounded-2xl shadow-card h-64 object-cover mt-8"
              />
            </div>
            {/* Floating Stats Card */}
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-white p-6 rounded-2xl shadow-elegant w-[90%] max-w-sm">
              <div className="grid grid-cols-2 gap-4">
                {stats.slice(0, 2).map((stat, index) => (
                  <div key={index} className="text-center">
                    <stat.icon className="w-6 h-6 text-[#2ECC71] mx-auto mb-2" />
                    <div className="text-xl font-bold text-[#333]">{stat.value}</div>
                    <div className="text-xs text-gray-500">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6 lg:pl-8">
            <div className="inline-block">
              <span className="text-[#2ECC71] font-semibold uppercase tracking-wider text-sm">
                About Us
              </span>
              <div className="h-1 w-12 bg-[#2ECC71] rounded mt-2" />
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-[#333] leading-tight">
              {site.about.title}
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed">
              {site.about.headline}
            </p>

            <p className="text-gray-600 leading-relaxed">
              {site.about.body[0]} {site.about.body[1]}
            </p>

            <p className="text-gray-600 leading-relaxed">{site.about.body[2]}</p>

            <div className="p-4 bg-gray-50 rounded-xl text-sm text-[#333] border-l-4 border-[#2ECC71]">
              Serving {site.serviceArea} &middot; {site.licenseNumber} &middot; {site.accreditationLabel}
            </div>

            {/* Neighborhoods */}
            <div className="flex flex-wrap gap-2">
              {site.neighborhoods.slice(0, 6).map((area) => (
                <span
                  key={area}
                  className="inline-flex items-center gap-1 bg-[#2ECC71]/10 px-3 py-1 rounded-full text-xs font-medium text-[#333]"
                >
                  <MapPin className="w-3 h-3 text-[#2ECC71]" />
                  {area}
                </span>
              ))}
              {site.neighborhoods.length > 6 && (
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium text-gray-500">
                  +{site.neighborhoods.length - 6} more
                </span>
              )}
            </div>

            <div className="grid grid-cols-2 gap-6 pt-4">
              {stats.slice(2).map((stat, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#2ECC71]/10 rounded-xl flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-[#2ECC71]" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-[#333]">{stat.value}</div>
                    <div className="text-sm text-gray-500">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>

            <Button className="bg-[#2ECC71] hover:bg-[#27AE60] text-white font-semibold h-12 px-8 mt-4" asChild>
              <a href="#contact">{site.primaryCtaLabel}</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
