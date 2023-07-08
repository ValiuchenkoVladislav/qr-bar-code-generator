import { Dispatch, SetStateAction } from "react";
import { useForm } from "react-hook-form";

import { historySlice } from "~/modules/history";
import { useAppDispatch } from "~/store/hooks";

import { CodeOptions } from "~/types/CodeOptions";

import "./GenerationForm.scss";


export type GenerationFormProps = Readonly<{
  setCodeOptions: Dispatch<SetStateAction<CodeOptions | null>>;
}>;

export function GenerationForm({ setCodeOptions }: GenerationFormProps) {
  const { register, watch, handleSubmit, formState: { errors } } = useForm<CodeOptions>();
  const typeField = watch("type");
  const { addRecord } = historySlice.actions;
  const dispatch = useAppDispatch();

  function onSubmit(codeOptions: CodeOptions) {
    dispatch(addRecord(codeOptions));

    setCodeOptions(codeOptions);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="generation_form">
      <div className="code_type_option" aria-invalid={!!errors.type}>
        <label aria-selected={typeField === "qr"}>
          <input type="radio" value="qr" {...register("type", { required: true })}/>
          QR Code
        </label>
        <label aria-selected={typeField === "bar"}>
          <input type="radio" value="bar" {...register("type", { required: true })}/>
          Bar Code
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
