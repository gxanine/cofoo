import { createContext, useContext, useReducer } from "react";
import CartPopup from "../components/CartPopup";

const CartContext = createContext([]);
const CartDispatchContext = createContext(null);

export function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(cartReducer, []);

  return (
    <CartContext.Provider value={cart}>
      <CartDispatchContext.Provider value={dispatch}>
        <CartPopup cart={cart} />
        {children}
      </CartDispatchContext.Provider>
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}

export function useCartDispatch() {
  return useContext(CartDispatchContext);
}

function cartReducer(cart, action) {
  switch (action.type) {
    case "added": {
      return [
        ...cart,
        {
          id: Date.now(),
          itemId: action.itemId,
          qty: action.qty,
        },
      ];
    }
    case "deleted": {
      return cart.filter((item) => item.id !== action.id);
    }
    default: {
      throw Error("Unknow action: " + action.type);
    }
  }
}
