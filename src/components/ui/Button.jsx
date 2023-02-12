import { classNames } from "../../utils/classes";

function Button({ children, danger, neutral, small, ...props }) {
  return (
    <button
      {...props}
      className={classNames(
        "rounded",
        "text-white",
        small ? "px-2 py-1" : "px-5 py-3",
        danger
          ? "bg-red-500 hover:bg-red-600 active:bg-red-700"
          : neutral
          ? "bg-gray-500 hover:bg-gray-600 active:bg-gray-700"
          : "bg-emerald-500 hover:bg-emerald-600 active:bg-emerald-700",
        "disabled:opacity-40 disabled:cursor-not-allowed",
        props.className
      )}
    >
      {children}
    </button>
  );
}

export default Button;
