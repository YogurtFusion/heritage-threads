import ctaBg from "@/assets/cta-background.jpg";

const CTASection = () => (
  <section className="relative w-full aspect-[21/9] min-h-[400px] overflow-hidden">
    <img
      src={ctaBg}
      alt="Artisan at work"
      loading="lazy"
      width={1920}
      height={800}
      className="absolute inset-0 w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-foreground/50" />
    <div className="relative h-full flex flex-col items-center justify-center text-center px-6">
      <h2 className="font-heading text-3xl lg:text-4xl xl:text-5xl font-medium text-primary-foreground mb-6 max-w-2xl leading-tight">
        Own a piece of living history
      </h2>
      <a
        href="#trending"
        className="inline-block bg-primary-foreground text-foreground px-8 py-3.5 text-xs font-body tracking-[0.2em] uppercase hover:opacity-90 transition-opacity"
      >
        Shop Now
      </a>
    </div>
  </section>
);

export default CTASection;
