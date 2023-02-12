import { classNames } from "../../utils/classes";

function Button({ children, danger, ...props }) {
  return (
    <button
      {...props}
      className={classNames(
        "rounded",
        "text-white px-10 py-3",
        danger ? "bg-red-500 hover:bg-red-600 active:bg-red-700" : "bg-emerald-500 hover:bg-emerald-600 active:bg-emerald-700"
      )}
    >
      {children}
    </button>
  );
}

export default Button;
