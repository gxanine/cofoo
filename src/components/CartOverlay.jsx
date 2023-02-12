import { useEffect, useState, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getItemById } from "../data/menuItems";
import {calculateCartItemTotalPrice, calculateCartTotalPrice} from "../utils/cart";
import { classNames } from "../utils/classes";
import CartItem from "./CartItem";
import Button from "./ui/Button";

function CartOverlay({ cart }) {
  const [total, setTotal] = useState(0);
  const navigate = useNavigate();

  const location = useLocation();
  const [isCheckout, setIsCheckout] = useState(
    location.pathname === "/checkout"
  );

  useEffect(() => {
    setIsCheckout(location.pathname === "/checkout");
  }, [location]);

  useEffect(() => {
    setTotal(calculateCartTotalPrice(cart));
  }, [cart]);

  const [cartVisible, setCartVisible] = useState(false);

  function viewCartHandler() {
    setCartVisible((prev) => !prev);
  }

  return (
    <div className="relative">
      <div className="bg-white shadow-lg relative border-t p-5 w-full z-50">
        <div className="relative max-w-xl mx-auto z-50">
          <div className={classNames("flex gap-3")}>
            <div className="text-xl flex-1">
              <span className="font-bold text-2xl">Total:</span>{" "}
              {total.toFixed(2)} zł
            </div>
            <Button
              className={classNames(
                "relative flex gap-2",
                isCheckout ? "hidden" : "block"
              )}
              small
              neutral
              onClick={viewCartHandler}
            >
              <div
                className={classNames(
                  // "absolute",
                  // "top-0 left-0",
                  // "-translate-x-1/2 -translate-y-1/2",
                  "h-6 min-w-[1.5rem] px-1",
                  cart.length > 0 ? "inline-block" : "hidden",
                  "text-xs",
                  "text-white",
                  "pointer-events-none",
                  "rounded-full",
                  "flex justify-center items-center",
                  "bg-emerald-500"
                )}
              >
                {cart.length}
              </div>

              {cartVisible ? "Hide cart" : "View cart"}
            </Button>
            <Button
              className={classNames(
                "relative",
                isCheckout ? "hidden" : "block"
              )}
              small
              onClick={() => {
                setCartVisible(false);
                navigate("/checkout");
              }}
            >
              Go to checkout
            </Button>
          </div>
        </div>
      </div>
      <div
        className={classNames(
          "max-h-60 px-0 py-1 w-screen max-w-lg bg-white z-40",
          "absolute top-0 mx-auto",
          "left-1/2 -translate-x-1/2",
          "overflow-scroll",
          "shadow rounded border",
          cartVisible ? "-translate-y-[110%]" : "",
          "transition-transform duration-500 ease-in-out"
        )}
      >
        {cart.length > 0 &&
          cart.map((el) => (
            <CartItem
              hideCart={() => setCartVisible(false)}
              key={el.id}
              price={calculateCartItemTotalPrice(el)}
              {...el}
            />
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
      {/* Backdrop */}
      <div
        className={classNames(
          "absolute",
          "top-100 left-0",
          "h-screen w-screen",
          cartVisible ? "-translate-y-full" : ""
        )}
        onClick={() => setCartVisible(false)}
      ></div>
    </div>
  );
}

export default CartOverlay;
