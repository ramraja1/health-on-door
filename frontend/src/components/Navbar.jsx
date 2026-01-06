export default function Navbar() {
  return (
    <nav className="w-full bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-lg font-bold">Health On Door</h1>
        <button className="px-4 py-2 bg-blue-600 text-white rounded">
          Book Now
        </button>
      </div>
    </nav>
  );
}
