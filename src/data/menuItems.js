const menuItems = [
  {
    id: "123",
    name: "Coffee",
    description: "A fresh and delicious black coffee",
    price: 5.0,
  },
  {
    id: "124",
    name: "PBJ",
    description: "Peanut butter jelly time!",
    price: 3.45,
  },
  {
    id: "125",
    name: "Carrot cake",
    description: "Ordering here is a piece of cake",
    price: 6.2,
  },
];

export function getItemById(id) {
  return menuItems.find((el) => el.id === id);
}

export default menuItems;
