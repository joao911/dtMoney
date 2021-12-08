import React from "react";

import DashBoard from "./components/DashBoard";
import Header from "./components/Header";
import { GlobalStyle } from "./styles/global";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <DashBoard />
    </>
  );
}

export default App;
