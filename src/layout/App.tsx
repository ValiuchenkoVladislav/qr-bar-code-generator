import { Outlet } from "react-router-dom";

import { Header } from "./Header/Header";
import { Footer } from "./Footer/Footer";

import "./App.scss";


export function App() {
  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  );
}
