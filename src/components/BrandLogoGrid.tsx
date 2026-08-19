import veloraLogo from '../assets/images/brands/velora.svg'
import threadoraLogo from '../assets/images/brands/threadora.svg'
import northweaveLogo from '../assets/images/brands/northweave.svg'
import urbanloomLogo from '../assets/images/brands/urbanloom.svg'
import cottoncraftLogo from '../assets/images/brands/cottoncraft.svg'
import modevaLogo from '../assets/images/brands/modeva.svg'

type BrandLogo = {
  name: string
  src: string
}

const brands: BrandLogo[] = [
  { name: 'VELORA', src: veloraLogo },
  { name: 'THREADORA', src: threadoraLogo },
  { name: 'NORTHWEAVE', src: northweaveLogo },
  { name: 'URBANLOOM', src: urbanloomLogo },
  { name: 'COTTONCRAFT', src: cottoncraftLogo },
  { name: 'MODEVA', src: modevaLogo }
]

const BrandLogoGrid = () => {
  return (
    <div className="w-full">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5 lg:gap-6 items-stretch">
        {brands.map((brand) => (
          <div
            key={brand.name}
            className="group flex h-28 sm:h-32 items-center justify-center overflow-hidden rounded-2xl border border-gray-200 bg-white/90 px-3 py-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-lg"
          >
            <img
              src={brand.src}
              alt={`${brand.name} logo`}
              className="max-h-16 w-full object-contain transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default BrandLogoGrid
