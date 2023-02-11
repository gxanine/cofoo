import {Outlet} from "react-router-dom"

function App() {


  return (
    <div className="">
      <div className="text-center font-extralight text-8xl py-5">cofoo</div>
      <div className="max-w-xl border border-stone-400 mx-auto">
        <Outlet />
      </div>
    </div>
  )
}

export default App
