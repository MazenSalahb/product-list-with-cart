import { useState } from "react";
import { CiCircleCheck } from "react-icons/ci";
import Modal from "react-modal";
import ActiveCart from "./components/ActiveCart";
import EmptyCart from "./components/EmptyCart";
import ProductList from "./components/ProductList";
import { CartItemType, ProductType } from "./lib/types";

function App() {
  const [cart, setCart] = useState<CartItemType[]>([]);
  const [modalIsOpen, setIsOpen] = useState(false);
  const numOfCartItems = cart.reduce((total, item) => total + item.quantity, 0);

  Modal.setAppElement("#root");

  const addToCart = (product: ProductType) => {
    setCart([...cart, { ...product, quantity: 1, id: Date.now() }]);
  };

  const removeFromCart = (product: ProductType) => {
    setCart((prevCart) => prevCart.filter((item) => item.id != product.id));
  };

  const increaseItemInCart = (product: CartItemType) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const reduceItemFromCart = (product: CartItemType) => {
    const reducedItem = cart.find((item) => item.id == product.id);
    if (reducedItem!.quantity <= 1) {
      removeFromCart(product);
    }
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item
      )
    );
  };

  const handleNewOrder = () => {
    setCart([]);
    setIsOpen(false);
  };

  return (
    <main className="w-4/5 pt-24 mx-auto gap-7 md:flex">
      {/* Products Section */}
      <ProductList
        cart={cart}
        addToCart={addToCart}
        addMoreToCart={increaseItemInCart}
        removeFromCart={reduceItemFromCart}
      />
      {/* END Products Section */}

      {/* Cart Section */}
      <div className="flex-1 p-5 bg-white rounded-lg h-fit">
        <h1 className="mb-6 text-3xl font-bold text-red">
          Your Cart ({numOfCartItems})
        </h1>
        {cart.length === 0 ? (
          <EmptyCart />
        ) : (
          <ActiveCart
            cart={cart}
            removeFromCart={removeFromCart}
            openModal={openModal}
          />
        )}
      </div>
      {/* END Cart Section */}

      {/* Modal Section */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="flex flex-col items-start w-full gap-4 p-5 bg-white rounded-lg shadow-lg md:w-1/3"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex items-end md:items-center justify-center"
      >
        <div>
          <CiCircleCheck className="mx-auto text-green" size={32} />
        </div>

        <div className="flex flex-col gap-1">
          <h1 className="text-3xl font-bold">Order Confirmed</h1>
          <p className="text-sm text-rose-400">
            we hope you enjoyed your food!
          </p>
        </div>

        <div className="w-full p-3 overflow-y-scroll rounded-lg max-h-96 bg-rose-50">
          {cart.map((cartItem) => (
            <div key={cartItem.id}>
              <div className="flex items-center justify-between">
                <div className="flex flex-col">
                  <h1 className="font-semibold">{cartItem.name}</h1>
                  <div className="flex gap-3">
                    <span className="font-semibold text-red">
                      {cartItem.quantity}x
                    </span>
                    <span className="text-sm text-rose-300">
                      ${cartItem.price.toFixed(2)}
                    </span>
                  </div>
                </div>

                <span className="font-semibold">
                  ${cartItem.price * cartItem.quantity}
                </span>
              </div>
              <hr className="my-4" />
            </div>
          ))}

          {/* Cart Total Section */}
          <div className="flex items-center justify-between mt-6">
            <p>Order Total</p>
            <span className="text-2xl font-bold">
              $
              {cart
                .reduce(
                  (sum, cartItem) => sum + cartItem.price * cartItem.quantity,
                  0
                )
                .toFixed(2)}
            </span>
          </div>
          {/* END Cart Total Section */}

          <button
            onClick={handleNewOrder}
            className="w-full px-4 py-2 mt-6 duration-150 rounded-full bg-red text-rose-50 hover:bg-rose-900"
          >
            Start New Order
          </button>
        </div>
      </Modal>
      {/* End Modal Section */}
    </main>
  );
}

export default App;
