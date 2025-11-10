import { useEffect, useState } from 'react'
import heroData from '../data/hero.json'
import whyAdzeData from '../data/why-adze.json'
import programsData from '../data/programs.json'
import testimonialsData from '../data/testimonials.json'
import instagramData from '../data/instagram.json'
import ProgramCard from '../components/features/ProgramCard'
import TestimonialCarousel from '../components/features/TestimonialCarousel'
import InstagramFeed from '../components/features/InstagramFeed'
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
        <Container className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-heading md:text-6xl lg:text-7xl">{hero.headline}</h1>
          <p className="mt-6 text-lg md:text-xl text-white/90">{hero.subtext}</p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button as="a" href={hero.primaryCta.href}>{hero.primaryCta.label}</Button>
            <Button as="a" href={hero.secondaryCta.href} variant="secondary" className="bg-white/10 text-white border-white/30 hover:bg-white/20">
              {hero.secondaryCta.label}
            </Button>
          </div>
          {hero.stats && hero.stats.length > 0 && (
            <div className="mt-16 grid grid-cols-3 gap-8">
              {hero.stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-4xl font-heading font-bold">{stat.value}</p>
                  <p className="mt-2 text-sm uppercase tracking-wide text-white/80">{stat.label}</p>
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
          description={whyAdze.description}
          align="center"
        >
          <Container>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {whyAdze.cards.map((card, index) => (
                <Card key={index} className="overflow-hidden">
                  <div className="relative h-48 w-full overflow-hidden">
                    <img src={card.image} alt={card.title} className="h-full w-full object-cover" loading="lazy" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-heading">{card.title}</h3>
                    <p className="mt-2 text-sm text-charcoal/70">{card.copy}</p>
                  </div>
                </Card>
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
          description={programs.intro}
          align="center"
        >
          <Container>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {programs.programs.slice(0, 4).map((program) => (
                <ProgramCard key={program.slug} program={program} />
              ))}
            </div>
            {programs.cta && (
              <div className="mt-10 text-center">
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
          description={testimonials.intro}
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
      <Section className="bg-charcoal text-white">
        <Container>
          <Card variant="dark" className="p-12 text-center">
            <h2 className="text-4xl font-heading">Start your transformation. First week's on us.</h2>
            <p className="mt-4 text-lg text-white/80">
              Experience the Adze difference with zero commitment. Train with us for seven days, meet the community, and then decide.
            </p>
            <div className="mt-8">
              <Button as="a" href="#book-trial" variant="light">
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
