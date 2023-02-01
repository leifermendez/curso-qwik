import { component$ } from "@builder.io/qwik";

export interface ButtonProps {
  color: "primary" | "default";
  label?: string;
  icon?: string;
}

export const Button = component$(({color, label, icon}:ButtonProps) => {

  return (
    <button class={{'qwik-button-primary text-xs':(color === "primary"), 'qwik-button-default':(color !== "primary")}}>
      {icon ? <i class={'uil '+icon}></i> : null}
      {label}
    </button>
  );
})