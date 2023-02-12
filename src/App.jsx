import { Outlet, useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  return (
    <div className="">
      <div className="text-center font-extralight text-8xl py-5 cursor-pointer" onClick={() => navigate("/")}>cofoo</div>
      <div className="max-w-xl mx-auto">
          <Outlet />
      </div>
    </div>
  );
}

export default App;
