import { twMerge } from "tailwind-merge";

export function P({ children, className }) {
  return (
    <p className={twMerge(`text-lg opacity-60 ${className}`)}>{children}</p>
  );
}
