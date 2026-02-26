import { useState, FormEvent } from "react";
import { Phone, Mail, MapPin, Facebook, Instagram, BadgeCheck, Map, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import site from "@/content/siteConfig";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `New Quote Request from ${formData.name || "Website Visitor"}`
    );
    const body = encodeURIComponent(
      `Name: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nProject Type: ${formData.service}\nMessage: ${formData.message}`
    );
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    toast.success("Opening your email client - send the pre-filled message to complete your request!");
    setFormData({ name: "", phone: "", email: "", service: "", message: "" });
  };

  return (
    <footer id="contact" className="bg-[#1a1a1a] text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <img src={site.images.logo} alt={`${site.businessName} logo`} className="w-14 h-14 object-contain" />
              <div>
                <span className="font-bold text-xl">{site.businessName}</span>
                <span className="block text-xs text-white/60 -mt-1">{site.category}</span>
              </div>
            </div>
            <p className="text-white/60 mb-4 leading-relaxed">
              {site.about.headline}
            </p>
            <div className="text-white/60 text-sm space-y-1 mb-4">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#2ECC71]" />
                <a href={`tel:${site.phoneTel}`} className="hover:text-[#2ECC71] transition-colors">{site.phoneDisplay}</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#2ECC71]" />
                <span>{site.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#2ECC71]" />
                <a href={site.mapsUrl} className="hover:text-[#2ECC71] transition-colors">{site.fullAddress}</a>
              </div>
              <div className="flex items-center gap-2">
                <BadgeCheck className="w-4 h-4 text-[#2ECC71]" />
                <span>{site.licenseNumber} &middot; Bonded & Insured</span>
              </div>
            </div>
            <div className="flex gap-4">
              <a
                href={site.socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#2ECC71] transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href={site.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#2ECC71] transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={site.socialLinks.google}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#2ECC71] transition-colors"
              >
                <Map className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Working Hours */}
          <div>
            <h4 className="font-bold text-lg mb-6">Working Hours</h4>
            <table className="w-full text-sm">
              <tbody className="text-white/60">
                <tr className="border-b border-white/10">
                  <td className="py-2">Monday</td>
                  <td className="py-2 text-right">7 AM - 6 PM</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-2">Tuesday</td>
                  <td className="py-2 text-right">7 AM - 6 PM</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-2">Wednesday</td>
                  <td className="py-2 text-right">7 AM - 6 PM</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-2">Thursday</td>
                  <td className="py-2 text-right">7 AM - 6 PM</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-2">Friday</td>
                  <td className="py-2 text-right">7 AM - 6 PM</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-2">Saturday</td>
                  <td className="py-2 text-right">7 AM - 6 PM</td>
                </tr>
                <tr>
                  <td className="py-2">Sunday</td>
                  <td className="py-2 text-right text-white/40">Closed</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-6">Our Services</h4>
            <ul className="space-y-3">
              {site.services.map((service) => (
                <li key={service.title}>
                  <a href="#services" className="text-white/60 hover:text-[#2ECC71] transition-colors">
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Form */}
          <div>
            <h4 className="font-bold text-lg mb-6">Get My Free Quote</h4>
            <form className="space-y-3" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="w-full px-3 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/40 text-sm focus:ring-2 focus:ring-[#2ECC71] focus:border-transparent outline-none transition"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-3 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/40 text-sm focus:ring-2 focus:ring-[#2ECC71] focus:border-transparent outline-none transition"
              />
              <input
                type="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="w-full px-3 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/40 text-sm focus:ring-2 focus:ring-[#2ECC71] focus:border-transparent outline-none transition"
              />
              <select
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                className="w-full px-3 py-2 rounded-lg bg-white/10 border border-white/20 text-white text-sm focus:ring-2 focus:ring-[#2ECC71] focus:border-transparent outline-none transition"
              >
                <option value="" className="bg-[#333]">Project Type</option>
                {site.services.map((service) => (
                  <option key={service.title} value={service.title} className="bg-[#333]">
                    {service.title}
                  </option>
                ))}
              </select>
              <textarea
                placeholder="Tell us about your project..."
                rows={3}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-3 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/40 text-sm focus:ring-2 focus:ring-[#2ECC71] focus:border-transparent outline-none transition resize-none"
              />
              <Button
                type="submit"
                className="w-full bg-[#2ECC71] hover:bg-[#27AE60] text-white font-semibold h-10 text-sm"
              >
                <Send className="w-4 h-4 mr-2" />
                Get My Free Quote
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">
            Serving {site.serviceArea}
          </p>
          <p className="text-white/40 text-sm">
            &copy; {new Date().getFullYear()} {site.businessName}. {site.fullAddress} &bull; {site.phoneDisplay} &bull; {site.licenseNumber}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
