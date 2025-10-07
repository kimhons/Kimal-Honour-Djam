import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CheckCircle, Users, Clock, Award, Zap, Target, Brain, Shield } from 'lucide-react'

const CoachingPage = () => {
  const coachingServices = [
    {
      id: 1,
      title: "Elite Performance Coaching",
      subtitle: "1-on-1 Transformation for High-Achievers",
      price: "2,500",
      period: "per month",
      duration: "6-month minimum",
      description: "Intensive personal coaching combining medical physics precision with proven transformation methodologies. For executives and entrepreneurs ready to command peak performance.",
      features: [
        "Weekly 90-minute strategy sessions",
        "Personalized neural optimization protocols",
        "24/7 text access for urgent decisions",
        "Custom performance tracking dashboard",
        "Quarterly in-person intensive sessions",
        "Access to exclusive mastermind group"
      ],
      outcomes: [
        "40% improvement in decision-making speed",
        "Systematic stress optimization",
        "Enhanced leadership presence",
        "Breakthrough financial results"
      ],
      ideal: "CEOs, Entrepreneurs, Senior Executives",
      featured: true
    },
    {
      id: 2,
      title: "Executive Team Transformation",
      subtitle: "Military-Grade Leadership for Business Teams",
      price: "15,000",
      period: "per quarter",
      duration: "12-month program",
      description: "Transform your leadership team through military medical leadership principles. Systematic approach to building high-performance teams that thrive under pressure.",
      features: [
        "Monthly team leadership intensives",
        "Crisis simulation exercises",
        "Individual leader assessments",
        "Team performance optimization",
        "Leadership measurement systems",
        "Ongoing implementation support"
      ],
      outcomes: [
        "Enhanced team cohesion and performance",
        "Improved decision-making under pressure",
        "Systematic excellence implementation",
        "Measurable productivity gains"
      ],
      ideal: "Leadership Teams, C-Suite Groups",
      featured: true
    },
    {
      id: 3,
      title: "Keynote Speaking & Workshops",
      subtitle: "Transformational Presentations for Organizations",
      price: "25,000",
      period: "per engagement",
      duration: "Half-day to multi-day",
      description: "High-impact presentations combining scientific expertise with transformational content. Perfect for conferences, corporate events, and organizational development.",
      features: [
        "Customized content for your audience",
        "Interactive workshop components",
        "Follow-up implementation materials",
        "Video recording rights included",
        "Pre-event consultation",
        "Post-event Q&A session"
      ],
      outcomes: [
        "Inspired and motivated teams",
        "Practical implementation strategies",
        "Enhanced organizational culture",
        "Measurable behavior change"
      ],
      ideal: "Conferences, Corporate Events, Organizations",
      featured: true
    }
  ]

  const coachingApproach = [
    {
      icon: Brain,
      title: "Neuroscientific Foundation",
      description: "Every strategy is grounded in brain science and evidence-based research from medical physics practice."
    },
    {
      icon: Shield,
      title: "Military Precision",
      description: "Leadership frameworks tested in life-and-death military medical environments for unshakeable results."
    },
    {
      icon: Target,
      title: "Systematic Excellence",
      description: "Methodical approach to transformation with measurable outcomes and continuous optimization."
    },
    {
      icon: Zap,
      title: "Accelerated Results",
      description: "Breakthrough methodologies that compress years of development into months of focused implementation."
    }
  ]

  const testimonials = [
    {
      name: "Sarah Chen",
      title: "CEO, TechVenture Inc.",
      quote: "Kimal's coaching transformed not just my leadership style, but our entire company culture. The military medical frameworks he teaches are unlike anything in traditional business coaching.",
      results: "40% increase in team productivity, $2M revenue growth"
    },
    {
      name: "Marcus Rodriguez",
      title: "Managing Director, Investment Firm",
      quote: "The neuroscientific approach to decision-making has revolutionized how I handle high-stakes investments. The ROI on coaching has been extraordinary.",
      results: "Enhanced decision accuracy, reduced stress levels"
    },
    {
      name: "Dr. Jennifer Walsh",
      title: "Hospital Administrator",
      quote: "Having someone who understands both medical environments and business leadership is invaluable. Kimal bridges worlds that rarely connect.",
      results: "Improved team coordination, better crisis management"
    }
  ]

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-teal-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <Badge className="bg-yellow-500 text-black font-semibold px-4 py-2 text-lg">
                Elite Performance Coaching
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Command Your Success
                <span className="block text-yellow-400">Through Science</span>
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
                Transform your leadership and performance through the unique intersection of medical physics precision, 
                military leadership excellence, and evidence-based human optimization.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="text-center space-y-2">
                <div className="text-3xl font-bold text-yellow-400">15+</div>
                <div className="text-blue-200">Years Experience</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-3xl font-bold text-yellow-400">500+</div>
                <div className="text-blue-200">Leaders Coached</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-3xl font-bold text-yellow-400">98%</div>
                <div className="text-blue-200">Success Rate</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-3xl font-bold text-yellow-400">$50M+</div>
                <div className="text-blue-200">Client Value Created</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coaching Approach */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              The Science of Transformation
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A unique coaching methodology that combines medical physics precision with military leadership 
              excellence for unprecedented results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coachingApproach.map((approach, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto flex items-center justify-center">
                  <approach.icon className="h-8 w-8 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{approach.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{approach.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coaching Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Coaching Services
            </h2>
            <p className="text-lg text-gray-600">
              Comprehensive transformation programs designed for different levels of engagement
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {coachingServices.map((service) => (
              <Card key={service.id} className={`border-0 shadow-lg hover:shadow-xl transition-all ${service.featured ? 'ring-2 ring-yellow-400' : ''}`}>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    {service.featured && (
                      <Badge className="bg-yellow-500 text-black">Most Popular</Badge>
                    )}
                  </div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600 font-medium">
                    {service.subtitle}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <div className="text-center space-y-2">
                    <div className="text-4xl font-bold text-gray-900">
                      ${service.price.toLocaleString()}
                    </div>
                    <div className="text-gray-600">{service.period}</div>
                    <div className="text-sm text-blue-600 font-medium">{service.duration}</div>
                  </div>

                  <p className="text-gray-600 leading-relaxed">{service.description}</p>

                  <div className="space-y-3">
                    <div className="font-semibold text-gray-900">What's Included:</div>
                    <ul className="space-y-2">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-start space-x-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <div className="font-semibold text-gray-900">Expected Outcomes:</div>
                    <ul className="space-y-1">
                      {service.outcomes.map((outcome, index) => (
                        <li key={index} className="flex items-start space-x-2 text-sm">
                          <Target className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="text-sm font-medium text-gray-900 mb-1">Ideal For:</div>
                    <div className="text-sm text-blue-600">{service.ideal}</div>
                  </div>

                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3">
                    Schedule Consultation
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Client Success Stories
            </h2>
            <p className="text-lg text-gray-600">
              Real results from leaders who've transformed through scientific coaching
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-6 space-y-4">
                  <div className="text-gray-600 italic leading-relaxed">
                    "{testimonial.quote}"
                  </div>
                  <div className="border-t pt-4">
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.title}</div>
                    <div className="text-sm text-blue-600 font-medium mt-2">
                      Results: {testimonial.results}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-purple-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to Command Your Success?
            </h2>
            <p className="text-xl text-blue-100">
              Elite coaching is by application only. We work with leaders who are serious 
              about transformation and ready to invest in systematic excellence.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 space-y-6">
            <h3 className="text-2xl font-bold">Application Process</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="bg-yellow-400 text-black rounded-full w-12 h-12 mx-auto flex items-center justify-center font-bold text-xl mb-3">1</div>
                <div className="font-semibold mb-2">Initial Application</div>
                <div className="text-sm text-blue-200">Complete detailed application form</div>
              </div>
              <div>
                <div className="bg-yellow-400 text-black rounded-full w-12 h-12 mx-auto flex items-center justify-center font-bold text-xl mb-3">2</div>
                <div className="font-semibold mb-2">Strategy Session</div>
                <div className="text-sm text-blue-200">90-minute consultation call</div>
              </div>
              <div>
                <div className="bg-yellow-400 text-black rounded-full w-12 h-12 mx-auto flex items-center justify-center font-bold text-xl mb-3">3</div>
                <div className="font-semibold mb-2">Program Design</div>
                <div className="text-sm text-blue-200">Custom transformation blueprint</div>
              </div>
            </div>

            <Button 
              size="lg"
              className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-12 py-4 rounded-full text-lg"
            >
              Apply for Coaching
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CoachingPage
