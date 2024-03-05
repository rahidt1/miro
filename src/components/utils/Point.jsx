// Specialised Button

import { Button } from "./Button";

export function Point({ children, color, isSelected, ...props }) {
  return (
    <Button
      className=""
      content={false}
      color={`text-slate-900 border border-zinc-100 ${color} ${
        isSelected ? "bg-zinc-100" : null
      }`}
      size="px-8 text-xs"
      {...props}
    >
      {children}
    </Button>
  );
}
