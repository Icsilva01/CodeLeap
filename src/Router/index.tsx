import { Navigate, Route, Routes } from "react-router-dom";
import { useName } from "../Context/UserContext";
import { Main } from "../Pages/Main";
import { SignUp } from "../Pages/SignUp";


export function AppRoutes(){
  const {username} = useName();

  return(
    <Routes>
      {/* Se não tiver username, vai para SignUp */}
      <Route path="/signup" element={<SignUp />} />
      
      {/* Main só acessível se tiver username */}
      <Route
        path="/main"
        element={username ? <Main /> : <Navigate to="/signup" replace />}
      />

      {/* Redireciona qualquer outra rota */}
      <Route path="*" element={<Navigate to={username ? "/main" : "/signup"} replace />} />
    </Routes>
  )
}