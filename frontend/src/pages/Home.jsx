import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import ServiceCard from "../components/ServiceCard.jsx";

export default function Home() {
  return (
    <>
      <Navbar />

      <section className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Verified Home Nursing at Your Doorstep
            </h2>
            <p className="text-gray-600 mb-6">
              Book trained nurses and caregivers for home care, post-hospital
              support, and elderly assistance.
            </p>
            <button className="px-6 py-3 bg-blue-600 text-white rounded">
              Book a Service
            </button>
          </div>

          <div className="hidden md:block">
            <div className="w-full h-64 bg-blue-100 rounded"></div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-2xl font-bold mb-8 text-center">
            Our Services
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ServiceCard title="Home Nursing" />
            <ServiceCard title="Injection & Dressing" />
            <ServiceCard title="Elder Care" />
            <ServiceCard title="Post-Operative Care" />
            <ServiceCard title="Patient Attendant" />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
