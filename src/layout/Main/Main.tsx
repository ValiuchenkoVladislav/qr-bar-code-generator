import { useRef, useState } from "react";

import Barcode from "react-barcode";
import { QRCodeSVG } from "qrcode.react";

import { CodeOptions, GenerationForm } from "./GenerationForm/GenerationForm";
import { DownloadButton } from "./DownloadButton/DownloadButton";

import "./Main.scss";


export function Main() {
  const [codeOptions, setCodeOptions] = useState<CodeOptions>();
  const codeRef = useRef<HTMLElement>(null);

  return (
    <main>
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
