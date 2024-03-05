import { twMerge } from "tailwind-merge";

export function TextWrapper({ children, className }) {
  return (
    <div className={twMerge(`flex flex-col lg:items-center  ${className}`)}>
      {children}
    </div>
  );
}
