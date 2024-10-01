import { SiGumtree } from "react-icons/si";
import { CartItemType } from "../lib/types";
import CartItem from "./CartItem";

function ActiveCart({
  cart,
  removeFromCart,
  openModal,
}: {
  cart: CartItemType[];
  removeFromCart: (cartItem: CartItemType) => void;
  openModal: () => void;
}) {
  const total = cart.reduce(
    (sum, cartItem) => sum + cartItem.price * cartItem.quantity,
    0
  );

  return (
    <div>
      {/* Cart Items Section */}
      {cart.map((cartItem) => (
        <CartItem
          key={cartItem.id}
          cartItem={cartItem}
          removeFromCart={removeFromCart}
        />
      ))}
      {/*END Cart Items Section */}

      <div className="flex items-center justify-between mt-6">
        {/* Cart Total Section */}
        <p>Order Total</p>
        <span className="text-2xl font-bold">${total.toFixed(2)}</span>
        {/* END Cart Total Section */}
      </div>

      {/* Carbon-neutral Section */}
      <div className="flex items-center justify-center w-full gap-2 p-4 rounded-lg bg-rose-50">
        <SiGumtree className="text-green" />
        <p>
          this is <span className="font-semibold">carbon-neutral</span> delivery
        </p>
      </div>
      {/* END Carbon-neutral Section */}

      {/* Confirm Button Section */}
      <button
        onClick={openModal}
        className="w-full p-4 mt-6 duration-150 rounded-full bg-red text-rose-50 hover:bg-rose-900"
      >
        Confirm Order
      </button>
      {/* END Confirm Button Section */}
    </div>
  );
}

export default ActiveCart;
