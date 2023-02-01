import { component$, useContext } from "@builder.io/qwik";
import { PlayListContext } from "../play-list/play-list";

export const PlayFilterOptions = component$(() => {
  const state = useContext(PlayListContext);
  return (
    <div class={"flex gap-2"}>
      {state.options.map((option) => (
        <span class={"select-nopne bg-gray-100 hover:bg-gray-200 rounded-3xl text-xs cursor-pointer p-3"}>{option.label}</span>
      ))}
    </div>
  );
});
