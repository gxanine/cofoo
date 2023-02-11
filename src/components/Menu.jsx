function Menu({ items, ...props }) {
  items = items ?? [];

  return (
    <>
      <div className="text-xl">Menu</div>
      <ul>
        {items.map((el, i) => (
          <div key={i} className="border-b first:border-t last:border-b-0">
            <div>{el.name}</div>
            <div>{el.description}</div>
            <div>{el.price}</div>
          </div>
        ))}
      </ul>
    </>
  );
}

export default Menu;
