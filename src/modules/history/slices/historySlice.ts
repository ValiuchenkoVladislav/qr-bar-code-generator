import { createSlice } from "@reduxjs/toolkit";

import { GenerationRecord } from "../types/GenerationRecord";
import { CodeOptions } from "~/types/CodeOptions";


const LOCAL_STORAGE_HISTORY_KEY = "generation-history";

function getStoredHistory(): GenerationRecord[] {
  const storedHistory = localStorage.getItem(LOCAL_STORAGE_HISTORY_KEY);

  if (!storedHistory) return [];

  return JSON.parse(storedHistory);
}

export type AddRecordPayload = Readonly<{
  payload: CodeOptions;
}>;

export type DeleteRecordPayload = Readonly<{
  payload: GenerationRecord;
}>;

export const historySlice = createSlice({
  name: "history",
  initialState: getStoredHistory(),
  reducers: {
    addRecord(history, { payload: codeOptions }: AddRecordPayload) {
      history.unshift({
        date: new Date().toJSON().slice(0, 10),
        prompt: codeOptions
      });

      if (history.length > 100) history.pop();

      localStorage.setItem(LOCAL_STORAGE_HISTORY_KEY, JSON.stringify(history));

      return history;
    },
    deleteRecord(history, { payload: target }: DeleteRecordPayload) {
      const stringifiendTarget = JSON.stringify(target);
      for (let i = 0; i !== history.length; i++) {
        if (stringifiendTarget === JSON.stringify(history[i])) {
          history.splice(i, 1);

          localStorage.setItem(LOCAL_STORAGE_HISTORY_KEY, JSON.stringify(history));

          break;
        }
      }

      return history;
    }
  }
});
