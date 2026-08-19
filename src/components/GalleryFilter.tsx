import { useMemo, useState } from "react"
import { galleryItems } from "../data/sampleData"

const filters = ["All", "Factory", "Machinery", "Team", "Products", "Events"]

const GalleryFilter: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState("All")

  const filteredItems = useMemo(() => {
    if (activeFilter === "All") return galleryItems
    return galleryItems.filter((item) => item.category === activeFilter)
  }, [activeFilter])

  return (
    <div className="space-y-10">
      <div className="flex flex-wrap gap-3 justify-center">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`rounded-full px-5 py-3 text-sm font-semibold transition-colors ${
              activeFilter === filter ? "bg-accent text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredItems.map((item) => (
          <div key={item.id} className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-200">
            <img src={item.image} alt={item.title} className="w-full h-72 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-primary mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.category}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default GalleryFilter
