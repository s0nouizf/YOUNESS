"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Download,
  Code,
  GraduationCap,
  User,
  ChevronDown,
  Award,
  Target,
  TrendingUp,
  Star,
  Zap,
} from "lucide-react"
import Image from "next/image"

export default function Portfolio() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    setIsVisible(true)

    const handleScroll = () => {
      const sections = ["hero", "about", "skills", "experience", "awards", "projects", "languages", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const mainSkills = [
    { name: "Développement de nouvelles affaires", level: 95, icon: TrendingUp },
    { name: "Gestion de projet", level: 90, icon: Target },
    { name: "Lean Six Sigma", level: 85, icon: Zap },
    { name: "Value Engineering", level: 88, icon: Code },
  ]

  const technicalSkills = [
    "Data Analysis",
    "Power BI",
    "Amélioration Continue",
    "Stratégie Business",
    "Entrepreneuriat",
    "Personal Branding",
    "LinkedIn Optimization",
    "Project Management",
    "Process Optimization",
    "Cost Optimization",
    "CAPEX/OPEX",
    "Agile Framework",
  ]

  const experiences = [
    {
      title: "Business Strategy & Project Management Intern",
      company: "JESA S.A (JV OCP & WORLEY)",
      period: "Juin 2025 - Présent",
      location: "Casablanca",
      description:
        "Value Engineering & Cost Optimization (CAPEX/OPEX) pour projets d'ingénierie. Maximisation de la rentabilité, minimisation des délais et développement de la croissance africaine.",
      achievements: ["Optimisation des coûts CAPEX/OPEX", "Réduction des délais projet", "Croissance africaine"],
    },
    {
      title: "Project Manager",
      company: "JCI (Junior Chamber International) RABAT",
      period: "Janvier 2025 - Présent",
      location: "Rabat",
      description:
        "Gestion de projets entrepreneuriaux et initiatives de développement. 1ère place au Forum d'Entrepreneuriat Maroc-Tunisie.",
      achievements: ["1ère place Forum Maroc-Tunisie", "Gestion d'équipes", "Développement entrepreneurial"],
    },
    {
      title: "Data Analyst Intern & Assistant PMO",
      company: "Royal Air Maroc",
      period: "Août 2024 - Septembre 2024",
      location: "Casablanca",
      description:
        "Optimisation de la logistique d'export d'équipements réparables. Analyse data-driven des délais et modélisation de solutions de maintenance aéronautique.",
      achievements: ["Réduction théorique 30% des délais", "15+ KPIs analysés", "Modélisation Power BI"],
    },
    {
      title: "Public Relations Manager & Board Member",
      company: "MDS - Moroccan Data Scientists",
      period: "Mars 2024 - Mai 2025",
      location: "Maroc",
      description:
        "Gestion des relations publiques et partenariats. Développement d'initiatives éducatives en data science et IA pour la communauté tech marocaine.",
      achievements: ["Développement communauté tech", "Partenariats stratégiques", "Initiatives éducatives"],
    },
  ]

  const projects = [
    {
      title: "NEXTRAIL - Startup Transport",
      description:
        "Finaliste du MOROCCO HIGH SPEED TRAIN HACKATHON. Solution innovante pour l'optimisation du transport ferroviaire à grande vitesse.",
      technologies: ["Business Strategy", "Innovation", "Transport", "Lean Management"],
      status: "Finaliste",
      impact: "Solution transport ferroviaire",
      link: "#",
    },
    {
      title: "Greendizer - Entrepreneuriat Vert",
      description:
        "Finaliste du challenge Entrepreneurial Innovators. Projet axé sur l'entrepreneuriat durable et l'innovation verte.",
      technologies: ["Sustainability", "Green Tech", "Business Model", "Innovation"],
      status: "Finaliste",
      impact: "Innovation durable",
      link: "#",
    },
    {
      title: "Optimisation Logistique RAM",
      description:
        "Projet d'optimisation des délais d'export d'équipements réparables avec analyse de 15+ KPIs et réduction théorique de 30% des délais.",
      technologies: ["Data Analysis", "Power BI", "Lean Six Sigma", "Process Optimization"],
      status: "Réalisé",
      impact: "30% réduction délais",
      link: "#",
    },
  ]

  const awards = [
    {
      title: "1ère Place - Forum UPLift Entrepreneurs",
      description: "Compétition d'entrepreneuriat Maroc-Tunisie",
      year: "2025",
      icon: Award,
      color: "text-yellow-600",
    },
    {
      title: "Finaliste - MOROCCO HIGH SPEED TRAIN HACKATHON",
      description: "Startup NEXTRAIL - Innovation transport",
      year: "2025",
      icon: Star,
      color: "text-blue-600",
    },
    {
      title: "Finaliste - Entrepreneurial Innovators Challenge",
      description: "Équipe Greendizer - Innovation verte",
      year: "2025",
      icon: Target,
      color: "text-green-600",
    },
    {
      title: "Prix D'excellence CPGE",
      description: "Excellence académique en classes préparatoires",
      year: "2023",
      icon: GraduationCap,
      color: "text-purple-600",
    },
  ]

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-700">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-700">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="font-bold text-xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              YA
            </div>
            <div className="hidden md:flex space-x-8">
              {["About", "Skills", "Experience", "Projects", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-slate-600 hover:text-blue-600 transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center px-4 pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-pink-600/10"></div>
        <div
          className={`text-center transition-all duration-1000 relative z-10 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="mb-8">
            <div className="relative mb-8">
              <div className="w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden border-4 border-white shadow-2xl">
                <Image
                  src="/images/profile.jpg"
                  alt="Youness ABBOUBI"
                  width={160}
                  height={160}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full border-2 border-white animate-pulse"></div>
            </div>
            <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-slate-900 via-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
              Youness ABBOUBI
            </h1>
            <div className="space-y-2 mb-8">
              <p className="text-2xl md:text-3xl text-slate-700 dark:text-slate-300 font-medium">
                Business Strategy & Project Management
              </p>
              <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400">
                Ingénieur Industriel | Entrepreneur | SNEE 2025
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg"
              >
                <Mail className="mr-2 h-4 w-4" />
                Me Contacter
              </Button>
              <Button size="lg" variant="outline" className="border-2 hover:bg-slate-50 bg-transparent">
                <Download className="mr-2 h-4 w-4" />
                Télécharger CV
              </Button>
            </div>
            <div className="flex justify-center gap-6">
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-blue-100 hover:text-blue-600">
                <Linkedin className="h-6 w-6" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-slate-100">
                <Github className="h-6 w-6" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-red-100 hover:text-red-600">
                <Mail className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
          onClick={() => scrollToSection("about")}
        >
          <ChevronDown className="h-6 w-6" />
        </Button>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-slate-900 to-blue-600 bg-clip-text text-transparent mb-4">
              À Propos de Moi
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <Card className="p-8 shadow-xl border-0 bg-gradient-to-br from-white to-blue-50 dark:from-slate-800 dark:to-slate-700">
              <CardContent className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-100 rounded-full">
                    <User className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-4">Profil Professionnel</h3>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg">
                      Étudiant ingénieur industriel à l'EMI avec une expertise en Lean Management, Logistique et
                      Amélioration Continue. Passionné par la stratégie business, la gestion de projet et
                      l'entrepreneuriat.
                    </p>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg mt-4">
                      Je combine une approche analytique avec un mindset marketing et une compréhension approfondie des
                      enjeux humains. Spécialisé dans l'optimisation des profils LinkedIn et la création de CV
                      percutants.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <div className="space-y-6">
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="flex items-center gap-4">
                  <MapPin className="h-6 w-6 text-blue-600" />
                  <div>
                    <h4 className="font-semibold">Localisation</h4>
                    <p className="text-slate-600">Rabat-Salé-Kénitra, Maroc</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="flex items-center gap-4">
                  <GraduationCap className="h-6 w-6 text-purple-600" />
                  <div>
                    <h4 className="font-semibold">Formation</h4>
                    <p className="text-slate-600">École Mohammedia d'Ingénieurs (EMI)</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="flex items-center gap-4">
                  <Award className="h-6 w-6 text-yellow-600" />
                  <div>
                    <h4 className="font-semibold">Statut</h4>
                    <p className="text-slate-600">SNEE - Statut National Étudiant Entrepreneur 2025</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="py-20 px-4 bg-gradient-to-r from-white to-blue-50 dark:from-slate-800 dark:to-slate-700"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-slate-900 to-purple-600 bg-clip-text text-transparent mb-4">
              Compétences
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          </div>

          {/* Main Skills with Progress Bars */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-8 text-center">Compétences Principales</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {mainSkills.map((skill, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300">
                  <CardContent>
                    <div className="flex items-center gap-3 mb-4">
                      <skill.icon className="h-6 w-6 text-blue-600" />
                      <h4 className="font-semibold text-lg">{skill.name}</h4>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-3">
                      <div
                        className="bg-gradient-to-r from-blue-600 to-purple-600 h-3 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                    <p className="text-right text-sm text-slate-600 mt-2">{skill.level}%</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-center">Compétences Techniques</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {technicalSkills.map((skill, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="px-4 py-2 text-sm hover:bg-blue-100 hover:text-blue-800 transition-colors cursor-pointer"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-slate-900 to-blue-600 bg-clip-text text-transparent mb-4">
              Expérience Professionnelle
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          </div>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="p-8 hover:shadow-xl transition-all duration-300 border-l-4 border-blue-600">
                <CardHeader className="pb-6">
                  <div className="flex justify-between items-start flex-wrap gap-4">
                    <div>
                      <CardTitle className="text-2xl mb-2">{exp.title}</CardTitle>
                      <CardDescription className="text-xl font-medium text-blue-600 mb-1">
                        {exp.company}
                      </CardDescription>
                      <div className="flex items-center gap-2 text-slate-500">
                        <MapPin className="h-4 w-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                    <Badge variant="outline" className="text-lg px-4 py-2">
                      {exp.period}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 dark:text-slate-300 mb-4 text-lg leading-relaxed">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.achievements.map((achievement, i) => (
                      <Badge key={i} variant="secondary" className="bg-green-100 text-green-800">
                        {achievement}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section
        id="awards"
        className="py-20 px-4 bg-gradient-to-r from-yellow-50 via-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-700"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-slate-900 to-purple-600 bg-clip-text text-transparent mb-4">
              Prix & Distinctions
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {awards.map((award, index) => (
              <Card key={index} className="p-6 hover:shadow-xl transition-all duration-300 group">
                <CardContent className="flex items-start gap-4">
                  <div className={`p-3 rounded-full bg-opacity-20 ${award.color.replace("text-", "bg-")}`}>
                    <award.icon className={`h-8 w-8 ${award.color}`} />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-bold text-lg group-hover:text-blue-600 transition-colors">{award.title}</h3>
                      <Badge variant="outline">{award.year}</Badge>
                    </div>
                    <p className="text-slate-600 dark:text-slate-300">{award.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-slate-900 to-blue-600 bg-clip-text text-transparent mb-4">
              Projets Réalisés
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-300 overflow-hidden">
                <div className="h-2 bg-gradient-to-r from-blue-600 to-purple-600"></div>
                <CardHeader className="pb-4">
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </CardTitle>
                    <ExternalLink className="h-5 w-5 opacity-0 group-hover:opacity-100 transition-opacity text-blue-600" />
                  </div>
                  <div className="flex gap-2 mb-3">
                    <Badge variant="outline" className="text-xs">
                      {project.status}
                    </Badge>
                    <Badge variant="secondary" className="text-xs bg-green-100 text-green-800">
                      {project.impact}
                    </Badge>
                  </div>
                  <CardDescription className="text-base leading-relaxed">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs hover:bg-blue-50">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full group-hover:bg-blue-600 group-hover:text-white transition-colors bg-transparent"
                  >
                    Voir le Projet
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Languages Section */}
      <section
        id="languages"
        className="py-20 px-4 bg-gradient-to-r from-white to-purple-50 dark:from-slate-800 dark:to-slate-700"
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-slate-900 to-purple-600 bg-clip-text text-transparent mb-4">
              Langues
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Arabe", level: "Natif", color: "bg-green-100 text-green-800", flag: "🇲🇦" },
              { name: "Français", level: "Natif", color: "bg-green-100 text-green-800", flag: "🇫🇷" },
              { name: "Anglais", level: "Natif", color: "bg-green-100 text-green-800", flag: "🇺🇸" },
              { name: "Espagnol", level: "Élémentaire", color: "bg-blue-100 text-blue-800", flag: "🇪🇸" },
            ].map((lang, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent>
                  <div className="text-4xl mb-3">{lang.flag}</div>
                  <h3 className="font-semibold text-lg mb-2">{lang.name}</h3>
                  <Badge variant="secondary" className={lang.color}>
                    {lang.level}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-slate-900 to-blue-600 bg-clip-text text-transparent mb-4">
            Travaillons Ensemble
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-xl text-slate-600 dark:text-slate-300 mb-12 leading-relaxed">
            Vous avez un projet en tête ? Besoin d'optimiser votre profil LinkedIn ou votre CV ?<br />
            N'hésitez pas à me contacter pour en discuter !
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg"
            >
              <Mail className="mr-2 h-5 w-5" />
              Envoyer un Email
            </Button>
            <Button size="lg" variant="outline" className="border-2 hover:bg-blue-50 bg-transparent">
              <Linkedin className="mr-2 h-5 w-5" />
              LinkedIn
            </Button>
            <Button size="lg" variant="outline" className="border-2 hover:bg-slate-50 bg-transparent">
              <Phone className="mr-2 h-5 w-5" />
              Appeler
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
              Youness ABBOUBI
            </h3>
            <p className="text-slate-300">Business Strategy & Project Management | Ingénieur Industriel</p>
          </div>
          <Separator className="my-6 bg-slate-700" />
          <p className="text-slate-400">&copy; 2024 Youness ABBOUBI. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  )
}
