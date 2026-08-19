import { Link } from 'react-router-dom'

const StickyRequestQuote = () => {
  return (
    <div className="sticky bottom-0 z-40 bg-primary py-4 shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center items-center gap-4">
        <p className="text-white font-semibold text-lg">Ready to start your manufacturing project?</p>
        <Link
          to="/request-quotation"
          className="bg-accent hover:bg-accent/90 text-white px-8 py-3 rounded-full font-semibold text-lg transition-colors"
        >
          Request a Quote
        </Link>
        <Link
          to="/contact"
          className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-3 rounded-full font-semibold text-lg transition-colors"
        >
          Book a Consultation
        </Link>
      </div>
    </div>
  )
}

export default StickyRequestQuote
