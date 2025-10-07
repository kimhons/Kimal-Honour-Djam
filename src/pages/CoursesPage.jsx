import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Star, Play, Users, Clock, Award, CheckCircle, ArrowRight, Zap } from 'lucide-react'

const CoursesPage = () => {
  const [enrolledCourses, setEnrolledCourses] = useState([])

  const enrollInCourse = (course) => {
    setEnrolledCourses(prev => [...prev, course.id])
    // This would integrate with chosen LMS platform
    console.log('Enrolling in course:', course.title)
  }

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
      outcomes: [
        "Build your personal Attentional Firewall system",
        "Master strategic detachment in high-pressure situations",
        "Implement digital minimalism 2.0 protocols",
        "Develop unshakeable focus despite distractions",
        "Create your personalized Unbothered Operating System"
      ],
      modules: [
        "The Attention Crisis & Strategic Detachment Foundations",
        "Neuroscience of Strategic Detachment (Deep Dive)",
        "Building Your Personal Attentional Firewall",
        "Mastering Strategic Indifference",
        "Digital Minimalism 2.0 Implementation",
        "Environmental Design for Laser Focus",
        "Psychology of Caring Less (Advanced Techniques)",
        "The Unbothered System Integration & Mastery"
      ],
      bonuses: [
        "Digital copy of 'The Unbothered Code' book",
        "Unbothered Assessment Tool ($47 value)",
        "Digital Detox Blueprint ($27 value)",
        "30-Day Focus Challenge Guide ($37 value)",
        "Private mastermind community access"
      ],
      featured: true,
      bestseller: true,
      nextCohort: "January 15, 2025"
    },
    {
      id: 2,
      title: "Pain Alchemy Mastermind",
      subtitle: "10-Week Transformation: Engineer Your Comeback",
      category: "Personal Development",
      level: "Intermediate",
      price: 697,
      originalPrice: 897,
      duration: "10 weeks",
      lessons: 20,
      students: 623,
      rating: 4.8,
      reviews: 134,
      bookBased: "Pain Alchemy: An Engineer's Mindset for Turning Life's Setbacks into Gold",
      description: "Transform setbacks into success systems using engineering principles. Move beyond reading about transformation to actually engineering your comeback through systematic implementation.",
      outcomes: [
        "Master failure analysis for personal growth acceleration",
        "Design resilient personal operating systems",
        "Implement stress testing protocols for life decisions",
        "Build continuous improvement frameworks",
        "Create systematic transformation methodologies"
      ],
      modules: [
        "The Engineering Mindset for Life Transformation",
        "Failure Analysis - Dissecting Your Setbacks",
        "Root Cause Analysis for Personal Problems",
        "Stress Testing Your Life Systems",
        "Building Resilient Personal Operating Systems",
        "Quality Control for Life Decisions",
        "Feedback Loop Optimization",
        "Continuous Improvement Protocols",
        "System Integration & Maintenance",
        "Advanced Transformation Engineering"
      ],
      bonuses: [
        "Digital copy of 'Pain Alchemy' book",
        "Failure Analysis Worksheet Templates",
        "Personal Systems Audit Toolkit",
        "Resilience Building Framework",
        "1-on-1 breakthrough session"
      ],
      featured: true,
      bestseller: false,
      nextCohort: "February 1, 2025"
    },
    {
      id: 3,
      title: "The Wealth Paradox Mastermind",
      subtitle: "12-Week Journey: Spiritual Laws to Financial Abundance",
      category: "Spiritual Wealth Creation",
      level: "Advanced",
      price: 997,
      originalPrice: 1297,
      duration: "12 weeks",
      lessons: 24,
      students: 412,
      rating: 4.9,
      reviews: 89,
      bookBased: "The Wealth Paradox: 30 Spiritual Laws to Create Extraordinary Financial Abundance",
      description: "Master the 30 spiritual laws that govern prosperity through deep implementation and community support. Transform your relationship with money and abundance forever.",
      outcomes: [
        "Master all 30 Universal Spiritual Laws of Wealth",
        "Integrate ancient wisdom with modern prosperity principles",
        "Develop aligned wealth creation strategies",
        "Build sustainable abundance mindset and practices",
        "Create personalized wealth consciousness blueprint"
      ],
      modules: [
        "Foundation - The Invisible Creates the Visible",
        "Wealth Flow Principles (Laws 2-8)",
        "Mastery & Authenticity Laws (Laws 9-15)",
        "Specificity & Emotional Intelligence (Laws 16-22)",
        "Contribution & Service Laws (Laws 23-28)",
        "Integration & Advanced Implementation (Laws 29-30)"
      ],
      bonuses: [
        "Physical + Digital copy of 'The Wealth Paradox' book",
        "30 Laws Quick Reference Guide",
        "Wealth Consciousness Assessment",
        "Abundance Meditation Series",
        "Personal wealth mentor session"
      ],
      featured: true,
      bestseller: true,
      nextCohort: "March 1, 2025"
    },
    {
      id: 4,
      title: "Becoming Limitless Mastermind",
      subtitle: "19-Week Journey: Unlock Your Unlimited Potential",
      category: "Mind Mastery & Consciousness",
      level: "Advanced",
      price: 1297,
      originalPrice: 1697,
      duration: "19 weeks",
      lessons: 38,
      students: 298,
      rating: 4.8,
      reviews: 67,
      bookBased: "Becoming Limitless: Unlocking Your Unlimited Potential Through Mind Mastery",
      description: "The ultimate transformation program based on 19 chapters of mind mastery. Move beyond limitations through systematic implementation of neuroscience-backed techniques.",
      outcomes: [
        "Rewire limiting beliefs at the neurological level",
        "Master advanced visualization and mental rehearsal",
        "Develop unshakeable confidence and self-assurance",
        "Engineer flow states and peak performance",
        "Build resilience fortress against any challenge"
      ],
      modules: [
        "Belief System Rewiring (Weeks 1-3)",
        "Focus Mastery in a Distracted World (Weeks 4-6)",
        "Growth Mindset & Challenge Transformation (Weeks 7-9)",
        "Advanced Visualization & Mental Rehearsal (Weeks 10-12)",
        "Confidence Code & Self-Assurance Building (Weeks 13-15)",
        "Flow State Engineering (Weeks 16-17)",
        "Resilience Fortress & Integration (Weeks 18-19)"
      ],
      bonuses: [
        "Premium hardcover 'Becoming Limitless' book",
        "Belief Assessment & Rewiring Tools",
        "Flow State Training Protocols",
        "Confidence Building Exercises",
        "Personal breakthrough intensive"
      ],
      featured: false,
      bestseller: false,
      nextCohort: "January 22, 2025"
    },
    {
      id: 5,
      title: "Faith + Action Mastermind",
      subtitle: "12-Week Program: Biblical Wisdom for Modern Challenges",
      category: "Faith & Practical Wisdom",
      level: "Intermediate",
      price: 797,
      originalPrice: 997,
      duration: "12 weeks",
      lessons: 24,
      students: 534,
      rating: 4.7,
      reviews: 112,
      bookBased: "There Are Some Problems in Life You Can't Pray Your Way Out Of",
      description: "Integrate faith with strategic action for breakthrough results. Move beyond prayer alone to prayer PLUS wisdom, work, and resilience for life's toughest challenges.",
      outcomes: [
        "Master faith-based strategic planning frameworks",
        "Integrate biblical wisdom with modern business principles",
        "Develop prayer + action implementation systems",
        "Build resilience through faith-centered approaches",
        "Create sustainable success through aligned action"
      ],
      modules: [
        "Faith + Strategic Action Foundation",
        "Biblical Wisdom for Modern Challenges",
        "Neuroscience of Prayer & Decision-Making",
        "Business Case Studies & Applications",
        "Strategic Planning with Faith Principles",
        "Integration & Long-term Implementation"
      ],
      bonuses: [
        "Signed copy of the book",
        "Biblical Strategic Planning Templates",
        "Prayer & Action Integration Guide",
        "Business case study library",
        "Personal faith-action plan session"
      ],
      featured: false,
      bestseller: true,
      nextCohort: "February 15, 2025"
    }
  ]

  const comingSoonCourses = [
    {
      title: "Medical Physics for Entrepreneurs",
      description: "Apply medical physics precision to business optimization",
      launchDate: "Q1 2025",
      category: "Business Physics"
    },
    {
      title: "Quantum Leadership Certification",
      description: "Advanced leadership certification program",
      launchDate: "Q2 2025",
      category: "Leadership Mastery"
    },
    {
      title: "The Wealth Creation Laboratory",
      description: "Hands-on wealth building implementation program",
      launchDate: "Q2 2025",
      category: "Wealth Creation"
    }
  ]

  const featuredCourses = courses.filter(course => course.featured)
  const regularCourses = courses.filter(course => !course.featured)

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star 
        key={i} 
        className={`h-4 w-4 ${i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
      />
    ))
  }

  const CourseCard = ({ course, featured = false }) => (
    <Card className={`border-0 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 ${featured ? 'ring-2 ring-yellow-400' : ''}`}>
      <CardHeader>
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center space-x-2">
            {course.bestseller && (
              <Badge className="bg-red-600 text-white">Bestseller</Badge>
            )}
            {featured && (
              <Badge className="bg-yellow-500 text-black">Featured</Badge>
            )}
          </div>
          <Badge variant="outline" className="text-blue-600 border-blue-600">
            {course.category}
          </Badge>
        </div>
        
        <div className="aspect-video bg-gradient-to-br from-blue-900 to-teal-700 rounded-lg flex items-center justify-center text-white text-center p-6 mb-4 relative">
          <div>
            <div className="font-bold text-xl leading-tight">{course.title}</div>
            <div className="text-sm opacity-90 mt-2">{course.subtitle}</div>
          </div>
          <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2">
            <Play className="h-6 w-6" />
          </div>
        </div>

        <CardTitle className="text-xl leading-tight">{course.title}</CardTitle>
        <CardDescription className="text-gray-600 font-medium">
          {course.subtitle}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <p className="text-gray-600 leading-relaxed text-sm">{course.description}</p>
        
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="flex items-center space-x-2">
            <Clock className="h-4 w-4 text-blue-600" />
            <span>{course.duration}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Play className="h-4 w-4 text-blue-600" />
            <span>{course.lessons} lessons</span>
          </div>
          <div className="flex items-center space-x-2">
            <Users className="h-4 w-4 text-blue-600" />
            <span>{course.students.toLocaleString()} students</span>
          </div>
          <div className="flex items-center space-x-2">
            <Award className="h-4 w-4 text-blue-600" />
            <span>{course.level}</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="flex items-center space-x-1">
              {renderStars(course.rating)}
            </div>
            <span className="text-sm text-gray-600">
              {course.rating} ({course.reviews} reviews)
            </span>
          </div>
        </div>

        <div className="space-y-3">
          <div className="text-sm font-medium text-gray-900">What You'll Master:</div>
          <ul className="text-sm text-gray-600 space-y-1">
            {course.outcomes.slice(0, 3).map((outcome, index) => (
              <li key={index} className="flex items-start space-x-2">
                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span>{outcome}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-2">
          <div className="text-sm font-medium text-gray-900">Bonus Includes:</div>
          <div className="flex flex-wrap gap-1">
            {course.bonuses.slice(0, 2).map((bonus, index) => (
              <Badge key={index} variant="outline" className="text-xs">
                {bonus}
              </Badge>
            ))}
          </div>
        </div>

        <div className="bg-blue-50 p-4 rounded-lg">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-600">Next Cohort Starts:</span>
            <span className="text-sm font-semibold text-blue-600">{course.nextCohort}</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-gray-900">${course.price}</span>
              {course.originalPrice > course.price && (
                <span className="text-lg text-gray-500 line-through">${course.originalPrice}</span>
              )}
            </div>
            <Badge className="bg-green-100 text-green-800">
              Save ${course.originalPrice - course.price}
            </Badge>
          </div>
        </div>

        <div className="flex space-x-2 pt-4">
          <Button 
            onClick={() => enrollInCourse(course)}
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white"
            disabled={enrolledCourses.includes(course.id)}
          >
            {enrolledCourses.includes(course.id) ? (
              <>
                <CheckCircle className="h-4 w-4 mr-2" />
                Enrolled
              </>
            ) : (
              <>
                <Zap className="h-4 w-4 mr-2" />
                Enroll Now
              </>
            )}
          </Button>
          <Button variant="outline" className="flex-1" asChild>
            <Link to={`/courses/${course.id}`}>
              Learn More
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  )

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold">
              From Books to Breakthrough: Mastermind Courses
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Turn knowledge into transformation through implementation + community. Each mastermind is based on my bestselling books 
              with direct author access, live coaching, and peer accountability that creates results reading alone cannot achieve.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">5,000+</div>
                <div className="text-blue-200">Students Enrolled</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">4.8★</div>
                <div className="text-blue-200">Average Rating</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">95%</div>
                <div className="text-blue-200">Completion Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">24/7</div>
                <div className="text-blue-200">Access</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LMS Platform Notice */}
      <section className="bg-yellow-50 border-b border-yellow-200 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-yellow-800">
              <strong>Platform Integration:</strong> Courses delivered through premium LMS with mobile apps, 
              progress tracking, and community features. Seamless learning experience across all devices.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 flex items-center justify-center">
              <Award className="h-8 w-8 mr-3 text-yellow-500" />
              Flagship Programs
            </h2>
            <p className="text-lg text-gray-600">
              Our most comprehensive and transformational learning experiences
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredCourses.map((course) => (
              <CourseCard key={course.id} course={course} featured={true} />
            ))}
          </div>
        </div>
      </section>

      {/* All Courses */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Complete Course Library
            </h2>
            <p className="text-lg text-gray-600">
              Specialized programs for every aspect of peak performance and success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {regularCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Coming Soon
            </h2>
            <p className="text-lg text-gray-600">
              Advanced programs currently in development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {comingSoonCourses.map((course, index) => (
              <Card key={index} className="border-2 border-dashed border-gray-300 bg-gray-50">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="text-gray-600 border-gray-400">
                      {course.category}
                    </Badge>
                    <Badge className="bg-blue-100 text-blue-800">
                      {course.launchDate}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl text-gray-900">{course.title}</CardTitle>
                  <CardDescription className="text-gray-600">
                    {course.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full">
                    Get Notified
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* LMS Integration Info */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-purple-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">
              Premium Learning Experience
            </h2>
            <p className="text-xl text-blue-100">
              All courses delivered through state-of-the-art learning management system 
              with mobile apps, progress tracking, and vibrant community features.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-yellow-400 text-2xl font-bold mb-2">Mobile Learning</div>
              <div className="text-blue-100 text-sm">
                iOS and Android apps for learning on-the-go with offline capability
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-yellow-400 text-2xl font-bold mb-2">Progress Tracking</div>
              <div className="text-blue-100 text-sm">
                Advanced analytics and personalized learning paths with achievement badges
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-yellow-400 text-2xl font-bold mb-2">Community Access</div>
              <div className="text-blue-100 text-sm">
                Private forums, peer groups, and direct access to instructors
              </div>
            </div>
          </div>

          <Button 
            size="lg"
            className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-8 py-4 rounded-full"
          >
            <ArrowRight className="h-5 w-5 mr-2" />
            Explore All Programs
          </Button>
        </div>
      </section>
    </div>
  )
}

export default CoursesPage
