import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import Container from '../ui/Container'
import Section from '../ui/Section'
import Button from '../ui/Button'

const InstagramFeed = ({ data }) => {
  if (!data) return null

  return (
    <Section
      eyebrow="Instagram"
      title={data.heading}
      description="Tap into our daily stories, live workouts, and real member takeovers straight from the Adze floor."
    >
      <Container className="relative">
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          spaceBetween={18}
          slidesPerView={1.1}
          breakpoints={{
            640: { slidesPerView: 2.1 },
            1024: { slidesPerView: 3.1 },
            1280: { slidesPerView: 4.1 }
          }}
        >
          {data.posts.map((post) => (
            <SwiperSlide key={post.id}>
              <a
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block overflow-hidden rounded-3xl"
              >
                <img
                  src={post.image}
                  alt={post.alt}
                  loading="lazy"
                  className="h-72 w-full object-cover transition duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/10 to-transparent opacity-0 transition group-hover:opacity-100"></div>
                <div className="absolute bottom-4 left-4 right-4 opacity-0 transition group-hover:opacity-100">
                  <p className="mb-2 max-w-[80%] text-sm font-medium text-white">{post.caption}</p>
                  {(post.likes || post.comments) && (
                    <div className="flex gap-4 text-xs text-white/80">
                      {post.likes && <span>❤️ {post.likes}</span>}
                      {post.comments && <span>💬 {post.comments}</span>}
                    </div>
                  )}
                </div>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="mt-10 flex justify-center">
          <Button as="a" href={data.cta.href} target="_blank" rel="noopener noreferrer" variant="secondary">
            {data.cta.label}
          </Button>
        </div>
      </Container>
    </Section>
  )
}

export default InstagramFeed
