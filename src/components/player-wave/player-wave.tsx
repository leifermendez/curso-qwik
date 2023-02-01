import WaveSurfer from "wavesurfer.js";
import {
  component$,
  useClientEffect$,
  useContext,
} from "@builder.io/qwik";
import { PlayerContext } from "~/context/player-ctx";


export const PlayerWave = component$((props:{id:string, src:string, preview:string}) => {

  const state = useContext(PlayerContext)

  useClientEffect$(() => {
    const waveIn = WaveSurfer.create({
      container: `#${props.id}`,
      waveColor: "#BBBBBB",
      progressColor: "rgb(219 39 119)",
      height: 70,
      cursorWidth: 1,
      cursorColor: "transparent",
      barWidth: 2,
      normalize: true,
      responsive: true,
      fillParent: true,
    });

    waveIn.load(props.preview);
  
  });

  return (
    <div onClick$={() => state.src = props.src} class={"w-full h-[70px]"}>
      <div id={props.id}></div> 
    </div>
  );
});
