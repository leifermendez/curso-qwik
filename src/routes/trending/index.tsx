import { component$ } from "@builder.io/qwik";
import Header from "~/components/header/header";

export default component$(() => {
    return (
        <div>
            <Header />
            <div>
                Soy pagina trending
            </div>
        </div>
    )
})