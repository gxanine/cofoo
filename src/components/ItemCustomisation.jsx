import { useEffect, useState } from "react";
import { classNames } from "../utils/classes";
import NumberInput from "./ui/NumberInput";

function ItemCustomisation({
  name,
  description,
  defaultAmount,
  min,
  max,
  priceExtra,
  onChange,
}) {
  const [value, setValue] = useState(defaultAmount);

  useEffect(() => {
    const priceExtraCalculated = (value - defaultAmount) * priceExtra;
    onChange({
      name: name,
      amount: value,
      // Make sure the price extra is not a negative!
      priceExtra: priceExtraCalculated >= 0 ? priceExtraCalculated : 0,
      defaultAmount: defaultAmount,
    });
  }, [value]);

  return (
    <div
      className={classNames(
        "flex border-b last:border-b-0 p-3",
        "items-center"
      )}
    >
      <div className={classNames("flex-1")}>
        <div className="text-base font-bold">{name}</div>
        <div className="text-sm opacity-80">{description}</div>
        <div className="text-xs opacity-50">
          Default: {defaultAmount} | Extra: {priceExtra.toFixed(2)} zł
        </div>
      </div>
      <div>
        <NumberInput
          value={value}
          onChange={setValue}
          min={min}
          max={max}
          defaultValue={defaultAmount}
        />
      </div>
    </div>
  );
}

export default ItemCustomisation;
