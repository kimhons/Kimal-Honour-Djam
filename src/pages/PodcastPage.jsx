import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Play, Pause, Download, Share2, Search, Calendar, Clock, Users, Star, Mic, Headphones, Globe } from 'lucide-react'

const PodcastPage = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [currentlyPlaying, setCurrentlyPlaying] = useState(null)

  const podcastStats = [
    { icon: Headphones, label: "2.3M+", description: "Total Downloads" },
    { icon: Users, label: "127", description: "Episodes Published" },
    { icon: Globe, label: "89", description: "Countries Reached" },
    { icon: Star, label: "4.9/5", description: "Average Rating" }
  ]

  const categories = [
    'All',
    'Wealth Creation',
    'Leadership',
    'Neuroscience',
    'Peak Performance',
    'AI & Technology',
    'Personal Growth',
    'Interviews'
  ]

  const episodes = [
    {
      id: 1,
      title: "The Neural Architecture of Wealth: How Your Brain Creates Financial Reality",
      description: "Deep dive into the neuroscience of wealth creation. Discover the hidden neural patterns that determine financial success and learn evidence-based techniques to optimize your brain for wealth building.",
      category: "Wealth Creation",
      duration: "52:18",
      publishDate: "2024-09-15",
      downloads: 45200,
      rating: 4.9,
      featured: true,
      guestName: null,
      keyTopics: [
        "Prefrontal cortex optimization",
        "Dopamine pathway hacking",
        "Mirror neuron wealth modeling",
        "Neuroplasticity applications"
      ]
    },
    {
      id: 2,
      title: "Leadership in High-Stakes Environments with General Patricia Morrison",
      description: "Former Army General Patricia Morrison joins to discuss leadership principles from military medical environments. How life-and-death decision-making translates to business excellence.",
      category: "Leadership",
      duration: "48:33",
      publishDate: "2024-09-08",
      downloads: 38900,
      rating: 4.8,
      featured: true,
      guestName: "General Patricia Morrison",
      keyTopics: [
        "Crisis leadership frameworks",
        "Decision-making under pressure",
        "Team performance optimization",
        "Command presence development"
      ]
    },
    {
      id: 3,
      title: "AI Tools for Peak Performance: The Physicist's Productivity Revolution",
      description: "How artificial intelligence can amplify human potential. A medical physicist's perspective on leveraging AI for breakthrough productivity, decision-making, and performance optimization.",
      category: "AI & Technology",
      duration: "41:27",
      publishDate: "2024-09-01",
      downloads: 52100,
      rating: 4.9,
      featured: true,
      guestName: null,
      keyTopics: [
        "AI productivity stack building",
        "Human-AI collaboration",
        "Automated decision support",
        "Future of work optimization"
      ]
    },
    {
      id: 4,
      title: "The Science of Habit Formation with Dr. James Clear",
      description: "Bestselling author James Clear joins to explore the neuroscience of habit formation. Evidence-based strategies for creating lasting behavioral change and building success habits that stick.",
      category: "Personal Growth",
      duration: "56:12",
      publishDate: "2024-08-25",
      downloads: 67800,
      rating: 5.0,
      featured: false,
      guestName: "Dr. James Clear",
      keyTopics: [
        "Habit formation neuroscience",
        "Behavioral change strategies",
        "Success habit design",
        "Environmental optimization"
      ]
    },
    {
      id: 5,
      title: "Neuroplasticity and Peak Performance: Rewiring Your Brain for Success",
      description: "Explore how your brain's ability to rewire itself can be leveraged for peak performance. Scientific approaches to cognitive enhancement and mental optimization.",
      category: "Neuroscience",
      duration: "44:55",
      publishDate: "2024-08-18",
      downloads: 41300,
      rating: 4.8,
      featured: false,
      guestName: null,
      keyTopics: [
        "Brain plasticity principles",
        "Cognitive enhancement techniques",
        "Memory optimization",
        "Learning acceleration"
      ]
    },
    {
      id: 6,
      title: "Building Wealth Through Real Estate with Barbara Corcoran",
      description: "Shark Tank's Barbara Corcoran shares her journey from waitress to real estate mogul. Practical strategies for building wealth through property investment and entrepreneurship.",
      category: "Wealth Creation",
      duration: "49:18",
      publishDate: "2024-08-11",
      downloads: 58700,
      rating: 4.9,
      featured: false,
      guestName: "Barbara Corcoran",
      keyTopics: [
        "Real estate investment strategies",
        "Entrepreneurial mindset",
        "Risk management",
        "Market analysis techniques"
      ]
    },
    {
      id: 7,
      title: "The Physics of Leadership: Applying Scientific Principles to Team Dynamics",
      description: "How physics principles apply to leadership effectiveness. Understanding team dynamics through the lens of scientific methodology and evidence-based management.",
      category: "Leadership",
      duration: "38:42",
      publishDate: "2024-08-04",
      downloads: 35600,
      rating: 4.7,
      featured: false,
      guestName: null,
      keyTopics: [
        "Scientific leadership principles",
        "Team dynamics optimization",
        "Evidence-based management",
        "Performance measurement"
      ]
    },
    {
      id: 8,
      title: "Mastering Focus in the Digital Age with Cal Newport",
      description: "Author Cal Newport discusses deep work principles and focus mastery in our distracted world. Strategies for maintaining concentration and producing high-value work.",
      category: "Peak Performance",
      duration: "51:33",
      publishDate: "2024-07-28",
      downloads: 62400,
      rating: 4.9,
      featured: false,
      guestName: "Cal Newport",
      keyTopics: [
        "Deep work principles",
        "Attention management",
        "Digital minimalism",
        "Productivity optimization"
      ]
    }
  ]

  const filteredEpisodes = episodes.filter(episode => {
    const matchesSearch = episode.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         episode.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'All' || episode.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const featuredEpisodes = episodes.filter(episode => episode.featured)

  const togglePlay = (episodeId) => {
    setCurrentlyPlaying(currentlyPlaying === episodeId ? null : episodeId)
  }

  const formatDuration = (duration) => {
    return duration
  }

  const formatDownloads = (downloads) => {
    if (downloads >= 1000000) {
      return `${(downloads / 1000000).toFixed(1)}M`
    } else if (downloads >= 1000) {
      return `${(downloads / 1000).toFixed(1)}K`
    }
    return downloads.toString()
  }

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star 
        key={i} 
        className={`h-4 w-4 ${i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
      />
    ))
  }

  const EpisodeCard = ({ episode, featured = false }) => (
    <Card className={`border-0 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 ${featured ? 'ring-2 ring-yellow-400' : ''}`}>
      <CardHeader>
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center space-x-2">
            {featured && (
              <Badge className="bg-yellow-500 text-black">Featured</Badge>
            )}
            <Badge variant="outline" className="text-blue-600 border-blue-600">
              {episode.category}
            </Badge>
          </div>
          <div className="flex items-center space-x-1">
            {renderStars(episode.rating)}
          </div>
        </div>
        
        <div className="aspect-video bg-gradient-to-br from-blue-900 to-teal-700 rounded-lg flex items-center justify-center text-white text-center p-6 mb-4 relative">
          <div>
            <Mic className="h-12 w-12 mx-auto mb-3 opacity-80" />
            <div className="font-bold text-lg leading-tight">Episode #{episode.id}</div>
            <div className="text-sm opacity-90 mt-1">The Science of Success</div>
          </div>
          <Button
            onClick={() => togglePlay(episode.id)}
            className="absolute bottom-4 right-4 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white rounded-full p-3"
          >
            {currentlyPlaying === episode.id ? (
              <Pause className="h-6 w-6" />
            ) : (
              <Play className="h-6 w-6" />
            )}
          </Button>
        </div>

        <CardTitle className="text-xl leading-tight">{episode.title}</CardTitle>
        {episode.guestName && (
          <CardDescription className="text-blue-600 font-medium">
            Guest: {episode.guestName}
          </CardDescription>
        )}
      </CardHeader>
      
      <CardContent className="space-y-4">
        <p className="text-gray-600 leading-relaxed text-sm">{episode.description}</p>
        
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="flex items-center space-x-2">
            <Clock className="h-4 w-4 text-blue-600" />
            <span>{formatDuration(episode.duration)}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Download className="h-4 w-4 text-blue-600" />
            <span>{formatDownloads(episode.downloads)} downloads</span>
          </div>
          <div className="flex items-center space-x-2">
            <Calendar className="h-4 w-4 text-blue-600" />
            <span>{new Date(episode.publishDate).toLocaleDateString()}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Star className="h-4 w-4 text-yellow-400" />
            <span>{episode.rating}/5</span>
          </div>
        </div>

        <div className="space-y-2">
          <div className="text-sm font-medium text-gray-900">Key Topics:</div>
          <div className="flex flex-wrap gap-1">
            {episode.keyTopics.slice(0, 3).map((topic, index) => (
              <Badge key={index} variant="outline" className="text-xs">
                {topic}
              </Badge>
            ))}
          </div>
        </div>

        <div className="flex space-x-2 pt-4">
          <Button 
            onClick={() => togglePlay(episode.id)}
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white"
          >
            {currentlyPlaying === episode.id ? (
              <>
                <Pause className="h-4 w-4 mr-2" />
                Pause
              </>
            ) : (
              <>
                <Play className="h-4 w-4 mr-2" />
                Play
              </>
            )}
          </Button>
          <Button variant="outline" size="icon">
            <Download className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon">
            <Share2 className="h-4 w-4" />
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
              The Science of Success Podcast
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Evidence-based insights on neuroscientific wealth creation, peak performance, and transformational leadership. 
              Hosted by Kimal Honour Djam - practicing radiation oncology physicist and certified leadership coach.
            </p>
            
            {/* Podcast Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {podcastStats.map((stat, index) => (
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

            {/* Platform Links */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-2xl mx-auto">
              <h3 className="text-lg font-semibold mb-4">Listen On Your Favorite Platform</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Button variant="outline" className="bg-white/20 border-white/30 text-white hover:bg-white/30">
                  Apple Podcasts
                </Button>
                <Button variant="outline" className="bg-white/20 border-white/30 text-white hover:bg-white/30">
                  Spotify
                </Button>
                <Button variant="outline" className="bg-white/20 border-white/30 text-white hover:bg-white/30">
                  Google Podcasts
                </Button>
                <Button variant="outline" className="bg-white/20 border-white/30 text-white hover:bg-white/30">
                  YouTube
                </Button>
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
                placeholder="Search episodes..."
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

      {/* Featured Episodes */}
      {selectedCategory === 'All' && featuredEpisodes.length > 0 && (
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
              <Star className="h-6 w-6 mr-2 text-yellow-500" />
              Featured Episodes
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {featuredEpisodes.map((episode) => (
                <EpisodeCard key={episode.id} episode={episode} featured={true} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Episodes */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-900">
              {selectedCategory === 'All' ? 'All Episodes' : `${selectedCategory} Episodes`}
            </h2>
            <div className="text-sm text-gray-500">
              {filteredEpisodes.length} episode{filteredEpisodes.length !== 1 ? 's' : ''} found
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEpisodes.map((episode) => (
              <EpisodeCard key={episode.id} episode={episode} />
            ))}
          </div>

          {filteredEpisodes.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-500 text-lg">
                No episodes found matching your criteria.
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

      {/* Subscribe CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-purple-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">
              Never Miss an Episode
            </h2>
            <p className="text-xl text-blue-100">
              Subscribe to get notified when new episodes are released and access exclusive bonus content.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-yellow-400">Weekly</div>
                <div className="text-sm text-blue-200">New Episodes</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-yellow-400">Free</div>
                <div className="text-sm text-blue-200">Always</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-yellow-400">Bonus</div>
                <div className="text-sm text-blue-200">Content</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-8 py-4 rounded-full"
              >
                Subscribe on Apple Podcasts
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-900 font-semibold px-8 py-4 rounded-full"
              >
                Subscribe on Spotify
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default PodcastPage
