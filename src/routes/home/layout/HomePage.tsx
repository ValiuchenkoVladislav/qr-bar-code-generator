import { useRef, useState } from "react";

import Barcode from "react-barcode";
import { QRCodeSVG } from "qrcode.react";

import { GenerationForm } from "./GenerationForm/GenerationForm";
import { DownloadButton } from "./DownloadButton/DownloadButton";

import { CodeOptions } from "~/types/CodeOptions";

import "./HomePage.scss";


export function HomePage() {
  const [codeOptions, setCodeOptions] = useState<CodeOptions | undefined>();
  const codeRef = useRef<HTMLElement>(null);

  return (
    <main id="home_page">
      <GenerationForm setCodeOptions={setCodeOptions}/>

      {/* https://github.com/zpao/qrcode.react/issues/140 */}
      <section className="generated_code" ref={codeRef}>
        {codeOptions && ((codeOptions.type === "bar")
          ? <Barcode value={codeOptions.url} displayValue={false} width={1}/>
          : <QRCodeSVG value={codeOptions.url} size={220}/>
        )}
      </section>

      {codeOptions && <DownloadButton codeRef={codeRef}/>}
    </main>
  );
}
