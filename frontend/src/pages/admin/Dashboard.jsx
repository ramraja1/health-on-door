import AdminSidebar from "../../components/AdminSidebar";

export default function Dashboard() {
  return (
    <div className="flex">
      <AdminSidebar />

      <main className="flex-1 p-8">
        <h1 className="text-2xl font-bold mb-2">
          Super Admin Dashboard
        </h1>
        <p className="text-gray-600">
          Manage providers and monitor the platform.
        </p>
      </main>
    </div>
  );
}
