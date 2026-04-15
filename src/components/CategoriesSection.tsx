import categoryKeychains from "@/assets/category-keychains.jpg";
import categoryZipchains from "@/assets/category-zipchains.jpg";

const categories = [
  { name: "Keychains", image: categoryKeychains, href: "#keychains" },
  { name: "Zip Chains", image: categoryZipchains, href: "#zipchains" },
];

const CategoriesSection = () => (
  <section className="w-full py-20 lg:py-28">
    <div className="max-w-7xl mx-auto px-6 lg:px-10">
      <h2 className="font-heading text-3xl lg:text-4xl font-medium text-foreground text-center mb-14">
        Shop by Category
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {categories.map((cat) => (
          <a
            key={cat.name}
            href={cat.href}
            className="group relative aspect-[4/5] overflow-hidden"
          >
            <img
              src={cat.image}
              alt={cat.name}
              loading="lazy"
              width={800}
              height={1000}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-foreground/20 group-hover:bg-foreground/30 transition-colors duration-500" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <h3 className="font-heading text-2xl lg:text-3xl font-medium text-primary-foreground">
                {cat.name}
              </h3>
              <span className="mt-2 inline-block text-xs font-body tracking-[0.2em] uppercase text-primary-foreground/80">
                Explore →
              </span>
            </div>
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default CategoriesSection;
