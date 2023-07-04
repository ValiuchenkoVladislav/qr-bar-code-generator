import { useAppSelector } from "~/store/hooks";

import { HistoryRecord } from "./HistoryRecord/HistoryRecord";

import "./HistoryPage.scss";


export function HistoryPage() {
  const history = useAppSelector(state => state.history);

  return (
    <main id="history_page">
      <h1>Recent codes</h1>

      <ul>
        {history.map((record, index) =>
          <HistoryRecord key={index} {...record}/>)}
      </ul>

      {(history.length === 100) &&
        <small className="secret_tip">Only last 100 records are saved...</small>}
    </main>
  );
}
