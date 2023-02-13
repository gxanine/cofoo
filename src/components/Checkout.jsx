import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart, useCartDispatch } from "../context/CartContext";
import { calculateCartItemTotalPrice } from "../utils/cart";
import { classNames } from "../utils/classes";
import CartItem from "./CartItem";
import Button from "./ui/Button";

function Checkout() {
  const navigate = useNavigate();
  const cart = useCart();
  const cartDispatch = useCartDispatch();

  const [isLoading, setIsLoading] = useState(false);
  const [isPlaced, setIsPlaced] = useState(false);

  function goBackHandler() {
    // If previous was home, simply go back
    // to keep the history clean
    if (location.state?.from === "/") return navigate(-1);

    navigate("/", { replace: true });
  }

  function dummyPlaceOrder() {
    setIsLoading(true);
    setTimeout(() => {
      setIsPlaced(true);
      setIsLoading(false);
    }, 2000);
  }

  function resetHandler() {
    // Clear the cart
    cart.forEach((item) => {
      cartDispatch({
        type: 'deleted',
        id: item.id
      })
    })

    // Navigate back home
    navigate("/", {replace:true});
  }

  return (
    <>
      <div>
        <Button small neutral onClick={goBackHandler}>
          ← Back to menu
        </Button>
      </div>
      <div className="text-9xl">Cart</div>

      <div className={classNames("flex-1")}>
        {cart.length > 0 &&
          cart.map((el) => (
            <div key={el.id} className="border-b py-2 last:border-b-0">
              <CartItem price={calculateCartItemTotalPrice(el)} {...el} />
            </div>
          ))}
        {cart.length === 0 && (
          <div
            className={classNames(
              "text-center",
              "h-full flex flex-col justify-center items-center",
              "opacity-50 p-3"
            )}
          >
            Your cart is empty <div className="p-1 text-4xl">😭</div>
          </div>
        )}
      </div>
      <div className="text-center">
        {!isPlaced && !isLoading && (
          <Button disabled={cart.length <= 0} onClick={dummyPlaceOrder}>
            Place the order
          </Button>
        )}
        {isLoading && (
          <div
            className={classNames(
              "mx-auto",
              "h-14 w-14",
              "border-4",
              "border-b-transparent border-l-transparent border-r-traansparent",
              "rounded-[50%]",
              "animate-spin"
            )}
          ></div>
        )}
        {isPlaced && !isLoading && (
          <div
            className={classNames(
              "absolute top-0 left-0",
              "h-screen w-screen",
              "bg-white",
              "z-50",
              "flex justify-center items-center flex-col gap-5"
            )}
          >
            <div
              className={classNames("text-5xl font-thin", "text-emerald-500")}
            >
              Your order is on it's way!
            </div>
            <Button small neutral onClick={resetHandler}>Place another one</Button>
          </div>
        )}
      </div>
    </>
  );
}

export default Checkout;
