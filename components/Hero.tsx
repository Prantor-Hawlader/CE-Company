import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative h-[calc(100vh-4rem)] flex items-center justify-center text-center text-white">
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: "url('/placeholder.svg?height=1080&width=1920')",
        }}
      />
      <div className="absolute inset-0 bg-black/50 z-10" />
      <div className="relative z-20 container mx-auto px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Building Tomorrow&apos;s Infrastructure Today
        </h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          CivilTech Solutions provides innovative engineering services for
          sustainable and resilient infrastructure projects.
        </p>
        <Button size="lg" className="mr-4">
          Our Services
        </Button>
        <Button size="lg" variant="outline">
          Contact Us
        </Button>
      </div>
    </section>
  );
}
