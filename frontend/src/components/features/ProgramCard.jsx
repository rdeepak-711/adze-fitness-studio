import Card from '../ui/Card'
import Button from '../ui/Button'

const ProgramCard = ({ program }) => (
  <Card className="flex h-full flex-col overflow-hidden">
    <div className="relative h-56 w-full overflow-hidden">
      <img src={program.image} alt={program.name} className="h-full w-full object-cover transition-transform duration-300 hover:scale-110" loading="lazy" />
      <div className="absolute left-4 top-4 flex flex-wrap gap-2">
        {program.level?.map((tag) => (
          <span key={tag} className="rounded-full bg-white/80 px-3 py-1 text-xs font-medium uppercase tracking-wide text-charcoal shadow">
            {tag}
          </span>
        ))}
      </div>
    </div>
    <div className="flex flex-1 flex-col gap-3 sm:gap-4 p-4 sm:p-6">
      <div>
        <h3 className="text-xl sm:text-2xl font-heading">{program.name}</h3>
        <p className="mt-1 text-xs sm:text-sm uppercase tracking-wide text-charcoal/60">{program.duration}</p>
        {program.description && (
          <p className="mt-2 text-xs sm:text-sm text-charcoal/70">{program.description}</p>
        )}
      </div>
      {program.coach && (
        <div className="text-xs font-semibold uppercase tracking-wide text-crimson">
          Coach: {program.coach}
        </div>
      )}
      {program.schedule && (
        <div className="rounded-lg bg-light-gray/50 p-2 sm:p-3">
          <p className="text-xs font-semibold uppercase tracking-wide text-charcoal/60">Schedule</p>
          <p className="mt-1 text-xs sm:text-sm text-charcoal/80">{program.schedule}</p>
        </div>
      )}
      <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-charcoal/70">
        {program.benefits?.map((benefit) => (
          <li key={benefit} className="flex items-start gap-2">
            <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-crimson"></span>
            <span>{benefit}</span>
          </li>
        ))}
      </ul>
      {program.pricing && (
        <p className="text-sm font-semibold text-charcoal">{program.pricing}</p>
      )}
      <div className="mt-auto pt-4">
        <Button as="a" href={program.ctaHref || program.cta?.href || '#book-trial'}>
          {program.cta || 'Join Now'}
        </Button>
      </div>
    </div>
  </Card>
)

export default ProgramCard
