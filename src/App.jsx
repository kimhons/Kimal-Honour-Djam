import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

// Import page components
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import BlogPage from './pages/BlogPage'
import BlogPost from './pages/BlogPost'
import BooksPage from './pages/BooksPage'
import BookDetailPage from './pages/BookDetailPage'
import CoursesPage from './pages/CoursesPage'
import CourseDetailPage from './pages/CourseDetailPage'
import CoachingPage from './pages/CoachingPage'
import PodcastPage from './pages/PodcastPage'
import NewsletterPage from './pages/NewsletterPage'
import ContactPage from './pages/ContactPage'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/books" element={<BooksPage />} />
            <Route path="/books/:id" element={<BookDetailPage />} />
            <Route path="/courses" element={<CoursesPage />} />
            <Route path="/courses/:courseId" element={<CourseDetailPage />} />
            <Route path="/coaching" element={<CoachingPage />} />
            <Route path="/podcast" element={<PodcastPage />} />
            <Route path="/newsletter" element={<NewsletterPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
