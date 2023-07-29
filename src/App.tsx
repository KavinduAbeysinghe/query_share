import React from 'react';
import './App.scss';
import {BrowserRouter} from "react-router-dom";
import MainRoutes from "./views/MainRoutes";
import "./assets/styles/Styles.scss";

function App() {
  return (
    <BrowserRouter>
      <MainRoutes/>
    </BrowserRouter>
  );
}

export default App;
