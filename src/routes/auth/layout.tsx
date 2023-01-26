import { component$, Slot } from "@builder.io/qwik";

export default component$(() => {
    return(
        <div>
            <div>Esto solo es visible <b>en las rutas /auth</b></div>
            <Slot />
        </div>
    )
})