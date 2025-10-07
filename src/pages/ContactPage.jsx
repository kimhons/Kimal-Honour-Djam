import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, MessageSquare, Calendar, Users, Award } from 'lucide-react'

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: '',
    inquiryType: 'general'
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true)
      setIsLoading(false)
      setFormData({
        name: '',
        email: '',
        company: '',
        subject: '',
        message: '',
        inquiryType: 'general'
      })
    }, 2000)
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "info@kimalhonour.com",
      description: "For general inquiries and information"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+1 (555) 123-4567",
      description: "Business hours: Monday - Friday, 9 AM - 5 PM EST"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Maryland, USA",
      description: "Available for virtual consultations worldwide"
    },
    {
      icon: Clock,
      title: "Response Time",
      value: "24-48 hours",
      description: "We respond to all inquiries promptly"
    }
  ]

  const inquiryTypes = [
    {
      value: 'coaching',
      label: 'Coaching Services',
      description: 'Elite performance coaching and transformation programs',
      icon: Users
    },
    {
      value: 'speaking',
      label: 'Speaking Engagements',
      description: 'Keynote presentations and workshop facilitation',
      icon: MessageSquare
    },
    {
      value: 'consulting',
      label: 'Consulting',
      description: 'Organizational development and strategic consulting',
      icon: Award
    },
    {
      value: 'media',
      label: 'Media & Interviews',
      description: 'Podcast appearances and media interviews',
      icon: Calendar
    },
    {
      value: 'general',
      label: 'General Inquiry',
      description: 'Questions about books, courses, or other topics',
      icon: Mail
    }
  ]

  const officeHours = [
    { day: 'Monday - Friday', hours: '9:00 AM - 5:00 PM EST' },
    { day: 'Saturday', hours: '10:00 AM - 2:00 PM EST' },
    { day: 'Sunday', hours: 'Closed' }
  ]

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold">
              Get In Touch
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Ready to transform your performance through science? Let's discuss how we can work together 
              to achieve your goals through evidence-based methodologies and systematic excellence.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="text-center space-y-2">
                <div className="text-2xl font-bold text-yellow-400">24-48 hrs</div>
                <div className="text-blue-200">Response Time</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-2xl font-bold text-yellow-400">Global</div>
                <div className="text-blue-200">Virtual Consultations</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-2xl font-bold text-yellow-400">15+ Years</div>
                <div className="text-blue-200">Professional Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    Send a Message
                  </h2>
                  <p className="text-lg text-gray-600">
                    Fill out the form below and we'll get back to you within 24-48 hours.
                  </p>
                </div>

                {!isSubmitted ? (
                  <Card className="border-0 shadow-lg">
                    <CardContent className="p-6">
                      <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Inquiry Type Selection */}
                        <div className="space-y-3">
                          <label className="text-sm font-medium text-gray-900">
                            What can we help you with?
                          </label>
                          <div className="grid grid-cols-1 gap-3">
                            {inquiryTypes.map((type) => (
                              <label key={type.value} className="flex items-center space-x-3 cursor-pointer">
                                <input
                                  type="radio"
                                  name="inquiryType"
                                  value={type.value}
                                  checked={formData.inquiryType === type.value}
                                  onChange={handleInputChange}
                                  className="text-blue-600"
                                />
                                <div className="flex items-center space-x-3">
                                  <type.icon className="h-5 w-5 text-blue-600" />
                                  <div>
                                    <div className="font-medium text-gray-900">{type.label}</div>
                                    <div className="text-sm text-gray-600">{type.description}</div>
                                  </div>
                                </div>
                              </label>
                            ))}
                          </div>
                        </div>

                        {/* Personal Information */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-900 mb-2">
                              Full Name *
                            </label>
                            <Input
                              type="text"
                              name="name"
                              value={formData.name}
                              onChange={handleInputChange}
                              required
                              placeholder="Your full name"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-900 mb-2">
                              Email Address *
                            </label>
                            <Input
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleInputChange}
                              required
                              placeholder="your.email@example.com"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-900 mb-2">
                              Company/Organization
                            </label>
                            <Input
                              type="text"
                              name="company"
                              value={formData.company}
                              onChange={handleInputChange}
                              placeholder="Your company name"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-900 mb-2">
                              Subject *
                            </label>
                            <Input
                              type="text"
                              name="subject"
                              value={formData.subject}
                              onChange={handleInputChange}
                              required
                              placeholder="Brief subject line"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-900 mb-2">
                            Message *
                          </label>
                          <Textarea
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            required
                            rows={6}
                            placeholder="Please provide details about your inquiry, goals, timeline, and any specific questions you have..."
                          />
                        </div>

                        <Button 
                          type="submit"
                          disabled={isLoading}
                          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3"
                        >
                          {isLoading ? (
                            'Sending Message...'
                          ) : (
                            <>
                              <Send className="h-4 w-4 mr-2" />
                              Send Message
                            </>
                          )}
                        </Button>
                      </form>
                    </CardContent>
                  </Card>
                ) : (
                  <Card className="border-0 shadow-lg bg-green-50">
                    <CardContent className="p-6 text-center space-y-4">
                      <CheckCircle className="h-12 w-12 text-green-600 mx-auto" />
                      <h3 className="text-xl font-bold text-green-800">Message Sent Successfully!</h3>
                      <p className="text-green-700">
                        Thank you for reaching out. We'll review your message and respond within 24-48 hours.
                      </p>
                      <Button 
                        onClick={() => setIsSubmitted(false)}
                        variant="outline"
                        className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white"
                      >
                        Send Another Message
                      </Button>
                    </CardContent>
                  </Card>
                )}
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Contact Information
                </h2>
                
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="bg-blue-100 p-3 rounded-lg">
                        <info.icon className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{info.title}</h3>
                        <p className="text-lg text-blue-600 font-medium">{info.value}</p>
                        <p className="text-sm text-gray-600">{info.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Office Hours */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Clock className="h-5 w-5 text-blue-600" />
                    <span>Office Hours</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {officeHours.map((schedule, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <span className="font-medium text-gray-900">{schedule.day}</span>
                        <span className="text-gray-600">{schedule.hours}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                    <p className="text-sm text-blue-800">
                      <strong>Note:</strong> Virtual consultations available worldwide. 
                      We accommodate different time zones for international clients.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Links */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                  <CardDescription>
                    Need immediate assistance? Try these options:
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button variant="outline" className="w-full justify-start">
                    <Calendar className="h-4 w-4 mr-2" />
                    Schedule a Consultation
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Mail className="h-4 w-4 mr-2" />
                    Subscribe to Newsletter
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <MessageSquare className="h-4 w-4 mr-2" />
                    Join Community Forum
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Common questions about working with Kimal Honour Djam
            </p>
          </div>

          <div className="space-y-6">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg">What types of clients do you work with?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  I work with high-achieving executives, entrepreneurs, and leadership teams who are serious about 
                  transformation and ready to invest in systematic excellence. My clients typically include CEOs, 
                  senior executives, medical professionals, and military leaders.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg">Do you offer virtual coaching sessions?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Yes, I offer virtual coaching sessions worldwide. While I'm based in Maryland, USA, 
                  I work with clients globally through secure video conferencing platforms. 
                  Quarterly in-person intensives can be arranged for premium coaching clients.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg">What makes your approach different?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  My approach uniquely combines medical physics precision, military leadership experience, 
                  and evidence-based neuroscience. This intersection of hard science and practical application 
                  creates transformation methodologies that are both systematic and proven in high-stakes environments.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg">How quickly can I expect to see results?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Results vary by individual and program, but most clients report noticeable improvements 
                  within 30-60 days. Systematic transformation typically occurs over 6-12 months with 
                  consistent implementation of the methodologies.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactPage
