import { twMerge } from "tailwind-merge";

export function Button({ children, color, size, content = true, className }) {
  return (
    <a
      className={twMerge(
        `p-3 rounded-3xl  text-center text-white text-nowrap mt-5 ${
          content
            ? "after:content-['->'] after:inline-block after:w-5"
            : "after:content-[''] after:w-0"
        } ${color} ${size} ${className}`
      )}
      href="#"
    >
      {children}
    </a>
  );
}
