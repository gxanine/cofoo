import {useState} from "react";
import MenuItem from "./MenuItem";

function Menu({ items, ...props }) {
  items = items ?? [];

  const [activeItemIndex, setActiveItemIndex] = useState(null);

  return (
    <>
      <div className="text-9xl">Menu</div>
      <ul>
        {items.map((el, i) => (
          <div key={i} className="border-b py-2 last:border-b-0">
            <MenuItem activate={() => setActiveItemIndex(i)} active={activeItemIndex===i} {...el} />
          </div>
        ))}
      </ul>
    </>
  );
}

export default Menu;
