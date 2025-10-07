import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import { Award, BookOpen, Users, Target, Microscope, Shield, GraduationCap, Briefcase } from 'lucide-react'

const AboutPage = () => {
  const credentials = [
    {
      icon: Microscope,
      title: "Radiation Oncology Physicist",
      organization: "U.S. Army Medical Command",
      description: "Currently practicing medicine as an Onco-Physicist and Medical Officer at the forefront of cancer treatment. Consulting Radiation Oncology Physicist with mastery in advanced modalities including IMRT, SBRT, SRS, VMAT, and brachytherapy.",
      period: "2018 - Present"
    },
    {
      icon: Shield,
      title: "Chief Radiation Safety Officer",
      organization: "U.S. Army Medical Nuclear Science",
      description: "Commanding radiation protection protocols, conducting radiological defense operations, and leading nuclear elimination missions protecting national security.",
      period: "2019 - Present"
    },
    {
      icon: GraduationCap,
      title: "PhD Medical Physics",
      organization: "CAMPEP Accredited Program",
      description: "Advanced degrees and certificates in Radiation Oncology Medicine, Physics, Educational Administration, Computer Science, Applied Statistics from top universities.",
      period: "2015 - 2018"
    },
    {
      icon: Briefcase,
      title: "John Maxwell Certified Leadership Coach",
      organization: "Maxwell Leadership",
      description: "Certified in transformational leadership methodologies, combining scientific precision with proven leadership frameworks for breakthrough results.",
      period: "2020 - Present"
    }
  ]

  const achievements = [
    {
      icon: BookOpen,
      number: "20+",
      label: "Books Published",
      description: "Bestselling works spanning neuroscientific wealth creation, peak performance, leadership, and medical expertise"
    },
    {
      icon: Users,
      number: "25,000+",
      label: "Newsletter Subscribers",
      description: "High-achievers receiving weekly insights on science-based success strategies"
    },
    {
      icon: Target,
      number: "127",
      label: "Podcast Episodes",
      description: "2.3M+ downloads across 89 countries with 4.9/5 rating"
    },
    {
      icon: Award,
      number: "15+",
      label: "Years Experience",
      description: "Combining medical physics expertise with transformational coaching"
    }
  ]

  const expertiseAreas = [
    {
      title: "Neuroscientific Wealth Creation",
      description: "Applying brain science to financial success through evidence-based neural pathway optimization and cognitive bias neutralization.",
      applications: [
        "Neural mapping for wealth mindset",
        "Cognitive bias neutralization",
        "Investment psychology optimization",
        "Financial habit formation"
      ]
    },
    {
      title: "Peak Performance Physics",
      description: "Leveraging medical physics principles for human performance optimization in high-stakes environments.",
      applications: [
        "Precision performance protocols",
        "Stress optimization techniques",
        "Decision-making under pressure",
        "Energy management systems"
      ]
    },
    {
      title: "Military Medical Leadership",
      description: "Leadership principles from commanding life-and-death medical operations translated to business excellence.",
      applications: [
        "Crisis leadership frameworks",
        "Team performance optimization",
        "High-stakes decision making",
        "Systematic excellence protocols"
      ]
    },
    {
      title: "Scientific Methodology Application",
      description: "Applying rigorous scientific thinking to personal and professional transformation challenges.",
      applications: [
        "Evidence-based goal achievement",
        "Systematic problem solving",
        "Data-driven optimization",
        "Hypothesis-driven improvement"
      ]
    }
  ]

  return (
    <div className="pt-20 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-teal-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-yellow-500 text-black font-semibold px-4 py-2">
                  Radiation Oncology Physicist & Leadership Coach
                </Badge>
                <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                  Meet Kimal Honour Djam
                </h1>
                <p className="text-xl text-blue-100 leading-relaxed">
                  Transforming high-achievers through the unique intersection of cutting-edge medical physics, 
                  military leadership excellence, and evidence-based human potential optimization.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                {achievements.map((achievement, index) => (
                  <div key={index} className="text-center space-y-2">
                    <div className="bg-white/10 backdrop-blur-sm rounded-full p-3 w-12 h-12 mx-auto flex items-center justify-center">
                      <achievement.icon className="h-6 w-6 text-yellow-400" />
                    </div>
                    <div className="text-2xl font-bold text-yellow-400">{achievement.number}</div>
                    <div className="text-sm font-medium">{achievement.label}</div>
                    <div className="text-xs text-blue-200 leading-tight">{achievement.description}</div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  asChild
                  size="lg"
                  className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-4 rounded-full"
                >
                  <Link to="/coaching">Work With Me</Link>
                </Button>
                <Button 
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-blue-900 font-semibold px-8 py-4 rounded-full"
                >
                  <Link to="/books">Explore My Books</Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="aspect-square bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center text-blue-900 font-bold text-lg">
                  Professional Portrait
                  <br />
                  <span className="text-sm">Kimal Honour Djam</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Background */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Professional Background
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A unique fusion of medical precision, military leadership, and scientific methodology 
              delivering unprecedented results for high-achievers.
            </p>
          </div>

          <div className="space-y-8">
            {credentials.map((credential, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all">
                <CardHeader>
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <credential.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-xl text-gray-900">{credential.title}</CardTitle>
                        <Badge variant="outline" className="text-blue-600 border-blue-600">
                          {credential.period}
                        </Badge>
                      </div>
                      <CardDescription className="text-blue-600 font-medium mt-1">
                        {credential.organization}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">{credential.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Core Philosophy */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              My Approach: Science Meets Success
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Where cutting-edge medical physics meets transformational human development. 
              Every methodology is grounded in scientific evidence and proven in high-stakes environments.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3">The Medical Physics Foundation</h3>
                <p className="text-gray-600 leading-relaxed">
                  As a practicing radiation oncology physicist, I work with invisible forces that can heal or harm. 
                  This environment demands absolute precision, systematic thinking, and the ability to make 
                  critical decisions with incomplete information—skills that translate directly to peak performance optimization.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Military Leadership Excellence</h3>
                <p className="text-gray-600 leading-relaxed">
                  My service as a U.S. Army Medical Nuclear Science Officer taught me that leadership in 
                  life-and-death situations requires frameworks that work under extreme pressure. 
                  These principles create unshakeable confidence in any business environment.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Evidence-Based Transformation</h3>
                <p className="text-gray-600 leading-relaxed">
                  Every strategy I teach is backed by scientific research and proven in real-world applications. 
                  No theory without practice, no claims without evidence—just systematic approaches 
                  that deliver measurable results.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-900 to-teal-700 text-white p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6">Core Principles</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <div className="bg-yellow-400 rounded-full p-1 mt-1">
                    <div className="w-2 h-2 bg-blue-900 rounded-full"></div>
                  </div>
                  <div>
                    <div className="font-semibold">Precision Over Perfection</div>
                    <div className="text-blue-100 text-sm">Systematic accuracy in execution and measurement</div>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="bg-yellow-400 rounded-full p-1 mt-1">
                    <div className="w-2 h-2 bg-blue-900 rounded-full"></div>
                  </div>
                  <div>
                    <div className="font-semibold">Evidence-Based Action</div>
                    <div className="text-blue-100 text-sm">Every strategy backed by scientific research</div>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="bg-yellow-400 rounded-full p-1 mt-1">
                    <div className="w-2 h-2 bg-blue-900 rounded-full"></div>
                  </div>
                  <div>
                    <div className="font-semibold">High-Stakes Readiness</div>
                    <div className="text-blue-100 text-sm">Preparation for peak performance under pressure</div>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="bg-yellow-400 rounded-full p-1 mt-1">
                    <div className="w-2 h-2 bg-blue-900 rounded-full"></div>
                  </div>
                  <div>
                    <div className="font-semibold">Systematic Excellence</div>
                    <div className="text-blue-100 text-sm">Frameworks that scale and compound over time</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Areas */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Areas of Expertise
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized knowledge domains where medical physics meets human potential optimization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {expertiseAreas.map((area, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all">
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900">{area.title}</CardTitle>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {area.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-900">Key Applications:</h4>
                    <ul className="space-y-1">
                      {area.applications.map((application, appIndex) => (
                        <li key={appIndex} className="flex items-center space-x-2 text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                          <span>{application}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Personal Mission */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-purple-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold">My Mission</h2>
          <div className="text-xl text-blue-100 leading-relaxed space-y-6">
            <p>
              To bridge the gap between cutting-edge science and practical human transformation. 
              Too many high-achievers struggle with outdated success strategies that ignore what 
              we now know about the brain, performance, and systematic excellence.
            </p>
            <p>
              My unique background—from directing advanced cancer treatments to commanding military 
              radiation safety operations—has shown me that the same principles that save lives 
              can transform careers, relationships, and financial futures.
            </p>
            <p className="text-yellow-400 font-semibold text-2xl">
              "Precision in science. Excellence in leadership. Transformation in life."
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild
              size="lg"
              className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-8 py-4 rounded-full"
            >
              <Link to="/coaching">Start Your Transformation</Link>
            </Button>
            <Button 
              asChild
              variant="outline"
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-900 font-semibold px-8 py-4 rounded-full"
            >
              <Link to="/newsletter">Join 25,000+ Subscribers</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage
