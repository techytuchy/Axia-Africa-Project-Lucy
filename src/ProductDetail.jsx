import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function ProductDetail() {
  const { id } = useParams();
  const [product, setProducts] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/product/${id}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [id]);

  if (!product) return <p className="p-6">Loading...</p>;

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <Link
        to="/dashboard"
        className="text-purple-600 font-semibold mb-4 inline-block"
      >
        &larr; Back to Dashboard
      </Link>

      <div className="bg-white rounded-xl shadow p-6 max-w-4xl mx-auto flex flex-col md:flex-row gap-6">
        <img
          src={product.image}
          alt={product.title}
          className="h-64 md:h-80 object-contain"
        />

        <div className="flex-1">
          <h1 className="text-2xl font-bold mb-2">{product.title}</h1>
          <p className="text-gray-700 mb-4">{product.description}</p>
          <p className="text-purple-600 font-bold text-xl mb-4">
            ${product.price}
          </p>

          <button className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition">
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
