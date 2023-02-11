import Menu from "./components/Menu"

function App() {

  const menuItems = [
    {
      name: "Coffee",
      description: "A fresh and delicious black coffee",
      price: 5.00
    },
    {
      name: "PBJ",
      description: "Peanut butter jelly time!",
      price: 3.45
    },
    {
      name: "Carrot cake",
      description: "Ordering here is a piece of cake",
      price: 6.20
    }
  ]

  return (
    <div className="">
      <div className="text-center font-extralight text-8xl py-5">cofoo</div>
      <div className="max-w-xl border border-stone-400 mx-auto">
        <Menu items={menuItems}/>
      </div>
    </div>
  )
}

export default App
