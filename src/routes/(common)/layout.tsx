import { component$, Slot, useContextProvider, useStore } from "@builder.io/qwik";
import { RequestHandler } from "@builder.io/qwik-city";
import FooterPlayer from "~/components/footer-player/footer-player";
import Header from "~/components/header/header";
import { Logo } from "~/components/logo/logo";
import Sidebar from "~/components/sidebar/sidebar";
import { PlayerContext } from "~/context/player-ctx";

export const onGet:RequestHandler = ({cookie, response}) => {
  const currentToken = cookie.get('myToken')?.value
  if(currentToken !== 'TOKEN_SESSION_123'){
    throw response.redirect('/auth/login')
  }
}

export default component$(() => {
  const statePlayer = useStore({src:'', play:false})

  useContextProvider(PlayerContext, statePlayer)

  return (
    <div class={"h-[100vh] flex"}>
    <div class={"w-[256px] fixed "}>
      <div class={"bg-gray-50 h-[100vh]"}>
        <div class={"p-6 border-gray-200 border-b"}>
          <Logo />
        </div>
        <div class={""}>
          <Sidebar />
        </div>
      </div>
    </div>
    <div class={"pl-[256px] w-full"}>
      <Header />
      <Slot />
    </div>
      <FooterPlayer />
  </div>
  );
});

