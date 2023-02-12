import {useNavigate} from "react-router-dom";

function MenuItem({id, name, description, price, ...props}) {
  
  const navigate = useNavigate();

  function onClickHandler(e) {
    navigate(`/item/${id}`);
  }
  return (
    <div className="flex p-4 rounded hover:bg-stone-400/10 cursor-pointer" onClick={onClickHandler}>
      <div className="flex-1">
        <div className="flex gap-2">
          <div className="font-bold">
          {name}
          </div>
          <div className="opacity-30">(#{id})</div>
        </div>
        <div className="opacity-80">{description}</div>
      </div>
      <div className="w-14 flex justify-center flex-col items-start">
        <div className="text-base font-bold">{price.toFixed(2)} zł</div>
      </div>
    </div>
  )
}

export default MenuItem;
