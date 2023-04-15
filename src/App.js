import { BrowserRouter, Route, Routes,Navigate } from "react-router-dom";
import Layout from "./component/layout/Layout";
import Login from "./pages/LoginPage";
import AllReceipts from "./pages/AllReceiptsPage";
import SignUp from "./pages/SignUpPage";
import { AuthContextProvider } from "./contexts/AuthContext";
import SignIn from "./pages/LoginPage";


function App(){
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Routes>
          <Route>
            <Route path="/signin" element={<SignIn />}></Route>
            <Route path="/signup" element={<SignUp />}></Route>
          </Route>
          <Route element={<Layout />}>
            <Route path="/" element={<AllReceipts />}></Route>
            <Route path="/search"></Route>
            <Route path="/shelf" element></Route>
            <Route path="*" element={<Navigate to="/" />} />
          </Route>
        </Routes>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
