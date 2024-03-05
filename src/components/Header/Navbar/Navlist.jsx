import { twMerge } from "tailwind-merge";

export function NavList({ children, className }) {
  return (
    <ul className={twMerge(`flex list-none items-center gap-x-3 ${className}`)}>
      {children}
    </ul>
  );
}
