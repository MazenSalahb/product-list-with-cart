import CakeImage from "../assets/images/illustration-empty-cart.svg";

function EmptyCart() {
  return (
    <div className="flex flex-col gap-6 items-center justify-center">
      <img src={CakeImage} alt="Cake" />
      <p className="font-semibold text-rose-500">
        Your added items will apear here
      </p>
    </div>
  );
}

export default EmptyCart;
