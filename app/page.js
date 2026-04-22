import Category from "@/components/layout/Category";
import ExploreAll from "@/components/layout/ExploreAll";
import Hero from "@/components/layout/Hero";
import Trending from "@/components/layout/Trending";

export default function Home() {
  return (
    <div>
      <Hero />
      <Category />
      <Trending/>
      <ExploreAll/> 
    </div>
  );
}
