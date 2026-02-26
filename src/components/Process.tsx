import { ClipboardList, FileText, Wrench, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import site from "@/content/siteConfig";

const Process = () => {
  const iconMap = [ClipboardList, FileText, Wrench, CheckCircle];
  const steps = site.process.map((step, index) => ({
    icon: iconMap[index] || CheckCircle,
    step: `0${index + 1}`,
    title: step.title,
    description: step.desc,
  }));

  return (
    <section id="process" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#2ECC71] font-semibold uppercase tracking-wider text-sm">How It Works</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#333] mt-4 mb-6">
            A Simple Path to
            <span className="text-[#2ECC71]"> Quality Remodeling</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Clear steps from first call to final walkthrough, so you know what to expect at every milestone.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-[60%] w-full h-px bg-gray-200" />
              )}

              <div className="bg-[#f9f9f9] rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow h-full">
                {/* Step Number */}
                <span className="text-5xl font-bold text-[#2ECC71]/20">{step.step}</span>

                {/* Icon */}
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mt-4 mb-6 bg-[#2ECC71]">
                  <step.icon className="w-7 h-7 text-white" />
                </div>

                <h3 className="text-xl font-semibold mb-3 text-[#333]">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Button
            className="bg-[#2ECC71] hover:bg-[#27AE60] text-white font-semibold h-12 px-8"
            asChild
          >
            <a href="#contact">{site.contact.button}</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Process;
