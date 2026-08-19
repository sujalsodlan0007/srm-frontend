import { useState } from "react";
import { categories } from "../data/sampleData";

const FilterSidebar: React.FC = () => {
  const [priceRange, setPriceRange] = useState([0, 500]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedFabrics, setSelectedFabrics] = useState<string[]>([]);

  const colors = ["#000000", "#ffffff", "#2563eb", "#f59e0b", "#10b981", "#ef4444"];
  const sizes = ["S", "M", "L", "XL", "XXL"];
  const fabrics = ["Cotton", "Denim", "Wool", "Silk", "Polyester"];

  const toggleColor = (color: string) => {
    setSelectedColors(prev =>
      prev.includes(color) ? prev.filter(c => c !== color) : [...prev, color]
    );
  };

  const toggleSize = (size: string) => {
    setSelectedSizes(prev =>
      prev.includes(size) ? prev.filter(s => s !== size) : [...prev, size]
    );
  };

  const toggleCategory = (category: string) => {
    setSelectedCategories(prev =>
      prev.includes(category) ? prev.filter(c => c !== category) : [...prev, category]
    );
  };

  const toggleFabric = (fabric: string) => {
    setSelectedFabrics(prev =>
      prev.includes(fabric) ? prev.filter(f => f !== fabric) : [...prev, fabric]
    );
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 space-y-8">
      <div>
        <h3 className="text-lg font-bold text-primary mb-4">Categories</h3>
        <div className="space-y-2">
          {categories.map(category => (
            <div
              key={category.id}
              className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-colors ${
                selectedCategories.includes(category.name) ? "bg-accent/10" : "hover:bg-gray-50"
              }`}
              onClick={() => toggleCategory(category.name)}
            >
              <input
                type="checkbox"
                checked={selectedCategories.includes(category.name)}
                onChange={() => toggleCategory(category.name)}
                className="w-4 h-4 text-accent"
              />
              <span className="text-gray-700">{category.name}</span>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-bold text-primary mb-4">Price Range</h3>
        <div className="space-y-4">
          <input
            type="range"
            min="0"
            max="1000"
            value={priceRange[1]}
            onChange={(e) => setPriceRange([0, Number(e.target.value)])}
            className="w-full"
          />
          <div className="flex justify-between text-gray-600">
            <span>${priceRange[0]}</span>
            <span>${priceRange[1]}</span>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-bold text-primary mb-4">Colors</h3>
        <div className="flex gap-3 flex-wrap">
          {colors.map((color, index) => (
            <div
              key={index}
              className={`w-10 h-10 rounded-full border-2 cursor-pointer hover:scale-110 transition-transform ${
                selectedColors.includes(color) ? "border-accent ring-2 ring-accent/30" : "border-gray-200"
              }`}
              style={{ backgroundColor: color }}
              onClick={() => toggleColor(color)}
            />
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-bold text-primary mb-4">Sizes</h3>
        <div className="grid grid-cols-3 gap-2">
          {sizes.map((size, index) => (
            <button
              key={index}
              className={`py-2 rounded-lg border-2 font-semibold transition-colors ${
                selectedSizes.includes(size)
                  ? "bg-accent text-white border-accent"
                  : "border-gray-200 text-gray-700 hover:border-accent"
              }`}
              onClick={() => toggleSize(size)}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-bold text-primary mb-4">Fabric</h3>
        <div className="space-y-2">
          {fabrics.map((fabric, index) => (
            <div
              key={index}
              className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-colors ${
                selectedFabrics.includes(fabric) ? "bg-accent/10" : "hover:bg-gray-50"
              }`}
              onClick={() => toggleFabric(fabric)}
            >
              <input
                type="checkbox"
                checked={selectedFabrics.includes(fabric)}
                onChange={() => toggleFabric(fabric)}
                className="w-4 h-4 text-accent"
              />
              <span className="text-gray-700">{fabric}</span>
            </div>
          ))}
        </div>
      </div>

      <button className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
        Apply Filters
      </button>
      <button className="w-full border-2 border-gray-200 text-gray-700 py-3 rounded-lg font-semibold hover:border-accent hover:text-accent transition-colors">
        Clear All
      </button>
    </div>
  );
};

export default FilterSidebar;
