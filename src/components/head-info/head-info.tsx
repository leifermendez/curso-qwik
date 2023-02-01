import { component$ } from "@builder.io/qwik";

export interface HeadInfoProps {
  title: string;
}

export const HeadInfo = component$(({ title }: HeadInfoProps) => {
  return (
    <div class={" flex gap-3 py-10 h-[206px] px-10"}>
      <div class={"icon-box w-15 w-full"}>
        <h1 class={"text-5xl font-black"}>{title}</h1>
        <div class={"flex flex-col gap-2 py-3"}>
          <div class={" font-black text-lg"}>
            Music for creators. No copyright issues.
          </div>
          <div class={" font-black text-lg"}>
            Upgrade for only $6.99 p/month to unlock everything.
          </div>
        </div>
      </div>
    </div>
  );
});
