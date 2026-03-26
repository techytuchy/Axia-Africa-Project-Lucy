import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Dashboard() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-gray-900 text-white p-5">
        <h2 className="text-2xl font-bold mb-6">Dashboard</h2>
        <ul className="space-y-4">
          <li className="hover:text-gray-300 cursor-pointer">Courses</li>
          <li className="hover:text-gray-300 cursor-pointer">Logout</li>
        </ul>
      </div>

      {/* Main */}
      <div className="flex-1 p-6">
        {/* Top Bar */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-xl font-semibold">Welcome 👋</h1>
          <img
            src="https://i.pravatar.cc/40"
            alt="avatar"
            className="rounded-full"
          />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {courses.map((course) => (
            <Link to={`/course/${course.id}`} key={course.id}>
              <div className="bg-white rounded-xl shadow p-4 hover:shadow-lg transition">
                <img
                  src={course.image}
                  alt={course.title}
                  className="h-40 mx-auto object-contain"
                />

                <h3 className="mt-4 font-semibold text-sm">{course.title}</h3>

                <p className="text-blue-600 font-bold mt-2">${course.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
