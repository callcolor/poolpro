import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Phone } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const NavLinks = ({ mobile = false }: { mobile?: boolean }) => (
    <>
      <button
        onClick={() => scrollToSection("home")}
        className={`${mobile ? "block w-full text-left py-2" : ""} text-gray-700 hover:text-blue-600 transition-colors`}
      >
        Home
      </button>
      <button
        onClick={() => scrollToSection("services")}
        className={`${mobile ? "block w-full text-left py-2" : ""} text-gray-700 hover:text-blue-600 transition-colors`}
      >
        Services
      </button>
      <button
        onClick={() => scrollToSection("about")}
        className={`${mobile ? "block w-full text-left py-2" : ""} text-gray-700 hover:text-blue-600 transition-colors`}
      >
        About
      </button>
      <button
        onClick={() => scrollToSection("testimonials")}
        className={`${mobile ? "block w-full text-left py-2" : ""} text-gray-700 hover:text-blue-600 transition-colors`}
      >
        Reviews
      </button>
      <button
        onClick={() => scrollToSection("contact")}
        className={`${mobile ? "block w-full text-left py-2" : ""} text-gray-700 hover:text-blue-600 transition-colors`}
      >
        Contact
      </button>
    </>
  );

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/98 backdrop-blur-md shadow-lg"
          : "bg-white/95 backdrop-blur-md shadow-md"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
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
            <span className="text-xl font-bold text-blue-600">Heartland Pool Care</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLinks />
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="outline"
              className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
              onClick={() => window.open("tel:+18162581782", "_blank")}
            >
              <Phone className="w-4 h-4 mr-2" />
              Call Now
            </Button>
          </div>

          {/* Mobile Navigation */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col space-y-4 mt-8">
                <NavLinks mobile />
                <Button
                  className="mt-4 bg-blue-600 hover:bg-blue-700"
                  onClick={() => window.open("tel:+18162581782", "_blank")}
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
