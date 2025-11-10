import { useEffect, useState } from 'react'
import aboutData from '../data/about.json'
import trainersData from '../data/trainers.json'
import TrainerCard from '../components/features/TrainerCard'
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
      {/* Brand Story Section */}
      <Section
        eyebrow="Our Story"
        title={about.story.title}
        align="center"
      >
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="space-y-6">
              {about.story.paragraphs.map((paragraph, index) => (
                <p key={index} className="text-base text-charcoal/70 lg:text-lg">
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="relative h-96 w-full overflow-hidden rounded-3xl">
              <img
                src={about.story.image}
                alt="Adze Fitness Studio"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
          {about.founderNote && (
            <Card className="mt-12 p-8 text-center">
              <p className="text-2xl font-heading italic text-charcoal">"{about.founderNote.quote}"</p>
              <p className="mt-4 font-semibold text-charcoal">{about.founderNote.author}</p>
              <p className="text-sm text-charcoal/60">{about.founderNote.title}</p>
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
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {trainers.trainers.map((trainer) => (
                <TrainerCard key={trainer.name} trainer={trainer} />
              ))}
            </div>
            {trainers.highlight && (
              <Card className="mt-12 p-8 text-center">
                <h3 className="text-2xl font-heading">{trainers.highlight.title}</h3>
                <p className="mt-4 text-base text-charcoal/70">{trainers.highlight.copy}</p>
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
            <div className="grid gap-8 md:grid-cols-3">
              {about.mission.pillars.map((pillar) => (
                <Card key={pillar.title} className="p-8 text-center">
                  <h3 className="text-2xl font-heading text-crimson">{pillar.title}</h3>
                  <p className="mt-4 text-base text-charcoal/70">{pillar.description}</p>
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
