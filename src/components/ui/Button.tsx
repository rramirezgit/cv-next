import { type ComponentProps } from "react";

type ButtonVariant = "primary" | "secondary";

type ButtonAsButton = {
  as?: "button";
} & ComponentProps<"button">;

type ButtonAsLink = {
  as: "a";
} & ComponentProps<"a">;

type ButtonProps = (ButtonAsButton | ButtonAsLink) & {
  variant?: ButtonVariant;
};

export function Button({ variant = "primary", ...props }: ButtonProps) {
  const className = `btn btn-${variant} ${props.className || ""}`.trim();

  if (props.as === "a") {
    const { as: _, ...rest } = props as ButtonAsLink & { variant?: ButtonVariant };
    return <a {...rest} className={className} />;
  }

  const { as: _, ...rest } = props as ButtonAsButton & { variant?: ButtonVariant };
  return <button {...rest} className={className} />;
}
