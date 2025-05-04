
const testimonials = [
  {
    quote: "Ideify's AI validation gave me the confidence to pivot my business model in time, saving me months of work heading in the wrong direction.",
    name: "Alex Roberts",
    title: "Founder, TechSprint",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100"
  },
  {
    quote: "The Workflow Visualizer helped me map out our first year of business in just one afternoon. My co-founders were blown away by the clarity it provided.",
    name: "Sarah Johnson",
    title: "CEO, NutriTech",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100"
  },
  {
    quote: "Co-Founder AI has become an essential part of our daily operations. It's like having another team member who's always available with smart suggestions.",
    name: "Michael Chen",
    title: "CTO, DataFlow",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100"
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-24 px-4 relative">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Founder Stories</span>
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Hear from startup founders who've used Ideify to turn their ideas into thriving businesses
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="glass-card flex flex-col justify-between">
              <div className="mb-4">
                <svg className="h-8 w-8 text-ideify-purple opacity-50" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
              <div className="flex items-center mt-auto">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name} 
                  className="h-12 w-12 rounded-full mr-4 object-cover border-2 border-purple-100"
                />
                <div>
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
