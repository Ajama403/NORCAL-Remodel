import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import site from "@/content/siteConfig";

const FAQ = () => {
  return (
    <section id="faq" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary font-semibold uppercase tracking-wider text-sm">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
            Frequently Asked
            <span className="text-gradient"> Questions</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Common questions about our services, process, and coverage area.
          </p>
        </div>

        {/* Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {site.faq.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-xl shadow-card border-none px-6"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-secondary hover:no-underline py-5">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Still have questions CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">Still have questions?</p>
          <Button
            className="bg-gradient-gold text-primary-foreground hover:opacity-90 font-semibold h-12 px-8"
            asChild
          >
            <a href={`tel:${site.phoneTel}`} className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              Call {site.phoneDisplay}
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
