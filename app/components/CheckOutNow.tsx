"use client";
import { Button } from "@/components/ui/button";
import { urlFor } from "../lib/sanity";
import { useShoppingCart } from "use-shopping-cart";
import { ProductCart } from "../interface";

export default function CheckOutNow({
  name,
  description,
  price,
  currency,
  image,
  price_id,
}: ProductCart) {
  const { checkoutSingleItem } = useShoppingCart();

  function buyNow(price_id: string) {
    checkoutSingleItem(price_id);
  }

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
      variant={"outline"}
      onClick={() => {
        buyNow(product.price_id);
      }}
    >
      Check Out Now
    </Button>
  );
}
