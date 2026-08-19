import { useState } from "react";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import ProductCard from "../components/ProductCard";
import { products } from "../data/sampleData";

const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = products.find((p) => p.id === Number(id)) || products[0];
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [quantity, setQuantity] = useState(product.moq);
  const [activeTab, setActiveTab] = useState("description");

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center gap-2 text-gray-600">
          <Link to="/" className="hover:text-accent">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-accent">Shop</Link>
          <span>/</span>
          <span className="text-primary font-semibold">{product.name}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-4">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-96 object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {[product.image, product.hoverImage || product.image, product.image, product.hoverImage || product.image].map((img, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-md overflow-hidden cursor-pointer hover:ring-2 hover:ring-accent transition-all"
                >
                  <img src={img} alt={`Thumbnail ${index + 1}`} className="w-full h-24 object-cover" />
                </div>
              ))}
            </div>
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="mb-2">
                <span className="text-accent font-semibold">{product.category}</span>
                {product.isNew && (
                  <span className="ml-3 bg-accent text-white px-3 py-1 rounded-full text-sm font-semibold">
                    New
                  </span>
                )}
                {product.isFeatured && (
                  <span className="ml-3 bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Featured
                  </span>
                )}
              </div>
              <h1 className="text-4xl font-bold text-primary mb-4">{product.name}</h1>

              {/* Price Info */}
              <div className="space-y-2 mb-8">
                <div className="flex items-center gap-4">
                  <span className="text-gray-600 font-medium">MOQ:</span>
                  <span className="text-2xl font-bold text-primary">{product.moq} pieces</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-gray-600 font-medium">Sample Price:</span>
                  <span className="text-xl font-semibold text-primary">₹{product.samplePrice}</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-gray-600 font-medium">Bulk Price Range:</span>
                  <span className="text-2xl font-bold text-accent">₹{product.bulkPriceRange[0]} - ₹{product.bulkPriceRange[1]}</span>
                </div>
              </div>

              <p className="text-gray-600 text-lg mb-8 leading-relaxed">{product.description}</p>

              {/* Color Selection */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-primary mb-3">Color: {selectedColor}</h3>
                <div className="flex gap-3">
                  {product.colors.map((color, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedColor(color)}
                      className={`w-10 h-10 rounded-full border-2 transition-all ${
                        selectedColor === color ? "border-accent ring-2 ring-accent/30 scale-110" : "border-gray-200 hover:scale-105"
                      }`}
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
              </div>

              {/* Size Selection */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-semibold text-primary">Size: {selectedSize}</h3>
                  <button className="text-accent font-semibold text-sm">Size Guide</button>
                </div>
                <div className="grid grid-cols-5 gap-3">
                  {product.sizes.map((size, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedSize(size)}
                      className={`py-3 rounded-xl font-semibold transition-all ${
                        selectedSize === size
                          ? "bg-accent text-white"
                          : "bg-gray-50 text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-primary mb-3">Quantity</h3>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setQuantity(Math.max(product.moq, quantity - 10))}
                    className="w-12 h-12 bg-gray-100 rounded-xl text-2xl font-bold hover:bg-gray-200 transition-colors"
                  >
                    -
                  </button>
                  <span className="text-2xl font-bold text-primary w-20 text-center">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 10)}
                    className="w-12 h-12 bg-gray-100 rounded-xl text-2xl font-bold hover:bg-gray-200 transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link
                  to="/contact"
                  className="flex-1 bg-primary hover:bg-primary/90 text-white py-4 rounded-xl font-semibold text-lg transition-colors flex items-center justify-center gap-2"
                >
                  Request Quote
                </Link>
                <button className="px-6 py-4 bg-gray-100 hover:bg-gray-200 text-primary rounded-xl transition-colors">
                  <FaHeart size={24} />
                </button>
              </div>

              {/* Meta Info */}
              <div className="border-t border-gray-200 pt-6 space-y-3">
                <p className="text-gray-600">
                  <span className="font-semibold text-primary">Category:</span> {product.category}
                </p>
                <p className="text-gray-600">
                  <span className="font-semibold text-primary">Fabric:</span> {product.fabric}
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Tabs */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="flex border-b border-gray-200">
            {["description", "specifications", "process", "shipping"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-8 py-4 font-semibold text-lg transition-colors ${
                  activeTab === tab
                    ? "text-accent border-b-2 border-accent"
                    : "text-gray-600 hover:text-primary"
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
          <div className="p-8">
            {activeTab === "description" && (
              <div className="prose max-w-none">
                <h3 className="text-2xl font-bold text-primary mb-4">Product Description</h3>
                <p className="text-gray-600 text-lg leading-relaxed mb-4">
                  {product.description}
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Crafted with the finest materials and attention to detail, this garment combines style and comfort perfectly.
                </p>
              </div>
            )}
            {activeTab === "specifications" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { label: "Material", value: product.fabric },
                  { label: "MOQ", value: `${product.moq} pieces` },
                  { label: "Care", value: "Machine Washable" },
                  { label: "Origin", value: "India" }
                ].map((spec, index) => (
                  <div key={index} className="flex justify-between p-4 bg-gray-50 rounded-xl">
                    <span className="font-semibold text-primary">{spec.label}</span>
                    <span className="text-gray-600">{spec.value}</span>
                  </div>
                ))}
              </div>
            )}
            {activeTab === "process" && (
              <div className="prose max-w-none">
                <h3 className="text-2xl font-bold text-primary mb-4">Manufacturing Process</h3>
                <ul className="text-gray-600 text-lg leading-relaxed list-disc pl-6 space-y-2">
                  <li>Design & Consultation</li>
                  <li>Fabric Sourcing</li>
                  <li>Pattern Making & Sampling</li>
                  <li>Cutting</li>
                  <li>Stitching & Production</li>
                  <li>Quality Control</li>
                  <li>Finishing & Packing</li>
                  <li>Dispatch</li>
                </ul>
              </div>
            )}
            {activeTab === "shipping" && (
              <div className="prose max-w-none">
                <h3 className="text-2xl font-bold text-primary mb-4">Shipping & Delivery</h3>
                <ul className="text-gray-600 text-lg leading-relaxed list-disc pl-6 space-y-2">
                  <li>Standard delivery: 2-4 weeks</li>
                  <li>Express delivery: 1-2 weeks (additional charges)</li>
                  <li>International shipping available to 15+ countries</li>
                  <li>Secure packaging to ensure product safety</li>
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-16">
          <h2 className="text-4xl font-bold text-primary mb-12 text-center">Related Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.filter((p) => p.id !== product.id).slice(0, 4).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
