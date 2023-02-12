import { useState } from "react";
import { classNames } from "../utils/classes";
import CartPopupItem from "./CartPopupItem";

function CartPopup({ cart }) {
  const [active, setActive] = useState(false);

  return (
    <div className="absolute flex flex-col right-0 z-50 p-3 gap-2 h-screen overflow-hidden">
      {/* Icon */}
      <div
        className={classNames(
          "flex-shrink-0",
          "relative self-end",
          "text-xl",
          "w-12 h-12",
          "border",
          "flex justify-center items-center",
          "shadow",
          "rounded-full",
          "bg-white",
          "hover:bg-gray-100 active:bg-gray-200",
          "select-none"
        )}
        onClick={() => setActive((prev) => !prev)}
      >
        {active ? "✕" : "🛒"}
        {!active && cart.length > 0 && (
          <div
            className={classNames(
              "absolute",
              "bottom-0 right-0",
              "translate-x-1/3 translate-y-1/4",
              "h-6 min-w-[1.5rem] px-1",
              "text-xs",
              "text-white",
              "pointer-events-none",
              "rounded-full",
              "flex justify-center items-center",
              "bg-emerald-500"
            )}
          >
            {cart.length > 99 ? cart.length : cart.length}
          </div>
        )}
      </div>

      {/* Popup */}
      <div
        className={classNames(
          "relative",
          "max-h-full w-screen max-w-xs",
          active ? "block" : "hidden",
          "bg-white",
          "shadow rounded-lg border px-1 py-1",
          "flex flex-col flex-grow-1",
          "overflow-y-scroll overflow-x-hidden pb-3"
        )}
      >
        <div className="text-2xl p-3 border-b">
          <span className="font-black">Total items: </span>{cart.length}</div>
        <div className="overflow-y-scroll pt-2 pb-10">
          {cart.length > 0 &&
            cart.map((el) => <CartPopupItem key={el.id} {...el} />)}
          {cart.length === 0 && (
            <div className="text-center opacity-50 p-3">
              Your cart is empty <div className="p-1 text-4xl">😭</div>
            </div>
          )}
        </div>
        <div className="flex-shrink-0 h-9 w-[95%] absolute bottom-3  bg-gradient-to-t from-white">{" "}</div>
      </div>
    </div>
  );
}

export default CartPopup;
