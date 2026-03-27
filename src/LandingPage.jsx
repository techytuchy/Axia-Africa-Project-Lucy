import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-6 py-4 bg-white shadow">
        <h1 className="text-xl font-bold">TechyTuchy Learning Hub</h1>

        <div className="space-x-4">
          <Link to="/" className="text-gray-600">
            Home
          </Link>
          <Link to="/login" className="text-blue-600 font-semibold">
            Login
          </Link>
          <Link
            to="/signup"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg"
          >
            Sign Up
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="text-center py-20 px-6">
        <h2 className="text-4xl font-bold mb-4">
          Learn New Skills Anytime, Anywhere 🚀
        </h2>
        <p className="text-gray-600 mb-6">
          Explore courses, improve your knowledge, and grow your career.
        </p>

        <Link
          to="/signup"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Get Started
        </Link>
      </section>

      {/* Features */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 py-12">
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="font-bold text-lg mb-2">📚 Quality Courses</h3>
          <p className="text-gray-600">
            Access a wide range of well-structured courses.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="font-bold text-lg mb-2">⚡ Learn Fast</h3>
          <p className="text-gray-600">
            Learn at your own pace anytime, anywhere.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="font-bold text-lg mb-2">🎯 Track Progress</h3>
          <p className="text-gray-600">
            Monitor your learning journey and stay motivated.
          </p>
        </div>
      </section>

      {/* About */}
      <section className="text-center px-6 py-12">
        <h2 className="text-2xl font-bold mb-4">About Us</h2>
        <p className="text-gray-600 max-w-xl mx-auto">
          We are a platform dedicated to helping learners gain new skills and
          improve their careers through accessible and high-quality content.
        </p>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white text-center py-6">
        <p>© 2026 TechyTuchy Learning Hub. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default LandingPage;
