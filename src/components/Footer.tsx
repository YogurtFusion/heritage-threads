const Footer = () => (
  <footer className="w-full border-t border-border bg-background">
    <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-20">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 lg:gap-16">
        <div className="md:col-span-1">
          <h3 className="font-heading text-lg font-semibold text-foreground mb-4">Mithila Craft</h3>
          <p className="text-sm font-body text-muted-foreground leading-relaxed">
            Handcrafted Madhubani art accessories, made with love in Bihar, India.
          </p>
        </div>
        <div>
          <h4 className="text-xs font-body tracking-[0.2em] uppercase text-foreground mb-4">Shop</h4>
          <ul className="flex flex-col gap-2.5">
            <li><a href="#keychains" className="text-sm font-body text-muted-foreground hover:text-foreground transition-colors">Keychains</a></li>
            <li><a href="#zipchains" className="text-sm font-body text-muted-foreground hover:text-foreground transition-colors">Zip Chains</a></li>
            <li><a href="#trending" className="text-sm font-body text-muted-foreground hover:text-foreground transition-colors">Trending</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-xs font-body tracking-[0.2em] uppercase text-foreground mb-4">Info</h4>
          <ul className="flex flex-col gap-2.5">
            <li><a href="#" className="text-sm font-body text-muted-foreground hover:text-foreground transition-colors">Our Story</a></li>
            <li><a href="#" className="text-sm font-body text-muted-foreground hover:text-foreground transition-colors">Shipping</a></li>
            <li><a href="#" className="text-sm font-body text-muted-foreground hover:text-foreground transition-colors">Returns</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-xs font-body tracking-[0.2em] uppercase text-foreground mb-4">Connect</h4>
          <ul className="flex flex-col gap-2.5">
            <li><a href="#" className="text-sm font-body text-muted-foreground hover:text-foreground transition-colors">Instagram</a></li>
            <li><a href="#" className="text-sm font-body text-muted-foreground hover:text-foreground transition-colors">Email Us</a></li>
          </ul>
        </div>
      </div>
      <div className="mt-16 pt-8 border-t border-border text-center">
        <p className="text-xs font-body text-muted-foreground tracking-wide">
          © 2026 Mithila Craft. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
