import { twMerge } from "tailwind-merge";

export function Link({ href, children, className }) {
  return (
    <a className={twMerge(`text-base ${className}`)} href={href}>
      {children}
    </a>
  );
}
