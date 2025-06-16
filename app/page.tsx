"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Download,
  Moon,
  Sun,
  Code,
  Database,
  Server,
  Smartphone,
  Globe,
  Home,
  ChevronDown,
  Star,
  Award,
  Briefcase,
  Users,
  Calendar,
  Trophy,
  Zap,
  Rocket,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { ContactForm } from "@/components/contact-form"

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.3], [1, 0.8])
  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 }
  const ySpring = useSpring(y, springConfig)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Download resume function
  const downloadResume = () => {
    const link = document.createElement("a")
    link.href = "/Syed_Parveez_Afham_Resume.pdf"
    link.download = "Syed_Parveez_Afham_Resume.pdf"
    link.target = "_blank"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [darkMode])

  const skills = {
    Frontend: ["React", "Next.js", "javascript", "TypeScript", "Tailwind CSS", "Vue.js", "Framer Motion"],
    Backend: ["Node.js", "Python", "Java", "REST APIs"],
    Database: ["MongoDB", "MySQL", "Supabase"],
    DevOps: ["Docker", "AWS", "Vercel", "GitHub Actions"],
    Tools: ["Git", "VS Code", "Figma", "Cursor"],
  }

  const projects = [
    {
      title: "Campushire",
      description: "Full-stack campus management platform with real-time features and AI-powered recommendations",
      tech: ["Next.js", "Node.js", "MongoDB", "Socket.io", "OpenAI"],
      github: "https://github.com/SyedparveezDev/Campus-Hire",
      demo: "https://campus-hire-syedparveezdev.vercel.app/",
      image: "/Campushire.png",
      features: ["Real-time messaging", "Event management", "AI recommendations", "User authentication"],
      status: "Live",
      users: "Final Year Project",
    },
    {
      title: "API-Development-and-Integration",
      description: "This website acts as a technical hub for showcasing modern API development practices.",
      tech: ["Next.js", "Tailwind CSS", "Node.js", "JWT", "Redis"],
      github: "https://github.com/SyedparveezDev/API-Development-and-Integration",
      demo: "https://v0-api-development-and-integration.vercel.app/",
      image: "/API-Development-and-Integration.png",
      features: ["Secure Authentication", "PostgreSQL Integration", "Redis Caching", "API Documentation"],
      status: "Live",
      users: "demo or prototype site",
    },
    {
      title: "IPO-WEB-APP",
      description: "IPO Web App is a comprehensive platform for managing Initial Public Offerings (IPOs) with real-time updates and analytics.",
      tech: ["Javascript", "Python", "MySQL", "Django", " Postman for API testing"],
      github: "https://github.com/SyedparveezDev/ipo-web-app",
      demo: "#",
      image: "/Ipo-web-app.png",
      features: ["Authentication System", "Watchlist & Alerts", "IPO Calendar with Filters", "Company Profiles & Analytics"],
      status: "Development",
      users: "200+ teams",
    },
  ]

  const experience = [
    {
      title: "Software Development Enginner (SDE) Intern",
      company: "Bluestock Fintech.",
      period: "Jun 2025 - Present",
      description:
        "Developed responsive web applications and collaborated with design teams to create exceptional user experiences",
      tech: ["React", "JavaScript", "SCSS", "Figma", "Git"],
      achievements: ["3+ successful projects", "98% client satisfaction", "Improved load times by 45%"],
    },
    {
      title: "Full-Stack Developer Intern",
      company: "Hostup Cloud Technologies PVT Ltd.",
      period: "Jan 2025 - Mar 2025",
      description:
        "Led development of scalable web applications, improved system performance by 30%, and mentored junior developers",
      tech: ["React", "Node.js", "Next.js", "MongoDB", "TypeScript"],
      achievements: ["30% performance improvement", "Led team of 5 developers", "Reduced deployment time by 40%"],
    },
    {
      title: "Web Developer Intern",
      company: "Unified Mentor PVT Ltd.",
      period: "May 2024 - June 2024",
      description:
        "Developed responsive web applications and collaborated with design teams to create exceptional user experiences",
      tech: ["React", "JavaScript", "SCSS", "Figma", "Git"],
      achievements: ["3+ successful projects", "98% client satisfaction", "Improved load times by 45%"],
    },
  ]

  const certifications = [
    { name: "Full-Stack Developer", issuer: "Hostup Cloud Technologies Private Limited ", year: "2025" },
    { name: "Fundamentals Of CSS", issuer: "Coding Ninjas", year: "2023" },
    { name: "Fundamentals of Html", issuer: "Coding Ninjas", year: "2023" },
    { name: " Data Analytics and Visualization Job Simulation", issuer: "Accenture", year: "2024" },
  ]

  const stats = [
    {
      icon: <Code className="h-8 w-8" />,
      number: "10+",
      label: "Projects Completed",
      description: "Successfully projects",
    },
    {
      icon: <Calendar className="h-8 w-8" />,
      number: "1+",
      label: "Years Experience",
      description: "Professional development",
    },
    {
      icon: <Users className="h-8 w-8" />,
      // number: "100%",
      // label: "Client Satisfaction",
      description: "Happy clients & reviews",
    },
    {
      icon: <Trophy className="h-8 w-8" />,
      // number: "15+",
      label: "Awards & Recognition",
      description: "Industry achievements",
    },
  ]

  return (
    <div className={`min-h-screen transition-all duration-500 ${darkMode ? "dark" : ""}`}>
      {/* Modern Animated Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        {/* Animated Gradient Background */}
        <motion.div
          style={{ y: ySpring }}
          className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900"
        />

        {/* Floating Geometric Shapes */}
        <div className="absolute inset-0">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              animate={{
                x: [0, 100, -50, 0],
                y: [0, -100, 50, 0],
                rotate: [0, 180, 360],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: Math.random() * 20 + 15,
                repeat: Number.POSITIVE_INFINITY,
                delay: Math.random() * 5,
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            >
              <div
                className={`w-4 h-4 ${i % 3 === 0 ? "bg-electric-500/20" : i % 3 === 1 ? "bg-emerald-500/20" : "bg-coral-500/20"} ${i % 2 === 0 ? "rounded-full" : "rounded-lg rotate-45"}`}
              />
            </motion.div>
          ))}
        </div>

        {/* Modern Mesh Gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(0,102,255,0.1),transparent_50%),radial-gradient(circle_at_80%_20%,rgba(16,185,129,0.1),transparent_50%),radial-gradient(circle_at_40%_40%,rgba(255,107,53,0.1),transparent_50%)]" />
      </div>

      {/* Modern Navigation */}
      <nav className="fixed top-0 w-full bg-black/10 backdrop-blur-xl z-50 border-b border-white/20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-xl font-bold text-white"
            >
              SYEDPARVEEZ.DEV
            </motion.div>

            <div className="hidden md:flex items-center space-x-8">
              <Link
                href="#home"
                className="flex items-center gap-2 text-white/80 hover:text-white transition-all duration-300 font-medium"
              >
                <Home className="h-4 w-4" />
                Home
              </Link>
              <Link href="#about" className="text-white/80 hover:text-white transition-all duration-300 font-medium">
                About
              </Link>
              <Link href="#projects" className="text-white/80 hover:text-white transition-all duration-300 font-medium">
                Projects
              </Link>
              <Link
                href="#experience"
                className="text-white/80 hover:text-white transition-all duration-300 font-medium"
              >
                Experience
              </Link>
              <Link href="#contact" className="text-white/80 hover:text-white transition-all duration-300 font-medium">
                Contact
              </Link>
            </div>

            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-white"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </Button>
            </div>

            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 hover:bg-white/10 rounded-full transition-all duration-300 text-white"
              >
                {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </Button>
              <Link href="#contact">
                <Button className="bg-emerald-500 hover:bg-emerald-600 text-white border-0 rounded-full px-6 shadow-lg hover:shadow-xl transition-all duration-300">
                  <Zap className="h-4 w-4 mr-2" />
                  Hire Me
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 glass-effect border-b border-slate-200/20 dark:border-slate-700/20 z-40">
          <div className="px-6 py-4 space-y-4">
            <Link
              href="#home"
              className="block text-slate-700 dark:text-slate-300 hover:text-electric-600 dark:hover:text-electric-400 font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="#about"
              className="block text-slate-700 dark:text-slate-300 hover:text-electric-600 dark:hover:text-electric-400 font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="#projects"
              className="block text-slate-700 dark:text-slate-300 hover:text-electric-600 dark:hover:text-electric-400 font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Projects
            </Link>
            <Link
              href="#experience"
              className="block text-slate-700 dark:text-slate-300 hover:text-electric-600 dark:hover:text-electric-400 font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Experience
            </Link>
            <Link
              href="#contact"
              className="block text-slate-700 dark:text-slate-300 hover:text-electric-600 dark:hover:text-electric-400 font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}

      {/* Modern Hero Section */}
      <section id="home" className="min-h-screen relative flex items-center justify-center overflow-hidden pt-16">
        {/* Vibrant Blue Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-electric-600 via-electric-500 to-electric-700">
          {/* Subtle overlay pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent_50%),radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.05),transparent_50%)]" />
        </div>

        {/* Main Content Container */}
        <div className="relative z-10 w-full h-full flex items-center justify-center">
          <div className="container mx-auto px-6 relative">
            {/* Large Typography Background */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="absolute inset-0 flex items-center justify-center pointer-events-none"
            >
              <div className="text-[8rem] sm:text-[12rem] md:text-[16rem] lg:text-[20rem] xl:text-[24rem] font-black text-white/10 dark:text-white/5 leading-none tracking-tighter select-none whitespace-nowrap">
                DEVELOPER
              </div>
            </motion.div>

            {/* Content Grid */}
            <div className="grid lg:grid-cols-12 gap-8 items-center min-h-[80vh] relative z-10">
              {/* Left Content */}
              <div className="lg:col-span-5 space-y-8">
                <motion.div
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, delay: 0.3 }}
                >
                  <div className="space-y-4">
                    <div className="text-white text-lg font-medium tracking-wider uppercase">Full-Stack Developer</div>
                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-tight">
                      SYED
                      <br />
                      PARVEEZ
                      <br />
                      <span className="text-emerald-300">AFHAM</span>
                    </h1>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, delay: 0.6 }}
                  className="space-y-6"
                >
                  <p className="text-xl text-white leading-relaxed max-w-lg">
                    Crafting exceptional digital experiences through innovative design and cutting-edge technology.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="#projects">
                      <Button
                        size="lg"
                        className="bg-white text-electric-600 hover:bg-white/90 font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
                      >
                        <Rocket className="h-5 w-5 mr-2" />
                        View Projects
                      </Button>
                    </Link>
                    <Button
                      variant="outline"
                      size="lg"
                      onClick={downloadResume}
                      className="border-2 border-white/50 text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm px-8 py-4 rounded-full transition-all duration-300 shadow-lg"
                    >
                      <Download className="h-5 w-5 mr-2" />
                      Resume
                    </Button>
                  </div>
                </motion.div>
              </div>

              {/* Center - Profile Image with Late-Modern Design */}
              <div className="lg:col-span-4 flex justify-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, y: 50 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 1.2, delay: 0.4 }}
                  className="relative"
                >
                  {/* Circular photo container with improved styling */}
                  <div className="relative w-[300px] h-[300px] sm:w-[320px] sm:h-[320px] lg:w-[360px] lg:h-[360px] overflow-hidden">
                    {/* Main photo */}
                    <div className="absolute inset-0 rounded-full overflow-hidden">
                      <Image
                        src="/profile-photo.jpeg"
                        alt="Syed Parveez Afham"
                        fill
                        className="object-cover scale-110"
                        priority
                        style={{ objectPosition: "center 20%" }}
                      />
                    </div>

                    {/* Modern frame effect */}
                    <div className="absolute inset-0 rounded-full border-2 border-white/30" />

                    {/* Subtle gradient overlay for better integration with background */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-t from-electric-600/30 to-transparent" />

                    {/* Circular geometric accent elements - late-modern design touch */}
                    <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-emerald-400/30 backdrop-blur-md rounded-full border border-white/20" />
                    <div className="absolute -top-4 -left-4 w-16 h-16 bg-coral-400/20 backdrop-blur-md rounded-full border border-white/10" />

                    {/* Clean, minimal highlight */}
                    <div className="absolute top-4 left-4 w-1/3 h-1/3 bg-gradient-to-br from-white/10 to-transparent rounded-full blur-2xl" />
                  </div>
                </motion.div>
              </div>

              {/* Right Content */}
              <div className="lg:col-span-3 space-y-8">
                <motion.div
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, delay: 0.8 }}
                  className="space-y-6"
                >
                  {/* Stats */}
                  <div className="space-y-4">
                    <div className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
                      <div className="text-3xl font-bold text-white">10+</div>
                      <div className="text-white/80 text-sm">Projects</div>
                    </div>
                    <div className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
                      <div className="text-3xl font-bold text-white">1+</div>
                      <div className="text-white/80 text-sm">Years Exp</div>
                    </div>
                    <div className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
                      <div className="text-3xl font-bold text-white">100%</div>
                      <div className="text-white/80 text-sm">Satisfaction</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Bottom Text */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 }}
              className="absolute bottom-8 left-6 right-6"
            >
              <div className="flex justify-between items-end text-white/60 text-sm">
                <div>
                  <div>BASED IN</div>
                  <div className="font-semibold text-white/80">INDIA</div>
                </div>
                <div className="text-right">
                  <div>AVAILABLE FOR</div>
                  <div className="font-semibold text-white/80">FREELANCE</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            className="text-white/60 cursor-pointer hover:text-white/80 transition-colors"
          >
            <ChevronDown className="h-6 w-6" />
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6 relative bg-white dark:bg-slate-900">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl font-bold text-slate-900 dark:text-white mb-8">About Me</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-electric-500 to-emerald-500 mx-auto mb-8"></div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative max-w-md mx-auto lg:max-w-none">
                <div className="relative w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] mx-auto overflow-hidden rounded-full">
                  <Image
                    src="\About.jpeg"
                    alt="Syed Parveez Afham - Full Stack Developer"
                    fill
                    className="object-cover scale-110"
                    priority
                    style={{ objectPosition: "center 20%" }}
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 w-24 h-24 md:w-32 md:h-32 bg-gradient-to-r from-electric-500 to-emerald-500 rounded-full -z-10"></div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                I'm a passionate full-stack developer creating digital solutions that matter. My journey began with
                curiosity about how the web works, and it has evolved into a deep passion for crafting scalable,
                user-centric applications.
              </p>
              <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                I specialize in modern web technologies and love solving complex problems through clean, efficient code.
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or
                sharing knowledge with the developer community.
              </p>

              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="text-center p-4 glass-effect rounded-xl">
                  <Award className="h-8 w-8 text-electric-600 mx-auto mb-2" />
                  <div className="font-bold text-slate-900 dark:text-white">10+ Projects</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">Completed</div>
                </div>
                <div className="text-center p-4 glass-effect rounded-xl">
                  <Star className="h-8 w-8 text-coral-500 mx-auto mb-2" />
                  <div className="font-bold text-slate-900 dark:text-white">Upcomming Ratings</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">Client Reviews</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Tech Stack */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-12 text-center">
              Tech Stack & Expertise
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
              {Object.entries(skills).map(([category, skillList], index) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full glass-effect hover:shadow-xl transition-all duration-300 hover:scale-105 border-slate-200/20 dark:border-slate-700/20">
                    <CardHeader className="pb-4">
                      <CardTitle className="text-lg flex items-center gap-3">
                        <div
                          className={`p-2 rounded-lg ${
                            index % 3 === 0
                              ? "bg-gradient-to-r from-electric-500 to-electric-600"
                              : index % 3 === 1
                                ? "bg-gradient-to-r from-emerald-500 to-emerald-600"
                                : "bg-gradient-to-r from-coral-500 to-coral-600"
                          }`}
                        >
                          {category === "Frontend" && <Smartphone className="h-5 w-5 text-white" />}
                          {category === "Backend" && <Server className="h-5 w-5 text-white" />}
                          {category === "Database" && <Database className="h-5 w-5 text-white" />}
                          {category === "DevOps" && <Globe className="h-5 w-5 text-white" />}
                          {category === "Tools" && <Code className="h-5 w-5 text-white" />}
                        </div>
                        <span className="text-slate-900 dark:text-white">{category}</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {skillList.map((skill) => (
                          <Badge
                            key={skill}
                            variant="secondary"
                            className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-electric-100 dark:hover:bg-electric-900/50 transition-colors"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-12 text-center">Certifications</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="text-center p-6 glass-effect hover:shadow-xl transition-all duration-300 border-slate-200/20 dark:border-slate-700/20">
                    <Award className="h-12 w-12 text-electric-600 mx-auto mb-4" />
                    <h4 className="font-bold text-slate-900 dark:text-white mb-2">{cert.name}</h4>
                    <p className="text-slate-600 dark:text-slate-400 mb-1">{cert.issuer}</p>
                    <p className="text-sm text-emerald-600 dark:text-emerald-400">{cert.year}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 px-6 bg-slate-50 dark:bg-slate-800/50">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl font-bold text-slate-900 dark:text-white mb-8">Featured Projects</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-electric-500 to-emerald-500 mx-auto mb-8"></div>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              Discover my latest work showcasing innovative solutions and cutting-edge technologies
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group"
              >
                <Card className="h-full glass-effect hover:shadow-2xl transition-all duration-500 hover:scale-105 overflow-hidden border-slate-200/20 dark:border-slate-700/20">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge className={`${project.status === "Live" ? "bg-emerald-500" : "bg-coral-500"} text-white`}>
                        {project.status}
                      </Badge>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-2">
                      <CardTitle className="text-xl text-slate-900 dark:text-white">{project.title}</CardTitle>
                      <div className="flex gap-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="hover:bg-electric-100 dark:hover:bg-electric-900/50 text-slate-600 dark:text-slate-400"
                          onClick={() => window.open(project.github, "_blank")}
                        >
                          <Github className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="hover:bg-electric-100 dark:hover:bg-electric-900/50 text-slate-600 dark:text-slate-400"
                          onClick={() => window.open(project.demo, "_blank")}
                        >
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    <CardDescription className="text-base text-slate-600 dark:text-slate-400">
                      {project.description}
                    </CardDescription>
                    <div className="text-sm text-electric-600 dark:text-electric-400 font-medium">{project.users}</div>
                  </CardHeader>

                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech) => (
                        <Badge
                          key={tech}
                          variant="outline"
                          className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-300 dark:border-slate-600"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="space-y-2">
                      {project.features.map((feature) => (
                        <div
                          key={feature}
                          className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-400"
                        >
                          <div className="w-2 h-2 bg-gradient-to-r from-electric-500 to-emerald-500 rounded-full"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-32 px-6 bg-white dark:bg-slate-900">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl font-bold text-slate-900 dark:text-white mb-8">Professional Experience</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-electric-500 to-emerald-500 mx-auto mb-8"></div>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {experience.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="mb-12"
              >
                <Card className="p-8 glass-effect hover:shadow-xl transition-all duration-300 border-slate-200/20 dark:border-slate-700/20">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                    <div className="flex items-center gap-4 mb-4 lg:mb-0">
                      <div
                        className={`p-3 rounded-xl ${
                          index % 3 === 0
                            ? "bg-gradient-to-r from-electric-500 to-electric-600"
                            : index % 3 === 1
                              ? "bg-gradient-to-r from-emerald-500 to-emerald-600"
                              : "bg-gradient-to-r from-coral-500 to-coral-600"
                        }`}
                      >
                        <Briefcase className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{exp.title}</h3>
                        <p className="text-lg text-electric-600 dark:text-electric-400 font-medium">{exp.company}</p>
                      </div>
                    </div>
                    <Badge
                      variant="outline"
                      className="text-lg px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-300 dark:border-slate-600"
                    >
                      {exp.period}
                    </Badge>
                  </div>

                  <p className="text-slate-600 dark:text-slate-400 mb-6 text-lg leading-relaxed">{exp.description}</p>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-3">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.tech.map((tech) => (
                          <Badge
                            key={tech}
                            variant="secondary"
                            className="bg-electric-100 dark:bg-electric-900/50 text-electric-800 dark:text-electric-200"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-3">Key Achievements</h4>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement) => (
                          <li key={achievement} className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                            <Star className="h-4 w-4 text-coral-500" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 bg-slate-50 dark:bg-slate-800/50">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl font-bold text-slate-900 dark:text-white mb-8">Let's Create Something Amazing</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-electric-500 to-emerald-500 mx-auto mb-8"></div>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              Ready to bring your ideas to life? Let's discuss your next project and create something extraordinary
              together.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <ContactForm />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">Get in touch</h3>
                <div className="space-y-6">
                  <div className="flex items-center gap-6 p-6 glass-effect rounded-xl border border-slate-200/20 dark:border-slate-700/20 hover:shadow-lg transition-all duration-300">
                    <div className="w-16 h-16 bg-gradient-to-r from-electric-500 to-emerald-500 rounded-xl flex items-center justify-center">
                      <Mail className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-slate-900 dark:text-white text-lg">Email</p>
                      <p className="text-slate-600 dark:text-slate-400">syedparveezdevlop@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-6 p-6 glass-effect rounded-xl border border-slate-200/20 dark:border-slate-700/20 hover:shadow-lg transition-all duration-300">
                    <div className="w-16 h-16 bg-gradient-to-r from-electric-500 to-emerald-500 rounded-xl flex items-center justify-center">
                      <Linkedin className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-slate-900 dark:text-white text-lg">LinkedIn</p>
                      <p className="text-slate-600 dark:text-slate-400">www.linkedin.com/in/parveezafham</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-6 p-6 glass-effect rounded-xl border border-slate-200/20 dark:border-slate-700/20 hover:shadow-lg transition-all duration-300">
                    <div className="w-16 h-16 bg-gradient-to-r from-electric-500 to-emerald-500 rounded-xl flex items-center justify-center">
                      <Github className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-slate-900 dark:text-white text-lg">GitHub</p>
                      <p className="text-slate-600 dark:text-slate-400">github.com/SyedparveezDev</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-8">
                <Button
                  variant="outline"
                  onClick={downloadResume}
                  className="w-full border-2 border-emerald-500 text-emerald-600 glass-effect hover:bg-emerald-500 hover:text-white transition-all duration-300 py-4 text-lg rounded-full"
                >
                  <Download className="h-5 w-5 mr-3" />
                  Download Resume
                </Button>
              </div>

              <div className="text-center pt-8">
                <p className="text-slate-600 dark:text-slate-400 mb-4">Follow me on social media</p>
                <div className="flex justify-center gap-4">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-12 h-12 rounded-full glass-effect hover:bg-electric-500 hover:text-white transition-all duration-300"
                    onClick={() => window.open("https://github.com/SyedparveezDev", "_blank")}
                  >
                    <Github className="h-5 w-5 text-slate-600 dark:text-slate-400" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-12 h-12 rounded-full glass-effect hover:bg-electric-500 hover:text-white transition-all duration-300"
                    onClick={() => window.open("https://www.linkedin.com/in/parveezafham/", "_blank")}
                  >
                    <Linkedin className="h-5 w-5 text-slate-600 dark:text-slate-400" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-12 h-12 rounded-full glass-effect hover:bg-electric-500 hover:text-white transition-all duration-300"
                    onClick={() => window.open("mailto:syedparveezdevlop@gmail.com", "_blank")}
                  >
                    <Mail className="h-5 w-5 text-slate-600 dark:text-slate-400" />
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-slate-200/20 dark:border-slate-700/20 glass-effect">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-slate-600 dark:text-slate-400">
                © 2025 Syed Parveez Afham. Crafted with ❤️ using Next.js and Tailwind CSS.
              </p>
            </div>
            <div className="flex items-center gap-6">
              <Link
                href="#home"
                className="text-slate-600 dark:text-slate-400 hover:text-electric-600 dark:hover:text-electric-400 transition-colors"
              >
                Back to Top
              </Link>
              <div className="w-px h-4 bg-slate-300 dark:bg-slate-600"></div>
              <span className="text-sm text-slate-500 dark:text-slate-500">Made with passion</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
