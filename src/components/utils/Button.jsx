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
        `mt-5 cursor-pointer text-nowrap rounded-3xl p-3 text-center text-white ${
          content
            ? "after:inline-block after:w-5 after:content-['->']"
            : "after:w-0 after:content-['']"
        } ${color} ${size} ${className}`,
      )}
      {...props}
    >
      {children}
    </a>
  );
}
