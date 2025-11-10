import { useEffect, useState } from 'react'
import testimonialsData from '../data/testimonials.json'
import TestimonialCarousel from '../components/features/TestimonialCarousel'
import Section from '../components/ui/Section'
import Container from '../components/ui/Container'
import Card from '../components/ui/Card'

const Testimonials = () => {
  const [data, setData] = useState(null)

  useEffect(() => {
    setData(testimonialsData)
  }, [])

  if (!data) return null

  return (
    <>
      <Section
        eyebrow="Testimonials"
        title={data.heading}
        description={data.intro}
        align="center"
      >
        <Container>
          <TestimonialCarousel testimonials={data.testimonials} />
        </Container>
      </Section>

      {data.coachStories && data.coachStories.length > 0 && (
        <Section
          eyebrow="Coach Stories"
          title="Transformations That Inspired Us"
          description="Our coaches didn't just become trainers—they transformed their own lives first."
          align="center"
        >
          <Container>
            <div className="grid gap-8 md:grid-cols-2">
              {data.coachStories.map((story) => (
                <Card key={story.coach} className="overflow-hidden">
                  <div className="relative h-64 w-full overflow-hidden">
                    <img src={story.image} alt={story.coach} className="h-full w-full object-cover" loading="lazy" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-heading">{story.title}</h3>
                    <p className="mt-2 text-sm font-semibold text-crimson">{story.coach}</p>
                    <p className="mt-4 text-base text-charcoal/70">{story.story}</p>
                    {story.beforeAfter && (
                      <div className="mt-6 grid grid-cols-2 gap-4 border-t border-light-gray pt-4">
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-wide text-charcoal/60">Before</p>
                          <p className="mt-1 text-sm text-charcoal/80">{story.beforeAfter.before}</p>
                        </div>
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-wide text-charcoal/60">After</p>
                          <p className="mt-1 text-sm text-charcoal/80">{story.beforeAfter.after}</p>
                        </div>
                      </div>
                    )}
                  </div>
                </Card>
              ))}
            </div>
          </Container>
        </Section>
      )}
    </>
  )
}

export default Testimonials
