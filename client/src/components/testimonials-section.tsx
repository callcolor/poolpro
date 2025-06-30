import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, ChevronLeft, ChevronRight, User } from "lucide-react";

const testimonials = [
  [
    {
      name: "Sarah Johnson",
      role: "Homeowner",
      rating: 5,
      content: "Heartland Pool Care has been maintaining our pool for over 2 years. They're always on time, professional, and our pool has never looked better!"
    },
    {
      name: "Mike Rodriguez", 
      role: "Property Manager",
      rating: 5,
      content: "Best pool service in town! They recovered our green pool in just a few days and now maintain it weekly. Highly recommend!"
    },
    {
      name: "Jennifer Lee",
      role: "Homeowner", 
      rating: 5,
      content: "Professional service at great prices. They take care of everything so we can just enjoy our pool. Couldn't be happier!"
    }
  ],
  [
    {
      name: "David Chen",
      role: "Business Owner",
      rating: 5,
      content: "Reliable, trustworthy, and knowledgeable. They've helped us maintain our pool equipment and saved us thousands in repairs."
    },
    {
      name: "Lisa Thompson",
      role: "Homeowner",
      rating: 5,
      content: "Outstanding customer service! They go above and beyond every visit. Our pool is always crystal clear and ready for guests."
    },
    {
      name: "Robert Williams",
      role: "Homeowner",
      rating: 5,
      content: "Fair pricing, excellent work, and great communication. They send updates after each visit. Highly professional service!"
    }
  ]
];

const stats = [
  { number: "500+", label: "Happy Customers" },
  { number: "10+", label: "Years Experience" },
  { number: "5,000+", label: "Pools Cleaned" },
  { number: "100%", label: "Satisfaction Rate" }
];

export default function TestimonialsSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 8000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 relative">
            What Our Customers Say
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-cyan-500 rounded-full"></div>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it - see what our satisfied customers have to say
          </p>
        </div>

        <div className="relative mb-16">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((slideGroup, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0">
                  <div className="grid md:grid-cols-3 gap-8">
                    {slideGroup.map((testimonial, index) => (
                      <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <CardContent className="p-6">
                          <div className="flex text-yellow-400 mb-4">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <Star key={i} className="w-5 h-5 fill-current" />
                            ))}
                          </div>
                          <p className="text-gray-700 mb-6 italic">
                            "{testimonial.content}"
                          </p>
                          <div className="flex items-center">
                            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white mr-3">
                              <User className="w-5 h-5" />
                            </div>
                            <div>
                              <div className="font-semibold text-gray-900">
                                {testimonial.name}
                              </div>
                              <div className="text-sm text-gray-600">
                                {testimonial.role}
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white shadow-lg hover:bg-gray-50"
            onClick={prevSlide}
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>
          
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white shadow-lg hover:bg-gray-50"
            onClick={nextSlide}
          >
            <ChevronRight className="w-6 h-6" />
          </Button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index}>
              <div className="text-3xl lg:text-4xl font-bold text-blue-600 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
