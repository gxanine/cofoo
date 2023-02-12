import { useState } from "react";
import { useCart, useCartDispatch } from "../context/CartContext";
import { classNames } from "../utils/classes";
import Button from "./ui/Button";
import NumberInput from "./ui/NumberInput";

function CartAdder({ itemId, removable, children }) {
  const [qty, setQty] = useState(1);

  const cartDispatch = useCartDispatch();
  const cart = useCart();
  const existsInCart = cart.find((i) => i.itemId === itemId) ? true : false;
  const qtyAlreadyInCart = cart.find((i) => i.itemId === itemId)?.qty ?? 0;

  function addHandler() {
    cartDispatch({
      type: "added",
      itemId: itemId,
      qty: qty,
    });

    // Reset qty field after adding the item
    setQty(0);
  }
  function removeHandler() {
    cartDispatch({
      type: "removed",
      itemId: itemId,
      qty: 1,
    });
  }

  function deleteAllHandler() {
    cartDispatch({
      type: "deleted",
      id: cart.find((i) => i.itemId === id).id,
    });
  }

  return (
    <div className={classNames("pt-3 flex flex-col", "gap-3")}>
      <div className="gap-3 flex flex-1">
        <div className="">
          <NumberInput
            onChange={setQty}
            defaultValue={1}
            min={0}
            max={10}
            value={qty}
          />
        </div>
        <Button
          className="flex-1"
          small
          disabled={qty <= 0}
          onClick={addHandler}
        >
          ＋ Add to cart
        </Button>
        {removable && <Button small disabled={!existsInCart} danger onClick={removeHandler}>
          － Remove
        </Button>}
        {children}
      </div>
      <div className="opacity-40">
        Qty of this item already in the cart: {qtyAlreadyInCart}
      </div>
    </div>
  );
}

export default CartAdder;
