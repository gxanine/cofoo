import {useCartDispatch} from "../context/CartContext";
import { getItemById } from "../data/menuItems";
import { classNames } from "../utils/classes";
import Button from "./ui/Button";

function CartPopupItem({ id, itemId, qty }) {
  const itemDetails = getItemById(itemId);
  const name = itemDetails.name;
  const price = (itemDetails.price * qty).toFixed(2);

  const cartDispatch = useCartDispatch();

  function deleteHandler(e) {
    cartDispatch({
      type: 'deleted',
      id: id
    })
  }

  return (
    <>
      <div
        className={classNames(
          "flex",
          "p-3 justify-center items-center gap-2",
          "hover:bg-gray-100",
          "rounded",
          "mb-1 last:mb-0"
        )}
      >
        <div className="flex-1 font-bold">{name}</div>
        <div className="text-sm">
          <div>{price} zł</div>
          <div className="opacity-40">Qty: {qty}</div>
        </div>
        <button
          onClick={deleteHandler}
          className={classNames(
            "h-7 w-7 rounded-full",
            "text-red-500 hover:text-white hover:bg-red-500 active:bg-red-600"
          )}
        >
          ✕
        </button>
      </div>
    </>
  );
}

export default CartPopupItem;
