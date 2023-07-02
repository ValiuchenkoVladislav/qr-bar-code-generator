import { useState } from "react";
import { useForm } from "react-hook-form";

import Barcode from "react-barcode";
import { QRCodeSVG } from "qrcode.react";

import "./Main.scss";


type CodeOptions = Readonly<{
  type: "qr" | "bar";
  url: string;
}>;

export function Main() {
  const { register, handleSubmit, formState: { errors } } = useForm<CodeOptions>();
  const [codeOptions, setCodeOptions] = useState<CodeOptions>();

  return (
    <main>
      <form onSubmit={handleSubmit(setCodeOptions)} className="generation_form">
        <div className="code_type_option" aria-invalid={!!errors.type}>
          <label>
            <input type="radio" value="qr" {...register("type", { required: true })}/>
            QR Code
          </label>
          <label>
            <input type="radio" value="bar" {...register("type", { required: true })}/>
            QR Code
          </label>
        </div>

        <input
          type="url"
          placeholder="Website URL"
          {...register("url", { required: true, maxLength: 2048 })}
          aria-invalid={!!errors.url}
          className="url_input"
        />

        <button type="submit" className="submit_button">Generate</button>
      </form>

      <section className="generated_code">
        {codeOptions?.type && ((codeOptions.type === "bar")
          ? <Barcode value={codeOptions.url} displayValue={false} width={1}/>
          : <QRCodeSVG value={codeOptions.url} size={220}/>
        )}
      </section>
    </main>
  );
}
