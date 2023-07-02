import { NavLink } from "react-router-dom";

import "./Header.scss";


export function Header() {
  return (
    <header>
      <h1 className="heading">QR & Bar Code Generator</h1>
      <NavLink to="/history">history</NavLink>
      <NavLink to="/">home</NavLink>
    </header>
  );
}
