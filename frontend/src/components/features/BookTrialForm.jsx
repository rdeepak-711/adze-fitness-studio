import { useState } from 'react'
import toast from 'react-hot-toast'
import Button from '../ui/Button'
import Spinner from '../ui/Spinner'

const BookTrialForm = ({ onSuccess }) => {
  const [values, setValues] = useState({
    fullName: '',
    phone: '',
    timeSlot: '',
    program: ''
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const timeSlots = [
    '5:30 AM - 7:00 AM',
    '7:00 AM - 9:00 AM',
    '9:00 AM - 11:00 AM',
    '5:00 PM - 7:00 PM',
    '7:00 PM - 9:00 PM'
  ]

  const programs = [
    'HIIT Bootcamp',
    'Strength Training',
    'Yoga Therapy',
    'Personal Coaching',
    'Not sure yet'
  ]

  const validateField = (name, value) => {
    if (name === 'fullName') {
      if (!value.trim()) {
        return 'Name is required'
      }
      if (value.trim().length < 2) {
        return 'Name must be at least 2 characters'
      }
    }
    if (name === 'phone') {
      if (!value.trim()) {
        return 'Phone number is required'
      }
      if (!/^[\d\s\-\+\(\)]+$/.test(value)) {
        return 'Please enter a valid phone number'
      }
      if (value.replace(/\D/g, '').length < 10) {
        return 'Phone number must be at least 10 digits'
      }
    }
    if (name === 'timeSlot') {
      if (!value) {
        return 'Please select a preferred time slot'
      }
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
    const error = validateField(name, value)
    if (error) {
      setErrors((prev) => ({ ...prev, [name]: error }))
    }
  }

  const validateForm = () => {
    const newErrors = {}
    Object.keys(values).forEach((key) => {
      if (key !== 'program') {
        const error = validateField(key, values[key])
        if (error) {
          newErrors[key] = error
        }
      }
    })
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (!validateForm()) {
      toast.error('Please fill in all required fields')
      return
    }

    setIsSubmitting(true)

    try {
      await new Promise((resolve) => setTimeout(resolve, 800))
      toast.success('Trial session booked! Our team will confirm your slot shortly.')
      setValues({
        fullName: '',
        phone: '',
        timeSlot: '',
        program: ''
      })
      setErrors({})
      onSuccess?.()
    } catch (error) {
      toast.error('Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-charcoal">
          Full Name *
        </label>
        <input
          name="fullName"
          type="text"
          required
          value={values.fullName}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Enter your full name"
          aria-label="Full Name"
          aria-invalid={errors.fullName ? 'true' : 'false'}
          aria-describedby={errors.fullName ? 'fullName-error' : undefined}
          className={`mt-2 w-full rounded-2xl border bg-white px-4 py-3 text-base shadow-sm focus:outline-none ${
            errors.fullName ? 'border-crimson focus:border-crimson' : 'border-light-gray focus:border-crimson'
          }`}
        />
        {errors.fullName && (
          <p id="fullName-error" className="mt-1 text-sm text-crimson" role="alert">
            {errors.fullName}
          </p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-charcoal">
          Phone Number *
        </label>
        <input
          name="phone"
          type="tel"
          required
          value={values.phone}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="+91 98765 43210"
          aria-label="Phone Number"
          aria-invalid={errors.phone ? 'true' : 'false'}
          aria-describedby={errors.phone ? 'phone-error' : undefined}
          className={`mt-2 w-full rounded-2xl border bg-white px-4 py-3 text-base shadow-sm focus:outline-none ${
            errors.phone ? 'border-crimson focus:border-crimson' : 'border-light-gray focus:border-crimson'
          }`}
        />
        {errors.phone && (
          <p id="phone-error" className="mt-1 text-sm text-crimson" role="alert">
            {errors.phone}
          </p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-charcoal">
          Preferred Time Slot *
        </label>
        <select
          name="timeSlot"
          required
          value={values.timeSlot}
          onChange={handleChange}
          onBlur={handleBlur}
          aria-label="Preferred Time Slot"
          aria-invalid={errors.timeSlot ? 'true' : 'false'}
          aria-describedby={errors.timeSlot ? 'timeSlot-error' : undefined}
          className={`mt-2 w-full rounded-2xl border bg-white px-4 py-3 text-base shadow-sm focus:outline-none ${
            errors.timeSlot ? 'border-crimson focus:border-crimson' : 'border-light-gray focus:border-crimson'
          }`}
        >
          <option value="" disabled>
            Select a time slot
          </option>
          {timeSlots.map((slot) => (
            <option key={slot} value={slot}>
              {slot}
            </option>
          ))}
        </select>
        {errors.timeSlot && (
          <p id="timeSlot-error" className="mt-1 text-sm text-crimson" role="alert">
            {errors.timeSlot}
          </p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-charcoal">
          Interested Program (Optional)
        </label>
        <select
          name="program"
          value={values.program}
          onChange={handleChange}
          aria-label="Interested Program"
          className="mt-2 w-full rounded-2xl border border-light-gray bg-white px-4 py-3 text-base shadow-sm focus:border-crimson focus:outline-none"
        >
          <option value="">Select a program (optional)</option>
          {programs.map((program) => (
            <option key={program} value={program}>
              {program}
            </option>
          ))}
        </select>
      </div>

      <Button type="submit" disabled={isSubmitting} className="flex w-full items-center justify-center gap-2">
        {isSubmitting ? (
          <>
            <Spinner size="sm" className="text-white" />
            Booking...
          </>
        ) : (
          'Book My Free Trial'
        )}
      </Button>
    </form>
  )
}

export default BookTrialForm

