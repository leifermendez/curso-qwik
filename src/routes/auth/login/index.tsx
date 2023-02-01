import { component$, $, useStore } from "@builder.io/qwik";
import { Link, useNavigate } from "@builder.io/qwik-city";
import { Button } from "~/components/button/button";

export const fakeAuthService = (credentiales:{email:string, password:string}) => {
  console.log('⚡⚡ Servicio externo que se encarga de validar mis credenciales: ', credentiales)
  console.log(`⚡⚡ Retorna un token session (JWT Json Web Token)`)

  const JWT = 'TOKEN_SESSION_123'
  document.cookie = `myToken=${JWT}; Secure; SameSite=Strict; path=/`
}

export default component$(() => {
  const navigate = useNavigate()
  const store = useStore({
    email: "",
    password: "",
  });

  const signIn = $(() => {
    fakeAuthService({email:store.email, password:store.password})
    navigate.path = '/'
  })

  return (
    <div class={"h-full w-full flex justify-center content-center items-center"}>
      <form preventdefault:submit onSubmit$={signIn}>
        <div class={"grid gap-3 p-3"}>
          <input
            value={store.email}
            onInput$={(ev: any) => (store.email = ev?.target?.value)}
            class={"qwik-input-src"}
            type="text"
            placeholder="Email..."
          />
          <input
            value={store.password}
            onInput$={(ev: any) => (store.password = ev?.target?.value)}
            class={"qwik-input-src"}
            type="password"
            placeholder="Pasword..."
          />
          <div class={"flex gap-2"}>
            <Button
              icon="uil-sign-out-alt"
              label="Iniciar sesión"
              color="primary"
            />
            <Link href="/">
              <Button label="Cancelar" color="default" />
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
});
