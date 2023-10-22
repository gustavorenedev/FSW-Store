import { Product } from "@prisma/client";

interface ProductWithTotalPrice extends Product {
  totalPrice: number;
}

// Função para calcular o preço total
const computeProductTotalPrice = (product: Product): ProductWithTotalPrice => {
  if (product.discountPercent === 0) {
    return {
      ...product,
      totalPrice: Number(product.basePrice),
    };
  }

  const totalPrice =
    Number(product.basePrice) * (product.discountPercent / 100);

  return {
    ...product,
    totalPrice,
  };
};