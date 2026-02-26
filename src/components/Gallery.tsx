import { useState } from "react";
import { Button } from "@/components/ui/button";
import site from "@/content/siteConfig";

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const galleryImages = site.images.gallery;
  const categories = ["All", ...Array.from(new Set(galleryImages.map((img) => img.category)))];

  const filteredImages =
    activeCategory === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  return (
    <section id="gallery" className="py-24 bg-[#f5f5f5]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#2ECC71] font-semibold uppercase tracking-wider text-sm">Our Work</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#333] mt-4 mb-6">
            Our Work
          </h2>
          <p className="text-gray-600 text-lg">
            Every photo is a real project completed by our crew in {site.baseCity} and surrounding areas.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat
                  ? "bg-[#2ECC71] text-white"
                  : "bg-white text-[#333] hover:bg-gray-100 shadow-sm"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((project, index) => (
            <div
              key={index}
              className="group relative rounded-2xl overflow-hidden cursor-pointer aspect-[4/3]"
            >
              <img
                src={project.src}
                alt={`${project.title} by ${site.businessName}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/90 via-[#1a1a1a]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-[#2ECC71] text-sm font-semibold uppercase">{project.category}</span>
                <h3 className="text-white text-xl font-bold mt-1">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button className="bg-[#2ECC71] hover:bg-[#27AE60] text-white font-semibold h-12 px-8" asChild>
            <a href="#contact">{site.contact.button}</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
