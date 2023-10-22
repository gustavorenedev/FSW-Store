import { ProductWithTotalPrice } from "@/helpers/product";
import Image from "next/image";
import { Badge } from "./badge";
import { ArrowDownIcon } from "lucide-react";
import { convertToCurrency } from "@/helpers/convert";
import Link from "next/link";

interface ProductItemProps {
  product: ProductWithTotalPrice;
}

const ProductItem = ({ product }: ProductItemProps) => {
  return (
    <Link href={`/product/${product.slug}`}>
      <div className="flex flex-col gap-4">
        {/* imagem */}
        <div className=" relative flex h-[170px] w-[170px] items-center justify-center rounded-lg bg-accent">
          <Image
            src={product.imageURLs[0]}
            height={0}
            width={0}
            sizes="100vw"
            className="h-auto max-h-[70%] w-auto max-w-[80%]"
            style={{
              objectFit: "contain",
            }}
            alt={product.name}
          />

          {product.discountPercent > 0 && (
            <Badge className="absolute left-3 top-3 px-2 py-[2px]">
              <ArrowDownIcon size={14} />
              {product.discountPercent}%
            </Badge>
          )}
        </div>

        {/* texto */}
        <div className="flex flex-col gap-1">
          <p className="overflow-hidden text-ellipsis whitespace-nowrap text-sm">
            {product.name}
          </p>
          <div className="flex items-center gap-2">
            {product.discountPercent > 0 ? (
              <>
                <p className="overflow-hidden text-ellipsis whitespace-nowrap font-semibold">
                  {convertToCurrency(product.totalPrice)}
                </p>

                <p className="overflow-hidden text-ellipsis whitespace-nowrap text-xs line-through opacity-75">
                  {convertToCurrency(Number(product.basePrice))}
                </p>
              </>
            ) : (
              <p className="overflow-hidden text-ellipsis whitespace-nowrap text-sm font-semibold">
                {convertToCurrency(Number(product.basePrice))}
              </p>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductItem;
