import { AnimatedTestimonials } from "./ui/animated-testimonials";

export function Testimonials() {
  const testimonials = [
    {
      quote:
        "Mentric Technologies has helped us the best with redesigning our website. They not only reduced its loading time by implementing the right technology but also ensured that it is attractive and easy-to-use. They developed custom modules by understanding our needs effectively, ensured seamless communication for managing exigencies and delivered regular updates. Highly recommend them if you are looking for great output.",
      name: "Binoj",
      designation: "Director of Tekton",
      src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop",
    },
    {
      quote:
        "Fantastic work! I am just impressed by their service quality and working strategy. I hired them for the development of my online store and they have satisfied me to the full by delivering the exceptional solution. They have a great expertise, are dedicated, attentive, talented and care much about the client needs. Highly recommended.",
      name: "Sukumar R",
      designation: "Director of Squirrel Services",
      src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop",
    },
    {
      quote:
        "Working with the Mentric Technologies team was a pleasant experience. Two things in particular about their service is exceptional: their speed of response to emails, they were always available to answer my questions and provide feedback as the project went along. Secondly they demonstrated a clear understanding of the scope and nature of the project and delivered accordingly.",
      name: "Govindappa B",
      designation: "Director of Saksham Interiors Private Limited",
      src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop",
    },
   ];

  return (
    <div className="py-12 px-4 text-center">
            <div className="text-center z-10 relative ">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Client{" "}
          <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            Testimonials
          </span>
        </h1>
        <p className="text-gray-400 mt-4 text-lg max-w-2xl mx-auto">
          Empowering your business through technology, design, and marketing.
        </p>
      </div>
      <AnimatedTestimonials testimonials={testimonials} />
    </div>
  );
}
