import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Star, Play, Users, Clock, Award, CheckCircle, ArrowRight, BookOpen, Calendar, DollarSign, Zap } from 'lucide-react'

const CourseDetailPage = () => {
  const { courseId } = useParams()
  const [enrolled, setEnrolled] = useState(false)

  // This would normally fetch course data based on courseId
  const courses = [
    {
      id: 1,
      title: "The Unbothered Code Mastermind",
      subtitle: "8-Week Implementation: From Book to Breakthrough",
      category: "Focus & Productivity",
      level: "All Levels",
      price: 497,
      originalPrice: 697,
      duration: "8 weeks",
      lessons: 16,
      students: 847,
      rating: 4.9,
      reviews: 156,
      bookBased: "Why Caring Less Makes You Unstoppable: The Unbothered Code",
      description: "Go beyond reading - start implementing. Transform the principles from 'The Unbothered Code' into your daily reality through structured implementation, live coaching, and mastermind community support.",
      longDescription: "What if the secret to extraordinary success isn't caring more—but caring less? You've read the book, now it's time to live the transformation. This isn't just another course—it's a complete implementation system that takes you from overwhelmed to unbothered through proven frameworks, live coaching, and a community of high-achievers who refuse to let distractions win.",
      outcomes: [
        "Build your personal Attentional Firewall system",
        "Master strategic detachment in high-pressure situations", 
        "Implement digital minimalism 2.0 protocols",
        "Develop unshakeable focus despite distractions",
        "Create your personalized Unbothered Operating System"
      ],
      modules: [
        {
          week: 1,
          title: "The Attention Crisis & Strategic Detachment Foundations",
          description: "Diagnose your attention leaks and build the foundation for strategic caring"
        },
        {
          week: 2,
          title: "Neuroscience of Strategic Detachment (Deep Dive)",
          description: "Understand the brain science behind why caring less makes you more effective"
        },
        {
          week: 3,
          title: "Building Your Personal Attentional Firewall",
          description: "Create systems that automatically block distractions before they reach you"
        },
        {
          week: 4,
          title: "Mastering Strategic Indifference",
          description: "Learn when and how to deploy strategic indifference for maximum impact"
        },
        {
          week: 5,
          title: "Digital Minimalism 2.0 Implementation",
          description: "Go beyond basic digital detox to create sustainable tech relationships"
        },
        {
          week: 6,
          title: "Environmental Design for Laser Focus",
          description: "Engineer your physical and digital environments for automatic focus"
        },
        {
          week: 7,
          title: "Psychology of Caring Less (Advanced Techniques)",
          description: "Master the psychological frameworks that billionaires use daily"
        },
        {
          week: 8,
          title: "The Unbothered System Integration & Mastery",
          description: "Integrate all elements into your personalized Unbothered Operating System"
        }
      ],
      bonuses: [
        {
          title: "Digital copy of 'The Unbothered Code' book",
          value: 30,
          description: "Complete digital access to the foundational book"
        },
        {
          title: "Unbothered Assessment Tool",
          value: 47,
          description: "Diagnostic tool to identify your specific attention leaks"
        },
        {
          title: "Digital Detox Blueprint",
          value: 27,
          description: "Step-by-step guide to optimizing your digital environment"
        },
        {
          title: "30-Day Focus Challenge Guide",
          value: 37,
          description: "Daily challenges to build unshakeable focus habits"
        },
        {
          title: "Private mastermind community access",
          value: 97,
          description: "Lifetime access to exclusive community of Unbothered practitioners"
        }
      ],
      testimonials: [
        {
          name: "Sarah Chen",
          title: "CEO, TechStart Inc.",
          content: "This mastermind completely transformed how I approach my daily priorities. I went from feeling overwhelmed to having laser focus on what truly matters. Revenue increased 40% in 6 months.",
          rating: 5
        },
        {
          name: "Marcus Rodriguez", 
          title: "Investment Banker",
          content: "The 'Attentional Firewall' concept alone was worth 10x the price. I now make better decisions under pressure and my stress levels have plummeted.",
          rating: 5
        },
        {
          name: "Dr. Jennifer Walsh",
          title: "Neurosurgeon",
          content: "As someone who needs absolute focus in life-and-death situations, these techniques have been invaluable. The science is solid and the applications are practical.",
          rating: 5
        }
      ],
      featured: true,
      bestseller: true,
      nextCohort: "January 15, 2025",
      spotsRemaining: 12
    }
    // Add other courses here...
  ]

  const course = courses.find(c => c.id === parseInt(courseId)) || courses[0]

  const handleEnroll = () => {
    setEnrolled(true)
    // This would integrate with chosen LMS platform
    console.log('Enrolling in mastermind:', course.title)
  }

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star 
        key={i} 
        className={`h-4 w-4 ${i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
      />
    ))
  }

  const totalBonusValue = course.bonuses.reduce((sum, bonus) => sum + bonus.value, 0)

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-blue-600">Home</Link>
            <span>/</span>
            <Link to="/courses" className="hover:text-blue-600">Courses</Link>
            <span>/</span>
            <span className="text-gray-900">{course.title}</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Hero Section */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                {course.bestseller && (
                  <Badge className="bg-red-600 text-white">Bestseller</Badge>
                )}
                {course.featured && (
                  <Badge className="bg-yellow-500 text-black">Featured</Badge>
                )}
                <Badge variant="outline" className="text-blue-600 border-blue-600">
                  {course.category}
                </Badge>
              </div>

              <div className="aspect-video bg-gradient-to-br from-blue-900 to-teal-700 rounded-lg flex items-center justify-center text-white text-center p-8 relative">
                <div>
                  <div className="font-bold text-3xl leading-tight mb-4">{course.title}</div>
                  <div className="text-lg opacity-90">{course.subtitle}</div>
                  <div className="mt-6 flex items-center justify-center space-x-2 text-sm">
                    <BookOpen className="h-4 w-4" />
                    <span>Based on: {course.bookBased}</span>
                  </div>
                </div>
                <div className="absolute top-6 right-6 bg-white/20 backdrop-blur-sm rounded-full p-3">
                  <Play className="h-8 w-8" />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1">
                    {renderStars(course.rating)}
                  </div>
                  <span className="text-lg font-semibold">{course.rating}</span>
                  <span className="text-gray-600">({course.reviews} reviews)</span>
                </div>
                <div className="flex items-center space-x-4 text-gray-600">
                  <div className="flex items-center space-x-1">
                    <Users className="h-4 w-4" />
                    <span>{course.students} students</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{course.duration}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* About This Mastermind */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">About This Mastermind</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700 leading-relaxed text-lg">
                  {course.longDescription}
                </p>
                
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">Author's Note</h4>
                  <p className="text-blue-800 italic">
                    "Reading my book gives you the knowledge. Joining this mastermind gives you the transformation. 
                    The combination of proven frameworks, live coaching, and peer accountability creates results that reading alone cannot achieve."
                  </p>
                  <p className="text-blue-700 text-sm mt-2">— Kimal Honour Djam</p>
                </div>
              </CardContent>
            </Card>

            {/* What You'll Master */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">What You'll Master</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {course.outcomes.map((outcome, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{outcome}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Weekly Curriculum */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">8-Week Implementation Journey</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {course.modules.map((module, index) => (
                    <div key={index} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                      <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold text-sm">
                        {module.week}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{module.title}</h4>
                        <p className="text-gray-600 text-sm mt-1">{module.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Student Success Stories */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Student Success Stories</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {course.testimonials.map((testimonial, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg border border-gray-200">
                      <div className="flex items-center space-x-1 mb-3">
                        {renderStars(testimonial.rating)}
                      </div>
                      <p className="text-gray-700 italic mb-4">"{testimonial.content}"</p>
                      <div>
                        <div className="font-semibold text-gray-900">{testimonial.name}</div>
                        <div className="text-sm text-gray-600">{testimonial.title}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Exclusive Bonus Materials */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl flex items-center space-x-2">
                  <span>Exclusive Bonus Materials</span>
                  <Badge className="bg-purple-600 text-white">
                    ${totalBonusValue} Value - Yours FREE!
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {course.bonuses.map((bonus, index) => (
                    <div key={index} className="flex items-start space-x-4 p-4 bg-purple-50 rounded-lg">
                      <div className="flex-shrink-0 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center">
                        <CheckCircle className="h-4 w-4" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h4 className="font-semibold text-gray-900">{bonus.title}</h4>
                          <Badge variant="outline" className="text-purple-600 border-purple-600">
                            ${bonus.value} Value
                          </Badge>
                        </div>
                        <p className="text-gray-600 text-sm mt-1">{bonus.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Enrollment Card */}
            <Card className="sticky top-24">
              <CardContent className="p-6 space-y-6">
                <div className="text-center">
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <span className="text-3xl font-bold text-gray-900">${course.price}</span>
                    {course.originalPrice > course.price && (
                      <span className="text-xl text-gray-500 line-through">${course.originalPrice}</span>
                    )}
                  </div>
                  {course.originalPrice > course.price && (
                    <Badge className="bg-green-100 text-green-800">
                      Save ${course.originalPrice - course.price}
                    </Badge>
                  )}
                </div>

                <div className="space-y-3 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Next Cohort Starts:</span>
                    <span className="font-semibold text-blue-600">{course.nextCohort}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Spots Remaining:</span>
                    <span className="font-semibold text-red-600">{course.spotsRemaining} left</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Duration:</span>
                    <span className="font-semibold">{course.duration}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Level:</span>
                    <span className="font-semibold">{course.level}</span>
                  </div>
                </div>

                <Button 
                  onClick={handleEnroll}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3"
                  disabled={enrolled}
                >
                  {enrolled ? (
                    <>
                      <CheckCircle className="h-5 w-5 mr-2" />
                      Enrolled!
                    </>
                  ) : (
                    <>
                      <Zap className="h-5 w-5 mr-2" />
                      Enroll Now - ${course.price}
                    </>
                  )}
                </Button>

                <div className="text-center text-xs text-gray-500">
                  30-day money-back guarantee. If this mastermind doesn't help you implement the Unbothered Code principles, get a full refund.
                </div>

                <div className="border-t pt-4">
                  <h4 className="font-semibold mb-2">What's Included:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-3 w-3 text-green-600" />
                      <span>8 weekly implementation modules</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-3 w-3 text-green-600" />
                      <span>Live weekly group coaching calls</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-3 w-3 text-green-600" />
                      <span>Private mastermind community</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-3 w-3 text-green-600" />
                      <span>Direct access to Kimal</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-3 w-3 text-green-600" />
                      <span>Lifetime access to materials</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* FAQ */}
            <Card>
              <CardHeader>
                <CardTitle>Frequently Asked Questions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm">
                <div>
                  <h4 className="font-semibold mb-1">Do I need to read the book first?</h4>
                  <p className="text-gray-600">The book is included with your enrollment, but reading it beforehand will enhance your experience.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">What if I can't attend the live calls?</h4>
                  <p className="text-gray-600">All calls are recorded and available within 24 hours. You'll never miss the content.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Is there a payment plan?</h4>
                  <p className="text-gray-600">Yes, we offer a 3-month payment plan at $199/month for qualified applicants.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">What's your refund policy?</h4>
                  <p className="text-gray-600">Full 30-day money-back guarantee if you're not completely satisfied.</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CourseDetailPage
