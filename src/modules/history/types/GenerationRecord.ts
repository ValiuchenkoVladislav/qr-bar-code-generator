import { CodeOptions } from "~/types/CodeOptions";


export type GenerationRecord = Readonly<{
  date: string;
  prompt: CodeOptions;
}>;
