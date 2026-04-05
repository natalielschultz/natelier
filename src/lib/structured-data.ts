import type { Product } from "./mock-data";

export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Natelier",
    url: "https://thenatelier.com",
    description:
      "Handcrafted jewelry for those who appreciate quality and restraint.",
    brand: {
      "@type": "Brand",
      name: "Natelier",
    },
  };
}

export function getProductSchema(product: Product) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    brand: {
      "@type": "Brand",
      name: "Natelier",
    },
    offers: {
      "@type": "Offer",
      price: product.price,
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      url: `https://thenatelier.com/products/${product.handle}`,
    },
    material: `${product.metalPurity} ${product.metal}`,
    category: product.category,
  };
}

export function getCollectionSchema(
  name: string,
  description: string,
  products: Product[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name,
    description,
    numberOfItems: products.length,
    itemListElement: products.map((product, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Product",
        name: product.name,
        url: `https://thenatelier.com/products/${product.handle}`,
      },
    })),
  };
}
