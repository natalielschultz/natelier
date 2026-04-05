import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { ProductCard } from "@/components/product/ProductCard";
import {
  collections,
  getCollectionByHandle,
  getProductsByCollection,
} from "@/lib/mock-data";

interface PageProps {
  params: Promise<{ handle: string }>;
}

export async function generateStaticParams() {
  return collections.map((c) => ({ handle: c.handle }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { handle } = await params;
  const collection = getCollectionByHandle(handle);
  if (!collection) return {};
  return {
    title: collection.name,
    description: collection.description,
  };
}

export default async function CollectionPage({ params }: PageProps) {
  const { handle } = await params;
  const collection = getCollectionByHandle(handle);
  if (!collection) notFound();

  const products = getProductsByCollection(handle);

  return (
    <section className="py-4xl">
      <Container>
        <div className="text-center mb-3xl">
          <p className="text-xs font-medium uppercase tracking-[0.05em] text-text-tertiary mb-md">
            Collection
          </p>
          <h1 className="font-heading text-[48px] font-semibold text-text-primary mb-lg">
            {collection.name}
          </h1>
          <p className="text-lg text-text-secondary max-w-[560px] mx-auto">
            {collection.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-2xl">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {products.length === 0 && (
          <p className="text-center text-text-secondary py-3xl">
            New pieces coming soon.
          </p>
        )}
      </Container>
    </section>
  );
}
