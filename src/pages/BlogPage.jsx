import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Search, Calendar, Clock, ArrowRight, TrendingUp } from 'lucide-react'

const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')

  const categories = [
    'All',
    'Wealth Hacks',
    'Leadership Principles', 
    'AI & Technology',
    'Personal Growth',
    'Life Hacks',
    'Neuroscience',
    'Peak Performance'
  ]

  const blogPosts = [
    {
      id: 1,
      title: "The Neural Architecture of Wealth: 5 Brain Hacks for Financial Success",
      excerpt: "Discover the hidden neural patterns that determine your financial destiny. Learn evidence-based techniques to rewire your brain for wealth creation through scientifically-proven methodologies.",
      category: "Wealth Hacks",
      author: "Kimal Honour Djam",
      publishDate: "2024-09-16",
      readTime: "8 min read",
      slug: "neural-architecture-wealth",
      featured: true,
      views: 15420
    },
    {
      id: 2,
      title: "Leadership in High-Stakes Environments: Military Medical Insights",
      excerpt: "Critical leadership lessons learned from commanding radiation safety operations in military medical settings. How precision medicine principles apply to team leadership.",
      category: "Leadership Principles",
      author: "Kimal Honour Djam",
      publishDate: "2024-09-14",
      readTime: "6 min read",
      slug: "leadership-high-stakes-environments",
      featured: false,
      views: 12890
    },
    {
      id: 3,
      title: "AI Tools for Peak Performance: The Physicist's Guide to Productivity",
      excerpt: "How artificial intelligence can amplify human potential. A medical physicist's perspective on leveraging AI for breakthrough productivity and decision-making.",
      category: "AI & Technology",
      author: "Kimal Honour Djam",
      publishDate: "2024-09-12",
      readTime: "10 min read",
      slug: "ai-tools-peak-performance",
      featured: false,
      views: 18750
    },
    {
      id: 4,
      title: "The Science of Habit Formation: Rewiring Your Brain for Success",
      excerpt: "Evidence-based strategies for creating lasting behavioral change. How neuroscience reveals the optimal pathways for building success habits that stick.",
      category: "Personal Growth",
      author: "Kimal Honour Djam",
      publishDate: "2024-09-10",
      readTime: "7 min read",
      slug: "science-habit-formation",
      featured: false,
      views: 13670
    },
    {
      id: 5,
      title: "Morning Routines of High Performers: What Science Actually Says",
      excerpt: "Debunking morning routine myths with scientific evidence. What actually works for peak performance based on circadian rhythm research and cognitive science.",
      category: "Life Hacks",
      author: "Kimal Honour Djam",
      publishDate: "2024-09-08",
      readTime: "5 min read",
      slug: "morning-routines-science",
      featured: false,
      views: 22100
    },
    {
      id: 6,
      title: "Neuroplasticity and Wealth: How Your Brain Creates Financial Reality",
      excerpt: "The fascinating connection between brain plasticity and financial success. How to leverage neuroplasticity principles for wealth creation and money mindset transformation.",
      category: "Neuroscience",
      author: "Kimal Honour Djam",
      publishDate: "2024-09-06",
      readTime: "9 min read",
      slug: "neuroplasticity-wealth",
      featured: true,
      views: 16890
    },
    {
      id: 7,
      title: "Decision-Making Under Pressure: Lessons from Radiation Oncology",
      excerpt: "How life-and-death medical decisions translate to business and personal success. Critical thinking frameworks from high-stakes medical environments.",
      category: "Peak Performance",
      author: "Kimal Honour Djam",
      publishDate: "2024-09-04",
      readTime: "8 min read",
      slug: "decision-making-pressure",
      featured: false,
      views: 14320
    },
    {
      id: 8,
      title: "The Leadership Physics: Applying Scientific Principles to Team Dynamics",
      excerpt: "How physics principles apply to leadership effectiveness. Understanding team dynamics through the lens of scientific methodology and evidence-based management.",
      category: "Leadership Principles",
      author: "Kimal Honour Djam",
      publishDate: "2024-09-02",
      readTime: "6 min read",
      slug: "leadership-physics",
      featured: false,
      views: 11250
    },
    {
      id: 9,
      title: "Cognitive Biases in Wealth Building: The Neuroscience of Financial Mistakes",
      excerpt: "How cognitive biases sabotage financial success and evidence-based strategies to overcome them. A neuroscientist's guide to rational wealth building.",
      category: "Wealth Hacks",
      author: "Kimal Honour Djam",
      publishDate: "2024-08-31",
      readTime: "7 min read",
      slug: "cognitive-biases-wealth",
      featured: false,
      views: 19560
    }
  ]

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const featuredPosts = blogPosts.filter(post => post.featured)
  const regularPosts = filteredPosts.filter(post => !post.featured)

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  const formatViews = (views) => {
    if (views >= 1000) {
      return `${(views / 1000).toFixed(1)}k`
    }
    return views.toString()
  }

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold">
              The Science of Success Blog
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Evidence-based insights on wealth creation, leadership, AI, and peak performance. 
              New articles published every Monday, Wednesday, and Friday.
            </p>
            
            {/* Publishing Schedule */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 max-w-2xl mx-auto">
              <h3 className="text-lg font-semibold mb-4">Weekly Publishing Schedule</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="text-center">
                  <div className="font-semibold text-yellow-400">Monday</div>
                  <div className="text-blue-200">Wealth Hacks</div>
                </div>
                <div className="text-center">
                  <div className="font-semibold text-yellow-400">Wednesday</div>
                  <div className="text-blue-200">Leadership Principles</div>
                </div>
                <div className="text-center">
                  <div className="font-semibold text-yellow-400">Friday</div>
                  <div className="text-blue-200">AI & Personal Growth</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={selectedCategory === category ? "bg-blue-600 hover:bg-blue-700" : ""}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {selectedCategory === 'All' && featuredPosts.length > 0 && (
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
              <TrendingUp className="h-6 w-6 mr-2 text-blue-600" />
              Featured Articles
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <Card key={post.id} className="border-0 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge className="bg-yellow-100 text-yellow-800">Featured</Badge>
                      <Badge variant="outline" className="text-blue-600 border-blue-600">
                        {post.category}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl leading-tight hover:text-blue-600 transition-colors">
                      <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <CardDescription className="text-gray-600 leading-relaxed">
                      {post.excerpt}
                    </CardDescription>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>{formatDate(post.publishDate)}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="h-4 w-4" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      <div className="text-blue-600 font-medium">
                        {formatViews(post.views)} views
                      </div>
                    </div>
                    <Button asChild variant="ghost" className="text-blue-600 hover:text-blue-700 p-0">
                      <Link to={`/blog/${post.slug}`} className="flex items-center space-x-1">
                        <span>Read Full Article</span>
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Posts */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-900">
              {selectedCategory === 'All' ? 'Latest Articles' : `${selectedCategory} Articles`}
            </h2>
            <div className="text-sm text-gray-500">
              {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''} found
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <Card key={post.id} className="border-0 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="text-blue-600 border-blue-600">
                      {post.category}
                    </Badge>
                    <div className="text-xs text-gray-500">
                      {formatViews(post.views)} views
                    </div>
                  </div>
                  <CardTitle className="text-lg leading-tight hover:text-blue-600 transition-colors">
                    <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-gray-600 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </CardDescription>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{formatDate(post.publishDate)}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <Button asChild variant="ghost" className="text-blue-600 hover:text-blue-700 p-0">
                    <Link to={`/blog/${post.slug}`} className="flex items-center space-x-1">
                      <span>Read More</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-500 text-lg">
                No articles found matching your criteria.
              </div>
              <Button 
                onClick={() => {
                  setSearchTerm('')
                  setSelectedCategory('All')
                }}
                variant="outline"
                className="mt-4"
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-purple-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl font-bold">Never Miss an Article</h2>
          <p className="text-xl text-blue-100">
            Get notified when new articles are published and receive exclusive bonus content.
          </p>
          <Button 
            asChild
            size="lg"
            className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-8 py-4 rounded-full"
          >
            <Link to="/newsletter">Subscribe to Newsletter</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

export default BlogPage
