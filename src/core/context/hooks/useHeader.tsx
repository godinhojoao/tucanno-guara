import { useState } from "react";
import { DefaultLink } from "../../interfaces/DefaultLink";
import { HeaderContextProps } from "../../interfaces/HeaderContextProps";
import { HeaderProps } from "../../interfaces/HeaderProps";

export function useHeader(): HeaderContextProps {
  const [title, setTitle] = useState<string>("");
  const [subtitle, setSubtitle] = useState<string>("");
  const [linkToNavigate, setLinkToNavigate] = useState<DefaultLink>();

  function handleChangeHeader(headerProps: HeaderProps): void {
    setTitle(headerProps.title);
    setSubtitle(headerProps.subtitle);
    setLinkToNavigate(headerProps.linkToNavigate);
  }

  return { handleChangeHeader, title, subtitle, linkToNavigate };
}
