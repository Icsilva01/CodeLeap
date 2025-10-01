import { Navigate, Route, Routes } from "react-router-dom";
import { useName } from "../Context/UserContext";
import { Main } from "../Pages/Main";
import { SignUp } from "../Pages/SignUp";

export function AppRoutes() {
  const { username } = useName();

  return (
    <Routes>
      <Route path="/signup" element={<SignUp />} />

      <Route
        path="/main"
        element={username ? <Main /> : <Navigate to="/signup" replace />}
      />

      <Route
        path="*"
        element={<Navigate to={username ? "/main" : "/signup"} replace />}
      />
    </Routes>
  );
}
