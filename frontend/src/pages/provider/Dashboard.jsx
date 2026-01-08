import { Link } from "react-router-dom";

export default function ProviderDashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      
      {/* Top Bar */}
      <header className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <h1 className="text-xl font-semibold">
            Provider Dashboard
          </h1>

          <button
            className="text-sm text-red-600 hover:underline"
            onClick={() => {
              localStorage.clear();
              window.location.href = "/login";
            }}
          >
            Logout
          </button>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-7xl mx-auto px-6 py-10">
        
        {/* Welcome */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-1">
            Welcome back 👋
          </h2>
          <p className="text-gray-600">
            Manage your nurses, services, and upcoming bookings.
          </p>
        </section>

        {/* Action Cards */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <DashboardCard
            title="Nurses"
            description="Add and manage your nursing staff"
            link="/provider/nurses"
          />

          <DashboardCard
            title="Bookings"
            description="View and manage service bookings"
            link="/provider/bookings"
          />

          <DashboardCard
            title="Profile"
            description="Update your provider information"
            link="/provider/profile"
          />

        </section>

        {/* Status */}
        <section className="mt-12 bg-white border rounded p-6">
          <h3 className="font-semibold mb-2">
            Account Status
          </h3>
          <p className="text-green-600 font-medium">
            Approved & Active
          </p>
          <p className="text-sm text-gray-500 mt-1">
            You can receive bookings and manage nurses.
          </p>
        </section>

      </main>
    </div>
  );
}

/* Reusable Card */
function DashboardCard({ title, description, link }) {
  return (
    <Link
      to={link}
      className="bg-white border rounded-lg p-6 hover:shadow-md transition block"
    >
      <h3 className="text-lg font-semibold mb-2">
        {title}
      </h3>
      <p className="text-gray-600 text-sm">
        {description}
      </p>
    </Link>
  );
}
