import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { Login } from "./pages/login/Login";
import { Signup } from "./pages/signup/Signup";
import { Navbar } from "./components/Navbar";
import { useAuthContext } from "./hooks/useAuthContext";

const App = () => {
  const { authIsReady } = useAuthContext();

  return (
    <>
      {authIsReady && (
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
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
