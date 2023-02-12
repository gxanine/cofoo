import { classNames } from "../../utils/classes";

function Button({ children, danger, neutral, ...props }) {
  return (
    <button
      {...props}
      className={classNames(
        "rounded",
        "text-white",
        "px-5 py-3",
        danger
          ? "bg-red-500 hover:bg-red-600 active:bg-red-700"
          : neutral
          ? "bg-gray-500 hover:bg-gray-600 active:bg-gray-700"
          : "bg-emerald-500 hover:bg-emerald-600 active:bg-emerald-700",
        "disabled:opacity-40 disabled:cursor-not-allowed"
      )}
    >
      {children}
    </button>
  );
}

export default Button;
