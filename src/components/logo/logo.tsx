import { component$ } from "@builder.io/qwik";
import logoSrc from "~/assets/images/logo.svg";

export const Logo = component$(() => {
  return (
    <span>
      <img src={logoSrc} width={150} />
    </span>
  );
});
