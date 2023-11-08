import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { AuthContextProvider } from "./context/AuthContext";
import Account from "./pages/Account";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Watch from "./pages/Watch";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {

  return (
    <>
    <AuthContextProvider>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/account' element={<ProtectedRoute><Account /></ProtectedRoute>} />
        <Route path='/watch' element={<Watch />} />
      </Routes>
    </AuthContextProvider>
    </>
  );
}

export default App;
