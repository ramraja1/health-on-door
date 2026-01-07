import Home from "./pages/Home.jsx";
import Login from "./pages/Login";
import AdminDashboard from "./pages/admin/Dashboard";
import Providers from "./pages/admin/Providers.jsx";
import ProviderDashboard from "./pages/provider/Dashboard";

import { Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />

      {/* Super Admin */}
      <Route path="/admin/dashboard" element={<AdminDashboard />} />
      <Route path="/admin/providers" element={<Providers />} />

      {/* Provider */}
      <Route path="/provider/dashboard" element={<ProviderDashboard />} />
    </Routes>
  );
}

export default App;
