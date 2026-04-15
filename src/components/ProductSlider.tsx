import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
}

interface ProductSliderProps {
  title: string;
  products: Product[];
  id?: string;
}

const ProductSlider = ({ title, products, id }: ProductSliderProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = 320;
    scrollRef.current.scrollBy({
      left: dir === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <section id={id} className="w-full py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between mb-10">
          <h2 className="font-heading text-2xl lg:text-3xl font-medium text-foreground">
            {title}
          </h2>
          <div className="flex gap-2">
            <button
              onClick={() => scroll("left")}
              className="w-10 h-10 border border-border flex items-center justify-center hover:bg-foreground hover:text-primary-foreground transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-10 h-10 border border-border flex items-center justify-center hover:bg-foreground hover:text-primary-foreground transition-colors"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide pb-4"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {products.map((product) => (
            <div
              key={product.id}
              className="flex-shrink-0 w-[260px] lg:w-[280px] group"
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="aspect-square overflow-hidden bg-surface mb-4">
                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                  width={800}
                  height={800}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h3 className="font-body text-sm font-medium text-foreground">{product.name}</h3>
                  <p className="font-body text-sm text-muted-foreground mt-0.5">{product.price}</p>
                </div>
              </div>
              <button
                className={`mt-3 w-full py-2.5 text-xs font-body tracking-[0.15em] uppercase border border-foreground transition-all duration-300 ${
                  hoveredId === product.id
                    ? "bg-foreground text-primary-foreground opacity-100 translate-y-0"
                    : "opacity-0 translate-y-2"
                }`}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSlider;
