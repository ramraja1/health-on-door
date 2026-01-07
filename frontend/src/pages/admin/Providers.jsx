import { useEffect, useState } from "react";
import AdminSidebar from "../../components/AdminSidebar";

export default function Providers() {
  const [providers, setProviders] = useState([]);

  const fetchProviders = async () => {
    const res = await fetch("http://localhost:5000/api/admin/providers", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });

    const data = await res.json();
    setProviders(data);
  };

  const approveProvider = async (id) => {
    await fetch(
      `http://localhost:5000/api/admin/providers/${id}/approve`,
      {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );

    fetchProviders(); // refresh
  };

  useEffect(() => {
    fetchProviders();
  }, []);

  return (
    <div className="flex">
      <AdminSidebar />

      <main className="flex-1 p-8">
        <h1 className="text-xl font-bold mb-6">Providers</h1>

        <div className="space-y-4">
          {providers.map((p) => (
            <div
              key={p._id}
              className="border p-4 rounded flex justify-between items-center"
            >
              <div>
                <p className="font-semibold">{p.name}</p>
                <p className="text-sm text-gray-500">
                  {p.owner?.email} • {p.status}
                </p>
              </div>

              {p.status === "PENDING" && (
                <button
                  onClick={() => approveProvider(p._id)}
                  className="bg-green-600 text-white px-4 py-1 rounded"
                >
                  Approve
                </button>
              )}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
