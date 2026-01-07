export default function Navbar() {
  return (
    <nav className="w-full bg-white border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="h-16 flex items-center justify-between">
          
          {/* Logo / Brand */}
          <h1 className="text-xl font-bold text-gray-900">
            Health <span className="text-blue-600">On Door</span>
          </h1>

          {/* Actions */}
          <div className="flex items-center gap-3">
           

            <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
              Book Now
            </button>
          </div>

        </div>
      </div>
    </nav>
  );
}
