import { useParams } from "react-router-dom";
import {useCart, useCartDispatch} from "../context/CartContext";
import { getItemById } from "../data/menuItems";
import Button from "./ui/Button";

function ItemDetail() {
  const { id } = useParams();

  const { name, description, price } = getItemById(id) ?? {};

  const cartDispatch = useCartDispatch();
  const cart = useCart();
  const existsInCart = cart.find((i) => i.itemId === id) ? true : false;

  function addButtonHandler() {
    cartDispatch({
      type: 'added',
      itemId: id,
      qty: 1
    })
  }
  function decreaseButtonHandler() {
    cartDispatch({
      type: 'removed',
      itemId: id,
      qty: 1
    })
  }

  function deleteAllHandler() {
    cartDispatch({
      type: "deleted",
      id: cart.find((i) => i.itemId === id).id,
    });
  }

  return (
    <div className="flex flex-col">
      <div className="flex text-3xl gap-2">
        <div className="font-bold">{name}</div>
        <div className="opacity-20">(#{id})</div>
        <div className="">{price.toFixed(2)} zł</div>
      </div>
      <div className="opacity-50">{description}</div>
      <div>
        <div className="flex justify-center my-5 gap-2">
         <Button disabled={!existsInCart} danger onClick={decreaseButtonHandler}>－ Remove</Button>
          <Button onClick={addButtonHandler}>＋ Add to cart</Button>
        </div>
        {existsInCart && (
          <div className="opacity-30 text-center">
            <div>
              (Already in cart: {cart.find((i) => i.itemId === id)?.qty ?? 0})
            </div>
            <button
              className="text-red-600 hover:underline"
              onClick={deleteAllHandler}
            >
              delete all
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default ItemDetail;
