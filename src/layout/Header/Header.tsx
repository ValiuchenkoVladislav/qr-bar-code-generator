import { NavLink } from "react-router-dom";

import { homeRoute, historyRoute } from "~/routes";

import Home from "~/assets/images/home.svg";
import History from "~/assets/images/history.svg";

import "./Header.scss";


export function Header() {
  return (
    <header>
      <h1 className="heading">QR & Bar Code Generator</h1>

      <nav>
        <NavLink to={homeRoute.path}><Home/></NavLink>  
        <NavLink to={historyRoute.path}><History className="history_icon"/></NavLink>
      </nav>
    </header>
  );
}
