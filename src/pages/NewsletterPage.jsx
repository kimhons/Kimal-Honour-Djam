import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Mail, Users, TrendingUp, Calendar, Download, CheckCircle, Star, ArrowRight } from 'lucide-react'

const NewsletterPage = () => {
  const [email, setEmail] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubscribe = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Simulate API call
    setTimeout(() => {
      setIsSubscribed(true)
      setIsLoading(false)
      setEmail('')
    }, 2000)
  }

  const newsletterStats = [
    { icon: Users, label: "25,000+", description: "Active Subscribers" },
    { icon: TrendingUp, label: "89%", description: "Open Rate" },
    { icon: Star, label: "4.9/5", description: "Average Rating" },
    { icon: Calendar, label: "127", description: "Issues Published" }
  ]

  const recentIssues = [
    {
      id: 1,
      title: "The Neural Architecture of Wealth: 5 Brain Hacks for Financial Success",
      date: "September 15, 2024",
      category: "Wealth Hacks",
      excerpt: "Discover the hidden neural patterns that determine your financial destiny. This week's issue reveals evidence-based techniques to rewire your brain for wealth creation.",
      readTime: "8 min read",
      featured: true
    },
    {
      id: 2,
      title: "Leadership Under Pressure: Military Medical Insights for Business",
      date: "September 8, 2024",
      category: "Leadership",
      excerpt: "Critical leadership lessons from commanding radiation safety operations in high-stakes medical environments. How precision medicine principles apply to team leadership.",
      readTime: "6 min read",
      featured: false
    },
    {
      id: 3,
      title: "AI Tools for Peak Performance: The Physicist's Productivity Guide",
      date: "September 1, 2024",
      category: "AI & Technology",
      excerpt: "How artificial intelligence can amplify human potential. A medical physicist's perspective on leveraging AI for breakthrough productivity and decision-making.",
      readTime: "10 min read",
      featured: false
    },
    {
      id: 4,
      title: "The Science of Habit Formation: Rewiring Your Brain for Success",
      date: "August 25, 2024",
      category: "Personal Growth",
      excerpt: "Evidence-based strategies for creating lasting behavioral change. How neuroscience reveals the optimal pathways for building success habits that stick.",
      readTime: "7 min read",
      featured: false
    }
  ]

  const subscriberBenefits = [
    {
      icon: Mail,
      title: "Weekly Insights",
      description: "Get cutting-edge content on neuroscience, wealth creation, and peak performance delivered every Sunday."
    },
    {
      icon: Download,
      title: "Exclusive Resources",
      description: "Access subscriber-only guides, templates, and tools not available anywhere else."
    },
    {
      icon: Users,
      title: "Community Access",
      description: "Join a community of 25,000+ high-achievers committed to scientific success strategies."
    },
    {
      icon: TrendingUp,
      title: "Early Access",
      description: "Be the first to know about new courses, books, and exclusive opportunities."
    }
  ]

  const contentCategories = [
    {
      name: "Wealth Hacks",
      description: "Neuroscience-based financial strategies and wealth creation techniques",
      frequency: "Every Monday",
      color: "bg-green-100 text-green-800"
    },
    {
      name: "Leadership Principles",
      description: "Military leadership lessons and scientific decision-making frameworks",
      frequency: "Every Wednesday",
      color: "bg-blue-100 text-blue-800"
    },
    {
      name: "AI & Personal Growth",
      description: "Technology for peak performance and evidence-based self-improvement",
      frequency: "Every Friday",
      color: "bg-purple-100 text-purple-800"
    },
    {
      name: "Life Hacks",
      description: "Practical productivity tips and life optimization strategies",
      frequency: "Weekly Features",
      color: "bg-yellow-100 text-yellow-800"
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
                The Science of Success Newsletter
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Join 25,000+ High-Achievers
                <span className="block text-yellow-400">Mastering Peak Performance</span>
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
                Get weekly insights on neuroscientific wealth creation, evidence-based leadership, 
                and systematic peak performance from a practicing radiation oncology physicist and certified leadership coach.
              </p>
            </div>

            {/* Newsletter Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {newsletterStats.map((stat, index) => (
                <div key={index} className="text-center space-y-2">
                  <div className="bg-white/10 backdrop-blur-sm rounded-full p-4 w-16 h-16 mx-auto flex items-center justify-center">
                    <stat.icon className="h-8 w-8 text-yellow-400" />
                  </div>
                  <div>
                    <div className="font-bold text-2xl text-yellow-400">{stat.label}</div>
                    <div className="text-sm text-blue-200">{stat.description}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Subscription Form */}
            {!isSubscribed ? (
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto">
                <h3 className="text-2xl font-bold mb-6">Start Your Transformation Today</h3>
                <form onSubmit={handleSubscribe} className="space-y-4">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Input
                      type="email"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="flex-1 bg-white text-gray-900 border-0 h-12 text-lg"
                    />
                    <Button 
                      type="submit"
                      disabled={isLoading}
                      size="lg"
                      className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-3 rounded-full h-12"
                    >
                      {isLoading ? 'Subscribing...' : 'Get Free Access'}
                    </Button>
                  </div>
                  <p className="text-sm text-blue-200">
                    Free forever. Unsubscribe anytime. No spam, ever.
                  </p>
                </form>
              </div>
            ) : (
              <div className="bg-green-100 text-green-800 rounded-2xl p-8 max-w-2xl mx-auto">
                <div className="flex items-center justify-center space-x-3 mb-4">
                  <CheckCircle className="h-8 w-8" />
                  <h3 className="text-2xl font-bold">Welcome to The Science of Success!</h3>
                </div>
                <p className="text-lg">
                  Check your email for your welcome message and exclusive bonus guide: 
                  "The NeuroWealth Quick Start Guide"
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Content Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              What You'll Receive
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Systematic content delivery covering all aspects of scientific success. 
              Each category is designed to build upon the others for comprehensive transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contentCategories.map((category, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge className={category.color}>
                      {category.name}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg">{category.name}</CardTitle>
                  <CardDescription className="text-sm text-gray-600">
                    {category.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-sm font-medium text-blue-600">
                    {category.frequency}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Subscriber Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Subscriber Benefits
            </h2>
            <p className="text-lg text-gray-600">
              More than just a newsletter—it's your gateway to scientific success mastery
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {subscriberBenefits.map((benefit, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto flex items-center justify-center">
                  <benefit.icon className="h-8 w-8 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Issues */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Recent Issues
            </h2>
            <p className="text-lg text-gray-600">
              Get a preview of the high-value content delivered to subscribers
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {recentIssues.map((issue) => (
              <Card key={issue.id} className={`border-0 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 ${issue.featured ? 'ring-2 ring-yellow-400' : ''}`}>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge className="bg-blue-100 text-blue-800">
                      {issue.category}
                    </Badge>
                    {issue.featured && (
                      <Badge className="bg-yellow-500 text-black">Featured</Badge>
                    )}
                  </div>
                  <CardTitle className="text-xl leading-tight">{issue.title}</CardTitle>
                  <CardDescription className="text-gray-600">
                    {issue.date} • {issue.readTime}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600 leading-relaxed">{issue.excerpt}</p>
                  <Button variant="ghost" className="text-blue-600 hover:text-blue-700 p-0">
                    <span>Read Full Issue</span>
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Email Platform Integration */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-gray-900">
              Professional Email Experience
            </h2>
            <p className="text-lg text-gray-600">
              Delivered through premium email marketing platform with advanced features and analytics
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-blue-600 text-2xl font-bold mb-2">Mobile Optimized</div>
              <div className="text-gray-600 text-sm">
                Beautiful design that looks perfect on all devices and email clients
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-blue-600 text-2xl font-bold mb-2">Smart Segmentation</div>
              <div className="text-gray-600 text-sm">
                Personalized content based on your interests and engagement patterns
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-blue-600 text-2xl font-bold mb-2">Archive Access</div>
              <div className="text-gray-600 text-sm">
                Searchable archive of all past issues with easy navigation and filtering
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-purple-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to Transform Your Success?
            </h2>
            <p className="text-xl text-blue-100">
              Join thousands of high-achievers who rely on The Science of Success 
              for evidence-based strategies that actually work.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-yellow-400">Free</div>
                <div className="text-sm text-blue-200">Forever</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-yellow-400">Weekly</div>
                <div className="text-sm text-blue-200">Delivery</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-yellow-400">Instant</div>
                <div className="text-sm text-blue-200">Unsubscribe</div>
              </div>
            </div>

            {!isSubscribed && (
              <Button 
                size="lg"
                className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-12 py-4 rounded-full text-lg"
              >
                <Mail className="h-5 w-5 mr-2" />
                Join The Science of Success
              </Button>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}

export default NewsletterPage
