import React, { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [notification, setNotification] = useState(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!formData.name.trim() || !formData.email.trim()) {
      showNotification('Please fill in all required fields (Name and Email).', 'error')
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch('https://formspree.io/f/mzzvyzqa', {
        method: 'POST',
        body: new FormData(e.target),
        headers: {
          Accept: 'application/json',
        },
      })

      if (response.ok) {
        setFormData({ name: '', email: '', message: '' })
        showNotification("Message sent successfully! I'll get back to you soon.", 'success')
      } else {
        throw new Error('Form submission failed')
      }
    } catch (error) {
      console.error('Error:', error)
      showNotification('Sorry, there was an error sending your message. Please try again.', 'error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const showNotification = (message, type) => {
    setNotification({ message, type })
    setTimeout(() => {
      setNotification(null)
    }, 3000)
  }

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Contact Me</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              I am committed to processing the information in order to contact you
              and ask you about your project.
            </p>
            <div className="space-y-4">
              <p className="text-gray-600 flex items-center gap-3">
                <i className="fa-regular fa-envelope text-blue-600 w-5"></i>
                <a
                  href="mailto:developermuhindi@gmail.com"
                  className="text-blue-600 hover:underline"
                >
                  developermuhindi@gmail.com
                </a>
              </p>
              <p className="text-gray-600 flex items-center gap-3">
                <i className="fa-solid fa-location-dot text-blue-600 w-5"></i>
                Tudor, Mombasa, Kenya
              </p>
              <p className="text-gray-600 flex items-center gap-3">
                <i className="fa-solid fa-phone-volume text-blue-600 w-5"></i>
                <a href="tel:+254795482911" className="text-blue-600 hover:underline">
                  +254 795 482 911
                </a>
              </p>
            </div>
            <div className="flex gap-4 mt-8">
              <a
                href="https://www.linkedin.com/in/newton-muhindi"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center hover:bg-secondary transition-all hover:-translate-y-0.5"
              >
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a
                href="https://github.com/muhindinewton"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center hover:bg-secondary transition-all hover:-translate-y-0.5"
              >
                <i className="fa-brands fa-github"></i>
              </a>
            </div>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Name*"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg mb-4 focus:outline-none focus:border-primary transition-colors"
              />
              <input
                type="email"
                name="email"
                placeholder="Email*"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg mb-4 focus:outline-none focus:border-primary transition-colors"
              />
              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg mb-4 focus:outline-none focus:border-primary transition-colors resize-vertical min-h-[120px]"
              ></textarea>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-secondary transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </button>
            </form>
            {notification && (
              <div
                className={`mt-4 p-4 rounded-lg text-center font-semibold animate-slideInUp ${
                  notification.type === 'success'
                    ? 'bg-green-500 text-white'
                    : 'bg-red-500 text-white'
                }`}
              >
                {notification.type === 'success' ? '✅' : '⚠️'} {notification.message}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
