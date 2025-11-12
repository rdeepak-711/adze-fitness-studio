import { useEffect, useState } from 'react'
import heroData from '../data/hero.json'
import whyAdzeData from '../data/why-adze.json'
import programsData from '../data/programs.json'
import testimonialsData from '../data/testimonials.json'
import instagramData from '../data/instagram.json'
import ProgramCard from '../components/features/ProgramCard'
import TestimonialCarousel from '../components/features/TestimonialCarousel'
import InstagramFeed from '../components/features/InstagramFeed'
import Reveal from '../components/features/Reveal'
import SEO from '../components/layout/SEO'
import Section from '../components/ui/Section'
import Container from '../components/ui/Container'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'

const Home = () => {
  const [hero, setHero] = useState(null)
  const [whyAdze, setWhyAdze] = useState(null)
  const [programs, setPrograms] = useState(null)
  const [testimonials, setTestimonials] = useState(null)
  const [instagram, setInstagram] = useState(null)

  useEffect(() => {
    setHero(heroData)
    setWhyAdze(whyAdzeData)
    setPrograms(programsData)
    setTestimonials(testimonialsData)
    setInstagram(instagramData)
  }, [])

  if (!hero) return null

  return (
    <>
      <SEO
        title="Home"
        description="Train Together. Grow Stronger. Join Madipakkam's most supportive fitness community. Led by expert trainers. Powered by real people."
        keywords="fitness studio Chennai, gym Madipakkam, personal training, group fitness, HIIT, strength training, yoga, wellness"
        image={heroData.backgroundMedia?.fallbackImage}
      />
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {hero.backgroundMedia?.type === 'video' ? (
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 h-full w-full object-cover"
            poster={hero.backgroundMedia.fallbackImage}
            aria-label="Background video of fitness training"
          >
            <source src={hero.backgroundMedia.src} type="video/mp4" />
          </video>
        ) : (
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${hero.backgroundMedia?.fallbackImage})` }}
          />
        )}
        {hero.backgroundMedia?.overlay && (
          <div className="absolute inset-0 bg-charcoal/60" />
        )}
        <Container className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading leading-tight">{hero.headline}</h1>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-white/90 max-w-2xl mx-auto">{hero.subtext}</p>
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row flex-wrap justify-center gap-4">
            <Button as="a" href={hero.primaryCta.href} className="w-full sm:w-auto shadow-lg shadow-crimson/40 hover:shadow-xl hover:shadow-crimson/50">
              {hero.primaryCta.label}
            </Button>
            <Button as="a" href={hero.secondaryCta.href} variant="secondary" className="w-full sm:w-auto glass-effect text-white border-white/30 hover:bg-white/20 hover:border-white/40">
              {hero.secondaryCta.label}
            </Button>
          </div>
          {hero.stats && hero.stats.length > 0 && (
            <div className="mt-12 sm:mt-16 grid grid-cols-3 gap-4 sm:gap-8">
              {hero.stats.map((stat) => (
                <div key={stat.label} className="transition-transform duration-300 hover:scale-105">
                  <p className="text-3xl sm:text-4xl font-heading font-bold">{stat.value}</p>
                  <p className="mt-2 text-xs sm:text-sm uppercase tracking-wide text-white/80">{stat.label}</p>
                </div>
              ))}
            </div>
          )}
        </Container>
      </section>

      {/* Why Adze Section */}
      {whyAdze && (
        <Section
          eyebrow="Why Adze"
          title={whyAdze.title}
          align="center"
        >
          <Container>
            <div className="grid gap-4 sm:gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {whyAdze.cards.map((card, index) => (
                <Reveal key={index} delay={index * 0.1}>
                  <Card className="overflow-hidden transition-transform duration-300 hover:scale-105">
                    <div className="relative h-40 sm:h-48 w-full overflow-hidden">
                      <img src={card.image} alt={card.title} className="h-full w-full object-cover transition-transform duration-300 hover:scale-110" loading="lazy" />
                    </div>
                    <div className="p-4 sm:p-6">
                      <h3 className="text-lg sm:text-xl font-heading">{card.title}</h3>
                    </div>
                  </Card>
                </Reveal>
              ))}
            </div>
          </Container>
        </Section>
      )}

      {/* Programs Preview Section */}
      {programs && (
        <Section
          eyebrow="Programs"
          title={programs.heading}
          align="center"
        >
          <Container>
            <div className="grid gap-6 sm:gap-8 sm:grid-cols-2">
              {programs.programs.slice(0, 2).map((program, index) => (
                <Reveal key={program.slug} delay={index * 0.1}>
                  <ProgramCard program={program} />
                </Reveal>
              ))}
            </div>
            {programs.cta && (
              <div className="mt-8 sm:mt-10 text-center">
                <Button as="a" href={programs.cta.href} variant="secondary">
                  {programs.cta.label}
                </Button>
              </div>
            )}
          </Container>
        </Section>
      )}

      {/* Testimonials Section */}
      {testimonials && (
        <Section
          eyebrow="Testimonials"
          title={testimonials.heading}
          align="center"
        >
          <Container>
            <TestimonialCarousel testimonials={testimonials.testimonials.slice(0, 6)} />
          </Container>
        </Section>
      )}

      {/* Instagram Feed Section */}
      {instagram && <InstagramFeed data={instagram} />}

      {/* Final CTA Banner */}
      <Section className="relative bg-gradient-to-br from-charcoal via-charcoal to-charcoal/95 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }}></div>
        <Container className="relative z-10">
          <Card variant="dark" className="p-6 sm:p-8 md:p-12 text-center glass-dark">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading">Start your transformation. First week's on us.</h2>
            <div className="mt-6 sm:mt-8">
              <Button as="a" href="#book-trial" variant="light" className="shadow-lg shadow-white/20 hover:shadow-xl hover:shadow-white/30">
                Book a Trial
              </Button>
            </div>
          </Card>
        </Container>
      </Section>
    </>
  )
}

export default Home
