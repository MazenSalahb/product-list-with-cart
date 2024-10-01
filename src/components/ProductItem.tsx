import { useEffect, useState } from "react";
import { IoIosAddCircleOutline } from "react-icons/io";
import { IoRemoveCircleOutline } from "react-icons/io5";
import { MdAddShoppingCart } from "react-icons/md";
import { CartItemType, ProductType } from "../lib/types";

export default function ProductItem({
  product,
  addToCart,
  addMoreToCart,
  removeFromCart,
  cart,
}: {
  product: ProductType;
  addToCart: (product: ProductType) => void;
  addMoreToCart: (product: CartItemType) => void;
  removeFromCart: (product: CartItemType) => void;
  cart: CartItemType[];
}) {
  const [activeProduct, setActiveProduct] = useState<CartItemType | undefined>(
    undefined
  );

  useEffect(() => {
    setActiveProduct(cart.find((item) => item.name == product.name));
  }, [cart]);

  return (
    <div>
      <div className="relative mb-6">
        <img
          src={product.image}
          alt="Waffel"
          className={`rounded-lg h-full w-full object-cover ${
            activeProduct && "border-2 border-red"
          }`}
        />

        {activeProduct ? (
          <ActiveProductButton
            quantity={activeProduct.quantity}
            onAdd={() => addMoreToCart(activeProduct)}
            onRemove={() => {
              removeFromCart(activeProduct);
            }}
          />
        ) : (
          <AddToCartButton onClick={() => addToCart(product)} />
        )}
      </div>

      <div>
        <p className="text-sm text-rose-500">{product.category}</p>
        <p className="font-semibold">{product.name}</p>
        <span className="font-semibold text-red">
          ${product.price.toFixed(2)}
        </span>
      </div>
    </div>
  );
}

function AddToCartButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={() => {
        onClick();
      }}
      className="absolute left-1/2 bottom-0 transform translate-y-1/2 -translate-x-1/2 font-semibold border-[0.5px] rounded-full border-red bg-rose-50 py-3 px-3 text-sm whitespace-nowrap flex items-center justify-center gap-2 hover:bg-red duration-150 hover:text-rose-50"
    >
      <MdAddShoppingCart size={16} className="text-red" /> <p>Add To Cart</p>
    </button>
  );
}

function ActiveProductButton({
  quantity,
  onAdd,
  onRemove,
}: {
  quantity: number;
  onAdd: () => void;
  onRemove: () => void;
}) {
  return (
    <div className="absolute min-w-[50%] px-3 left-1/2 bottom-0 transform translate-y-1/2 -translate-x-1/2 font-semibold border-[0.5px] rounded-full border-red bg-red py-3 text-sm whitespace-nowrap flex items-center justify-around gap-2">
      <button onClick={onRemove}>
        <IoRemoveCircleOutline
          size={22}
          className="text-rose-50 cursor-pointer"
        />
      </button>
      <p className="text-rose-50">{quantity}</p>
      <button onClick={onAdd}>
        <IoIosAddCircleOutline
          size={22}
          className="text-rose-50 cursor-pointer"
        />
      </button>
    </div>
  );
}
