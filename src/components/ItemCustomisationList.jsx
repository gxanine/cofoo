import { useEffect, useState } from "react";
import { getItemById } from "../data/menuItems";
import ItemCustomisation from "./ItemCustomisation";

function ItemCustomisationList({ itemId, onChange }) {
  const item = getItemById(itemId);
  const possibleCustomisations = item.customisations;
  const [customisations, setCustomisations] = useState([]);

  function onCustomisationHandler(customisation) {
    setCustomisations((prev) =>
      [
        ...prev.filter((el) => el.name !== customisation.name),
        customisation.amount !== customisation.defaultAmount
          ? customisation
          : undefined,
      ].filter(Boolean)
    );
  }

  useEffect(() => {
    console.log(customisations);
    onChange(customisations);
  }, [customisations]);

  return (
    <div>
      {possibleCustomisations?.map((el, i) => (
        <ItemCustomisation key={i} {...el} onChange={onCustomisationHandler} />
      ))}
    </div>
  );
}

export default ItemCustomisationList;
