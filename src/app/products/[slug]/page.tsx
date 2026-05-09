import ProductClient from "./ProductClient";
import { products } from "@/lib/products";

export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.id,
  }));
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return <ProductClient slug={slug} />;
}
