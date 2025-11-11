import clsx from 'clsx'

const baseStyles = 'inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold uppercase tracking-wide transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-70 min-h-[44px] min-w-[44px] touch-manipulation'

const variants = {
  primary: 'bg-crimson text-white shadow-lg shadow-crimson/30 hover:scale-[1.02] focus-visible:outline-crimson/80',
  secondary: 'border border-charcoal text-charcoal hover:bg-charcoal hover:text-white focus-visible:outline-charcoal/80',
  ghost: 'text-charcoal hover:text-crimson focus-visible:outline-crimson/80',
  light: 'bg-white text-charcoal shadow-lg shadow-black/5 hover:shadow-black/10 focus-visible:outline-white'
}

const Button = ({ variant = 'primary', className, children, as = 'button', ...props }) => {
  const Component = as
  const resolvedVariant = variants[variant] || variants.primary
  return (
    <Component className={clsx(baseStyles, resolvedVariant, className)} {...props}>
      {children}
    </Component>
  )
}

export default Button
