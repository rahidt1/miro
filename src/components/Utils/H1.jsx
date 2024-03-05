import { twMerge } from "tailwind-merge";

export function H1({ children, className }) {
  return (
    <h1 className={twMerge(`text-5xl text-slate-900 font-bold ${className}`)}>
      {children}
    </h1>
  );
}
