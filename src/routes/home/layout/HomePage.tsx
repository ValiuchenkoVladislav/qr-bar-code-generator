import { useState } from "react";
import { useSearchParams } from "react-router-dom";

import Barcode from "react-barcode";
import { QRCodeSVG } from "qrcode.react";

import { GenerationForm } from "./GenerationForm/GenerationForm";
import { DownloadButton } from "./DownloadButton/DownloadButton";

import { CodeOptions } from "~/types/CodeOptions";

import "./HomePage.scss";


export function HomePage() {
  const [searchParams] = useSearchParams();
  const [paramsType, paramsUrl] = [searchParams.get("type"), searchParams.get("url")];

  const [codeOptions, setCodeOptions] = useState<CodeOptions | null>(
    // @ts-ignore
    (paramsType && paramsUrl) && { type: paramsType, url: paramsUrl }
  );

  const [codeRef, setCodeRef] = useState<HTMLElement | null>(null);

  return (
    <main id="home_page">
      <GenerationForm setCodeOptions={setCodeOptions}/>

      {/* https://github.com/zpao/qrcode.react/issues/140 */}
      {codeOptions && (
        <section className="generated_code" ref={ref => setCodeRef(ref)}>
          {(codeOptions.type === "bar")
            ? <Barcode value={codeOptions.url} displayValue={false} width={1}/>
            : <QRCodeSVG value={codeOptions.url} size={220}/>
          }
        </section>
      )}

      {codeRef && <DownloadButton codeRef={codeRef}/>}
    </main>
  );
}
