import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import { AuthContextProvider } from "./context/AuthContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";

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
          <Route path="/">
            <Route index element={<Login />} />
            <Route path="/dashboard" element={<Home />} />
            <Route path="clients">
              <Route index element={<List />} />
              <Route path=":clientId" element={<Single />} />
              <Route path="new" element={<New />} />
            </Route>
            <Route path="technicians">
              <Route index element={<List />} />
              <Route path=":technicianId" element={<Single />} />
              <Route path="new" element={<New />} />
            </Route>
          </Route>
        </Routes>
      </div>
    </AuthContextProvider>
  );
}

export default App;
