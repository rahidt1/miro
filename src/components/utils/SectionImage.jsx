import { twMerge } from "tailwind-merge";

export function SectionImage({ children, className }) {
  return (
    <section
      className={twMerge(
        `w-full max-w-6xl mx-auto my-14 flex flex-row gap-x-14 ${className}`
      )}
    >
      {children}
    </section>
  );
}
