import { Outlet, useNavigate } from "react-router-dom";
import CartOverlay from "./components/CartOverlay";
import {useCart} from "./context/CartContext";

function App() {
  const navigate = useNavigate();
  const cart = useCart();
  return (
    <div className="h-screen flex flex-col">
      <div className="text-center font-extralight text-8xl py-5 cursor-pointer" onClick={() => navigate("/")}>cofoo</div>
      <div className="max-w-xl w-full flex-1 mx-auto pb-80">
        <div className="flex flex-col">
          <div className="flex-1">
            <Outlet />
          </div>
          <div className="flex-1">

          </div>
        </div>
      </div>
      <div className="fixed bottom-0 w-full bg-white">
          <CartOverlay cart={cart} />
      </div>
    </div>
  );
}

export default App;
