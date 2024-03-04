import { twMerge } from "tailwind-merge";

export function Input({ placeholder, className }) {
  return (
    <input
      className={twMerge(
        `border border-stone-500 outline-none rounded-3xl pl-5 pt-3 pb-3 mt-8 w-100 ${className}`
      )}
      type="text"
      placeholder={placeholder}
    />
  );
}
