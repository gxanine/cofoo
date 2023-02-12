import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { calculateCartItemTotalPrice } from "../utils/cart";
import { classNames } from "../utils/classes";
import CartItem from "./CartItem";
import Button from "./ui/Button";

function Checkout() {
  const navigate = useNavigate();
  const cart = useCart();

  function goBackHandler() {
    // If previous was home, simply go back
    // to keep the history clean
    if (location.state?.from === "/") return navigate(-1);

    navigate("/", { replace: true });
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
              <CartItem
                price={calculateCartItemTotalPrice(el)}
                {...el}
              />
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
    </>
  );
}

export default Checkout;
