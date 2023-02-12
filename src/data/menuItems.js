const menuItems = [
  {
    id: "123",
    name: "Coffee",
    description: "A fresh and delicious black coffee",
    price: 5.0,
    image: "123.jpg",
    customisations: [
      {
        name: "Milk",
        description: "Add some more milk",
        defaultAmount: 1,
        priceExtra: 0.5,
        min: 0,
        max: 2,
      },
      {
        name: "Sugar",
        description: "Would like some sugar maybe?",
        defaultAmount: 0,
        priceExtra: 0.5,
        min: 0,
        max: 10,
      },
    ],
  },
  {
    id: "124",
    name: "PBJ",
    description: "Peanut butter jelly time!",
    price: 3.45,
    image: "124.jpg",
    customisations: [
      {
        name: "Peanut butter",
        description: "Everyone loves peanut butter...",
        defaultAmount: 1,
        priceExtra: 0.1,
        min: 1,
        max: 5,
      },
      {
        name: "Jelly",
        description: "Oh jelly... My sweet jelly...",
        defaultAmount: 1,
        priceExtra: 0.15,
        min: 0,
        max: 5,
      },
    ],
  },
  {
    id: "125",
    name: "Carrot cake",
    description: "Ordering here is a piece of cake",
    price: 6.2,
    image: "125.jpg",
    customisations: [
      {
        name: "Whipped cream",
        description: "Sweet and delicate clouds for your dessert",
        defaultAmount: 1,
        priceExtra: 0.05,
        min: 0,
        max: 5,
      },
    ],
  },
];

export function getItemById(id) {
  return menuItems.find((el) => el.id === id);
}

export default menuItems;
