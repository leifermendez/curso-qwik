import {
  component$,
  NoSerialize,
} from "@builder.io/qwik";
import { PlayerWave } from "../player-wave/player-wave";


export interface PlayListPropsWave {
  wave?: NoSerialize<WaveSurfer>;
  play?:boolean,
  src:string,
  preview:string,
  name:string,
  artist:string,
  cover:string,
  tags:string[],
  id:number
}

export const PlayListItem = component$((props:PlayListPropsWave) => {

  const id = `wave_${props.id}`;
  return (
    <div class={"group"}>
      <div class={"group-hover:bg-white transition-all ease-out duration-75  cursor-pointer rounded-tl-full rounded-bl-full p-2 items-center flex"}>
        <div class={"flex gap-6 w-1/5"}>
          <div>
            <img
              class={"rounded-full h-[60px] w-[60px] object-cover"}
              src={props.cover}
              alt=""
            />
          </div>
          <div class={"text-sm flex flex-col justify-center"}>
            <div class={"font-semibold"}>{props.name}</div>
            <div>{props.artist}</div>
            <div
              class={
                "text-pink-600 text-xs font-medium transition-opacity ease-in opacity-0 group-hover:opacity-100"
              }
            >
              More Like this
            </div>
          </div>
        </div>
        <div class={" flex content-center items-center gap-2 w-1/4"}>
          {props.tags.map(() => {
            return (
              <>
                <span
                  class={
                    "group-hover:bg-gray-100  bg-white rounded-2xl text-xs px-2 py-1 h-fit"
                  }
                >
                  Chill
                </span>
              </>
            );
          })}
        </div>
        <div class={" flex gap-6 w-1/2"}>
          <div class={"flex justify-center items-center w-full"}>
            <PlayerWave src={props.src} preview={props.preview} id={id} />
          </div>
        </div>
      </div>
    </div>
  );
});
