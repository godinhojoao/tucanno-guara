import { useState } from "react";
import { Animal } from "../../interfaces/Animal";
import { DefaultLink } from "../../interfaces/DefaultLink";
import { HeaderContextProps } from "../../interfaces/props/HeaderContextProps";
import { HeaderProps } from "../../interfaces/props/HeaderProps";

export function useHeader(): HeaderContextProps {
  const [title, setTitle] = useState<string>("");
  const [subtitle, setSubtitle] = useState<string>("");
  const [highlight, setHighlight] = useState<string>("");
  const [animal, setAnimal] = useState<Animal | undefined>();
  const [linkToNavigate, setLinkToNavigate] = useState<DefaultLink>();

  function handleChangeHeader(headerProps: HeaderProps): void {
    setTitle(headerProps.title);
    setSubtitle(headerProps.subtitle || '');
    setHighlight(headerProps.highlight || '');
    setAnimal(headerProps.animal);
    setLinkToNavigate(headerProps.linkToNavigate);
  }

  return { handleChangeHeader, title, subtitle, highlight, linkToNavigate, animal };
}
