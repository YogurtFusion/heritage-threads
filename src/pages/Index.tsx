import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StorySection from "@/components/StorySection";
import CategoriesSection from "@/components/CategoriesSection";
import ProductSlider from "@/components/ProductSlider";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { trendingProducts, keychainProducts, zipChainProducts } from "@/data/products";

const Index = () => (
  <div className="min-h-screen bg-background">
    <AnnouncementBar />
    <Navbar />
    <HeroSection />
    <StorySection />
    <CategoriesSection />
    <ProductSlider id="trending" title="Trending Now" products={trendingProducts} />
    <ProductSlider id="keychains" title="Keychains" products={keychainProducts} />
    <ProductSlider id="zipchains" title="Zip Chains" products={zipChainProducts} />
    <CTASection />
    <Footer />
  </div>
);

export default Index;
