import { Outlet } from "react-router-dom";
import CartOverlay from "./components/CartOverlay";
import {useCart} from "./context/CartContext";
import {classNames} from "./utils/classes";

function App() {
  const cart = useCart();
  return (
    <div className="h-screen flex flex-col">
      <div className={classNames("max-w-xl w-full flex-1",
      "mx-auto pt-10 pb-32",
      "flex flex-col")}>
            <Outlet />
      </div>
      <div className="fixed bottom-0 w-full bg-white">
          <CartOverlay cart={cart} />
      </div>
    </div>
  );
}

export default App;
