import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function CourseDetail() {
  const { id } = useParams(); // get course id from URL
  const [course, setCourse] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setCourse(data));
  }, [id]);

  if (!course) return <p className="p-6">Loading...</p>;

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <Link
        to="/dashboard"
        className="text-blue-600 font-semibold mb-4 inline-block"
      >
        &larr; Back to Dashboard
      </Link>

      <div className="bg-white rounded-xl shadow p-6 max-w-4xl mx-auto flex flex-col md:flex-row gap-6">
        <img
          src={course.image}
          alt={course.title}
          className="h-64 md:h-80 object-contain"
        />

        <div className="flex-1">
          <h1 className="text-2xl font-bold mb-2">{course.title}</h1>
          <p className="text-gray-700 mb-4">{course.description}</p>
          <p className="text-blue-600 font-bold text-xl mb-4">
            ${course.price}
          </p>

          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default CourseDetail;
