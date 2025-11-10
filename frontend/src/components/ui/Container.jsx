import clsx from 'clsx'

const Container = ({ className, children, size = 'default' }) => {
  const sizes = {
    narrow: 'max-w-3xl',
    default: 'max-w-6xl',
    wide: 'max-w-7xl'
  }

  return (
    <div className={clsx('mx-auto w-full px-4 sm:px-6 lg:px-8', sizes[size], className)}>
      {children}
    </div>
  )
}

export default Container
