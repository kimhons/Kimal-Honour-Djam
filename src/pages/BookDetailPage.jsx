import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Star, ShoppingCart, BookOpen, Download, Users, Award, CheckCircle, ArrowLeft, Quote, Shield, Gift } from 'lucide-react'

const BookDetailPage = () => {
  const { id } = useParams()
  const [quantity, setQuantity] = useState(1)

  // This would normally come from a data store or API
  const books = {
    1: {
      id: 1,
      title: "Why Caring Less Makes You Unstoppable: The Unbothered Code",
      subtitle: "Strategic Detachment for Unprecedented Focus and Effectiveness",
      category: "Focus & Productivity",
      price: 29.99,
      originalPrice: 39.99,
      rating: 4.9,
      reviews: 247,
      pages: 312,
      publishDate: "2024",
      isbn: "978-0-123456-78-9",
      formats: ["Hardcover", "Paperback", "Kindle", "Audiobook"],
      description: "What if the secret to extraordinary success isn't caring more—but caring less? In a world drowning in distractions, notifications, and endless demands for your attention, the most successful people have discovered a counterintuitive truth: strategic detachment is your superpower.",
      extendedDescription: "While everyone else burns out trying to care about everything, you'll learn to care intensely about what matters and become completely unbothered by what doesn't. This isn't about apathy—it's about precision. It's about reclaiming your most valuable resource: your attention.",
      keyBenefits: [
        "The neuroscience behind why 'caring less' actually makes you more effective",
        "How to build an 'Attentional Firewall' that blocks distractions automatically",
        "The 3-step system for identifying what truly deserves your energy",
        "Why digital minimalism isn't enough (and what actually works)",
        "The psychology of strategic indifference that billionaires use daily"
      ],
      chapters: [
        "The Attention Crisis: Why Everyone is Overwhelmed",
        "The Neuroscience of Strategic Detachment",
        "Building Your Attentional Firewall",
        "The Art of Strategic Indifference",
        "Digital Minimalism 2.0: Beyond Basic Techniques",
        "Environmental Design for Focus",
        "The Psychology of Caring Less",
        "Implementing the Unbothered System",
        "Maintaining Long-term Focus",
        "Advanced Detachment Strategies"
      ],
      testimonials: [
        {
          name: "Sarah Chen",
          title: "CEO, TechStart Inc.",
          content: "This book completely transformed how I approach my daily priorities. I went from feeling overwhelmed to having laser focus on what truly matters. Revenue increased 40% in 6 months.",
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
      bonuses: [
        "The Unbothered Assessment Tool (Value: $47)",
        "Digital Detox Blueprint (Value: $27)",
        "30-Day Focus Challenge Guide (Value: $37)",
        "Private Reader Community Access (Value: $97)"
      ],
      authorNote: "After years of studying peak performers and working in high-pressure medical environments, I discovered that the most successful people aren't those who care about everything—they're those who care strategically about the right things.",
      guarantee: "30-day money-back guarantee. If this book doesn't help you reclaim your focus and reduce overwhelm, get a full refund."
    },
    2: {
      id: 2,
      title: "Pain Alchemy: An Engineer's Mindset for Turning Life's Setbacks into Gold",
      subtitle: "Systematic Transformation Through Engineering Principles",
      category: "Personal Development",
      price: 27.99,
      originalPrice: 35.99,
      rating: 4.8,
      reviews: 189,
      pages: 284,
      publishDate: "2024",
      isbn: "978-0-123456-79-6",
      formats: ["Hardcover", "Paperback", "Kindle", "Audiobook"],
      description: "What if your biggest failures were actually your most valuable raw materials? Every setback contains the seeds of a comeback—but only if you know how to extract them.",
      extendedDescription: "As a practicing physicist who's seen life-and-death decisions under pressure, I've discovered that the same engineering principles that solve complex problems can transform your personal challenges into systematic advantages. This isn't another 'think positive' book. This is a precise, methodical approach to engineering your comeback.",
      keyBenefits: [
        "Failure Analysis: How to dissect setbacks like an engineer to extract maximum learning",
        "Stress Testing: Building life systems that get stronger under pressure",
        "Personal Operating System Design: Creating frameworks that turn chaos into clarity",
        "The Resilience Protocol: Why some people bounce back faster (and how to join them)",
        "Systematic Transformation: The step-by-step process for converting pain into power"
      ],
      chapters: [
        "The Engineering Mindset for Life",
        "Failure Analysis: Learning from Setbacks",
        "Stress Testing Your Life Systems",
        "Root Cause Analysis for Personal Problems",
        "Building Resilient Personal Systems",
        "The Feedback Loop Optimization",
        "Quality Control for Life Decisions",
        "Continuous Improvement Protocols",
        "System Integration and Maintenance",
        "Advanced Transformation Techniques"
      ],
      testimonials: [
        {
          name: "David Kim",
          title: "Startup Founder",
          content: "After my company failed, this book helped me analyze what went wrong and build a better business. My second startup sold for $2.3M using these principles.",
          rating: 5
        },
        {
          name: "Lisa Thompson",
          title: "Project Manager",
          content: "The systematic approach to handling setbacks has been life-changing. I now see failures as data points rather than defeats.",
          rating: 5
        },
        {
          name: "Robert Chen",
          title: "Engineer",
          content: "Finally, someone who applies engineering rigor to personal development. These frameworks actually work because they're based on proven methodologies.",
          rating: 5
        }
      ],
      bonuses: [
        "Failure Analysis Worksheet Templates (Value: $67)",
        "Personal Systems Audit Checklist (Value: $47)",
        "Resilience Building Toolkit (Value: $87)",
        "Monthly Implementation Webinars (Value: $197)"
      ],
      authorNote: "Having worked in environments where system failures can be catastrophic, I've learned that the same principles that prevent disasters can transform personal setbacks into systematic advantages.",
      guarantee: "60-day transformation guarantee. If you don't see measurable improvement in how you handle challenges, get your money back."
    },
    3: {
      id: 3,
      title: "The Wealth Paradox: 30 Spiritual Laws to Create Extraordinary Financial Abundance",
      subtitle: "Bridge Material Success with Spiritual Fulfillment",
      category: "Spiritual Wealth Creation",
      price: 32.99,
      originalPrice: 42.99,
      rating: 4.9,
      reviews: 156,
      pages: 450,
      publishDate: "2025",
      isbn: "978-0-123456-80-2",
      formats: ["Hardcover", "Paperback", "Kindle"],
      description: "Why do some people effortlessly attract wealth while others struggle despite working harder? The answer lies in understanding the invisible spiritual laws that govern prosperity—laws that operate whether you believe in them or not.",
      extendedDescription: "After studying both ancient wisdom and modern neuroscience, I've identified 30 universal principles that separate the wealthy from the wanting. This comprehensive guide bridges the gap between material success and spiritual fulfillment, revealing how to create extraordinary financial abundance while staying true to your deepest values.",
      keyBenefits: [
        "Why 'The Invisible Creates the Visible' and how to harness this principle",
        "How wealth flows through problems (and why avoiding challenges keeps you broke)",
        "The spiritual technology behind compound growth and exponential returns",
        "Why money responds to specificity and how to communicate with abundance",
        "The inner abundance that creates outer prosperity"
      ],
      chapters: [
        "Law 1: The Invisible Creates the Visible",
        "Law 2: Wealth Flows Through Problems",
        "Law 3: Money Follows Mastery",
        "Law 4: Wealth Requires Worthy Vessels",
        "Law 5: Abundance Follows Authenticity",
        "Law 6: Money Responds to Specificity",
        "Law 7: Wealth Requires Both Roots and Wings",
        "Law 8: Prosperity Follows Principles",
        "Law 9: Money Flows Toward Emotional Intelligence",
        "Law 10: Wealth Follows Contribution",
        "...and 20 more transformational laws"
      ],
      testimonials: [
        {
          name: "Michael Stevens",
          title: "Real Estate Investor",
          content: "These spiritual laws completely shifted my relationship with money. My portfolio grew 300% in 18 months by applying these principles.",
          rating: 5
        },
        {
          name: "Amanda Foster",
          title: "Business Coach",
          content: "I've read every wealth book out there, but this one is different. It addresses the spiritual blocks that keep people stuck financially.",
          rating: 5
        },
        {
          name: "Dr. James Wilson",
          title: "Physician & Investor",
          content: "The integration of spiritual wisdom with practical wealth strategies is brilliant. This book changed how I think about money and success.",
          rating: 5
        }
      ],
      bonuses: [
        "The 30 Laws Quick Reference Guide (Value: $77)",
        "Wealth Consciousness Assessment (Value: $97)",
        "Abundance Meditation Series (Value: $127)",
        "Private Wealth Mastermind Access (Value: $297)"
      ],
      authorNote: "Through years of studying both ancient wisdom traditions and modern prosperity principles, I've discovered that true wealth creation requires alignment between spiritual values and practical action.",
      guarantee: "90-day abundance guarantee. If your relationship with money doesn't transform using these principles, get a full refund."
    }
  }

  const book = books[id]

  if (!book) {
    return (
      <div className="pt-20 min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Book Not Found</h1>
          <Link to="/books" className="text-blue-600 hover:text-blue-800">
            Return to Books
          </Link>
        </div>
      </div>
    )
  }

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star 
        key={i} 
        className={`h-5 w-5 ${i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
      />
    ))
  }

  const addToCart = () => {
    console.log(`Added ${quantity} copy(ies) of "${book.title}" to cart`)
    // This would integrate with your cart system
  }

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center space-x-2 text-sm">
            <Link to="/" className="text-gray-500 hover:text-gray-700">Home</Link>
            <span className="text-gray-400">/</span>
            <Link to="/books" className="text-gray-500 hover:text-gray-700">Books</Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900">{book.title}</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Book Cover and Details */}
          <div className="space-y-8">
            {/* Book Cover */}
            <div className="aspect-[3/4] bg-gradient-to-br from-blue-900 to-teal-700 rounded-lg flex items-center justify-center text-white text-center p-8 shadow-2xl">
              <div>
                <div className="font-bold text-2xl leading-tight mb-4">{book.title}</div>
                <div className="text-lg opacity-90">{book.subtitle}</div>
              </div>
            </div>

            {/* Book Details */}
            <Card>
              <CardHeader>
                <CardTitle>Book Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Pages:</span>
                  <span className="font-medium">{book.pages}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Published:</span>
                  <span className="font-medium">{book.publishDate}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">ISBN:</span>
                  <span className="font-medium">{book.isbn}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Category:</span>
                  <Badge variant="outline">{book.category}</Badge>
                </div>
                <div className="pt-2">
                  <span className="text-gray-600 block mb-2">Available Formats:</span>
                  <div className="flex flex-wrap gap-2">
                    {book.formats.map((format, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {format}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Book Information */}
          <div className="space-y-8">
            {/* Header */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Badge className="bg-red-600 text-white">Bestseller</Badge>
                <Badge variant="outline" className="text-blue-600 border-blue-600">
                  {book.category}
                </Badge>
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                {book.title}
              </h1>
              
              <p className="text-xl text-gray-600 font-medium">
                {book.subtitle}
              </p>

              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-1">
                  {renderStars(book.rating)}
                </div>
                <span className="text-lg font-medium">{book.rating}</span>
                <span className="text-gray-600">({book.reviews} reviews)</span>
              </div>
            </div>

            {/* Price and Purchase */}
            <Card className="border-2 border-blue-200 bg-blue-50">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <span className="text-3xl font-bold text-gray-900">${book.price}</span>
                    {book.originalPrice > book.price && (
                      <span className="text-xl text-gray-500 line-through">${book.originalPrice}</span>
                    )}
                  </div>
                  <Badge className="bg-green-100 text-green-800 text-lg px-3 py-1">
                    Save ${(book.originalPrice - book.price).toFixed(2)}
                  </Badge>
                </div>

                <div className="flex items-center space-x-4 mb-6">
                  <label className="text-sm font-medium text-gray-700">Quantity:</label>
                  <select 
                    value={quantity} 
                    onChange={(e) => setQuantity(parseInt(e.target.value))}
                    className="border border-gray-300 rounded-md px-3 py-1"
                  >
                    {[1,2,3,4,5].map(num => (
                      <option key={num} value={num}>{num}</option>
                    ))}
                  </select>
                </div>

                <div className="space-y-3">
                  <Button 
                    onClick={addToCart}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white text-lg py-3"
                  >
                    <ShoppingCart className="h-5 w-5 mr-2" />
                    Add to Cart - ${(book.price * quantity).toFixed(2)}
                  </Button>
                  
                  <Button variant="outline" className="w-full text-lg py-3">
                    <BookOpen className="h-5 w-5 mr-2" />
                    Preview Sample
                  </Button>
                </div>

                <div className="flex items-center justify-center mt-4 text-sm text-gray-600">
                  <Shield className="h-4 w-4 mr-1" />
                  {book.guarantee}
                </div>
              </CardContent>
            </Card>

            {/* Description */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">About This Book</h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                {book.description}
              </p>
              <p className="text-gray-700 leading-relaxed">
                {book.extendedDescription}
              </p>
            </div>

            {/* Author's Note */}
            <Card className="bg-yellow-50 border-yellow-200">
              <CardContent className="p-6">
                <div className="flex items-start space-x-3">
                  <Quote className="h-6 w-6 text-yellow-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Author's Note</h3>
                    <p className="text-gray-700 italic">"{book.authorNote}"</p>
                    <p className="text-right text-gray-600 mt-2">— Kimal Honour Djam</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* What You'll Discover */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">What You'll Discover</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {book.keyBenefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3 p-4 bg-white rounded-lg shadow-sm">
                <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                <p className="text-gray-700">{benefit}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Chapter Breakdown */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Chapter Breakdown</h2>
          <Card>
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {book.chapters.map((chapter, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 hover:bg-gray-50 rounded-lg">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                    <span className="text-gray-700">{chapter}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Testimonials */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">What Readers Are Saying</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {book.testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-1 mb-4">
                    {renderStars(testimonial.rating)}
                  </div>
                  <p className="text-gray-700 mb-4 italic">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.title}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Bonus Materials */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Exclusive Bonus Materials</h2>
          <Card className="bg-gradient-to-r from-purple-50 to-blue-50 border-purple-200">
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <Gift className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Get These Valuable Bonuses FREE</h3>
                <p className="text-gray-600">When you order today, you'll also receive:</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {book.bonuses.map((bonus, index) => (
                  <div key={index} className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm">
                    <Gift className="h-5 w-5 text-purple-600 flex-shrink-0" />
                    <span className="text-gray-700">{bonus}</span>
                  </div>
                ))}
              </div>
              <div className="text-center mt-6">
                <p className="text-lg font-semibold text-purple-600">
                  Total Bonus Value: ${book.bonuses.length * 67} - Yours FREE!
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Final CTA */}
        <section className="mt-16 text-center">
          <Card className="bg-blue-900 text-white border-0">
            <CardContent className="p-12">
              <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Life?</h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Join thousands of readers who have already discovered the power of these principles.
              </p>
              <Button 
                onClick={addToCart}
                className="bg-yellow-500 hover:bg-yellow-600 text-black text-xl px-8 py-4 font-bold"
              >
                Get Your Copy Now - ${book.price}
              </Button>
              <p className="text-sm text-blue-200 mt-4">
                <Shield className="h-4 w-4 inline mr-1" />
                {book.guarantee}
              </p>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  )
}

export default BookDetailPage
