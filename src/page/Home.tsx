"use client"

import { Button } from "@/components/ui/button"
import { Heart, Users, BookOpen, Phone, ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-pink-50/90 backdrop-blur-md border-b border-pink-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img
              src="/image/logo.png"
              alt="Breast Cancer Awareness logo"
              className="w-8 h-8 object-contain"
            />
            <h1 className="text-2xl font-semibold text-pink-400 italic">Breast Cancer Awareness</h1>
          </div>
          {/* <nav className="hidden md:flex gap-8">
            <a href="#about" className="text-gray-700 hover:text-pink-600 transition-colors font-sans text-sm">
              About
            </a>
            <a href="#resources" className="text-gray-700 hover:text-pink-600 transition-colors font-sans text-sm">
              Resources
            </a>
            <a href="#support" className="text-gray-700 hover:text-pink-600 transition-colors font-sans text-sm">
              Support
            </a>
            <a href="#contact" className="text-gray-700 hover:text-pink-600 transition-colors font-sans text-sm">
              Contact
            </a>
          </nav> */}
        </div>
      </header>

      {/* Hero Section */}
      <section
        className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("/image/image.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "600px",
        }}
      >
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="max-w-4xl mx-auto relative z-10 flex flex-col justify-center h-full py-24">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-6xl md:text-7xl font-bold text-white leading-tight font-sans text-balance drop-shadow-lg">
                Together We <span className="text-pink-300">Fight</span>
              </h2>
              <p className="text-xl text-gray-100 leading-relaxed font-sans drop-shadow-md max-w-2xl">
                Join a global movement raising awareness, supporting survivors, and funding groundbreaking research to
                end breast cancer.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 ">
              {/* <Button
                size="lg"
                className="bg-pink-600 hover:bg-pink-700 text-white rounded-lg font-sans font-semibold shadow-lg"
              >
                Learn More <ArrowRight className="w-5 h-5 ml-2" />
              </Button> */}
              <Button
                asChild
                size="lg"
                className="bg-white text-pink-600 hover:bg-pink-50 rounded-lg font-sans font-semibold shadow-lg"
              >
                <Link to="/convert">Convert</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section with Image */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center text-gray-900 mb-4 font-sans text-balance">Our Mission</h2>
          <p className="text-center text-lg text-gray-600 mb-12 max-w-2xl mx-auto font-sans leading-relaxed">
            We believe in the power of community support and early detection. Together, we can save lives.
          </p>
          <div className="rounded-3xl overflow-hidden shadow-xl mb-8">
            <img
              src="/image/mission.png"
              alt="Hands holding pink ribbon showing community solidarity"
              className="w-full h-96 object-cover"
            />
          </div>
          <p className="text-center text-lg text-gray-700 leading-relaxed font-sans">
            By spreading awareness, providing resources, and supporting survivors, we help improve outcomes and give
            hope to those affected by breast cancer.
          </p>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-24 Convertpx-4 sm:px-6 lg:px-8 bg-gradient-to-b from-pink-50 to-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center text-gray-900 mb-16 font-sans text-balance">By The Numbers</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 text-center border border-pink-200 hover:shadow-lg transition-shadow">
              <div className="text-5xl font-bold text-pink-600 mb-4 font-sans">1 in 8</div>
              <p className="text-gray-700 text-lg font-sans leading-relaxed">
                Women diagnosed with breast cancer in their lifetime
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 text-center border border-pink-200 hover:shadow-lg transition-shadow">
              <div className="text-5xl font-bold text-pink-600 mb-4 font-sans">98%</div>
              <p className="text-gray-700 text-lg font-sans leading-relaxed">
                Five-year survival rate when caught early
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 text-center border border-pink-200 hover:shadow-lg transition-shadow">
              <div className="text-5xl font-bold text-pink-600 mb-4 font-sans">40%</div>
              <p className="text-gray-700 text-lg font-sans leading-relaxed">Lives saved through early screening</p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Information Section */}
      <section id="resources" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center text-gray-900 mb-4 font-sans text-balance">
            Knowledge is Power
          </h2>
          <p className="text-center text-lg text-gray-600 mb-16 max-w-2xl mx-auto font-sans">
            Education and early detection save lives. Learn what you need to know.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex gap-6 p-8 rounded-2xl bg-gradient-to-br from-pink-50 to-white border border-pink-200 hover:shadow-lg transition-all">
              <Heart className="w-14 h-14 text-pink-600 flex-shrink-0" />
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-gray-900 font-sans">Self-Examination</h3>
                <p className="text-gray-600 leading-relaxed font-sans">
                  Recognize changes in your breast tissue and report any concerns to your doctor promptly.
                </p>
              </div>
            </div>
            <div className="flex gap-6 p-8 rounded-2xl bg-gradient-to-br from-pink-50 to-white border border-pink-200 hover:shadow-lg transition-all">
              <BookOpen className="w-14 h-14 text-pink-600 flex-shrink-0" />
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-gray-900 font-sans">Regular Screening</h3>
                <p className="text-gray-600 leading-relaxed font-sans">
                  Schedule mammograms and clinical breast exams as recommended by your healthcare provider.
                </p>
              </div>
            </div>
            <div className="flex gap-6 p-8 rounded-2xl bg-gradient-to-br from-pink-50 to-white border border-pink-200 hover:shadow-lg transition-all">
              <Users className="w-14 h-14 text-pink-600 flex-shrink-0" />
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-gray-900 font-sans">Support Groups</h3>
                <p className="text-gray-600 leading-relaxed font-sans">
                  Connect with survivors and advocates for emotional support and practical advice.
                </p>
              </div>
            </div>
            <div className="flex gap-6 p-8 rounded-2xl bg-gradient-to-br from-pink-50 to-white border border-pink-200 hover:shadow-lg transition-all">
              <Phone className="w-14 h-14 text-pink-600 flex-shrink-0" />
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-gray-900 font-sans">Get Help</h3>
                <p className="text-gray-600 leading-relaxed font-sans">
                  Access professional counseling and medical resources for those diagnosed with breast cancer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-pink-600 to-pink-500">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-5xl font-bold text-white leading-tight font-sans text-balance">
            Make a Difference Today
          </h2>
          <p className="text-xl text-pink-50 leading-relaxed font-sans">
            Every contribution helps us continue our mission of awareness, research, and support for those affected by
            breast cancer.
          </p>
          {/* <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button size="lg" className="bg-white text-pink-600 hover:bg-pink-50 rounded-lg font-sans font-semibold">
              Donate <Heart className="w-5 h-5 ml-2" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 bg-transparent rounded-lg font-sans font-semibold"
            >
              Volunteer
            </Button>
          </div> */}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="space-y-4">
              <h4 className="text-white font-bold text-lg font-sans">About</h4>
              <ul className="space-y-2 text-sm font-sans">
                <li>
                  <a href="#" className="hover:text-pink-400 transition-colors">
                    Our Mission
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-pink-400 transition-colors">
                    Team
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-pink-400 transition-colors">
                    History
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-white font-bold text-lg font-sans">Resources</h4>
              <ul className="space-y-2 text-sm font-sans">
                <li>
                  <a href="#" className="hover:text-pink-400 transition-colors">
                    Education
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-pink-400 transition-colors">
                    Research
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-pink-400 transition-colors">
                    Support
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-white font-bold text-lg font-sans">Get Involved</h4>
              <ul className="space-y-2 text-sm font-sans">
                <li>
                  <a href="#" className="hover:text-pink-400 transition-colors">
                    Donate
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-pink-400 transition-colors">
                    Volunteer
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-pink-400 transition-colors">
                    Events
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-white font-bold text-lg font-sans">Contact</h4>
              <ul className="space-y-2 text-sm font-sans">
                <li>
                  <a href="mailto:info@example.com" className="hover:text-pink-400 transition-colors">
                    info@example.com
                  </a>
                </li>
                <li>
                  <a href="tel:1-800-000-0000" className="hover:text-pink-400 transition-colors">
                    1-800-000-0000
                  </a>
                </li>
              </ul>
            </div>
          </div> */}
          <div className="border-t border-gray-800 pt-8 text-center text-sm font-sans">
            <p>
              &copy; 2025 Breast Cancer Awareness Initiative. All rights reserved. |{" "}
              <a href="#" className="hover:text-pink-400 transition-colors">
                Privacy Policy
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
