import { useEffect, useState } from 'react'
import aboutData from '../data/about.json'
import trainersData from '../data/trainers.json'
import TrainerCard from '../components/features/TrainerCard'
import SEO from '../components/layout/SEO'
import Section from '../components/ui/Section'
import Container from '../components/ui/Container'
import Card from '../components/ui/Card'

const About = () => {
  const [about, setAbout] = useState(null)
  const [trainers, setTrainers] = useState(null)

  useEffect(() => {
    setAbout(aboutData)
    setTrainers(trainersData)
  }, [])

  if (!about) return null

  return (
    <>
      <SEO
        title="About Us"
        description="Learn about Adze Fitness Studio's mission, our expert trainers, and our commitment to building a supportive fitness community in Madipakkam, Chennai."
        keywords="about Adze Fitness, fitness trainers Chennai, gym story, fitness community, certified trainers"
      />
      {/* Brand Story Section */}
      <Section
        eyebrow="Our Story"
        title={about.story.title}
        align="center"
      >
        <Container>
          <div className="grid gap-6 sm:gap-8 md:gap-12 lg:grid-cols-2 lg:items-center">
            <div className="space-y-4 sm:space-y-6">
              {about.story.paragraphs.map((paragraph, index) => (
                <p key={index} className="text-sm sm:text-base text-charcoal/70 lg:text-lg">
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="relative h-64 sm:h-80 md:h-96 w-full overflow-hidden rounded-2xl sm:rounded-3xl">
              <img
                src={about.story.image}
                alt="Adze Fitness Studio"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
          {about.founderNote && (
            <Card className="mt-8 sm:mt-12 p-5 sm:p-6 md:p-8 text-center">
              <p className="text-xl sm:text-2xl font-heading italic text-charcoal">"{about.founderNote.quote}"</p>
              <p className="mt-3 sm:mt-4 font-semibold text-charcoal">{about.founderNote.author}</p>
              <p className="text-xs sm:text-sm text-charcoal/60">{about.founderNote.title}</p>
            </Card>
          )}
        </Container>
      </Section>

      {/* Trainer Bios Section */}
      {trainers && (
        <Section
          eyebrow="Our Team"
          title={trainers.heading}
          description={trainers.intro}
          align="center"
        >
          <Container>
            <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {trainers.trainers.map((trainer) => (
                <TrainerCard key={trainer.name} trainer={trainer} />
              ))}
            </div>
            {trainers.highlight && (
              <Card className="mt-8 sm:mt-12 p-5 sm:p-6 md:p-8 text-center">
                <h3 className="text-xl sm:text-2xl font-heading">{trainers.highlight.title}</h3>
                <p className="mt-3 sm:mt-4 text-sm sm:text-base text-charcoal/70">{trainers.highlight.copy}</p>
              </Card>
            )}
          </Container>
        </Section>
      )}

      {/* Mission Pillars Section */}
      {about.mission && (
        <Section
          eyebrow="Mission"
          title={about.mission.heading}
          align="center"
        >
          <Container>
            <div className="grid gap-6 sm:gap-8 sm:grid-cols-1 md:grid-cols-3">
              {about.mission.pillars.map((pillar) => (
                <Card key={pillar.title} className="p-5 sm:p-6 md:p-8 text-center">
                  <h3 className="text-xl sm:text-2xl font-heading text-crimson">{pillar.title}</h3>
                  <p className="mt-3 sm:mt-4 text-sm sm:text-base text-charcoal/70">{pillar.description}</p>
                </Card>
              ))}
            </div>
          </Container>
        </Section>
      )}
    </>
  )
}

export default About
