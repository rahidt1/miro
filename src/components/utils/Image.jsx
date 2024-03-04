import { twMerge } from "tailwind-merge";

export function Image({ className, src, size }) {
  return <img className={twMerge(`${size} ${className}`)} src={src} alt="" />;
}
