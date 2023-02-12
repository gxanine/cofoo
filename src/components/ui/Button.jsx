import { classNames } from "../../utils/classes";

function Button({ children, danger, ...props }) {
  return (
    <button
      {...props}
      className={classNames(
        "rounded",
        danger ? "bg-red-500 hover:bg-red-600 active:bg-red-700" : "bg-emerald-500 hover:bg-emerald-600 active:bg-emerald-700",
        "text-white",
        "px-5 py-3",
        "disabled:opacity-40 disabled:cursor-not-allowed"
      )}
    >
      {children}
    </button>
  );
}

export default Button;
