import { Hero } from "@/components/home/Hero";
import { FeaturedCollection } from "@/components/home/FeaturedCollection";
import { BrandStory } from "@/components/home/BrandStory";
import { StonesTeaser } from "@/components/home/StonesTeaser";
import { SystemTeaser } from "@/components/home/SystemTeaser";
import { Newsletter } from "@/components/home/Newsletter";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedCollection />
      <BrandStory />
      <StonesTeaser />
      <SystemTeaser />
      <Newsletter />
    </>
  );
}
