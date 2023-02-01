import WaveSurfer from "wavesurfer.js";
import {
  $,
  component$,
  noSerialize,
  useClientEffect$,
  useContext,
  useSignal,
  useStore,
  useTask$,
} from "@builder.io/qwik";
import { useNavigate } from '@builder.io/qwik-city'
import { PlayerContext } from "~/context/player-ctx";

export const Button = component$((props: {handlePlay:any, statePlay:any}) => {
  return (
    <button
      class={
        "bg-pink-600 transition active:scale-75 text-white flex items-center justify-center content-center rounded-full w-[35px] h-[35px]"
      }
      onClick$={props.handlePlay}
    >
      {props.statePlay.value ? (
        <i class="uil uil-pause"></i>
      ) : (
        <i class="uil uil-play"></i>
      )}
    </button>
  );
});

export default component$(() => {

  

  const state = useContext(PlayerContext)

  const playerWave:any = useStore<{wave:WaveSurfer|undefined}>({wave:undefined})

  const statePlay = useSignal<boolean>(false);


  const navigation = useNavigate()
  useTask$(({track}) => {
    track(() => navigation.path)
    if(playerWave) playerWave.wave?.pause()
    console.log('Cambio de ruta..!')
  })

  useTask$(({track})=> {
    
    track(() => state.src)
    if(state.src){
      if(playerWave) playerWave.wave?.load(state.src)
    }


  });

  useClientEffect$(() => {
    const waveIn = WaveSurfer.create({
      container: `#global-player`,
      waveColor: "#BBBBBB",
      progressColor: "rgb(219 39 119)",
      height: 50,
      cursorWidth: 1,
      cursorColor: "transparent",
      barWidth: 2,
      normalize: true,
      responsive: true,
      fillParent: true,
    });

    playerWave.wave = noSerialize(waveIn);


    waveIn.on("ready", function () {
      console.log("Cancion cargada...");
    });
    waveIn.on("play", function () {
      statePlay.value = true;
    });
    waveIn.on("pause", function () {
      statePlay.value = false;
    });

    return () => {};
  });

  const handlePlay = $(() => {
    statePlay.value = !statePlay.value;
    if (statePlay.value) playerWave.wave?.play();
    if (!statePlay.value) playerWave.wave?.pause();
  });

  return (
    <div
      class={
        "fixed justify-between flex bottom-0 left-0 w-full h-[64px] bg-white border-solid border-t  z-10"
      }
    >
      <div
        class={
          "w-1/6 flex items-center content-center justify-center "
        }
      >
        <Button handlePlay={handlePlay} statePlay={statePlay} />
      </div>
      <div
        class={
          "w-full flex items-center content-center  justify-center "
        }
      >
        <div class={"w-full "} id="global-player"></div>
      </div>
    </div>
  );
});
