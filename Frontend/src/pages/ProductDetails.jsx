import React from "react";

const ProductDetails = () => {
  const product = {
    title: "Product Title",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus ad optio inventore autem? Officiis delectus consequuntur inventore ab nihil vero expedita quibusdam ipsam ullam eos saepe, quas, enim sapiente nobis!",
    image: "tempelate.webp",
    inStock: true,
    specifications: [
      "Height: 1cm",
      "Width: 1cm",
      "Material: Aluminium",
      "Weight: 10kg",
    ],
  };

  const relatedProducts = [
    {
      id: 1,
      name: "Product 1",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel cumque sint autem eligendi temporibus cum odio ipsum ex aliquid libero.",
      image: "tempelate.webp",
    },
    {
      id: 2,
      name: "Product 2",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel cumque sint autem eligendi temporibus cum odio ipsum ex aliquid libero.",
      image: "tempelate.webp",
    },
    {
      id: 3,
      name: "Product 3",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel cumque sint autem eligendi temporibus cum odio ipsum ex aliquid libero.",
      image: "tempelate.webp",
    },
    {
      id: 4,
      name: "Product 4",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel cumque sint autem eligendi temporibus cum odio ipsum ex aliquid libero.",
      image: "tempelate.webp",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      {/* Product Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div>
          <img src={product.image} alt={product.title} className="rounded-lg w-full" />
        </div>
        <div className="space-y-4">
          <h1 className="text-4xl font-bold text-neutral">{product.title}</h1>
          <p className="text-gray-600">{product.description}</p>
          <p className="text-green-600 font-semibold">
            {product.inStock ? "In Stock" : "Out of Stock"}
          </p>
          <div className="flex items-center gap-4">
            <label className="text-sm text-gray-600">Quantity:</label>
            <input
              type="number"
              min="1"
              defaultValue="1"
              className="input input-bordered w-20"
            />
          </div>
        </div>
      </div>

      {/* Specifications */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-primary">Specifications</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          {product.specifications.map((spec, index) => (
            <li key={index}>{spec}</li>
          ))}
        </ul>
      </div>

      {/* Related Products */}
      <div>
        <h2 className="text-2xl font-bold mb-4 text-primary">Related Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {relatedProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white shadow-lg rounded-lg p-4 border border-base-200"
            >
              <img
                src={product.image}
                alt={product.name}
                className="rounded mb-2 w-full"
              />
              <h3 className="font-semibold text-lg">{product.name}</h3>
              <p className="text-sm text-gray-500">{product.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
