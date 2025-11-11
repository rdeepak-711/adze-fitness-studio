import { useState } from 'react'
import toast from 'react-hot-toast'
import Button from '../ui/Button'
import Spinner from '../ui/Spinner'

const ContactForm = ({ fields = [], cta }) => {
  const [values, setValues] = useState(() => Object.fromEntries(fields.map((field) => [field.name, ''])))
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const validateField = (name, value, field) => {
    if (field.required && !value.trim()) {
      return `${field.label} is required`
    }
    if (field.type === 'tel' && value && !/^[\d\s\-\+\(\)]+$/.test(value)) {
      return 'Please enter a valid phone number'
    }
    if (field.type === 'text' && name === 'fullName' && value && value.trim().length < 2) {
      return 'Name must be at least 2 characters'
    }
    return ''
  }

  const handleChange = (event) => {
    const { name, value } = event.target
    setValues((prev) => ({ ...prev, [name]: value }))
    
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }
  }

  const handleBlur = (event) => {
    const { name, value } = event.target
    const field = fields.find((f) => f.name === name)
    if (field) {
      const error = validateField(name, value, field)
      if (error) {
        setErrors((prev) => ({ ...prev, [name]: error }))
      }
    }
  }

  const validateForm = () => {
    const newErrors = {}
    fields.forEach((field) => {
      const error = validateField(field.name, values[field.name] || '', field)
      if (error) {
        newErrors[field.name] = error
      }
    })
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (!validateForm()) {
      toast.error('Please fix the errors in the form')
      return
    }

    setIsSubmitting(true)

    try {
      await new Promise((resolve) => setTimeout(resolve, 800))
      toast.success('Thanks! Our coaches will reach out shortly.')
      setValues(Object.fromEntries(fields.map((field) => [field.name, ''])))
      setErrors({})
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
            <div key={field.name}>
              <label className="block text-sm font-medium text-charcoal">
                {field.label}
              <select
                name={field.name}
                required={field.required}
                value={values[field.name]}
                onChange={handleChange}
                onBlur={handleBlur}
                aria-label={field.label}
                aria-invalid={errors[field.name] ? 'true' : 'false'}
                aria-describedby={errors[field.name] ? `${field.name}-error` : undefined}
                className={`mt-2 w-full rounded-2xl border bg-white px-4 py-3 text-base shadow-sm focus:outline-none ${
                  errors[field.name] ? 'border-crimson focus:border-crimson' : 'border-light-gray focus:border-crimson'
                }`}
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
              {errors[field.name] && (
                <p id={`${field.name}-error`} className="mt-1 text-sm text-crimson" role="alert">
                  {errors[field.name]}
                </p>
              )}
            </div>
          )
        }

        if (field.type === 'textarea') {
          return (
            <div key={field.name}>
              <label className="block text-sm font-medium text-charcoal">
                {field.label}
                <textarea
                  name={field.name}
                  required={field.required}
                  value={values[field.name]}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  rows={4}
                  aria-label={field.label}
                  aria-invalid={errors[field.name] ? 'true' : 'false'}
                  aria-describedby={errors[field.name] ? `${field.name}-error` : undefined}
                  className={`mt-2 w-full rounded-2xl border bg-white px-4 py-3 text-base shadow-sm focus:outline-none ${
                    errors[field.name] ? 'border-crimson focus:border-crimson' : 'border-light-gray focus:border-crimson'
                  }`}
                />
              </label>
              {errors[field.name] && (
                <p id={`${field.name}-error`} className="mt-1 text-sm text-crimson" role="alert">
                  {errors[field.name]}
                </p>
              )}
            </div>
          )
        }

        return (
          <div key={field.name}>
            <label className="block text-sm font-medium text-charcoal">
              {field.label}
              <input
                name={field.name}
                type={field.type}
                required={field.required}
                value={values[field.name]}
                onChange={handleChange}
                onBlur={handleBlur}
                aria-label={field.label}
                aria-invalid={errors[field.name] ? 'true' : 'false'}
                aria-describedby={errors[field.name] ? `${field.name}-error` : undefined}
                className={`mt-2 w-full rounded-2xl border bg-white px-4 py-3 text-base shadow-sm focus:outline-none ${
                  errors[field.name] ? 'border-crimson focus:border-crimson' : 'border-light-gray focus:border-crimson'
                }`}
              />
            </label>
            {errors[field.name] && (
              <p id={`${field.name}-error`} className="mt-1 text-sm text-crimson" role="alert">
                {errors[field.name]}
              </p>
            )}
          </div>
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
