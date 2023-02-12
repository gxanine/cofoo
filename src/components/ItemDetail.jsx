import { useParams } from "react-router-dom";
import {useCartDispatch} from "../context/CartContext";
import { getItemById } from "../data/menuItems";
import Button from "./ui/Button";

function ItemDetail() {
  const { id } = useParams();

  const { name, description, price } = getItemById(id) ?? {};

  const cartDispatch = useCartDispatch();

  function addButtonHandler() {
    cartDispatch({
      type: 'added',
      itemId: id,
      qty: 1
    })
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
        <div className="flex justify-center my-5">
          <Button onClick={addButtonHandler}>Add to cart</Button>
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;