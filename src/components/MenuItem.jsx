function MenuItem({id, name, description, price, ...props}) {
  return (
    <div className="flex p-2 hover:bg-stone-500/10 cursor-pointer">
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