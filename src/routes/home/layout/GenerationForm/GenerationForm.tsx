import { Dispatch, SetStateAction } from "react";

import { useForm } from "react-hook-form";

import "./GenerationForm.scss";


export type CodeOptions = Readonly<{
  type: "qr" | "bar";
  url: string;
}> | undefined;

export type GenerationFormProps = Readonly<{
  setCodeOptions: Dispatch<SetStateAction<CodeOptions>>;
}>;

export function GenerationForm({ setCodeOptions }: GenerationFormProps) {
  const { register, handleSubmit, formState: { errors } } = useForm<NonNullable<CodeOptions>>();

  return (
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
  );
}
