import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, BookOpen, Users, Mic, GraduationCap, Brain, Target, Award, TrendingUp } from 'lucide-react'

const HomePage = () => {
  const achievements = [
    { icon: BookOpen, label: "20+ Books Published", description: "Bestselling author across multiple genres" },
    { icon: Users, label: "25,000+ Newsletter Subscribers", description: "Weekly insights on peak performance" },
    { icon: Mic, label: "127 Podcast Episodes", description: "2.3M+ downloads across 89 countries" },
    { icon: GraduationCap, label: "PhD Medical Physics", description: "CAMPEP accredited expertise" }
  ]

  const expertiseAreas = [
    {
      icon: Brain,
      title: "Neuroscientific Wealth Creation",
      description: "Master the neural pathways to financial success through evidence-based brain science.",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: Target,
      title: "Peak Performance Optimization",
      description: "Scientific precision coaching from medical physics expertise applied to human potential.",
      color: "bg-green-100 text-green-600"
    },
    {
      icon: Award,
      title: "Leadership Excellence",
      description: "Military medical leadership principles for commanding results in high-stakes environments.",
      color: "bg-purple-100 text-purple-600"
    },
    {
      icon: TrendingUp,
      title: "Transformational Coaching",
      description: "John Maxwell certified methodologies combined with scientific rigor for breakthrough results.",
      color: "bg-yellow-100 text-yellow-600"
    }
  ]

  const featuredContent = [
    {
      type: "Latest Blog Post",
      title: "The Neural Architecture of Wealth: 5 Brain Hacks for Financial Success",
      excerpt: "Discover the hidden neural patterns that determine your financial destiny. Learn evidence-based techniques to rewire your brain for wealth creation.",
      readTime: "8 min read",
      category: "Wealth Hacks",
      link: "/blog/neural-architecture-wealth"
    },
    {
      type: "Featured Course",
      title: "NeuroWealth Mastery Program",
      excerpt: "8-week intensive program combining neuroscience and wealth creation. Transform your financial future through brain-based strategies.",
      price: "$497",
      category: "Premium Course",
      link: "/courses/neurowealth-mastery"
    },
    {
      type: "Latest Podcast",
      title: "Leadership in High-Stakes Environments: Military Medical Insights",
      excerpt: "Critical leadership lessons learned from commanding radiation safety operations in military medical settings.",
      duration: "45:33",
      category: "Leadership",
      link: "/podcast/leadership-high-stakes"
    }
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-teal-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <Badge className="bg-yellow-500 text-black font-semibold px-4 py-2 text-sm">
                Leading Authority in Neuroscientific Wealth Creation
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Master Your Peak Performance
                <span className="block text-yellow-400">Through Science</span>
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
                Radiation Oncology Physicist, U.S. Army Medical Officer, and Certified Leadership Coach 
                transforming high-achievers through precision-engineered methodologies and evidence-based breakthroughs.
              </p>
            </div>

            {/* Achievement Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {achievements.map((achievement, index) => (
                <div key={index} className="text-center space-y-2">
                  <div className="bg-white/10 backdrop-blur-sm rounded-full p-4 w-16 h-16 mx-auto flex items-center justify-center">
                    <achievement.icon className="h-8 w-8 text-yellow-400" />
                  </div>
                  <div>
                    <div className="font-bold text-lg">{achievement.label}</div>
                    <div className="text-sm text-blue-200">{achievement.description}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild
                size="lg"
                className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-4 rounded-full shadow-lg transition-all hover:shadow-xl hover:-translate-y-1"
              >
                <Link to="/coaching">Command Your Success</Link>
              </Button>
              <Button 
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-blue-900 font-semibold px-8 py-4 rounded-full transition-all"
              >
                <Link to="/newsletter">Access Elite Insights</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Areas */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Expertise That Commands Results
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Unique fusion of medical precision, military leadership, and scientific methodology 
              delivering unprecedented results for high-achievers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {expertiseAreas.map((area, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all hover:-translate-y-2">
                <CardHeader className="text-center space-y-4">
                  <div className={`w-16 h-16 rounded-full ${area.color} mx-auto flex items-center justify-center`}>
                    <area.icon className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-xl">{area.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-gray-600 leading-relaxed">
                    {area.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Latest Insights & Resources
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay ahead with cutting-edge content on neuroscience, wealth creation, and peak performance.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredContent.map((content, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all hover:-translate-y-2">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary" className="text-xs">
                      {content.type}
                    </Badge>
                    <Badge className="bg-blue-100 text-blue-600 text-xs">
                      {content.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl leading-tight">{content.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {content.excerpt}
                  </CardDescription>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">
                      {content.readTime || content.price || content.duration}
                    </span>
                    <Button asChild variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700">
                      <Link to={content.link} className="flex items-center space-x-1">
                        <span>Read More</span>
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-purple-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">
              Join 25,000+ High-Achievers
            </h2>
            <p className="text-xl text-blue-100">
              Get weekly insights on neuroscience, wealth creation, and peak performance 
              from a practicing physicist and certified leadership coach.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-yellow-400">4.9/5</div>
                <div className="text-sm text-blue-200">Average Rating</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-yellow-400">89%</div>
                <div className="text-sm text-blue-200">Open Rate</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-yellow-400">127</div>
                <div className="text-sm text-blue-200">Issues Published</div>
              </div>
            </div>

            <Button 
              asChild
              size="lg"
              className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-8 py-4 rounded-full shadow-lg transition-all hover:shadow-xl"
            >
              <Link to="/newsletter">Start Your Transformation Today</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage
