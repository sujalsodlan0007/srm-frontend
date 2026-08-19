import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Suspense, lazy } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import AnnouncementBar from './components/AnnouncementBar'
import WhatsAppFloatingButton from './components/WhatsAppFloatingButton'
import StickyRequestQuote from './components/StickyRequestQuote'

const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const Manufacturing = lazy(() => import('./pages/Manufacturing'))
const ProductCategories = lazy(() => import('./pages/ProductCategories'))
const Factory = lazy(() => import('./pages/Factory'))
const Compliance = lazy(() => import('./pages/Compliance'))
const Gallery = lazy(() => import('./pages/Gallery'))
const Testimonials = lazy(() => import('./pages/Testimonials'))
const Contact = lazy(() => import('./pages/Contact'))
const RequestQuotation = lazy(() => import('./pages/RequestQuotation'))
const AdminDashboard = lazy(() => import('./pages/AdminDashboard'))
const NotFound = lazy(() => import('./pages/NotFound'))

function App() {
  return (
    <Router>
      <div className="font-inter">
        <AnnouncementBar />
        <Navbar />
        <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/manufacturing" element={<Manufacturing />} />
            <Route path="/categories" element={<ProductCategories />} />
            <Route path="/infrastructure" element={<Factory />} />
            <Route path="/factory" element={<Factory />} />
            <Route path="/compliance" element={<Compliance />} />
            <Route path="/clients" element={<Testimonials />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/request-quotation" element={<RequestQuotation />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/admin/login" element={<AdminDashboard />} />
            <Route path="/admin/leads" element={<AdminDashboard />} />
            <Route path="/dashboard" element={<AdminDashboard />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
        <StickyRequestQuote />
        <WhatsAppFloatingButton />
        <Footer />
      </div>
    </Router>
  )
}

export default App
