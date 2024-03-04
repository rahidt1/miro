import { twMerge } from "tailwind-merge";

export function TextWrapper({ children, className }) {
  return (
    <div className={twMerge(`flex flex-col ${className}`)}>{children}</div>
  );
}
