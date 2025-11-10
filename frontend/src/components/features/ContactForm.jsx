import { useState } from 'react'
import toast from 'react-hot-toast'
import Button from '../ui/Button'
import Spinner from '../ui/Spinner'

const ContactForm = ({ fields = [], cta }) => {
  const [values, setValues] = useState(() => Object.fromEntries(fields.map((field) => [field.name, ''])))
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setValues((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    setIsSubmitting(true)

    try {
      await new Promise((resolve) => setTimeout(resolve, 800))
      toast.success('Thanks! Our coaches will reach out shortly.')
      setValues(Object.fromEntries(fields.map((field) => [field.name, ''])))
    } catch (error) {
      toast.error('Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {fields.map((field) => {
        if (field.type === 'select') {
          return (
            <label key={field.name} className="block text-sm font-medium text-charcoal">
              {field.label}
              <select
                name={field.name}
                required={field.required}
                value={values[field.name]}
                onChange={handleChange}
                className="mt-2 w-full rounded-2xl border border-light-gray bg-white px-4 py-3 text-base shadow-sm focus:border-crimson focus:outline-none"
              >
                <option value="" disabled>
                  Select an option
                </option>
                {field.options?.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </label>
          )
        }

        if (field.type === 'textarea') {
          return (
            <label key={field.name} className="block text-sm font-medium text-charcoal">
              {field.label}
              <textarea
                name={field.name}
                required={field.required}
                value={values[field.name]}
                onChange={handleChange}
                rows={4}
                className="mt-2 w-full rounded-2xl border border-light-gray bg-white px-4 py-3 text-base shadow-sm focus:border-crimson focus:outline-none"
              />
            </label>
          )
        }

        return (
          <label key={field.name} className="block text-sm font-medium text-charcoal">
            {field.label}
            <input
              name={field.name}
              type={field.type}
              required={field.required}
              value={values[field.name]}
              onChange={handleChange}
              className="mt-2 w-full rounded-2xl border border-light-gray bg-white px-4 py-3 text-base shadow-sm focus:border-crimson focus:outline-none"
            />
          </label>
        )
      })}

      <Button type="submit" disabled={isSubmitting} className="flex w-full items-center justify-center gap-2">
        {isSubmitting ? (
          <>
            <Spinner size="sm" className="text-white" />
            Sending...
          </>
        ) : (
          cta?.label || 'Submit'
        )}
      </Button>
    </form>
  )
}

export default ContactForm
