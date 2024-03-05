import { twMerge } from "tailwind-merge";

export function H2({ children, className }) {
  return (
    <h2
      className={twMerge(`text-lg text-slate-900 font-bold mb-6 ${className}`)}
    >
      {children}
    </h2>
  );
}
