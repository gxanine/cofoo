import { useNavigate } from "react-router-dom";
import { useCartDispatch } from "../context/CartContext";
import { getItemById } from "../data/menuItems";
import { classNames } from "../utils/classes";
import Button from "./ui/Button";

function CartItem({ id, itemId, qty, customisations, price, hideCart }) {
  const itemDetails = getItemById(itemId);
  const name = itemDetails.name;

  const cartDispatch = useCartDispatch();
  const navigate = useNavigate();

  function deleteHandler(e) {
    e.preventDefault();
    e.stopPropagation();
    cartDispatch({
      type: "deleted",
      id: id,
    });
  }

  function itemClickHandler(e) {
    hideCart();
    navigate("/item/" + itemId);
  }

  return (
    <>
      <div
        onClick={itemClickHandler}
        className={classNames(
          "flex",
          "p-3 justify-center items-center gap-2",
          "hover:bg-gray-100",
          "rounded",
          "mb-1 last:mb-0"
        )}
      >
        <div className="flex-1">
          <div className="font-bold">{name}</div>
          <div className="opacity-40 text-sm font">
            {customisations?.map((el, i) => (
              <div key={i}>
                <div>{el.name}: {el.amount} | {el.priceExtra.toFixed(2)} zł</div>
              </div>
            ))}
          </div>
        </div>
        <div className="text-sm">
          <div>{price.toFixed(2)} zł</div>
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

export default CartItem;
