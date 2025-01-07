import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Building2, RouteIcon as Road, Waves, Zap } from "lucide-react";

const services = [
  {
    icon: <Building2 className="h-8 w-8 mb-4 text-primary" />,
    title: "Structural Engineering",
    description:
      "Design and analysis of buildings and structures for safety and efficiency.",
  },
  {
    icon: <Road className="h-8 w-8 mb-4 text-primary" />,
    title: "Transportation Engineering",
    description:
      "Planning and design of roads, highways, and public transit systems.",
  },
  {
    icon: <Waves className="h-8 w-8 mb-4 text-primary" />,
    title: "Water Resources",
    description:
      "Management and design of water supply, drainage, and flood control systems.",
  },
  {
    icon: <Zap className="h-8 w-8 mb-4 text-primary" />,
    title: "Geotechnical Engineering",
    description:
      "Analysis of earth materials and their interaction with structures.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-green-200 text-center">
              <CardHeader>
                <CardTitle className="flex flex-col items-center">
                  {service.icon}
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
