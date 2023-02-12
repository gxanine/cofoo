import { useLocation, useNavigate, useParams } from "react-router-dom";
import { getItemById } from "../data/menuItems";
import { classNames } from "../utils/classes";
import CartAdder from "./CartAdder";
import Button from "./ui/Button";

function ItemDetail() {
  const { id } = useParams();

  const { name, description, price, image } = getItemById(id) ?? {};

  const navigate = useNavigate();
  const location = useLocation();

  function goBackHandler() {
    // If previous was home, simply go back
    // to keep the history clean
    if (location.state?.from === "/")
      return navigate(-1);

    navigate("/", { replace: true });
  }

  return (
    <div className="flex flex-col gap-5">
      <div>
        <Button small neutral onClick={goBackHandler}>
          ← Back to menu
        </Button>
      </div>
      <div
        className={classNames(
          "h-60 w-full",
          "shadow-inner opacity-80",
          "rounded-lg",
          "overflow-hidden",
          "shadow-lg"
        )}
      >
        <img
          className="object-cover h-full w-full"
          src={"/item-photos/" + image}
        />
      </div>
      <div className="flex text-3xl gap-2">
        <div className="font-bold">{name}</div>
        <div className="opacity-20">(#{id})</div>
        <div className="">{price.toFixed(2)} zł</div>
      </div>
      <div className="opacity-50">{description}</div>
      <div>
        <div className="flex justify-center my-5 gap-2">
          <CartAdder itemId={id} />
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;

// {existsInCart && (
//   <div className="opacity-30 text-center">
//     <div>
//       (Already in cart: {cart.find((i) => i.itemId === id)?.qty ?? 0})
//     </div>
//     <button
//       className="text-red-600 hover:underline"
//       onClick={deleteAllHandler}
//     >
//       delete all
//     </button>
//   </div>
// )}
