import { twMerge } from "tailwind-merge";

export function Button({ children, color,size, className }) {
  return (
    <a
      className={twMerge(
        `p-3 rounded-3xl  text-center text-white mt-5 after:content-['->'] after:inline-block after:w-5 ${color} ${size} ${className}`
      )}
      href="#"
    >
      {children}
    </a>
  );
}
