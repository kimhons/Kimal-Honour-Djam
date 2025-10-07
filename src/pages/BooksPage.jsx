import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Star, ShoppingCart, BookOpen, Download, Users, Award } from 'lucide-react'

const BooksPage = () => {
  const [cart, setCart] = useState([])

  const addToCart = (book) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === book.id)
      if (existing) {
        return prev.map(item => 
          item.id === book.id 
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }
      return [...prev, { ...book, quantity: 1 }]
    })
  }

  const books = [
    {
      id: 1,
      title: "Why Caring Less Makes You Unstoppable: The Unbothered Code",
      subtitle: "Strategic Detachment for Unprecedented Focus and Effectiveness",
      category: "Focus & Productivity",
      price: 29.99,
      originalPrice: 39.99,
      rating: 4.9,
      reviews: 247,
      description: "What if the secret to extraordinary success isn't caring more—but caring less? In a world drowning in distractions, the most successful people have discovered a counterintuitive truth: strategic detachment is your superpower. Stop being a victim of your own caring. Start being unstoppable.",
      features: [
        "Strategic Detachment Principles",
        "Attentional Firewall Protocols",
        "Digital Minimalism Framework",
        "Neurological Efficiency Optimization",
        "Environmental Isolation Techniques"
      ],
      format: ["Hardcover", "Paperback", "Kindle", "Audiobook"],
      pages: 312,
      publishDate: "2024",
      bestseller: true,
      featured: true
    },
    {
      id: 2,
      title: "Pain Alchemy: An Engineer's Mindset for Turning Life's Setbacks into Gold",
      subtitle: "Systematic Transformation Through Engineering Principles",
      category: "Personal Development",
      price: 27.99,
      originalPrice: 35.99,
      rating: 4.8,
      reviews: 189,
      description: "What if your biggest failures were actually your most valuable raw materials? Every setback contains the seeds of a comeback—but only if you know how to extract them. This isn't another 'think positive' book. This is a precise, methodical approach to engineering your comeback. Your setbacks aren't roadblocks—they're raw materials. Time to start mining.",
      features: [
        "Failure Analysis for Personal Growth",
        "Stress Testing Life Systems",
        "Personal Operating System Design",
        "Systematic Transformation Methodology",
        "Engineering Mindset for Life Challenges"
      ],
      format: ["Hardcover", "Paperback", "Kindle", "Audiobook"],
      pages: 284,
      publishDate: "2024",
      bestseller: true,
      featured: true
    },
    {
      id: 3,
      title: "The Wealth Paradox: 30 Spiritual Laws to Create Extraordinary Financial Abundance",
      subtitle: "Bridge Material Success with Spiritual Fulfillment",
      category: "Spiritual Wealth Creation",
      price: 32.99,
      originalPrice: 42.99,
      rating: 4.9,
      reviews: 156,
      description: "Why do some people effortlessly attract wealth while others struggle despite working harder? The answer lies in understanding the invisible spiritual laws that govern prosperity—laws that operate whether you believe in them or not. 150,000 words of transformational wisdom that will revolutionize your relationship with money forever.",
      features: [
        "30 Universal Spiritual Laws",
        "Ancient Wisdom Integration",
        "Modern Prosperity Principles",
        "Spiritual Integrity Framework",
        "Comprehensive Wealth System"
      ],
      format: ["Hardcover", "Paperback", "Kindle"],
      pages: 450,
      publishDate: "2025",
      bestseller: false,
      featured: true
    },
    {
      id: 4,
      title: "There Are Some Problems in Life You Can't Pray Your Way Out Of",
      subtitle: "Why Faith Must Be Matched With Wisdom, Work, and Resilience",
      category: "Faith & Practical Wisdom",
      price: 24.99,
      originalPrice: 29.99,
      rating: 4.7,
      reviews: 203,
      description: "Faith without action is powerless. Action without faith is empty. But faith PLUS strategic action? That's unstoppable. Some problems require more than prayer—they demand wisdom, work, and resilience. 130,000 words that will transform how you approach life's toughest battles.",
      features: [
        "Biblical Wisdom Integration",
        "Neuroscience Research Backing",
        "Business Case Studies",
        "Faith-Action Framework",
        "Scientific Validation Methods"
      ],
      format: ["Hardcover", "Paperback", "Kindle", "Audiobook"],
      pages: 380,
      publishDate: "2025",
      bestseller: false,
      featured: false
    },
    {
      id: 5,
      title: "Becoming Limitless",
      subtitle: "Unlocking Your Unlimited Potential Through Mind Mastery",
      category: "Mind Mastery & Consciousness",
      price: 26.99,
      originalPrice: 34.99,
      rating: 4.6,
      reviews: 134,
      description: "Your mind is the only prison you'll ever need to escape from. What if the limitations you think are real are actually just outdated programming? 19 transformational chapters that will rewire your brain for unlimited potential. Stop accepting limitations. Start becoming limitless.",
      features: [
        "19 Comprehensive Chapters",
        "Mind Mastery Techniques",
        "Neuroscience Applications",
        "Peak Performance Protocols",
        "Unlimited Potential Framework"
      ],
      format: ["Hardcover", "Paperback", "Kindle", "Audiobook"],
      pages: 320,
      publishDate: "2024",
      bestseller: false,
      featured: false
    },
    {
      id: 6,
      title: "NeuroWealth Mastery: The Science of Financial Success",
      subtitle: "Master the Neural Pathways to Wealth Creation",
      category: "Neuroscientific Wealth Creation",
      price: 28.99,
      originalPrice: 36.99,
      rating: 4.8,
      reviews: 178,
      description: "Paradigm-shifting financial methodology addressing the neurological architecture governing wealth creation. Master proprietary neural mapping and cognitive bias neutralization for exceptional investment returns through scientifically-proven techniques.",
      features: [
        "Neural Pathway Optimization",
        "Cognitive Bias Neutralization",
        "Investment Psychology Mastery",
        "Wealth Mindset Transformation",
        "Financial Neuroscience Applications"
      ],
      format: ["Hardcover", "Paperback", "Kindle", "Audiobook"],
      pages: 298,
      publishDate: "2024",
      bestseller: true,
      featured: false
    },
    {
      id: 7,
      title: "Leadership Through Science: Military Medical Principles for Business",
      subtitle: "Command Presence and Decision-Making Under Pressure",
      category: "Leadership Excellence",
      price: 25.99,
      originalPrice: 32.99,
      rating: 4.7,
      reviews: 165,
      description: "Leadership principles from military medical environments applied to business excellence. Command presence, decision-making under pressure, and systematic team optimization based on life-and-death decision-making frameworks.",
      features: [
        "Military Medical Leadership",
        "Command Presence Development",
        "Pressure Decision-Making",
        "Team Optimization Systems",
        "Crisis Leadership Frameworks"
      ],
      format: ["Hardcover", "Paperback", "Kindle"],
      pages: 267,
      publishDate: "2024",
      bestseller: false,
      featured: false
    },
    {
      id: 8,
      title: "Peak Performance Physics: Scientific Optimization of Human Potential",
      subtitle: "Apply Medical Physics Principles to Personal Excellence",
      category: "Peak Performance",
      price: 26.99,
      originalPrice: 34.99,
      rating: 4.9,
      reviews: 142,
      description: "Apply medical physics principles to human performance optimization. Systematic approaches to energy management, focus enhancement, and performance under pressure using scientific precision and evidence-based methodologies.",
      features: [
        "Medical Physics Applications",
        "Energy Management Protocols",
        "Focus Enhancement Systems",
        "Performance Under Pressure",
        "Scientific Optimization Methods"
      ],
      format: ["Hardcover", "Paperback", "Kindle", "Audiobook"],
      pages: 289,
      publishDate: "2024",
      bestseller: true,
      featured: false
    }
  ]

  const featuredBooks = books.filter(book => book.featured)
  const allBooks = books.filter(book => !book.featured)

  const totalCartItems = cart.reduce((sum, item) => sum + item.quantity, 0)
  const totalCartValue = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0)

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star 
        key={i} 
        className={`h-4 w-4 ${i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
      />
    ))
  }

  const BookCard = ({ book, featured = false }) => (
    <Card className={`border-0 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 ${featured ? 'ring-2 ring-yellow-400' : ''}`}>
      <CardHeader>
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center space-x-2">
            {book.bestseller && (
              <Badge className="bg-red-600 text-white">Bestseller</Badge>
            )}
            {featured && (
              <Badge className="bg-yellow-500 text-black">Featured</Badge>
            )}
          </div>
          <Badge variant="outline" className="text-blue-600 border-blue-600">
            {book.category}
          </Badge>
        </div>
        
        <div className="aspect-[3/4] bg-gradient-to-br from-blue-900 to-teal-700 rounded-lg flex items-center justify-center text-white text-center p-4 mb-4">
          <div>
            <div className="font-bold text-lg leading-tight">{book.title}</div>
            {book.subtitle && (
              <div className="text-sm opacity-90 mt-2">{book.subtitle}</div>
            )}
          </div>
        </div>

        <CardTitle className="text-xl leading-tight">{book.title}</CardTitle>
        {book.subtitle && (
          <CardDescription className="text-gray-600 font-medium">
            {book.subtitle}
          </CardDescription>
        )}
      </CardHeader>
      
      <CardContent className="space-y-4">
        <p className="text-gray-600 leading-relaxed text-sm">{book.description}</p>
        
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="flex items-center space-x-1">
                {renderStars(book.rating)}
              </div>
              <span className="text-sm text-gray-600">
                {book.rating} ({book.reviews} reviews)
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-gray-900">${book.price}</span>
              {book.originalPrice > book.price && (
                <span className="text-lg text-gray-500 line-through">${book.originalPrice}</span>
              )}
            </div>
            <div className="text-sm text-gray-600">
              {book.pages} pages • {book.publishDate}
            </div>
          </div>

          <div className="space-y-2">
            <div className="text-sm font-medium text-gray-900">Key Features:</div>
            <ul className="text-sm text-gray-600 space-y-1">
              {book.features.slice(0, 3).map((feature, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-2">
            <div className="text-sm font-medium text-gray-900">Available Formats:</div>
            <div className="flex flex-wrap gap-1">
              {book.format.map((format, index) => (
                <Badge key={index} variant="outline" className="text-xs">
                  {format}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        <div className="flex space-x-2 pt-4">
          <Button 
            onClick={() => addToCart(book)}
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white"
          >
            <ShoppingCart className="h-4 w-4 mr-2" />
            Add to Cart
          </Button>
          <Button 
            variant="outline" 
            className="flex-1"
            onClick={() => window.location.href = `/books/${book.id}`}
          >
            Learn More
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
              Transformational Books & Resources
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              20+ bestselling works commanding expertise in neuroscientific wealth creation, 
              peak performance mastery, and purposeful living through rigorous scientific thinking.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">20+</div>
                <div className="text-blue-200">Books Published</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">4.8★</div>
                <div className="text-blue-200">Average Rating</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">50K+</div>
                <div className="text-blue-200">Copies Sold</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">89</div>
                <div className="text-blue-200">Countries</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Shopping Cart Summary */}
      {totalCartItems > 0 && (
        <section className="bg-yellow-50 border-b border-yellow-200 py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <ShoppingCart className="h-5 w-5 text-yellow-600" />
                <span className="text-yellow-800 font-medium">
                  {totalCartItems} item{totalCartItems !== 1 ? 's' : ''} in cart
                </span>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-yellow-800 font-bold">
                  Total: ${totalCartValue.toFixed(2)}
                </span>
                <Button className="bg-yellow-600 hover:bg-yellow-700 text-white">
                  Checkout
                </Button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Featured Books */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 flex items-center justify-center">
              <Award className="h-8 w-8 mr-3 text-yellow-500" />
              Featured Bestsellers
            </h2>
            <p className="text-lg text-gray-600">
              Our most popular and transformational works
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredBooks.map((book) => (
              <BookCard key={book.id} book={book} featured={true} />
            ))}
          </div>
        </div>
      </section>

      {/* Complete Library */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 flex items-center justify-center">
              <BookOpen className="h-8 w-8 mr-3 text-blue-600" />
              Complete Authority Library
            </h2>
            <p className="text-lg text-gray-600">
              Comprehensive collection spanning all areas of expertise
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {allBooks.map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        </div>
      </section>

      {/* Bundle Offer */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-purple-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <div className="space-y-4">
            <Badge className="bg-yellow-500 text-black font-semibold px-4 py-2 text-lg">
              Limited Time Offer
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold">
              Complete Master Bundle
            </h2>
            <p className="text-xl text-blue-100">
              Get access to my complete authority library spanning neuroscientific wealth creation, 
              peak performance, relationship mastery, and medical expertise.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-yellow-400">20+ Books</div>
                <div className="text-sm text-blue-200">Complete Collection</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-yellow-400">$500+</div>
                <div className="text-sm text-blue-200">Individual Value</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-yellow-400">60% Off</div>
                <div className="text-sm text-blue-200">Bundle Savings</div>
              </div>
            </div>

            <div className="text-center space-y-4">
              <div className="space-y-2">
                <div className="text-lg text-gray-300 line-through">$500.00</div>
                <div className="text-4xl font-bold text-yellow-400">$199.99</div>
                <div className="text-sm text-blue-200">One-time payment • Instant access • All formats included</div>
              </div>
              
              <Button 
                size="lg"
                className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-12 py-4 rounded-full text-lg"
              >
                <Download className="h-5 w-5 mr-2" />
                Get Complete Bundle
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default BooksPage
