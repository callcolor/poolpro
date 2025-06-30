import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Droplets, 
  FlaskConical, 
  Settings, 
  Leaf, 
  Snowflake, 
  Calendar,
  Check
} from "lucide-react";

const services = [
  {
    icon: <Droplets className="w-6 h-6" />,
    title: "Weekly Pool Cleaning",
    description: "Complete pool cleaning including skimming, vacuuming, brushing walls, and emptying baskets.",
    features: [
      "Surface skimming",
      "Vacuum pool floor",
      "Brush walls & steps",
      "Empty skimmer baskets"
    ],
    price: "Starting at $89/visit"
  },
  {
    icon: <FlaskConical className="w-6 h-6" />,
    title: "Chemical Balancing",
    description: "Professional water testing and chemical balancing to maintain safe, crystal-clear water.",
    features: [
      "pH level testing",
      "Chlorine adjustment",
      "Alkalinity balancing",
      "Chemical supply included"
    ],
    price: "Starting at $65/visit"
  },
  {
    icon: <Settings className="w-6 h-6" />,
    title: "Equipment Maintenance",
    description: "Regular inspection and maintenance of pumps, filters, and other pool equipment.",
    features: [
      "Filter cleaning/replacement",
      "Pump inspection",
      "Equipment troubleshooting",
      "Preventive maintenance"
    ],
    price: "Starting at $125/service"
  },
  {
    icon: <Leaf className="w-6 h-6" />,
    title: "Green Pool Recovery",
    description: "Specialized treatment for neglected pools with algae problems and cloudy water.",
    features: [
      "Algae treatment",
      "Deep cleaning",
      "Water circulation",
      "Follow-up visits included"
    ],
    price: "Starting at $299/treatment"
  },
  {
    icon: <Snowflake className="w-6 h-6" />,
    title: "Pool Opening & Closing",
    description: "Seasonal pool preparation for summer swimming and winter protection.",
    features: [
      "Spring pool opening",
      "Winter pool closing",
      "Equipment startup/shutdown",
      "Chemical balancing"
    ],
    price: "Starting at $189/service"
  },
  {
    icon: <Calendar className="w-6 h-6" />,
    title: "One-Time Cleaning",
    description: "Perfect for special events, move-ins, or when you need a quick pool refresh.",
    features: [
      "Complete deep cleaning",
      "Chemical balancing",
      "Equipment check",
      "Same-day service available"
    ],
    price: "Starting at $149/visit"
  }
];

export default function ServicesSection() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 relative">
            Our Pool Services
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-cyan-500 rounded-full"></div>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive pool care solutions for residential and commercial properties
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border-0 shadow-lg"
            >
              <CardContent className="p-8">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full flex items-center justify-center text-white mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4 text-center text-sm">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-700">
                      <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="text-center">
                  <span className="text-lg font-bold text-blue-600">
                    {service.price}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            Need a Custom Service Package?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            We offer flexible service packages tailored to your specific needs and budget.
          </p>
          <Button 
            size="lg" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold"
            onClick={scrollToContact}
          >
            Get Custom Quote
          </Button>
        </div>
      </div>
    </section>
  );
}
