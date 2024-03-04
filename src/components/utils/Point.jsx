// Specialised Button

import { Button } from "./Button";

export function Point({ children, color }) {
  return (
    <Button
      content={false}
      color={`text-slate-900 border border-zinc-100 ${color}`}
      size="px-8 text-xs"
    >
      {children}
    </Button>
  );
}
