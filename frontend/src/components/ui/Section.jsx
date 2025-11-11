import clsx from 'clsx'
import Container from './Container'

const Section = ({
  id,
  eyebrow,
  title,
  kicker,
  description,
  children,
  align = 'center',
  className,
  contentClassName,
  containerSize
}) => {
  const alignment = align === 'left' ? 'text-left items-start' : 'text-center items-center'

  return (
    <section id={id} className={clsx('py-10 sm:py-14 md:py-20 lg:py-24', className)}>
      <Container size={containerSize} className="flex flex-col gap-6 sm:gap-8 md:gap-10">
        {(eyebrow || title || description) && (
          <div className={clsx('flex flex-col gap-4', alignment)}>
            {eyebrow ? (
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-crimson">
                {eyebrow}
              </span>
            ) : null}
            {title ? <h2 className="text-3xl font-heading sm:text-4xl lg:text-5xl">{title}</h2> : null}
            {kicker ? <p className="text-base font-medium text-crimson/80">{kicker}</p> : null}
            {description ? (
              <p className="max-w-2xl text-base text-charcoal/70 sm:text-lg">
                {description}
              </p>
            ) : null}
          </div>
        )}
        <div className={contentClassName}>{children}</div>
      </Container>
    </section>
  )
}

export default Section
