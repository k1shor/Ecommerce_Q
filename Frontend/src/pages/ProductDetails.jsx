import React, { useRef } from "react";

const ProductDetails = () => {
  const scrollRef = useRef(null);

  const handleScroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollLeft += direction === 'left' ? -scrollAmount : scrollAmount;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      {/* Product Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div>
          <img src="tempelate.webp" alt="Product" className="rounded-lg w-full" />
        </div>
        <div className="space-y-4">
          <h1 className="text-4xl font-bold text-neutral">Product Title</h1>
          <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus ad optio inventore autem? Officiis delectus consequuntur inventore ab nihil vero expedita quibusdam ipsam ullam eos saepe, quas, enim sapiente nobis!</p>
          <p className="text-green-600 font-semibold">In Stock</p>
          <div className="flex items-center gap-4">
            <label className="text-sm text-gray-600">Quantity:</label>
            <input type="number" min="1" defaultValue="1" className="input input-bordered w-20" />
          </div>
        </div>
      </div>

      {/* Specifications */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-primary">Specifications</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>height:1cm</li>
          <li>width: 1cm</li>
          <li>Material: Aluminium</li>
          <li>Weight: 10kg</li> 
        </ul>
      </div>

      {/* Related Products */}
      <div >
        <h2 className="text-2xl font-bold mb-4 text-primary">Related Products</h2>
        <div className="relative">
          <button onClick={() => handleScroll('left')} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white border rounded-full shadow p-2 z-10">←</button>
          <div ref={scrollRef} className="overflow-x-auto  w-full px-4 py-2">
            <div className="flex space-x-6 w-400 ">
              <div className="min-w-[50px] bg-white shadow-lg rounded-lg p-4 border border-base-200">
                <img src="tempelate.webp" alt="Product 1" className="rounded mb-2 w-full " />
                <h3 className="font-semibold text-lg">Product 1</h3>
                <p className="text-sm text-gray-500">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel cumque sint autem eligendi temporibus cum odio ipsum ex aliquid libero.</p>
              </div>
              <div className="min-w-[200px] bg-white shadow-lg rounded-lg p-4 border border-base-200">
                <img src="tempelate.webp" alt="Product 2" className="rounded mb-2 w-full" />
                <h3 className="font-semibold text-lg">Product 2</h3>
                <p className="text-sm text-gray-500">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel cumque sint autem eligendi temporibus cum odio ipsum ex aliquid libero.</p>
              </div>
              <div className="min-w-[200px] bg-white shadow-lg rounded-lg p-4 border border-base-200">
                <img src="tempelate.webp" alt="Product 3" className="rounded mb-2 w-full" />
                <h3 className="font-semibold text-lg">Product 3</h3>
                <p className="text-sm text-gray-500">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel cumque sint autem eligendi temporibus cum odio ipsum ex aliquid libero.</p>
              </div>
              <div className="min-w-[200px] bg-white shadow-lg rounded-lg p-4 border border-base-200">
                <img src="tempelate.webp" alt="Product 4" className="rounded mb-2 w-full" />
                <h3 className="font-semibold text-lg">Product 4</h3>
                <p className="text-sm text-gray-500">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel cumque sint autem eligendi temporibus cum odio ipsum ex aliquid libero.</p>
              </div>
              <div className="min-w-[200px] bg-white shadow-lg rounded-lg p-4 border border-base-200">
                <img src="tempelate.webp" alt="Product 5" className="rounded mb-2 w-full" />
                <h3 className="font-semibold text-lg">Product 5</h3>
                <p className="text-sm text-gray-500">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel cumque sint autem eligendi temporibus cum odio ipsum ex aliquid libero.</p>
              </div>
              
            </div>
          </div>
          <button onClick={() => handleScroll('right')} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white border rounded-full shadow p-2 z-10">→</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;



