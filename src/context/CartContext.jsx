import { createContext, useContext, useReducer } from "react";
import { compareCartItems } from "../utils/items";

const CartContext = createContext([]);
const CartDispatchContext = createContext(null);

export function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(cartReducer, []);

  return (
    <CartContext.Provider value={cart}>
      <CartDispatchContext.Provider value={dispatch}>
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
      // Check if item already exists
      let newItem = {
        id: Date.now(),
        itemId: action.itemId,
        qty: action.qty,
        customisations: action.customisations,
      };
      let existing = cart.find((item) => compareCartItems(item, newItem));
      if (existing)
        return cart.map((item) => {
          if (item.id === existing.id)
            return {
              ...item,
              qty: item.qty + action.qty,
            };
          return item;
        });

      // Create new if one doesn't already exist
      return [...cart, newItem];
    }
    case "removed": {
      // Delete if qty falls below 0
      let existing = cart.find((item) => item.itemId === action.itemId);
      if (existing && existing.qty - action.qty <= 0)
        return cart.filter((item) => item.id !== existing.id);

      console.log("not removed");
      // Remove qty
      return cart.map((item) => {
        if (item.itemId === action.itemId)
          return {
            ...item,
            qty: item.qty - action.qty,
          };
        return item;
      });
    }
    case "deleted": {
      return cart.filter((item) => item.id !== action.id);
    }
    default: {
      throw Error("Unknow action: " + action.type);
    }
  }
}
