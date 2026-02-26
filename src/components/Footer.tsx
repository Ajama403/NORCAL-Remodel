import { useState, FormEvent } from "react";
import { Phone, Mail, MapPin, Facebook, Instagram, BadgeCheck, Globe, Map, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import site from "@/content/siteConfig";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    smsConsent: false,
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `New Contact from ${formData.name || "Website Visitor"}`
    );
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}\nSMS Consent: ${formData.smsConsent ? "Yes" : "No"}`
    );
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    toast.success("Opening your email client — send the pre-filled message to complete your request!");
    setFormData({ name: "", email: "", message: "", smsConsent: false });
  };

  return (
    <footer id="contact" className="bg-foreground text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <img src={site.images.logo} alt={`${site.businessName} logo`} className="w-14 h-14 object-contain" />
              <div>
                <span className="font-bold text-xl">{site.businessName}</span>
                <span className="block text-xs text-primary-foreground/70 -mt-1">{site.category}</span>
              </div>
            </div>
            <p className="text-primary-foreground/70 mb-4 leading-relaxed">
              {site.about.headline}
            </p>
            <div className="text-primary-foreground/70 text-sm space-y-1 mb-4">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-secondary" />
                <a href={`tel:${site.phoneTel}`} className="hover:text-secondary transition-colors">{site.phoneDisplay}</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-secondary" />
                <span>{site.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-secondary" />
                <a href={site.mapsUrl} className="hover:text-secondary transition-colors">{site.fullAddress}</a>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-secondary" />
                <a href={site.websiteUrl} className="hover:text-secondary transition-colors">modernkab.com</a>
              </div>
              <div className="flex items-center gap-2">
                <BadgeCheck className="w-4 h-4 text-secondary" />
                <span>{site.licenseNumber}</span>
              </div>
            </div>
            <div className="flex gap-4">
              <a
                href={site.socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-secondary transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href={site.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-secondary transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={site.socialLinks.google}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-secondary transition-colors"
              >
                <Map className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Working Hours */}
          <div>
            <h4 className="font-bold text-lg mb-6">Working Hours</h4>
            <table className="w-full text-sm">
              <tbody className="text-primary-foreground/70">
                <tr className="border-b border-primary-foreground/10">
                  <td className="py-2">Monday</td>
                  <td className="py-2 text-right">10 AM – 5 PM</td>
                </tr>
                <tr className="border-b border-primary-foreground/10">
                  <td className="py-2">Tuesday</td>
                  <td className="py-2 text-right">10 AM – 5 PM</td>
                </tr>
                <tr className="border-b border-primary-foreground/10">
                  <td className="py-2">Wednesday</td>
                  <td className="py-2 text-right">10 AM – 5 PM</td>
                </tr>
                <tr className="border-b border-primary-foreground/10">
                  <td className="py-2">Thursday</td>
                  <td className="py-2 text-right">10 AM – 5 PM</td>
                </tr>
                <tr className="border-b border-primary-foreground/10">
                  <td className="py-2">Friday</td>
                  <td className="py-2 text-right">10 AM – 5 PM</td>
                </tr>
                <tr className="border-b border-primary-foreground/10">
                  <td className="py-2">Saturday</td>
                  <td className="py-2 text-right">10 AM – 5 PM</td>
                </tr>
                <tr>
                  <td className="py-2">Sunday</td>
                  <td className="py-2 text-right text-primary-foreground/50">Closed</td>
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
                  <a href="#services" className="text-primary-foreground/70 hover:text-secondary transition-colors">
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Form */}
          <div>
            <h4 className="font-bold text-lg mb-6">Get In Touch</h4>
            <form className="space-y-3" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="w-full px-3 py-2 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 text-sm focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition"
              />
              <input
                type="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="w-full px-3 py-2 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 text-sm focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition"
              />
              <textarea
                placeholder="Your Message"
                rows={3}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-3 py-2 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 text-sm focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition resize-none"
              />
              <label className="flex items-start gap-2 text-xs text-primary-foreground/60 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.smsConsent}
                  onChange={(e) => setFormData({ ...formData, smsConsent: e.target.checked })}
                  className="mt-0.5 accent-secondary"
                />
                I consent to receive SMS messages from {site.businessName}. Message & data rates may apply.
              </label>
              <Button
                type="submit"
                className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold h-10 text-sm"
              >
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/50 text-sm">
            Serving {site.serviceArea}
          </p>
          <p className="text-primary-foreground/50 text-sm">
            &copy; {new Date().getFullYear()} {site.businessName}. {site.baseCity} &bull; {site.phoneDisplay} &bull; {site.licenseNumber}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
