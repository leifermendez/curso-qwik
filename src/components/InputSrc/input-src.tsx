import { $, component$, QwikMouseEvent,useSignal } from "@builder.io/qwik";

export const InputList = component$(() => {
  return (
    <div class={"bg-gray-100 rounded-b-xl z-10 absolute w-[370px] mt-[-10px]"}>
      <ul class={"px-2 pt-4 pb-3 flex flex-col gap-3"}>
        <li class={"uppercase text-sm text-gray-500"}>TRENDING</li>
        <li class={"flex gap-3 ease-in duration-75 hover:translate-x-4 cursor-pointer"}>
          <div>
            <img
              class={"w-[40px] h-[40px] rounded-full object-contain"}
              src="https://uppbeat.imgix.net/images/UppBeat_Playlists_Beats_Lofi-Beats.jpg?auto=compress&w=80&h=80"
              alt=""
            />
          </div>
          <div class={'flex content-center items-center '}>
            <span class={'font-medium text-xs'}>Lofit Beats</span>
          </div>
        </li>
      </ul>
    </div>
  );
});

export const InputSrc = component$(() => {
  const state = useSignal(false);

  const handleDropList = $((event: QwikMouseEvent<HTMLDivElement>) => {
    const id = (event.target as HTMLDivElement).id;
    if (id !== "input-src-qwik") state.value = false;
  });

  return (
    <div window:onClick$={handleDropList} class={{'drop-shadow-lg':state.value}}>
      <div class={{ "qwik-input-src ": true }}>
        <input
          onClick$={() => (state.value = true)}
          class={"bg-transparent w-full"}
          id={"input-src-qwik"}
          placeholder="Search tracks, artists, styles or sound effects"
          type="text"
        />
        <div class={"flex justify-center content-center items-center "}>
          <button class={"bg-slate-800 rounded-lg w-6 h-6"}>
            <i class="text-white uil uil-search"></i>
          </button>
        </div>
      </div>
      {state.value ? <InputList /> : null}
    </div>
  );
});
