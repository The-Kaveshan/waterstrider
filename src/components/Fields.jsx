import { useId } from "react";

const formClasses =
  "block w-full appearance-none rounded-lg border border-gray-200 bg-white py-[calc(theme(spacing.2)-1px)] px-[calc(theme(spacing.3)-1px)] text-gray-900 placeholder:text-gray-400 focus:border-cyan-500 focus:outline-none focus:ring-cyan-500 text-xs sm:text-sm";

export function Label({ id, children }) {
  return (
    <label
      htmlFor={id}
      className="mb-2 block text-xs sm:text-sm font-semibold text-gray-900"
    >
      {children}
    </label>
  );
}

export function TextField({ label, type = "text", className, ...props }) {
  let id = useId();

  return (
    <div className={className}>
      {label && <Label id={id}>{label}</Label>}
      <input id={id} type={type} {...props} className={formClasses} />
    </div>
  );
}
