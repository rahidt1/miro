import { twMerge } from "tailwind-merge";

export function Image({ className, src, size, ...props }) {
  return (
    <img
      className={twMerge(`${size} ${className}`)}
      src={src}
      alt=""
      {...props}
    />
  );
}
