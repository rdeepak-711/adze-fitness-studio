import { useEffect, useState } from 'react'
import wellnessData from '../data/wellness.json'
import Section from '../components/ui/Section'
import Container from '../components/ui/Container'
import Card from '../components/ui/Card'
import Button from '../components/ui/Button'

const Wellness = () => {
  const [data, setData] = useState(null)

  useEffect(() => {
    setData(wellnessData)
  }, [])

  if (!data) return null

  return (
    <>
      <Section
        eyebrow="Wellness"
        title={data.heading}
        description={data.subheading}
        align="center"
      >
        <Container>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {data.sections.map((section, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="relative h-64 w-full overflow-hidden">
                  <img
                    src={section.image}
                    alt={section.title}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                  {section.title.includes('coming soon') && (
                    <div className="absolute inset-0 flex items-center justify-center bg-charcoal/60">
                      <span className="rounded-full bg-white/90 px-4 py-2 text-sm font-semibold uppercase tracking-wide text-charcoal">
                        Coming Soon
                      </span>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-heading">{section.title}</h3>
                  <p className="mt-3 text-base text-charcoal/70">{section.copy}</p>
                  {section.pillars && section.pillars.length > 0 && (
                    <div className="mt-6 space-y-2">
                      <p className="text-xs font-semibold uppercase tracking-wide text-charcoal/60">Focus Areas</p>
                      <div className="flex flex-wrap gap-2">
                        {section.pillars.map((pillar) => (
                          <span
                            key={pillar}
                            className="rounded-full bg-crimson/10 px-3 py-1 text-xs font-medium text-crimson"
                          >
                            {pillar}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>
    </>
  )
}

export default Wellness
