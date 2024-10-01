import { PRODUCTS } from "../lib/constants";
import { CartItemType, ProductType } from "../lib/types";
import ProductItem from "./ProductItem";

function ProductList({
  addToCart,
  cart,
  addMoreToCart,
  removeFromCart,
}: {
  addToCart: (product: ProductType) => void;
  cart: CartItemType[];
  addMoreToCart: (product: CartItemType) => void;
  removeFromCart: (product: CartItemType) => void;
}) {
  return (
    <div className="flex-[2]">
      <h1 className="text-4xl font-bold mb-6">Desserts</h1>
      <div className="grid lg:grid-cols-3 gap-7">
        {PRODUCTS.map((product) => (
          <ProductItem
            addToCart={addToCart}
            key={product.id}
            product={product}
            cart={cart}
            addMoreToCart={addMoreToCart}
            removeFromCart={removeFromCart}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
