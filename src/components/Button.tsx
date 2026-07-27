import type { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

// 1. Define the union type explicitly
export type ButtonVariant = "primary" | "secondary" | "ghost-destructive";

type ButtonProps = {
  variant?: ButtonVariant;
} & ComponentProps<"button">;

export function Button({
  variant = "primary",
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={twMerge(
        "transition-colors px-2 py-1 rounded text-sm font-semibold disabled:opacity-30 disabled:cursor-not-allowed",
        getVariantStyles(variant),
        className,
      )}
    ></button>
  );
}

// 2. Use the defined type here
function getVariantStyles(variant: ButtonVariant) {
  switch (variant) {
    case "primary":
      return "bg-violet-600 hover:bg-violet-500";
    case "secondary":
      return "bg-zinc-600 hover:bg-zinc-600 text-zinc-400";
    case "ghost-destructive":
      return "bg-red-800 hover:bg-red-800 hover:text-red-200";
    default:
      // Now TS knows all 3 cases were handled, so variant is typed as `never` here
      throw new Error(`Invalid Variant: ${variant satisfies never}`);
  }
}
