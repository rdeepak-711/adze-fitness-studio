import { useEffect, useState } from 'react'
import membershipsData from '../data/memberships.json'
import PricingCard from '../components/features/PricingCard'
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
      <Section
        eyebrow="Membership"
        title={data.heading}
        description={data.subheading}
        align="center"
      >
        <Container>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {data.tiers.map((tier) => (
              <PricingCard key={tier.name} tier={tier} />
            ))}
          </div>
        </Container>
      </Section>

      {data.promo && (
        <Section className="bg-charcoal text-white">
          <Container>
            <Card variant="dark" className="p-8 text-center">
              <h2 className="text-3xl font-heading">{data.promo.headline}</h2>
              <p className="mt-4 text-base text-white/80">{data.promo.copy}</p>
              {data.promo.cta && (
                <div className="mt-8">
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
