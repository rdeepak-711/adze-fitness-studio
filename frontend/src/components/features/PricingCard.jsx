import Card from '../ui/Card'
import Button from '../ui/Button'

const PricingCard = ({ tier }) => (
  <Card className="flex h-full flex-col gap-4 sm:gap-6 p-5 sm:p-6 md:p-8 text-charcoal">
    <div className="flex items-center justify-between">
      <div>
        <h3 className="text-xl sm:text-2xl font-heading">{tier.name}</h3>
        <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-charcoal/60">{tier.billing}</p>
      </div>
      {tier.badge ? (
        <span className="rounded-full bg-crimson/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-crimson">
          {tier.badge}
        </span>
      ) : null}
    </div>
    <div className="text-3xl sm:text-4xl font-heading text-charcoal">{tier.price}</div>
    <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-charcoal/70">
      {tier.features.map((feature) => (
        <li key={feature} className="flex items-start gap-2">
          <svg className="mt-1 h-4 w-4 text-crimson" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
          <span>{feature}</span>
        </li>
      ))}
    </ul>
    <Button as="a" href={tier.cta?.href || '#book-trial'}>{tier.cta?.label || 'Join Now'}</Button>
  </Card>
)

export default PricingCard
