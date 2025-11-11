import { Link } from 'react-router-dom'
import SEO from '../components/layout/SEO'

const NotFound = () => (
  <>
    <SEO
      title="Page Not Found"
      description="The page you're looking for doesn't exist. Return to Adze Fitness Studio homepage."
      type="website"
    />
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-6 px-4 text-center">
      <h1 className="text-6xl font-heading">404</h1>
      <p className="max-w-xl text-lg text-charcoal/60">
        The page you're looking for is still being built as we craft the Adze Fitness Studio experience.
      </p>
      <Link
        to="/"
        className="rounded-full bg-crimson px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white shadow-lg shadow-crimson/30 transition hover:scale-[1.02]"
        aria-label="Return to homepage"
      >
        Back to Home
      </Link>
    </div>
  </>
)

export default NotFound
