"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import StatsSection from "./components/StatsSection";

export default function Home() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      type: "bot",
      text: "Hello! 👋 Welcome to EDEN Dental & Esthetics. How can I help you today?",
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [pendingResponse, setPendingResponse] = useState(null);
  const messagesEndRef = useRef(null);

  const quickReplies = [
    {
      text: "Book Appointment",
      response:
        "Great! Please call us at 072002 10022 to book your appointment. Our team is ready to help you!",
    },
    {
      text: "Services",
      response:
        "We offer General Dentistry (checkups, cleanings, fillings, root canal) and Cosmetic Treatments (teeth whitening, veneers, smile makeover). What interests you?",
    },
    {
      text: "Location",
      response:
        "We're located at 445, Madhavaram Red Hills Rd, Moolakadai, Madhavaram, Chennai 600060. Easy to reach!",
    },
    {
      text: "Working Hours",
      response:
        "Mon-Fri: 10 AM - 8 PM, Saturday: 10 AM - 6 PM, Sunday: 10 AM - 2 PM. We're here for you!",
    },
  ];

  useEffect(() => {
    if (pendingResponse) {
      const timer = setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          { type: "bot", text: pendingResponse },
        ]);
        setPendingResponse(null);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [pendingResponse]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessage = (text) => {
    if (!text.trim()) return;

    setMessages((prev) => [...prev, { type: "user", text }]);
    setInputMessage("");

    const reply = quickReplies.find(
      (q) => q.text.toLowerCase() === text.toLowerCase()
    );
    const response = reply
      ? reply.response
      : "Thank you for your message! For specific inquiries, please call us at 072002 10022. Our team will be happy to assist you! 😊";
    setPendingResponse(response);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 overflow-x-hidden w-full max-w-[100vw]">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/98 backdrop-blur-md shadow-sm z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            <div className="flex items-center gap-2 md:gap-3">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-[#7fb3a0] to-[#5a9179] rounded-lg flex items-center justify-center shadow-md">
                <span className="text-white text-lg md:text-xl font-bold">
                  E
                </span>
              </div>
              <div>
                <h1 className="text-base md:text-xl font-bold text-gray-900">
                  EDEN Dental
                </h1>
                <p className="text-[10px] md:text-xs text-gray-500">
                  & Esthetics
                </p>
              </div>
            </div>
            <div className="hidden lg:flex space-x-8">
              <a
                href="#home"
                className="text-gray-700 hover:text-[#7fb3a0] transition-colors font-medium"
              >
                Home
              </a>
              <a
                href="#services"
                className="text-gray-700 hover:text-[#7fb3a0] transition-colors font-medium"
              >
                Services
              </a>
              <a
                href="#why-us"
                className="text-gray-700 hover:text-[#7fb3a0] transition-colors font-medium"
              >
                Why Us
              </a>
              <a
                href="#testimonials"
                className="text-gray-700 hover:text-[#7fb3a0] transition-colors font-medium"
              >
                Reviews
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-[#7fb3a0] transition-colors font-medium"
              >
                Contact
              </a>
            </div>
            <div className="flex items-center gap-2">
              <a
                href="tel:07200210022"
                className="hidden sm:flex bg-gradient-to-r from-[#7fb3a0] to-[#5a9179] text-white px-4 md:px-6 py-2 md:py-3 rounded-full hover:shadow-lg transition-all font-medium text-sm md:text-base items-center gap-2"
              >
                <span>📞</span>
                <span>Book</span>
              </a>
              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
                aria-label="Toggle menu"
              >
                <svg
                  className="w-6 h-6 text-gray-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {isMobileMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Innovative Mobile Menu */}
        <div
          className={`lg:hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen
              ? "max-h-[500px] opacity-100"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="bg-gradient-to-b from-white to-gray-50 border-t border-gray-100 shadow-xl">
            <div className="px-4 py-6 space-y-2 max-w-7xl mx-auto">
              <a
                href="#home"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center gap-4 px-4 py-3 rounded-xl hover:bg-gradient-to-r hover:from-[#7fb3a0]/10 hover:to-[#5a9179]/10 transition-all group"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-[#7fb3a0]/20 to-[#5a9179]/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="text-xl">🏠</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 group-hover:text-[#7fb3a0]">
                    Home
                  </p>
                  <p className="text-xs text-gray-500">Welcome page</p>
                </div>
              </a>
              <a
                href="#services"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center gap-4 px-4 py-3 rounded-xl hover:bg-gradient-to-r hover:from-[#7fb3a0]/10 hover:to-[#5a9179]/10 transition-all group"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-[#7fb3a0]/20 to-[#5a9179]/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="text-xl">🦷</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 group-hover:text-[#7fb3a0]">
                    Services
                  </p>
                  <p className="text-xs text-gray-500">Our treatments</p>
                </div>
              </a>
              <a
                href="#why-us"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center gap-4 px-4 py-3 rounded-xl hover:bg-gradient-to-r hover:from-[#7fb3a0]/10 hover:to-[#5a9179]/10 transition-all group"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-[#7fb3a0]/20 to-[#5a9179]/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="text-xl">⭐</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 group-hover:text-[#7fb3a0]">
                    Why Us
                  </p>
                  <p className="text-xs text-gray-500">Our advantages</p>
                </div>
              </a>
              <a
                href="#testimonials"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center gap-4 px-4 py-3 rounded-xl hover:bg-gradient-to-r hover:from-[#7fb3a0]/10 hover:to-[#5a9179]/10 transition-all group"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-[#7fb3a0]/20 to-[#5a9179]/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="text-xl">💬</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 group-hover:text-[#7fb3a0]">
                    Reviews
                  </p>
                  <p className="text-xs text-gray-500">Patient feedback</p>
                </div>
              </a>
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center gap-4 px-4 py-3 rounded-xl hover:bg-gradient-to-r hover:from-[#7fb3a0]/10 hover:to-[#5a9179]/10 transition-all group"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-[#7fb3a0]/20 to-[#5a9179]/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="text-xl">📍</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 group-hover:text-[#7fb3a0]">
                    Contact
                  </p>
                  <p className="text-xs text-gray-500">Get in touch</p>
                </div>
              </a>
              <div className="pt-4">
                <a
                  href="tel:07200210022"
                  className="flex items-center justify-center gap-3 w-full bg-gradient-to-r from-[#7fb3a0] to-[#5a9179] text-white px-6 py-4 rounded-full hover:shadow-xl transition-all font-bold shadow-lg"
                >
                  <span className="text-2xl">📞</span>
                  <span>Call Now: 072002 10022</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="pt-20 md:pt-28 pb-12 md:pb-16 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center bg-gradient-to-r from-[#7fb3a0]/10 to-[#d4a574]/10 px-3 py-2 md:px-5 md:py-2.5 rounded-full mb-4 md:mb-6 border border-[#7fb3a0]/20">
                <span className="text-yellow-500 mr-1 md:mr-2 text-sm md:text-lg">
                  ★★★★★
                </span>
                <span className="text-xs md:text-sm font-semibold text-gray-800">
                  5.0 • 185 Reviews
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight">
                Transform Your Smile,
                <br />
                <span className="bg-gradient-to-r from-[#7fb3a0] to-[#5a9179] bg-clip-text text-transparent">
                  Transform Your Life
                </span>
              </h1>
              <p className="text-sm sm:text-base md:text-xl text-gray-600 mb-6 md:mb-8 leading-relaxed">
                Experience world-class dental care and aesthetic treatments in
                the heart of Madhavaram, Chennai. Where expertise meets
                compassion.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-6 md:mb-8">
                <a
                  href="tel:07200210022"
                  className="group bg-gradient-to-r from-[#7fb3a0] to-[#5a9179] text-white px-6 md:px-8 py-3 md:py-4 rounded-full hover:shadow-xl transition-all font-semibold text-center text-base md:text-lg flex items-center justify-center gap-2"
                >
                  <span>Book Appointment</span>
                  <span className="group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </a>
                <a
                  href="#services"
                  className="border-2 border-[#7fb3a0] text-[#7fb3a0] px-6 md:px-8 py-3 md:py-4 rounded-full hover:bg-[#7fb3a0] hover:text-white transition-all font-semibold text-center text-base md:text-lg"
                >
                  Explore Services
                </a>
              </div>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 md:gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-[#7fb3a0]/10 rounded-full flex items-center justify-center">
                    <span className="text-xl md:text-2xl">📍</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm md:text-base">
                      Madhavaram
                    </p>
                    <p className="text-gray-600 text-xs md:text-sm">
                      Chennai 600060
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-[#7fb3a0]/10 rounded-full flex items-center justify-center">
                    <span className="text-xl md:text-2xl">⏰</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm md:text-base">
                      Open Today
                    </p>
                    <p className="text-gray-600 text-xs md:text-sm">
                      10:00 AM - 8:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 relative w-full">
              <div className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-xl md:shadow-2xl max-w-full">
                <div className="relative w-full" style={{ paddingTop: "75%" }}>
                  <Image
                    src="/Screenshot 2026-05-30 225733.png"
                    alt="EDEN Dental Clinic"
                    fill
                    className="object-cover"
                    style={{ objectPosition: "center 45%" }}
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 hidden lg:block">
                <div className="flex items-center gap-4">
                  <div className="text-4xl">😊</div>
                  <div>
                    <p className="text-3xl font-bold text-[#7fb3a0]">185+</p>
                    <p className="text-sm text-gray-600">Happy Patients</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <StatsSection />

      {/* Why Choose Us */}
      <section id="why-us" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#7fb3a0] font-semibold text-sm uppercase tracking-wider">
              Why Choose EDEN
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-3 mb-4">
              Excellence in Every Detail
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Five reasons why families across Chennai trust us with their
              smiles
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "⭐",
                title: "5.0 Perfect Rating",
                desc: "185+ verified reviews from satisfied patients who love their new smiles",
                color: "from-yellow-400 to-orange-400",
              },
              {
                icon: "👩‍⚕️",
                title: "Women-Owned & Led",
                desc: "Compassionate care with a personal touch that understands your needs",
                color: "from-pink-400 to-rose-400",
              },
              {
                icon: "💎",
                title: "Premium Technology",
                desc: "State-of-the-art equipment and latest techniques for best results",
                color: "from-blue-400 to-cyan-400",
              },
              {
                icon: "🏆",
                title: "Expert Team",
                desc: "Highly qualified professionals with years of specialized experience",
                color: "from-purple-400 to-indigo-400",
              },
              {
                icon: "❤️",
                title: "Family Friendly",
                desc: "Warm, welcoming atmosphere that makes everyone feel at home",
                color: "from-red-400 to-pink-400",
              },
              {
                icon: "🛡️",
                title: "Safe & Hygienic",
                desc: "Highest standards of sterilization and safety protocols",
                color: "from-green-400 to-emerald-400",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="group relative bg-white p-8 rounded-2xl border-2 border-gray-100 hover:border-[#7fb3a0] transition-all hover:shadow-xl"
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform shadow-lg`}
                >
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#7fb3a0] font-semibold text-sm uppercase tracking-wider">
              Our Services
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-3 mb-4">
              Comprehensive Dental Care
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From routine checkups to complete smile transformations
            </p>
          </div>

          {/* General Dentistry */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-1 bg-gradient-to-r from-[#7fb3a0] to-transparent rounded-full"></div>
              <h3 className="text-3xl font-bold text-gray-900">
                General Dentistry
              </h3>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: "🦷",
                  title: "Dental Checkups",
                  desc: "Comprehensive oral examinations and preventive care",
                  price: "From ₹500",
                },
                {
                  icon: "🪥",
                  title: "Teeth Cleaning",
                  desc: "Professional scaling and polishing services",
                  price: "From ₹800",
                },
                {
                  icon: "🔧",
                  title: "Fillings & Repairs",
                  desc: "Advanced cavity treatment and restoration",
                  price: "From ₹1,200",
                },
                {
                  icon: "🦴",
                  title: "Root Canal",
                  desc: "Pain-free endodontic treatment with latest tech",
                  price: "From ₹3,500",
                },
                {
                  icon: "👑",
                  title: "Crowns & Bridges",
                  desc: "Durable, natural-looking tooth restoration",
                  price: "From ₹5,000",
                },
                {
                  icon: "🦷",
                  title: "Tooth Extraction",
                  desc: "Gentle, comfortable tooth removal procedures",
                  price: "From ₹1,000",
                },
              ].map((service, idx) => (
                <div
                  key={idx}
                  className="group bg-white p-6 rounded-2xl shadow-md hover:shadow-2xl transition-all border border-gray-100 hover:border-[#7fb3a0]"
                >
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">
                    {service.title}
                  </h4>
                  <p className="text-gray-600 mb-3">{service.desc}</p>
                  <p className="text-[#7fb3a0] font-semibold">
                    {service.price}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Cosmetic & Esthetic Treatments */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-1 bg-gradient-to-r from-[#d4a574] to-transparent rounded-full"></div>
              <h3 className="text-3xl font-bold text-gray-900">
                Cosmetic & Esthetic Treatments
              </h3>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: "✨",
                  title: "Teeth Whitening",
                  desc: "Professional brightening for a dazzling smile",
                  price: "From ₹8,000",
                  featured: true,
                },
                {
                  icon: "💫",
                  title: "Dental Veneers",
                  desc: "Perfect smile transformation with porcelain veneers",
                  price: "From ₹12,000",
                  featured: true,
                },
                {
                  icon: "😊",
                  title: "Smile Makeover",
                  desc: "Complete aesthetic enhancement package",
                  price: "Custom Quote",
                  featured: true,
                },
                {
                  icon: "🎨",
                  title: "Cosmetic Bonding",
                  desc: "Natural-looking repairs and improvements",
                  price: "From ₹2,500",
                  featured: false,
                },
              ].map((service, idx) => (
                <div
                  key={idx}
                  className={`group relative bg-gradient-to-br ${
                    service.featured
                      ? "from-[#7fb3a0]/10 via-white to-[#d4a574]/10"
                      : "from-white to-gray-50"
                  } p-6 rounded-2xl shadow-md hover:shadow-2xl transition-all border-2 ${
                    service.featured ? "border-[#7fb3a0]/30" : "border-gray-100"
                  } hover:border-[#7fb3a0]`}
                >
                  {service.featured && (
                    <div className="absolute -top-3 -right-3 bg-gradient-to-r from-[#d4a574] to-[#c89563] text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                      POPULAR
                    </div>
                  )}
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">
                    {service.title}
                  </h4>
                  <p className="text-gray-600 mb-3">{service.desc}</p>
                  <p className="text-[#7fb3a0] font-semibold">
                    {service.price}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section
        id="testimonials"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-white"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#7fb3a0] font-semibold text-sm uppercase tracking-wider">
              Testimonials
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-3 mb-4">
              What Our Patients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real stories from real people who trusted us with their smiles
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Priya Sharma",
                role: "Marketing Professional",
                review:
                  "The best dental experience I've ever had! The staff is incredibly caring and professional. My smile makeover exceeded all my expectations. I can't stop smiling now!",
                rating: 5,
                image: "👩",
              },
              {
                name: "Rajesh Kumar",
                role: "Business Owner",
                review:
                  "Dr. and the team at EDEN are simply amazing. They made my root canal completely painless - I was actually relaxed! Highly recommend for families.",
                rating: 5,
                image: "👨",
              },
              {
                name: "Ananya Reddy",
                role: "Teacher",
                review:
                  "Love the warm, welcoming atmosphere here. As a woman-owned clinic, they truly understand patient comfort. My teeth whitening results are absolutely stunning!",
                rating: 5,
                image: "👩‍🏫",
              },
            ].map((testimonial, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all border border-gray-100"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#7fb3a0] to-[#5a9179] rounded-full flex items-center justify-center text-3xl shadow-lg">
                    {testimonial.image}
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-lg">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <div className="text-yellow-500 text-2xl mb-4">
                  {"★".repeat(testimonial.rating)}
                </div>
                <p className="text-gray-700 leading-relaxed italic">
                  "{testimonial.review}"
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <a
              href="https://www.google.com/search?q=eden+dental+madhavaram"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#7fb3a0] hover:text-[#5a9179] font-semibold"
            >
              <span>Read all 185+ reviews on Google</span>
              <span>→</span>
            </a>
          </div>
        </div>
      </section>

      {/* About & Hours Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#7fb3a0]/5 via-white to-[#d4a574]/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-[#7fb3a0] font-semibold text-sm uppercase tracking-wider">
                About Us
              </span>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-3 mb-6">
                EDEN Dental & Esthetics
              </h2>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                Located in the heart of Madhavaram, Chennai, EDEN Dental &
                Esthetics is a premier{" "}
                <strong>women-owned dental clinic</strong> dedicated to
                providing exceptional care in a warm, welcoming environment.
              </p>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                Our experienced team combines the latest dental technology with
                a gentle, patient-centered approach. Whether you need routine
                care or a complete smile transformation, we're here to help you
                achieve optimal oral health and confidence.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                With a{" "}
                <strong>perfect 5.0 rating from 185+ satisfied patients</strong>
                , we've built our reputation on trust, quality, and
                compassionate care that families across Chennai rely on.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-md border border-gray-100">
                  <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full flex items-center justify-center font-bold text-white">
                    5.0
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">Perfect Rating</p>
                    <p className="text-sm text-gray-600">185+ Reviews</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-md border border-gray-100">
                  <div className="w-10 h-10 bg-gradient-to-br from-pink-400 to-rose-400 rounded-full flex items-center justify-center text-xl">
                    👩‍⚕️
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">Women-Owned</p>
                    <p className="text-sm text-gray-600">Trusted Care</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-10 rounded-3xl shadow-2xl border border-gray-100">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-[#7fb3a0] to-[#5a9179] rounded-xl flex items-center justify-center text-2xl shadow-lg">
                  ⏰
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Working Hours
                </h3>
              </div>
              <div className="space-y-4">
                {[
                  {
                    day: "Monday - Friday",
                    hours: "10:00 AM - 8:00 PM",
                    isOpen: true,
                  },
                  {
                    day: "Saturday",
                    hours: "10:00 AM - 6:00 PM",
                    isOpen: true,
                  },
                  { day: "Sunday", hours: "10:00 AM - 2:00 PM", isOpen: true },
                ].map((schedule, idx) => (
                  <div
                    key={idx}
                    className="flex justify-between items-center py-4 border-b border-gray-200 last:border-0"
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-3 h-3 rounded-full ${
                          schedule.isOpen ? "bg-green-500" : "bg-gray-300"
                        }`}
                      ></div>
                      <span className="font-semibold text-gray-900">
                        {schedule.day}
                      </span>
                    </div>
                    <span className="text-[#7fb3a0] font-bold">
                      {schedule.hours}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-8 p-4 bg-gradient-to-r from-[#7fb3a0]/10 to-[#d4a574]/10 rounded-2xl border border-[#7fb3a0]/20">
                <p className="text-sm text-gray-700 text-center">
                  <span className="font-semibold">
                    Emergency Services Available
                  </span>
                  <br />
                  Call us anytime for urgent dental care
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#7fb3a0] font-semibold text-sm uppercase tracking-wider">
              Get In Touch
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-3 mb-4">
              Visit Our Clinic
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We're here to help you achieve the smile of your dreams
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-3xl mb-6 shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-8">
                  Contact Information
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4 group">
                    <div className="w-14 h-14 bg-gradient-to-br from-[#7fb3a0] to-[#5a9179] rounded-2xl flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-transform">
                      📍
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 mb-1 text-lg">
                        Address
                      </p>
                      <p className="text-gray-700 leading-relaxed">
                        445, Madhavaram Red Hills Rd,
                        <br />
                        Moolakadai, Madhavaram,
                        <br />
                        Chennai, Tamil Nadu 600060
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 group">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-transform">
                      📞
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 mb-1 text-lg">
                        Phone
                      </p>
                      <a
                        href="tel:07200210022"
                        className="text-[#7fb3a0] hover:text-[#5a9179] text-2xl font-bold block"
                      >
                        072002 10022
                      </a>
                      <p className="text-sm text-gray-600 mt-1">
                        Call us for appointments
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 group">
                    <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-transform">
                      ⏰
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 mb-1 text-lg">
                        Opening Hours
                      </p>
                      <p className="text-gray-700">
                        Monday - Friday: 10 AM - 8 PM
                      </p>
                      <p className="text-gray-700">Saturday: 10 AM - 6 PM</p>
                      <p className="text-gray-700">Sunday: 10 AM - 2 PM</p>
                    </div>
                  </div>
                </div>
              </div>
              <a
                href="tel:07200210022"
                className="group flex items-center justify-center gap-2 md:gap-3 w-full bg-gradient-to-r from-[#7fb3a0] to-[#5a9179] text-white px-4 py-4 md:px-8 md:py-5 rounded-full hover:shadow-2xl transition-all font-bold text-sm md:text-lg"
              >
                <span className="text-xl md:text-2xl">📞</span>
                <span className="truncate">Call Now to Book</span>
                <span className="group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </a>
            </div>
            <div className="h-[300px] md:h-[600px] rounded-2xl md:rounded-3xl overflow-hidden shadow-xl md:shadow-2xl border-2 md:border-4 border-white relative w-full max-w-full">
              <Image
                src="/Screenshot 2026-05-30 225733.png"
                alt="EDEN Dental Clinic Interior"
                fill
                className="object-cover"
                style={{ objectPosition: "center 45%" }}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#7fb3a0] to-[#5a9179]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready for Your Best Smile?
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Book your appointment today and experience the EDEN difference. Your
            journey to a confident, beautiful smile starts here.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:07200210022"
              className="bg-white text-[#7fb3a0] px-10 py-5 rounded-full hover:shadow-2xl transition-all font-bold text-lg"
            >
              📞 Call: 072002 10022
            </a>
            <a
              href="#services"
              className="border-2 border-white text-white px-10 py-5 rounded-full hover:bg-white hover:text-[#7fb3a0] transition-all font-bold text-lg"
            >
              View Services
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#7fb3a0] to-[#5a9179] rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white text-2xl font-bold">E</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold">EDEN Dental</h3>
                  <p className="text-sm text-gray-400">& Esthetics</p>
                </div>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Your trusted partner for beautiful, healthy smiles in Chennai.
                Women-owned, family-friendly, and committed to excellence.
              </p>
              <div className="flex items-center gap-3">
                <div className="bg-yellow-500 text-gray-900 px-4 py-2 rounded-full font-bold text-sm">
                  ⭐ 5.0 Rating
                </div>
                <div className="bg-[#7fb3a0] text-white px-4 py-2 rounded-full font-bold text-sm">
                  185+ Reviews
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Quick Links</h4>
              <div className="space-y-3">
                <a
                  href="#home"
                  className="block text-gray-400 hover:text-[#7fb3a0] transition-colors"
                >
                  Home
                </a>
                <a
                  href="#services"
                  className="block text-gray-400 hover:text-[#7fb3a0] transition-colors"
                >
                  Services
                </a>
                <a
                  href="#why-us"
                  className="block text-gray-400 hover:text-[#7fb3a0] transition-colors"
                >
                  Why Choose Us
                </a>
                <a
                  href="#testimonials"
                  className="block text-gray-400 hover:text-[#7fb3a0] transition-colors"
                >
                  Testimonials
                </a>
                <a
                  href="#contact"
                  className="block text-gray-400 hover:text-[#7fb3a0] transition-colors"
                >
                  Contact
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Contact Us</h4>
              <div className="space-y-3 text-gray-400">
                <p className="flex items-start gap-2">
                  <span>📍</span>
                  <span>445, Madhavaram Red Hills Rd, Chennai 600060</span>
                </p>
                <p className="flex items-center gap-2">
                  <span>📞</span>
                  <a
                    href="tel:07200210022"
                    className="hover:text-[#7fb3a0] transition-colors font-semibold"
                  >
                    072002 10022
                  </a>
                </p>
                <p className="flex items-center gap-2">
                  <span>⏰</span>
                  <span>Mon-Fri: 10 AM - 8 PM</span>
                </p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-400 text-center mb-4">
              &copy; 2024 EDEN Dental & Esthetics. All rights reserved. |
              Women-Owned & Proudly Serving Chennai
            </p>
            <div className="flex justify-center">
              <a
                href="https://zorivo.in"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 bg-gradient-to-r from-gray-800 to-gray-700 hover:from-[#7fb3a0] hover:to-[#5a9179] px-4 py-2.5 rounded-full transition-all shadow-lg"
              >
                <span className="text-xl">🚀</span>
                <span className="text-white font-semibold text-sm whitespace-nowrap">
                  Created by Zorivo
                </span>
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Chatbot */}
      <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50">
        {isChatOpen && (
          <div className="mb-4 w-[calc(100vw-2rem)] sm:w-96 h-[500px] max-h-[80vh] bg-white rounded-3xl shadow-2xl border border-gray-200 flex flex-col overflow-hidden">
            {/* Chat Header */}
            <div className="bg-gradient-to-r from-[#7fb3a0] to-[#5a9179] p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                  <span className="text-2xl">🦷</span>
                </div>
                <div>
                  <p className="text-white font-bold">EDEN Dental</p>
                  <p className="text-white/80 text-xs">Online now</p>
                </div>
              </div>
              <button
                onClick={() => setIsChatOpen(false)}
                className="text-white hover:bg-white/20 rounded-full p-2 transition-colors"
              >
                ✕
              </button>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex ${
                    msg.type === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-2xl ${
                      msg.type === "user"
                        ? "bg-gradient-to-r from-[#7fb3a0] to-[#5a9179] text-white"
                        : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    <p className="text-sm">{msg.text}</p>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Replies */}
            <div className="p-3 border-t border-gray-200 bg-gray-50">
              <div className="flex flex-wrap gap-2 mb-3">
                {quickReplies.map((reply, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSendMessage(reply.text)}
                    className="text-xs bg-white border border-[#7fb3a0] text-[#7fb3a0] px-3 py-1.5 rounded-full hover:bg-[#7fb3a0] hover:text-white transition-colors"
                  >
                    {reply.text}
                  </button>
                ))}
              </div>

              {/* Input */}
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={(e) =>
                    e.key === "Enter" && handleSendMessage(inputMessage)
                  }
                  placeholder="Type a message..."
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:border-[#7fb3a0] text-sm"
                />
                <button
                  onClick={() => handleSendMessage(inputMessage)}
                  className="bg-gradient-to-r from-[#7fb3a0] to-[#5a9179] text-white p-2 rounded-full hover:shadow-lg transition-all w-10 h-10 flex items-center justify-center"
                >
                  ➤
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Chat Button */}
        <button
          onClick={() => setIsChatOpen(!isChatOpen)}
          className="bg-gradient-to-r from-[#7fb3a0] to-[#5a9179] text-white w-16 h-16 rounded-full shadow-2xl hover:shadow-3xl transition-all flex items-center justify-center hover:scale-110"
        >
          {isChatOpen ? (
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z" />
              <circle cx="12" cy="10" r="1.5" />
              <circle cx="8" cy="10" r="1.5" />
              <circle cx="16" cy="10" r="1.5" />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
}
