import { twMerge } from "tailwind-merge";

export function SectionImage({ children, className }) {
  return (
    <section
      className={twMerge(
        `mx-auto my-14 flex w-full max-w-6xl flex-row gap-x-14 lg:max-w-2xl lg:flex-col lg:items-center lg:gap-y-12 ${className}`,
      )}
    >
      {children}
    </section>
  );
}
