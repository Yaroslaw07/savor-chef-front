import { BrowserRouter, Route, Routes,Navigate } from "react-router-dom";
import MainLayout from "./component/mainLayout/MainLayout";
import SignIn from "./pages/SingInPage";
import AllReceipts from "./pages/Home";
import SignUp from "./pages/SignUpPage";
import { AuthContextProvider } from "./contexts/AuthContext";
import AuthLayout from "./component/authLayout/AuthLayout";
import ShelfPage from "./pages/ShelfPage";
import Home from "./pages/Home";



function App(){
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Routes>
          <Route element = {<AuthLayout/>}>
            <Route path="/signin" element={<SignIn />}></Route>
            <Route path="/signup" element={<SignUp />}></Route>
          </Route>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />}></Route>
            <Route path="/search"></Route>
            <Route path="/shelf" element={<ShelfPage />}></Route>
            <Route path="*" element={<Navigate to="/" />} />
          </Route>
        </Routes>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
