import {
  Phone,
  Mail,
  Clock,
  Award,
  Facebook,
  Instagram,
  Twitter,
  Star,
} from "lucide-react";

const services = [
  "Pool Cleaning",
  "Chemical Balancing",
  "Equipment Repair",
  "Green Pool Recovery",
  "Pool Opening/Closing",
];

const company = [
  "About Us",
  "Reviews",
  "Contact",
  // "Service Areas",
  "Careers",
];

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <span className="text-xl font-bold">Heartland Pool Care</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Your trusted partner for professional pool cleaning and
              maintenance services. Keeping your pool crystal clear since 2014.
            </p>
            <div className="flex space-x-4">
              <button className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Facebook className="w-5 h-5" />
              </button>
              <button className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </button>
              <button className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Star className="w-5 h-5" />
              </button>
              <button className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection("services")}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              {company.map((item, index) => (
                <li key={index}>
                  <button
                    onClick={() => {
                      if (item === "About Us") scrollToSection("about");
                      else if (item === "Reviews")
                        scrollToSection("testimonials");
                      else if (item === "Contact") scrollToSection("contact");
                    }}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-center text-sm">
                <Phone className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0" />
                <a
                  href="tel:+18162581782"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  (816) 258-1782
                </a>
              </li>
              <li className="flex items-center text-sm">
                <Mail className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0" />
                <a
                  href="mailto:info@HeartlandPoolCare.com"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  info@HeartlandPoolCare.com
                </a>
              </li>
              <li className="flex items-start text-sm">
                <Clock className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400">
                  Mon-Fri: 8AM-6PM
                  <br />
                  Sat: 8AM-4PM
                </span>
              </li>
              <li className="flex items-center text-sm">
                <Award className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0" />
                <span className="text-gray-400">Licensed & Insured</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Heartland Pool Care. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <button className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </button>
              <button className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
