import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay } from "swiper/modules"
import { testimonials } from "../data/sampleData"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

const TestimonialCarousel: React.FC = () => (
  <Swiper
    modules={[Navigation, Pagination, Autoplay]}
    spaceBetween={24}
    slidesPerView={1}
    navigation
    pagination={{ clickable: true }}
    autoplay={{ delay: 5000 }}
    breakpoints={{ 768: { slidesPerView: 2 }, 1280: { slidesPerView: 3 } }}
  >
    {testimonials.map((testimonial) => (
      <SwiperSlide key={testimonial.id}>
        <div className="bg-white rounded-3xl shadow-xl p-10 h-full flex flex-col justify-between">
          <div>
            <p className="text-gray-700 text-lg leading-relaxed mb-8">“{testimonial.quote}”</p>
            <div className="flex items-center gap-4">
              {testimonial.image && (
                <img src={testimonial.image} alt={testimonial.name} className="w-16 h-16 rounded-full object-cover" />
              )}
              <div>
                <h3 className="text-xl font-bold text-primary">{testimonial.name}</h3>
                <p className="text-gray-500">{testimonial.brand}</p>
              </div>
            </div>
          </div>
          <div className="flex gap-1 text-amber-500 mt-8">
            {[...Array(5)].map((_, index) => (
              <span key={index}>{index < testimonial.rating ? "★" : "☆"}</span>
            ))}
          </div>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
)

export default TestimonialCarousel
