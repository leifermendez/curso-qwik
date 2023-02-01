import { component$ } from "@builder.io/qwik";
import { SidebarItem } from "../sidebar-item/sidebar-item";


export const Separator = () => (
  <>
    <hr />
  </>
);

export default component$(() => {
  return (
    <div class={" text-gray-900 "}>
      <div class={"flex-col gap-6 p-6 flex border-gray-200 border-b"}>
        <SidebarItem name={"Music"} route={'/'} icon={"uil-music"} />
        <SidebarItem name={"Sound Effect"} route={'/sfx'} icon={"uil-graph-bar"} />
        <SidebarItem name={"Trending"} route={'/trending'} icon={"uil-chart-line"} />
      </div>
      <div class={"flex-col gap-6 p-6 flex "}>
        <SidebarItem name={"My Favorites"} route={'/favorites'} icon={"uil-heart"} />
        <SidebarItem name={"My Playlist"} route={'/playlist'} icon={"uil-book-alt"} />
        <SidebarItem name={"Downlaod history"} route={'/history'} icon={"uil-history"} />
      </div>
    </div>
  );
});
