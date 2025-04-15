import React from "react";

import { Routes, Route, useNavigate } from "react-router-dom";
import Main from "./components/main/Main";

const App: React.FC = (): any => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
    </Routes>
  );
};

export default App;
