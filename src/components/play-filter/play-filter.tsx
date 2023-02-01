import { $, component$, useContext } from "@builder.io/qwik";
import { PlayListContext } from "../play-list/play-list";

export interface PlayFilterProp {
  label: string;
  values: { label: string; value: string }[];
}

export const PlayFilter = component$(({ label, values }: PlayFilterProp) => {
  const state = useContext(PlayListContext);

  const handleFilter = $(() => {
    state.openFilter = !state.openFilter;
    state.options = values
  });

  return (
    <div
      onClick$={handleFilter}
      class={"flex gap-1 text-gray-400 hover:text-gray-600 select-none"}
    >
      <span class={"uppercase font-medium text-sm  cursor-pointer"}>
        {label}
      </span>
      <span>
        <i class="uil uil-angle-down"></i>
      </span>
    </div>
  );
});
