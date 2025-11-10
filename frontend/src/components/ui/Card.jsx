import clsx from 'clsx'

const Card = ({ children, className, variant = 'default' }) => {
  const variants = {
    default: 'rounded-3xl border border-light-gray/70 bg-white/80 shadow-lg shadow-black/5 backdrop-blur-sm',
    dark: 'rounded-3xl border border-white/10 bg-charcoal text-white shadow-lg shadow-black/40 backdrop-blur-sm',
    glass: 'rounded-3xl glass'
  }

  return (
    <div className={clsx(variants[variant], className)}>
      {children}
    </div>
  )
}

export default Card
