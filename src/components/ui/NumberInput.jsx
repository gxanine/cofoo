import { useRef, useState } from "react";
import { classNames } from "../../utils/classes";
import Button from "./Button";

function NumberInputRepresentation({value, onChange, min, max, ...props}) {
  const inputRef = useRef(null);

  function decreaseHandler() {
    if (min === null || (value ?? 0) <= min) return;
    onChange(value - 1);
  }

  function increaseHandler() {
    if (max === null && (value ?? 0) >= max) return;
    onChange(value + 1);
  }

  return (
    <div className="flex border rounded overflow-hidden">
      <input type="hidden" readOnly ref={inputRef} />
      <Button
        small
        neutral
        className={classNames("rounded-none rounsded-l px-3")}
        onClick={decreaseHandler}
      >
        －
      </Button>
      <div
        className={classNames(
          "bg-white shadow-inner",
          "flex flex-1 justify-center items-center",
          "min-w-[3em] px-2 py-1",
          props.className
        )}
      >
        {value}
      </div>
      <Button
        small
        neutral
        className={classNames("rounded-none roundsed-r px-3")}
        onClick={increaseHandler}
      >
        ＋
      </Button>
    </div>

  )
}

function Uncontrolled({defaultValue, min, max, ...props}) {
  const [value, setValue] = useState(defaultValue)
  return (
    <NumberInputRepresentation value={value} onChange={setValue} min={min} max={max} {...props}/>
  )
}

function NumberInput({defaultValue, min, max, value, onChange, ...props}) {
  return typeof value === "undefined" ? (
    <Uncontrolled defaultValue={defaultValue} min={min} max={max} {...props}/>
  ) : (
    <NumberInputRepresentation value={value} onChange={onChange} min={min} max={max} {...props}/>
  )
}

export default NumberInput;
