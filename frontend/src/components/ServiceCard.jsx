export default function ServiceCard({ title }) {
  return (
    <div className="border rounded-lg p-6 hover:shadow-md transition">
      <h4 className="font-semibold text-lg mb-2">{title}</h4>
      <p className="text-sm text-gray-600">
        Professional and verified caregivers available at your convenience.
      </p>
    </div>
  );
}
