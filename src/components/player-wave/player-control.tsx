import { component$ } from "@builder.io/qwik";
import { PlayListPropsWave } from "../play-list/play-list-item";

export const PlayerControl = component$(
  (props: { state: PlayListPropsWave }) => {

    const BtnPlay = (
      <button
        class={
          "bg-pink-600 transition active:scale-75 text-white flex items-center justify-center content-center rounded-full w-[35px] h-[35px]"
        }
        onClick$={() => props.state.wave?.play()}
      >
        <i class="uil uil-play"></i>
      </button>
    );

    const BtnPause = (
      <button
        class={
          "bg-pink-600 transition active:scale-75 text-white flex items-center justify-center content-center rounded-full w-[35px] h-[35px]"
        }
        onClick$={() => props.state.wave?.playPause()}
      >
        <i class="uil uil-pause"></i>
      </button>
    );

    return <div class={" w-full px-3 flex justify-end"}>
        { props.state.play ? BtnPause : BtnPlay }
    </div>;
  }
);
