import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { Login } from "./pages/login/Login";
import { Signup } from "./pages/signup/Signup";
import { Navbar } from "./components/Navbar";
import { useAuthContext } from "./hooks/useAuthContext";

const App = () => {
  const { authIsReady, user } = useAuthContext();

  return (
    <>
      {authIsReady && (
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={user ? <Home /> : <Navigate to="/login" replace={true} />} />
            <Route path="login" element={!user ? <Login /> : <Navigate to="/" replace={true} />} />
            <Route path="signup" element={!user ? <Signup /> : <Navigate to="/" replace={true} />} />
            <Route path="*" element={
              <main style={{ padding: "2rem" }}>
                <p>Uh-oh! Page not found...</p>
              </main>
            }
            />
          </Routes>
        </BrowserRouter>
      )}
    </>
  );
}

export default App;
