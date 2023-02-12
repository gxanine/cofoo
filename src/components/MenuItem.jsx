import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart, useCartDispatch } from "../context/CartContext";
import { classNames } from "../utils/classes";
import CartAdder from "./CartAdder";
import Button from "./ui/Button";
import NumberInput from "./ui/NumberInput";

function MenuItem({ id, name, description, price, active, ...props }) {
  const navigate = useNavigate();
  const containerRef = useRef(null);
  const [qty, setQty] = useState(0);
  const cart = useCart();
  const qtyAlreadyInCart = cart.find((i) => i.itemId === id)?.qty ?? 0;
  const cartDispatch = useCartDispatch();

  function onClickHandler(e) {
    props.activate();
  }

  function clearMouseSelection() {
    if (window.getSelection) {
      if (window.getSelection().empty) {
        // Chrome
        window.getSelection().empty();
      } else if (window.getSelection().removeAllRanges) {
        // Firefox
        window.getSelection().removeAllRanges();
      }
    } else if (document.selection) {
      // IE?
      document.selection.empty();
    }
  }

  // Clear mouse selection when item is activated
  // to prevent accidental selection bug
  useEffect(clearMouseSelection,[active])

  function addButtonHandler(e) {
    cartDispatch({
      type: "added",
      itemId: id,
      qty: qty,
    });
    setQty(0);
  }

  function customiseButtonHandler() {
    navigate("/item/"+id);
  }

  return (
    <div
      onFocus={() => props.activate()}
      tabIndex={0}
      className={classNames(
        "flex flex-col",
        "p-4 rounded cursor-pointer",
        // "focus-within:bg-stone-400/10",
        // "focus:bg-stone-400/10",
        active ? "bg-stone-400/20" : "hover:bg-stone-400/10"
      )}
      onClick={onClickHandler}
      ref={containerRef}
    >
      <div className="flex">
        <div className="flex-1">
          <div className="flex gap-2">
            <div className="font-bold">{name}</div>
            <div className="opacity-30">(#{id})</div>
          </div>
          <div className="opacity-80">{description}</div>
        </div>
        <div className="w-14 flex justify-center flex-col items-start">
          <div className="text-base font-bold">{price.toFixed(2)} zł</div>
        </div>
      </div>
      <div
        className={classNames(
          active ? "block" : "hidden",
          "pt-3 flex flex-col",
          "gap-3"
        )}
      >
        <CartAdder itemId={id}>
          <Button neutral small onClick={customiseButtonHandler}>
            Customise
          </Button>
        </CartAdder>
      </div>
    </div>
  );
}

export default MenuItem;
