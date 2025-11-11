import { useEffect, useState } from 'react'
import programsData from '../data/programs.json'
import ProgramCard from '../components/features/ProgramCard'
import SEO from '../components/layout/SEO'
import Section from '../components/ui/Section'
import Container from '../components/ui/Container'

const Programs = () => {
  const [data, setData] = useState(null)

  useEffect(() => {
    setData(programsData)
  }, [])

  if (!data) return null

  return (
    <>
      <SEO
        title="Programs"
        description="Explore our fitness programs: HIIT Bootcamp, Strength Training, Yoga Therapy, and Personal Coaching. Find the perfect program for your fitness goals."
        keywords="fitness programs, HIIT bootcamp, strength training, yoga therapy, personal coaching, group fitness classes"
      />
      <Section
        eyebrow="Programs"
        title={data.heading}
        description={data.intro}
      align="center"
    >
      <Container>
        <div className="grid gap-6 sm:gap-8 sm:grid-cols-1 md:grid-cols-2">
          {data.programs.map((program) => (
            <ProgramCard key={program.slug} program={program} />
          ))}
        </div>
      </Container>
      </Section>
    </>
  )
}

export default Programs
