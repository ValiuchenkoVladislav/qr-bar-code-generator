import { GenerationRecord, historySlice } from "~/modules/history";
import { useAppDispatch } from "~/store/hooks";

import Play from "~/assets/images/play.svg";
import Delete from "~/assets/images/delete.svg";

import "./HistoryRecord.scss";
import { homeRoute } from "~/routes/home";
import { NavLink } from "react-router-dom";


export function HistoryRecord({ date, prompt }: GenerationRecord) {
  const { deleteRecord } = historySlice.actions;
  const dispatch = useAppDispatch();

  return (
    <li className="history_record">
      <NavLink to={`${homeRoute.path}?type=${prompt.type}&url=${prompt.url}`}>
        <Play width={46}/>
      </NavLink>
      <section className="record_info">
        <a className="prompt_url" href={prompt.url} rel="noreferrer" target="_blank">
          {prompt.url}
        </a>
        <div className="bottom_row">
          <small>type: {prompt.type.toUpperCase()}</small>
          <time dateTime={date}>{date}</time>
        </div>
      </section>
      <button onClick={() => dispatch(deleteRecord({ date, prompt }))}>
        <Delete width={46}/>
      </button>
    </li>
  );
}
