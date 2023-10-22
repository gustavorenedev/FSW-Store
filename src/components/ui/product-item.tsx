import { ProductWithTotalPrice } from "@/helpers/product";
import Image from "next/image";
import { Badge } from "./badge";
import { ArrowDownIcon } from "lucide-react";
import { convertToCurrency } from "@/helpers/convert";

interface ProductItemProps {
  product: ProductWithTotalPrice;
}

const ProductItem = ({ product }: ProductItemProps) => {
  return (
    <div className="flex max-w-[170px] flex-col gap-4">
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
              <p className="font-semibold overflow-hidden text-ellipsis whitespace-nowrap">
                {convertToCurrency(product.totalPrice)}
              </p>

              <p className="text-xs line-through opacity-75 overflow-hidden text-ellipsis whitespace-nowrap">
                {convertToCurrency(Number(product.basePrice))}
              </p>
            </>
          ) : (
            <p className="text-sm font-semibold overflow-hidden text-ellipsis whitespace-nowrap">
              {convertToCurrency(Number(product.basePrice))}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
