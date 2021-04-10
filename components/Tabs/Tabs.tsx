import React, { useEffect, useRef, useState } from "react";
import type alphaTabType from "@coderline/alphatab";

declare let alphaTab: typeof alphaTabType;
export type TabsProps = {
  tex: string;
};
export default function Tabs({ tex }: TabsProps) {
  const tabsEl = useRef();
  const alphaTabApi = useRef<alphaTabType.AlphaTabApi>();
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);

  useEffect(() => {
    if (document.querySelector("#alphaTabScript")) {
      setIsScriptLoaded(true);
      return;
    }

    const alphaTabScript = document.createElement("script");
    alphaTabScript.id = "alphaTabScript";
    alphaTabScript.src =
      "https://cdn.jsdelivr.net/npm/@coderline/alphatab@latest/dist/alphaTab.js";
    alphaTabScript.onload = () => {
      setIsScriptLoaded(true);
    };

    document.body.appendChild(alphaTabScript);
  }, []);

  useEffect(() => {
    if (!isScriptLoaded) {
      return;
    }

    alphaTabApi.current = new alphaTab.AlphaTabApi(tabsEl.current, {});
    alphaTabApi.current.tex(tex);
    return () => {
      alphaTabApi.current.destroy();
    };
  }, [isScriptLoaded, tex]);

  if (!isScriptLoaded) {
    return <div>Loading AlphaTab...</div>;
  }
  return <section ref={tabsEl}></section>;
}
