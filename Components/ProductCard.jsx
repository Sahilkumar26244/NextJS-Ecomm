import { getDiscountPricePercentage } from "@/utils/helper";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function ProductCard({ data: { attributes: p, id } }) {
  return (
    <Link
      href={`/product/${p.slug}`}
      className="transform overflow-hidden bg-white duration-200 hover:scale-105 cursor-pointer"
    >
      <img
        width={500}
        height={500}
        src={p.thumbnail.data.attributes.url}
        alt="sahil"
      />
      <div className="p-4 text-black/[0.9]">
        <h2 className="text-lg font-medium">{p.name}</h2>
        <div className="flex items-center text-black/[0.5]">
          <p className="mr-2 text-lg font-semibold">&#8377;{p.price}</p>

          {p.original_price && (
            <>
              <p className="text-base font-medium line-through">
                {p.original_price}
              </p>
              <p className="ml-auto text-base font-medium text-green-500">
                {getDiscountPricePercentage(p.original_price,p.price)}
                % off
              </p>
            </>
          )}
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
