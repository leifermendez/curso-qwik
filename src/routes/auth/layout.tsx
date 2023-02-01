import { component$, Slot } from "@builder.io/qwik";

export default component$(() => {
  return (
    <div class={' w-[100vw] h-[100vh]'}>
     <Slot />
    </div>
  );
});