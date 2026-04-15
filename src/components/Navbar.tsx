import { ShoppingBag, Menu } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full border-b border-border bg-background/95 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-16">
        <button className="lg:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          <Menu className="w-5 h-5 text-foreground" />
        </button>

        <div className="hidden lg:flex items-center gap-8">
          <a href="#keychains" className="text-xs font-body tracking-[0.15em] uppercase text-muted-foreground hover:text-foreground transition-colors">Keychains</a>
          <a href="#zipchains" className="text-xs font-body tracking-[0.15em] uppercase text-muted-foreground hover:text-foreground transition-colors">Zip Chains</a>
        </div>

        <a href="#" className="font-heading text-xl font-semibold text-foreground tracking-wide absolute left-1/2 -translate-x-1/2">
          Mithila Craft
        </a>

        <div className="flex items-center gap-6">
          <a href="#" className="hidden lg:block text-xs font-body tracking-[0.15em] uppercase text-muted-foreground hover:text-foreground transition-colors">Our Story</a>
          <button className="relative">
            <ShoppingBag className="w-5 h-5 text-foreground" />
            <span className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-primary text-primary-foreground text-[10px] rounded-full flex items-center justify-center font-body">0</span>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="lg:hidden border-t border-border px-6 py-4 flex flex-col gap-3">
          <a href="#keychains" className="text-xs font-body tracking-[0.15em] uppercase text-muted-foreground">Keychains</a>
          <a href="#zipchains" className="text-xs font-body tracking-[0.15em] uppercase text-muted-foreground">Zip Chains</a>
          <a href="#" className="text-xs font-body tracking-[0.15em] uppercase text-muted-foreground">Our Story</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
