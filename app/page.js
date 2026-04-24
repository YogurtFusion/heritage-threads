import Category from "@/components/layout/Category";
import Cta from "@/components/layout/Cta";
import Hero from "@/components/layout/Hero";
import Keychain from "@/components/layout/Keychains";
import Trending from "@/components/layout/Trending";
import Zipchains from "@/components/layout/Zipchains";

export default function Home() {
  return (
    <div>
      <Hero />
      <Category />
      <Trending />
      <Zipchains />
      <Keychain />
      <Cta />
    </div>
  );
}
