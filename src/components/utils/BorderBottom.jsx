import { twMerge } from "tailwind-merge";

export function BorderBottom({ color, size, className }) {
  return (
    <span
      className={twMerge(`block border ${color} ${size} ${className}`)}
    ></span>
  );
}
