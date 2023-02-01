import {
    $,
    component$,
    useStylesScoped$,
  } from "@builder.io/qwik";
  import { useNavigate } from "@builder.io/qwik-city";
  
  export interface SideBarItemProps {
    name?: string;
    icon?: string;
    route?: string;
  }
  
  export const SidebarItem = component$(
    ({ name, icon, route }: SideBarItemProps) => {
      useStylesScoped$(SideBarItemStyle);
      const navigation = useNavigate();
  
      const moveToPage = $(() => {
        console.log('🚩 Navigate to '+route)
        if (route) navigation.path = route
      });
  
      return (
        <div onClick$={moveToPage} class={"qwik-sidebar-item-component "}>
          <span>
            <i class={"uil " + icon}></i>
          </span>
          <span class={"text-sm"}>
            <>{name}</>
          </span>
        </div>
      );
    }
  );
  
  export const SideBarItemStyle = `
          div:hover{
              opacity:1;
              transform: translateX(20px);
          }
      `;
  