import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { ProductCard } from "@/components/product/ProductCard";
import {
  collections,
  getCollectionByHandle,
  getProductsByCollection,
} from "@/lib/mock-data";
import { getCollectionSchema, getBreadcrumbSchema } from "@/lib/structured-data";

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
    alternates: {
      canonical: `/collections/${handle}`,
    },
    openGraph: {
      title: `${collection.name} Collection | Natelier`,
      description: collection.description,
      type: "website",
      url: `/collections/${handle}`,
      images: [
        {
          url: "/og-image.jpg",
          width: 1200,
          height: 630,
          alt: `${collection.name} Collection`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${collection.name} Collection | Natelier`,
      description: collection.description,
      images: ["/og-image.jpg"],
    },
  };
}

export default async function CollectionPage({ params }: PageProps) {
  const { handle } = await params;
  const collection = getCollectionByHandle(handle);
  if (!collection) notFound();

  const products = getProductsByCollection(handle);

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Collections", url: "/collections" },
    { name: collection.name, url: `/collections/${handle}` },
  ];

  return (
    <section className="py-4xl">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            getCollectionSchema(collection.name, handle, collection.description, products),
            getBreadcrumbSchema(breadcrumbs),
          ]),
        }}
      />
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
