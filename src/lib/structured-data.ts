import type { Product } from "./mock-data";

const BASE_URL = "https://thenatelier.com";

export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Natelier",
    url: BASE_URL,
    description:
      "Handcrafted jewelry for those who appreciate quality and restraint.",
    brand: {
      "@type": "Brand",
      name: "Natelier",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      url: `${BASE_URL}/contact`,
    },
    sameAs: [],
  };
}

export function getWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Natelier",
    url: BASE_URL,
    description:
      "Handcrafted jewelry for those who appreciate quality and restraint.",
    publisher: {
      "@type": "Organization",
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
    url: `${BASE_URL}/products/${product.handle}`,
    brand: {
      "@type": "Brand",
      name: "Natelier",
    },
    offers: {
      "@type": "Offer",
      price: product.price,
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      url: `${BASE_URL}/products/${product.handle}`,
      seller: {
        "@type": "Organization",
        name: "Natelier",
      },
      shippingDetails: {
        "@type": "OfferShippingDetails",
        shippingRate: {
          "@type": "MonetaryAmount",
          value: "0",
          currency: "USD",
        },
        shippingDestination: {
          "@type": "DefinedRegion",
          addressCountry: "US",
        },
        deliveryTime: {
          "@type": "ShippingDeliveryTime",
          handlingTime: {
            "@type": "QuantitativeValue",
            minValue: 1,
            maxValue: 3,
            unitCode: "DAY",
          },
          transitTime: {
            "@type": "QuantitativeValue",
            minValue: 2,
            maxValue: 5,
            unitCode: "DAY",
          },
        },
      },
      hasMerchantReturnPolicy: {
        "@type": "MerchantReturnPolicy",
        applicableCountry: "US",
        returnPolicyCategory:
          "https://schema.org/MerchantReturnFiniteReturnWindow",
        merchantReturnDays: 14,
        returnMethod: "https://schema.org/ReturnByMail",
        returnFees: "https://schema.org/FreeReturn",
      },
    },
    material: `${product.metalPurity} ${product.metal}`,
    category: product.category,
    additionalProperty: [
      {
        "@type": "PropertyValue",
        name: "Stone",
        value: product.stone,
      },
      {
        "@type": "PropertyValue",
        name: "Stone Origin",
        value: product.stoneOrigin,
      },
      {
        "@type": "PropertyValue",
        name: "Carats",
        value: product.stoneCarats,
      },
      {
        "@type": "PropertyValue",
        name: "Treatment",
        value: product.stoneTreatment,
      },
    ],
  };
}

export function getCollectionSchema(
  name: string,
  handle: string,
  description: string,
  products: Product[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name,
    description,
    url: `${BASE_URL}/collections/${handle}`,
    mainEntity: {
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
          url: `${BASE_URL}/products/${product.handle}`,
          offers: {
            "@type": "Offer",
            price: product.price,
            priceCurrency: "USD",
          },
        },
      })),
    },
  };
}

export function getBreadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${BASE_URL}${item.url}`,
    })),
  };
}

export function getFAQSchema(
  faqs: { question: string; answer: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
