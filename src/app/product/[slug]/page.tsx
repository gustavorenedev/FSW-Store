import { prismaClient } from "@/lib/prisma";
import ProductImages from "./components/product-images";
import ProductInfo from "./components/product-info";
import { computeProductTotalPrice } from "@/helpers/product";
import ProductList from "@/components/ui/Product-list";

interface ProductDetailsPageProps {
  params: {
    slug: string;
  };
}

const ProductDetailsPage = async ({
  params: { slug },
}: ProductDetailsPageProps) => {
  const product = await prismaClient.product.findFirst({
    where: {
      slug: slug,
    },
    // consultando os produtos através de um include e filtrando
    // produtos similares ao produto mostrado
    include: {
      category: {
        include: {
          products: {
            where: {
              slug: {
                // removendo o produto ja em tela do array dos produtos similares
                not: slug,
              },
            },
          },
        },
      },
    },
  });

  if (!product) return null;

  return (
    <div className="flex flex-col gap-8 pb-8">
      <ProductImages imageURLs={product.imageURLs} name={product.name} />
      <ProductInfo product={computeProductTotalPrice(product)} />
      <ProductList products={product.category.products} />
    </div>
  );
};

export default ProductDetailsPage;
