import { twMerge } from "tailwind-merge";

export function Button({
  children,
  color,
  size,
  content = true,
  className,
  ...props
}) {
  return (
    <a
      className={twMerge(
        `p-3 rounded-3xl cursor-pointer text-center text-white text-nowrap mt-5 ${
          content
            ? "after:content-['->'] after:inline-block after:w-5"
            : "after:content-[''] after:w-0"
        } ${color} ${size} ${className}`
      )}
      {...props}
    >
      {children}
    </a>
  );
}
