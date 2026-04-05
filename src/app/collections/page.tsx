import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { collections } from "@/lib/mock-data";

export const metadata: Metadata = {
  title: "Collections",
  description:
    "Explore our collections of handcrafted jewelry. Sapphires, rubies, emeralds, diamonds, and the Chakra Collection.",
  alternates: { canonical: "/collections" },
};

export default function CollectionsPage() {
  return (
    <section className="py-4xl">
      <Container>
        <div className="text-center mb-3xl">
          <p className="text-xs font-medium uppercase tracking-[0.05em] text-text-tertiary mb-md">
            Collections
          </p>
          <h1 className="font-heading text-[48px] font-semibold text-text-primary mb-lg">
            The Collections
          </h1>
          <p className="text-lg text-text-secondary max-w-[560px] mx-auto">
            Each collection is defined by its stone. We source carefully,
            set minimally, and let the material lead.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-2xl">
          {collections.map((collection) => (
            <Link
              key={collection.handle}
              href={`/collections/${collection.handle}`}
              className="group block"
            >
              <div className="bg-bg-secondary border border-border-secondary rounded-[4px] overflow-hidden shadow-card transition-all duration-300 group-hover:shadow-elevated group-hover:-translate-y-0.5">
                <div className="aspect-[3/2] bg-bg-tertiary flex items-center justify-center text-text-tertiary text-xs">
                  [Collection Image]
                </div>
                <div className="p-lg">
                  <h2 className="font-heading text-[22px] font-semibold text-text-primary mb-md">
                    {collection.name}
                  </h2>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {collection.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
