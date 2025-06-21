import { type ReactNode } from "react";

interface HeaderProps {
  image: {
    src: string;
    alt: string;
  };

  //reactnode is a type that represents any valid React child, such as a string, number, element, or an array of these.
  children?: ReactNode;
}

export default function Header({ image, children }: HeaderProps) {
  return (
    <header>
      <img {...image} />
      {children}
    </header>
  );
}
