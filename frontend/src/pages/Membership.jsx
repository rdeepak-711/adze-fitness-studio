import { useEffect, useState } from 'react'
import membershipsData from '../data/memberships.json'
import PricingCard from '../components/features/PricingCard'
import SEO from '../components/layout/SEO'
import Section from '../components/ui/Section'
import Container from '../components/ui/Container'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'

const Membership = () => {
  const [data, setData] = useState(null)

  useEffect(() => {
    setData(membershipsData)
  }, [])

  if (!data) return null

  return (
    <>
      <SEO
        title="Membership"
        description="Choose from our flexible membership plans. From monthly passes to annual memberships, find the perfect plan for your fitness journey."
        keywords="gym membership Chennai, fitness membership plans, monthly gym pass, annual membership, fitness pricing"
        image="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=80"
      />
      <Section
        eyebrow="Membership"
        title={data.heading}
        description={data.subheading}
        align="center"
      >
        <Container>
          <div className="grid gap-6 sm:gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {data.tiers.map((tier) => (
              <PricingCard key={tier.name} tier={tier} />
            ))}
          </div>
        </Container>
      </Section>

      {data.promo && (
        <Section className="bg-charcoal text-white">
          <Container>
            <Card variant="dark" className="p-6 sm:p-8 text-center">
              <h2 className="text-2xl sm:text-3xl font-heading">{data.promo.headline}</h2>
              <p className="mt-3 sm:mt-4 text-sm sm:text-base text-white/80">{data.promo.copy}</p>
              {data.promo.cta && (
                <div className="mt-6 sm:mt-8">
                  <Button as="a" href={data.promo.cta.href} variant="light">
                    {data.promo.cta.label}
                  </Button>
                </div>
              )}
            </Card>
          </Container>
        </Section>
      )}
    </>
  )
}

export default Membership
