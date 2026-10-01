import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";

import Login from "./pages/Login";
import Home from "./pages/Home";
import Product from "./pages/Product";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <nav className="bg-black text-white p-4">
          <Link to="/" className="font-bold">
            Product App
          </Link>
        </nav>

        <Routes>
          <Route path="/login" element={<Login />} />

          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />

          <Route
            path="/product/:id"
            element={
              <ProtectedRoute>
                <Product />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
