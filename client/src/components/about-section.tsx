import { Award, Users, Clock, Shield, MapPin } from "lucide-react";

const features = [
  {
    icon: <Award className="w-6 h-6" />,
    title: "Licensed & Insured",
    description: "Fully licensed and insured for your peace of mind."
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Expert Team",
    description: "Trained professionals with years of experience."
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Reliable Service",
    description: "Consistent, on-time service you can count on."
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Satisfaction Guarantee",
    description: "100% satisfaction guaranteed or we'll make it right."
  }
];

const serviceAreas = [
  "Downtown",
  "Sunset Hill", 
  "Armour Hills",
  "Waldo",
  "Brookside",
  "Prairie Village",
  "Leawood",
  "Overland Park"
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 pool-gradient">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
                alt="Professional pool maintenance equipment"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Heartland Pool Care?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                With over 10 years of experience in pool maintenance, we're the 
                trusted choice for homeowners and businesses throughout the area.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Service Areas
              </h3>
              <p className="text-gray-600 mb-4">
                We proudly serve the following areas:
              </p>
              <div className="grid sm:grid-cols-2 gap-2">
                {serviceAreas.map((area, index) => (
                  <div key={index} className="flex items-center text-gray-700">
                    <MapPin className="w-4 h-4 text-blue-600 mr-2" />
                    {area}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
