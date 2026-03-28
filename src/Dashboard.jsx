import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Dashboard() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="flex min-h-screen bg-gray-100">
      <div className="w-64 bg-purple-900 text-white p-5">
        <h2 className="text-2xl font-bold mb-6">Dashboard</h2>
        <ul className="space-y-4">
          <li className="hover:text-gray-300 cursor-pointer">Products</li>
        </ul>
      </div>

      <div className="flex-1 p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-xl font-semibold">Welcome Lucy</h1>
          <img
            src="https://i.pravatar.cc/40"
            alt="avatar"
            className="rounded-full"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <Link to={`/product/${product.id}`} key={product.id}>
              <div className="bg-white rounded-xl shadow p-4 hover:shadow-lg transition">
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-40 mx-auto object-contain"
                />

                <h3 className="mt-4 font-semibold text-sm">{product.title}</h3>

                <p className="text-purple-600 font-bold mt-2">
                  ${product.price}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
