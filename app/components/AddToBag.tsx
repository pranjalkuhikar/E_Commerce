"use client";
import { Button } from "@/components/ui/button";
import { urlFor } from "../lib/sanity";
import { useShoppingCart } from "use-shopping-cart";
import { ProductCart } from "../interface";

export default function AddToBag({
  name,
  description,
  price,
  currency,
  image,
  price_id,
}: ProductCart) {
  const { addItem, handleCartClick } = useShoppingCart();
  const product = {
    name: name,
    description: description,
    price: price,
    currency: currency,
    image: urlFor(image).url(),
    price_id: price_id,
  };

  return (
    <Button
      onClick={() => {
        addItem(product), handleCartClick();
      }}
    >
      Add To Cart
    </Button>
  );
}
