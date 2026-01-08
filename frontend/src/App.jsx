import Home from "./pages/Home.jsx";
import Login from "./pages/Login";
import AdminDashboard from "./pages/admin/Dashboard.jsx";
import Providers from "./pages/admin/Providers.jsx";
import ProviderDashboard from "./pages/provider/Dashboard.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />

      {/* Super Admin */}
      <Route
        path="/admin/dashboard"
        element={
          <ProtectedRoute allowedRoles={["SUPER_ADMIN"]}>
            <AdminDashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin/providers"
        element={
          <ProtectedRoute allowedRoles={["SUPER_ADMIN"]}>
            <Providers />
          </ProtectedRoute>
        }
      />

      {/* Provider */}
      <Route
        path="/provider/dashboard"
        element={
          <ProtectedRoute allowedRoles={["PROVIDER"]}>
            <ProviderDashboard />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default App;
