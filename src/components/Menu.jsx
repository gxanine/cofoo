import MenuItem from "./MenuItem";

function Menu({ items, ...props }) {
  items = items ?? [];

  return (
    <>
      <div className="text-9xl">Menu</div>
      <ul>
        {items.map((el, i) => (
          <div key={i} className="border-b py-2 last:border-b-0">
            <MenuItem {...el} />
          </div>
        ))}
      </ul>
    </>
  );
}

export default Menu;
