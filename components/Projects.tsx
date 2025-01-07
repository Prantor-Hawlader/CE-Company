import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import img1 from "@/public/ce-img1.jpg";
import img2 from "@/public/ce-img2.jpg";
import img3 from "@/public/ce-img3.jpg";

const projects = [
  {
    title: "City Center Skyscraper",
    image: img1,
    description: "A 50-story mixed-use building in the heart of downtown.",
  },
  {
    title: "Coastal Highway Bridge",
    image: img2,
    description: "A 2-mile long bridge connecting coastal communities.",
  },
  {
    title: "Sustainable Water Treatment Plant",
    image: img3,
    description:
      "An eco-friendly water treatment facility serving 500,000 residents.",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                width={600}
                height={400}
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-4">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground">{project.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
