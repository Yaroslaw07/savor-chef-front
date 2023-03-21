import { BrowserRouter, Route, Routes, IndexRoute } from "react-router-dom";
import Layout from "./layout/Layout";
import Login from "./pages/Login";
import AllReceipts from "./pages/AllReceipts";
import { useState } from "react";
import SignUp from "./pages/SignUp";
import AuthContext, { AuthContextProvider } from "./contexts/AuthContext";


function App(){
  return (
    <AuthContextProvider>
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/signup" element={<SignUp />}></Route>
          </Route>
          <Route element={<Layout />}>
            <Route path="/" element={<AllReceipts />}></Route>
            <Route path="/search"></Route>
            <Route path="/shelf" element></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthContextProvider>
  );
}

export default App;
