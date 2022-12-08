import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Balance from "./pages/Balance";
import Register from "./pages/Register";
import Transfer from "./pages/Transfer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate replace to="/users/balance" />} />
          <Route path="/users/register" element={<Register />} />
          <Route path="/users/balance" element={<Balance />} />
          <Route path="/users/transfer" element={<Transfer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
