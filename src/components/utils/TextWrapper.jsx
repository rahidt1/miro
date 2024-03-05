import { twMerge } from "tailwind-merge";

export function TextWrapper({ children, className }) {
  return (
    <div
      className={twMerge(`lg:w-xs flex flex-col lg:items-center ${className}`)}
    >
      {children}
    </div>
  );
}
