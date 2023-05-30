import { BrowserRouter, Route, Routes,Navigate } from "react-router-dom";
import MainLayout from "./component/Layout/Layout";
import SignInForm from "./features/Auth/components/SingInForm";
import SignUpForm from "./features/Auth/components/SignUpForm";
import { AuthContextProvider } from "./features/Auth/contexts/AuthContext";
import AuthLayout from "./features/Auth/components/Layout/AuthLayout";
import ShelfPage from "./pages/ShelfPage";
import Home from "./pages/Home";



function App(){
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Routes>
          <Route element = {<AuthLayout/>}>
            <Route path="/signin" element={<SignInForm />}></Route>
            <Route path="/signup" element={<SignUpForm />}></Route>
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
