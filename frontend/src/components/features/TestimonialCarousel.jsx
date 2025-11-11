import { useMemo } from 'react'
import Card from '../ui/Card'

const RatingStars = ({ rating }) => {
  const stars = useMemo(() => {
    const fullStars = Math.floor(rating)
    const halfStar = rating - fullStars >= 0.5
    return { fullStars, halfStar }
  }, [rating])

  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: stars.fullStars }).map((_, index) => (
        <svg key={`full-${index}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 text-crimson">
          <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.782 1.402 8.173L12 18.896l-7.336 3.869 1.402-8.173L.132 9.21l8.2-1.192z" />
        </svg>
      ))}
      {stars.halfStar ? (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-4 w-4 text-crimson">
          <defs>
            <linearGradient id="halfStar" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="50%" stopColor="#D72638" />
              <stop offset="50%" stopColor="#F1F1F1" />
            </linearGradient>
          </defs>
          <path
            fill="url(#halfStar)"
            d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.782 1.402 8.173L12 18.896l-7.336 3.869 1.402-8.173L.132 9.21l8.2-1.192z"
          />
        </svg>
      ) : null}
    </div>
  )
}

const TestimonialCarousel = ({ testimonials = [] }) => (
  <div className="relative -mx-4 px-4 sm:mx-0 sm:px-0">
    {/* Scrollable container with gradient fade */}
    <div className="overflow-x-auto pb-4 scrollbar-hide">
      <div className="flex gap-4 sm:gap-6">
        {testimonials.map((testimonial) => (
          <div 
            key={testimonial.name} 
            className="flex-shrink-0 w-[85vw] sm:w-[45vw] md:w-[32vw] lg:w-[24vw]"
          >
            <Card className="flex h-full flex-col gap-4 sm:gap-6 p-4 sm:p-6">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 overflow-hidden rounded-full bg-light-gray">
                  {testimonial.media?.type === 'image' ? (
                    <img src={testimonial.media.url} alt={testimonial.name} className="h-full w-full object-cover" loading="lazy" />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-crimson/10 text-sm font-semibold text-crimson">
                      {testimonial.name.slice(0, 2).toUpperCase()}
                    </div>
                  )}
                </div>
                <div>
                  <p className="font-semibold text-charcoal">{testimonial.name}</p>
                  <p className="text-sm text-charcoal/60">{testimonial.role}</p>
                </div>
              </div>
              <p className="flex-1 text-sm sm:text-base text-charcoal/70">"{testimonial.quote}"</p>
              <div className="flex items-center justify-between text-xs sm:text-sm text-charcoal/60">
                <RatingStars rating={testimonial.rating} />
                {testimonial.handle ? (
                  <a
                    href={`https://instagram.com/${testimonial.handle.replace('@', '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-crimson"
                  >
                    {testimonial.handle}
                  </a>
                ) : null}
              </div>
            </Card>
          </div>
        ))}
        {/* Peek card to show there's more content */}
        {testimonials.length > 1 && (
          <div className="flex-shrink-0 w-[85vw] sm:w-[45vw] md:w-[32vw] lg:w-[24vw] opacity-30 pointer-events-none">
            <Card className="flex h-full flex-col gap-4 sm:gap-6 p-4 sm:p-6">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 overflow-hidden rounded-full bg-light-gray"></div>
                <div>
                  <div className="h-4 w-24 bg-charcoal/20 rounded"></div>
                  <div className="h-3 w-16 bg-charcoal/10 rounded mt-2"></div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="h-3 w-full bg-charcoal/10 rounded"></div>
                <div className="h-3 w-3/4 bg-charcoal/10 rounded"></div>
              </div>
            </Card>
          </div>
        )}
      </div>
    </div>
    {/* Right edge gradient fade to indicate more content */}
    <div className="pointer-events-none absolute right-0 top-0 bottom-4 w-20 sm:w-32 bg-gradient-to-l from-white via-white/60 to-transparent"></div>
    {/* Scroll hint on mobile */}
    <div className="flex items-center justify-center gap-2 mt-4 text-xs text-charcoal/50 sm:hidden">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="h-4 w-4">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h18m-4.5 0L21 12m0 0l-4.5-4.5M21 12H3" />
      </svg>
      <span>Swipe to see more</span>
    </div>
  </div>
)

export default TestimonialCarousel
