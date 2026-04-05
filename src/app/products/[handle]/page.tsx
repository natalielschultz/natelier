import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { ProductGallery } from "@/components/product/ProductGallery";
import { VariantSelector } from "@/components/product/VariantSelector";
import { AddToCart } from "@/components/product/AddToCart";
import {
  products,
  getProductByHandle,
  formatPrice,
} from "@/lib/mock-data";

interface PageProps {
  params: Promise<{ handle: string }>;
}

export async function generateStaticParams() {
  return products.map((p) => ({ handle: p.handle }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { handle } = await params;
  const product = getProductByHandle(handle);
  if (!product) return {};
  return {
    title: product.name,
    description: product.shortDescription,
  };
}

export default async function ProductPage({ params }: PageProps) {
  const { handle } = await params;
  const product = getProductByHandle(handle);
  if (!product) notFound();

  return (
    <section className="py-4xl">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3xl">
          {/* Gallery */}
          <ProductGallery
            images={product.images}
            productName={product.name}
          />

          {/* Product Info */}
          <div>
            <Link
              href={`/collections/${product.collectionHandle}`}
              className="text-xs font-medium uppercase tracking-[0.05em] text-text-tertiary hover:text-text-secondary transition-colors duration-300"
            >
              {product.collection}
            </Link>

            <h1 className="font-heading text-[36px] font-semibold text-text-primary mt-md mb-lg">
              {product.name}
            </h1>

            <p className="text-xl font-medium text-text-primary mb-2xl">
              {formatPrice(product.price)}
            </p>

            <p className="text-base text-text-secondary leading-relaxed mb-2xl">
              {product.description}
            </p>

            {/* Stone Details */}
            <div className="border-t border-border-secondary pt-2xl mb-2xl">
              <h3 className="text-sm font-semibold text-text-primary mb-lg">
                Stone Details
              </h3>
              <dl className="grid grid-cols-2 gap-y-md text-sm">
                <dt className="text-text-tertiary">Stone</dt>
                <dd className="text-text-primary">{product.stone}</dd>
                <dt className="text-text-tertiary">Origin</dt>
                <dd className="text-text-primary">{product.stoneOrigin}</dd>
                <dt className="text-text-tertiary">Carats</dt>
                <dd className="text-text-primary">{product.stoneCarats}</dd>
                <dt className="text-text-tertiary">Treatment</dt>
                <dd className="text-text-primary">{product.stoneTreatment}</dd>
              </dl>
            </div>

            {/* Metal Details */}
            <div className="border-t border-border-secondary pt-2xl mb-2xl">
              <h3 className="text-sm font-semibold text-text-primary mb-lg">
                Metal
              </h3>
              <dl className="grid grid-cols-2 gap-y-md text-sm">
                <dt className="text-text-tertiary">Metal</dt>
                <dd className="text-text-primary">{product.metal}</dd>
                <dt className="text-text-tertiary">Purity</dt>
                <dd className="text-text-primary">{product.metalPurity}</dd>
              </dl>
            </div>

            {/* Variant Selectors (placeholder) */}
            {product.category === "Ring" && (
              <VariantSelector
                label="Ring Size"
                options={["5", "5.5", "6", "6.5", "7", "7.5", "8"]}
              />
            )}

            <AddToCart productName={product.name} />

            <p className="text-xs text-text-tertiary text-center mt-lg">
              Free shipping on orders over $200
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
