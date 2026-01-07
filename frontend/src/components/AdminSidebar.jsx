import { Link } from "react-router-dom";

export default function AdminSidebar() {
  return (
    <aside className="w-64 bg-gray-900 text-white min-h-screen p-5">
      <h2 className="text-xl font-bold mb-8">Super Admin</h2>

      <nav className="space-y-4">
        <Link to="/admin/dashboard" className="block hover:text-blue-400">
          Dashboard
        </Link>
        <Link to="/admin/providers" className="block hover:text-blue-400">
          Providers
        </Link>
      </nav>
    </aside>
  );
}
