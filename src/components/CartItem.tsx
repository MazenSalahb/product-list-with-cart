import { CiCircleRemove } from "react-icons/ci";
import { CartItemType } from "../lib/types";

function CartItem({
  cartItem,
  removeFromCart,
}: {
  cartItem: CartItemType;
  removeFromCart: (cartItem: CartItemType) => void;
}) {
  return (
    <div>
      <div className="flex justify-between items-center">
        <div className="flex flex-col">
          <h1 className="font-semibold">{cartItem.name}</h1>
          <div className="flex gap-3">
            <span className="text-red font-semibold">{cartItem.quantity}x</span>
            <span className="text-rose-300">
              <small>@</small> ${cartItem.price.toFixed(2)}
            </span>
            <span className="font-semibold text-rose-400">
              ${cartItem.price * cartItem.quantity}
            </span>
          </div>
        </div>

        <CiCircleRemove
          onClick={() => removeFromCart(cartItem)}
          size={28}
          className="text-rose-400 hover:text-black cursor-pointer duration-150"
        />
      </div>
      <hr className="my-4" />
    </div>
  );
}

export default CartItem;
