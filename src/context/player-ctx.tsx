import { createContext } from "@builder.io/qwik";

export const PlayerContext = createContext<{src:string, play:boolean}>('player-context');