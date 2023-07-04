import { useAppSelector } from "~/store/hooks";


export function HistoryPage() {
  const history = useAppSelector(state => state.history);

  return (
    <main id="history_page">
      <h1>Recent codes</h1>

      <ul>
        {history.map((record, index) => {
          return (
            <li key={index}>{record.date}</li>
          );
        })}
      </ul>
    </main>
  );
}
