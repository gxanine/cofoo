const menuItems = [
  {
    id: "123",
    name: "Coffee",
    description: "A fresh and delicious black coffee",
    price: 5.0,
    image: "123.jpg",
  },
  {
    id: "124",
    name: "PBJ",
    description: "Peanut butter jelly time!",
    price: 3.45,
    image: "124.jpg",
  },
  {
    id: "125",
    name: "Carrot cake",
    description: "Ordering here is a piece of cake",
    price: 6.2,
    image: "125.jpg",
  },
];

export function getItemById(id) {
  return menuItems.find((el) => el.id === id);
}

export default menuItems;
