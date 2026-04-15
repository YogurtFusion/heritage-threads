import madhubaniPattern from "@/assets/madhubani-pattern.jpg";

const StorySection = () => (
  <section className="relative w-full py-24 lg:py-32 overflow-hidden">
    {/* Background pattern */}
    <div
      className="absolute inset-0 bg-cover bg-center opacity-[0.08]"
      style={{ backgroundImage: `url(${madhubaniPattern})` }}
    />
    <div className="absolute inset-0 bg-surface/80" />

    <div className="relative max-w-3xl mx-auto px-6 lg:px-10 text-center">
      <h2 className="font-heading text-3xl lg:text-4xl xl:text-5xl font-medium text-foreground mb-8 leading-tight">
        3,000 years. One brush at a time.
      </h2>
      <p className="text-base lg:text-lg text-muted-foreground font-body leading-relaxed max-w-2xl mx-auto">
        Mithila painting is one of humanity's oldest living art traditions, born in the villages of Bihar, India. 
        Passed from mother to daughter for millennia, each stroke carries stories of devotion, nature, and celebration. 
        Our artisans transform this ancient heritage into everyday objects you can carry with you — 
        keeping a 3,000-year-old conversation alive, one brushstroke at a time.
      </p>
    </div>
  </section>
);

export default StorySection;
