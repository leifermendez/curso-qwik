import { component$ } from "@builder.io/qwik";

export interface AvatarProps {
    src:string;
    alt?:string
}

export const Avatar = component$(({src, alt}:AvatarProps) => {
  return (
    <div class={'w-[40px] h-[40px]'}>
      <img class={'qwik-avatar'}
        src={src}
        alt={alt}
      />
    </div>
  );
});
