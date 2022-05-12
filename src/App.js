import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import { AuthContextProvider } from "./context/AuthContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";

function App() {
  return (
    <AuthContextProvider>
      <div className="App">
        <ToastContainer
          position="top-right"
          autoClose={4000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />

        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </AuthContextProvider>
  );
}

export default App;
