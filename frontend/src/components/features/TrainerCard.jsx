import Card from '../ui/Card'
import Button from '../ui/Button'

const TrainerCard = ({ trainer }) => (
  <Card className="flex h-full flex-col overflow-hidden">
    <div className="relative h-48 sm:h-56 md:h-64 w-full overflow-hidden">
      <img src={trainer.image} alt={trainer.name} className="h-full w-full object-cover transition-transform duration-300 hover:scale-110" loading="lazy" />
      <span className="absolute left-3 top-3 sm:left-4 sm:top-4 rounded-full bg-white/90 px-2.5 py-1 sm:px-3 text-xs font-semibold uppercase tracking-wide text-charcoal">
        {trainer.title}
      </span>
    </div>
    <div className="flex flex-1 flex-col gap-3 sm:gap-4 p-4 sm:p-5 md:p-6">
      <div>
        <h3 className="text-xl sm:text-2xl">{trainer.name}</h3>
        <p className="mt-1 text-xs sm:text-sm text-charcoal/60">{trainer.certifications.join(' • ')}</p>
      </div>
      <p className="text-xs sm:text-sm text-charcoal/70">{trainer.bio}</p>
      <div className="space-y-2">
        <p className="text-xs uppercase tracking-wide text-charcoal/60">Specialties</p>
        <div className="flex flex-wrap gap-2">
          {trainer.specialties.map((specialty) => (
            <span key={specialty} className="rounded-full bg-light-gray px-3 py-1 text-xs font-medium text-charcoal">
              {specialty}
            </span>
          ))}
        </div>
      </div>
      {trainer.social?.instagram ? (
        <div className="mt-auto pt-4">
          <Button
            as="a"
            variant="ghost"
            href={trainer.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
          >
            Follow {trainer.name.split(' ')[0]}
          </Button>
        </div>
      ) : null}
    </div>
  </Card>
)

export default TrainerCard
