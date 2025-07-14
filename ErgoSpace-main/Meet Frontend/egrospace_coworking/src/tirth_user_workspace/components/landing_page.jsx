import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../index.css';

const LandingPage = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Promotional Banner */}
      <div className="bg-blue-600 text-white py-2 px-4 text-center">
        <p className="text-sm font-medium">Join us 24th-28th June 2024 for a free week of coworking</p>
      </div>

      {/* Header */}
      <header className="bg-blue-900 sticky top-0 z-50 shadow-lg border-b border-blue-800">
        <div className="container mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center group">
              <div className="bg-blue-600 text-white font-bold rounded-sm w-10 h-10 flex items-center justify-center text-xl mr-2 transition-all group-hover:bg-blue-500">E</div>
              <div>
                <span className="text-2xl font-bold text-white tracking-tight">ERGO-SPACE</span>
                <span className="block text-xs text-blue-300 font-medium">Coworking & Innovation</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-10">
              <div className="relative group">
                <button className="text-gray-100 hover:text-white font-medium flex items-center py-2 transition-colors">
                  <span className="group-hover:text-white relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-blue-400 group-hover:after:w-full after:transition-all after:duration-300">Workspace</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 transition-transform group-hover:rotate-180 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="absolute left-0 top-full w-48 bg-white shadow-xl rounded-md p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-left group-hover:translate-y-0 translate-y-1 z-50">
                  <Link to="#" className="block px-4 py-2 text-blue-900 hover:bg-blue-50 hover:text-blue-600 rounded-md">Hot Desking</Link>
                  <Link to="#" className="block px-4 py-2 text-blue-900 hover:bg-blue-50 hover:text-blue-600 rounded-md">Dedicated Desks</Link>
                  <Link to="#" className="block px-4 py-2 text-blue-900 hover:bg-blue-50 hover:text-blue-600 rounded-md">Private Offices</Link>
                </div>
              </div>
              <div className="relative group">
                <button className="text-gray-100 hover:text-white font-medium flex items-center py-2 transition-colors">
                  <span className="group-hover:text-white relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-blue-400 group-hover:after:w-full after:transition-all after:duration-300">Memberships</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 transition-transform group-hover:rotate-180 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="absolute left-0 top-full w-48 bg-white shadow-xl rounded-md p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-left group-hover:translate-y-0 translate-y-1 z-50">
                  <Link to="#" className="block px-4 py-2 text-blue-900 hover:bg-blue-50 hover:text-blue-600 rounded-md">Daily Pass</Link>
                  <Link to="#" className="block px-4 py-2 text-blue-900 hover:bg-blue-50 hover:text-blue-600 rounded-md">Monthly</Link>
                  <Link to="#" className="block px-4 py-2 text-blue-900 hover:bg-blue-50 hover:text-blue-600 rounded-md">Annual</Link>
                </div>
              </div>
              <div className="relative group">
                <button className="text-gray-100 hover:text-white font-medium flex items-center py-2 transition-colors">
                  <span className="group-hover:text-white relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-blue-400 group-hover:after:w-full after:transition-all after:duration-300">Innovation Programmes</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 transition-transform group-hover:rotate-180 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="absolute left-0 top-full w-48 bg-white shadow-xl rounded-md p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-left group-hover:translate-y-0 translate-y-1 z-50">
                  <Link to="#" className="block px-4 py-2 text-blue-900 hover:bg-blue-50 hover:text-blue-600 rounded-md">Events</Link>
                  <Link to="#" className="block px-4 py-2 text-blue-900 hover:bg-blue-50 hover:text-blue-600 rounded-md">Accelerator</Link>
                  <Link to="#" className="block px-4 py-2 text-blue-900 hover:bg-blue-50 hover:text-blue-600 rounded-md">Workshops</Link>
                </div>
              </div>
              <div className="relative group">
                <button className="text-gray-100 hover:text-white font-medium flex items-center py-2 transition-colors">
                  <span className="group-hover:text-white relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-blue-400 group-hover:after:w-full after:transition-all after:duration-300">About</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 transition-transform group-hover:rotate-180 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="absolute left-0 top-full w-48 bg-white shadow-xl rounded-md p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-left group-hover:translate-y-0 translate-y-1 z-50">
                  <Link to="#" className="block px-4 py-2 text-blue-900 hover:bg-blue-50 hover:text-blue-600 rounded-md">Our Story</Link>
                  <Link to="#" className="block px-4 py-2 text-blue-900 hover:bg-blue-50 hover:text-blue-600 rounded-md">Team</Link>
                  <Link to="#" className="block px-4 py-2 text-blue-900 hover:bg-blue-50 hover:text-blue-600 rounded-md">Contact</Link>
                </div>
              </div>
            </nav>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={toggleMobileMenu}
                className="text-white hover:text-blue-300 focus:outline-none"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isMobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>

            {/* CTA Button */}
            <div className="hidden md:flex items-center space-x-6">
              <Link to="#" className="text-blue-300 hover:text-white font-medium transition-colors">Contact</Link>
              <Link
                to="/login"
                className="bg-white text-blue-900 px-6 py-2 rounded-sm font-medium hover:bg-blue-100 transition-colors shadow-sm hover:shadow relative overflow-hidden group"
              >
                <span className="relative z-10">Login</span>
              </Link>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-3 pb-4 border-t border-blue-800 pt-2">
              <div className="space-y-3">
                <button className="text-white hover:text-blue-300 font-medium block w-full text-left py-2">Workspace</button>
                <button className="text-white hover:text-blue-300 font-medium block w-full text-left py-2">Memberships</button>
                <button className="text-white hover:text-blue-300 font-medium block w-full text-left py-2">Innovation Programmes</button>
                <button className="text-white hover:text-blue-300 font-medium block w-full text-left py-2">About</button>
                <Link
                  to="/login"
                  className="bg-white text-blue-900 px-6 py-2 rounded-sm font-medium hover:bg-blue-100 transition-colors inline-block mt-2"
                >
                  Login
                </Link>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 py-20 px-4 overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' viewBox=\'0 0 100 100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z\' fill=\'%23ffffff\' fill-opacity=\'0.1\' fill-rule=\'evenodd\'/%3E%3C/svg%3E")', backgroundSize: '24px' }}></div>
        </div>

        <div className="container mx-auto relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="max-w-2xl text-center md:text-left mb-12 md:mb-0">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Find Your <span className="text-yellow-400">Perfect</span> Workspace
              </h1>
              <p className="text-xl text-blue-100 max-w-xl mb-8">
                Discover flexible workspace solutions designed to boost productivity and inspire innovation.
              </p>
              
              <div className="flex flex-wrap justify-center md:justify-start gap-4">
                <Link to="/login" className="bg-white text-blue-900 py-3 px-8 rounded-md font-semibold hover:bg-yellow-400 hover:text-blue-900 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  Book a Tour
                </Link>
                <Link to="#" className="bg-transparent border-2 border-white text-white py-3 px-8 rounded-md font-semibold hover:bg-white/10 transition-all">
                  Explore Memberships
                </Link>
              </div>
            </div>
            
            <div className="hidden md:block w-full max-w-md">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl shadow-2xl border border-white/20">
                <h3 className="text-xl font-bold text-white mb-4">What are you looking for?</h3>
                <div className="space-y-4">
                  <div className="flex items-center bg-white/10 p-3 rounded-lg cursor-pointer hover:bg-white/20 transition-colors">
                    <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center mr-3 text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <span className="text-white font-medium">Workspace Solutions</span>
                  </div>
                  <div className="flex items-center bg-white/10 p-3 rounded-lg cursor-pointer hover:bg-white/20 transition-colors">
                    <div className="w-10 h-10 rounded-full bg-yellow-500 flex items-center justify-center mr-3 text-blue-900">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <span className="text-white font-medium">Innovation Programs</span>
                  </div>
                  <div className="flex items-center bg-white/10 p-3 rounded-lg cursor-pointer hover:bg-white/20 transition-colors">
                    <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center mr-3 text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <span className="text-white font-medium">Community Events</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content - Services Grid */}
      <div className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Workspace Membership */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" 
                alt="Workspace Membership" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Workspace Membership</h3>
                <p className="text-gray-600 mb-4">Flexible desk and office solutions designed to help businesses thrive.</p>
                <Link to="/login" className="text-blue-600 font-medium flex items-center">
                  Learn more
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Innovation Programmes */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1051&q=80" 
                alt="Innovation Programmes" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Innovation Programmes</h3>
                <p className="text-gray-600 mb-4">Support for startups and scaleups to accelerate their growth.</p>
                <Link to="/login" className="text-blue-600 font-medium flex items-center">
                  Learn more
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Meeting Rooms */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1517502884422-41eaead166d4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80" 
                alt="Meeting Rooms" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Meeting Rooms</h3>
                <p className="text-gray-600 mb-4">Professional spaces for meetings, workshops, and presentations.</p>
                <Link to="/login" className="text-blue-600 font-medium flex items-center">
                  Learn more
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Serviced Offices */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1189&q=80" 
                alt="Serviced Offices" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Serviced Offices</h3>
                <p className="text-gray-600 mb-4">Private, fully-equipped office spaces with all amenities included.</p>
                <Link to="/login" className="text-blue-600 font-medium flex items-center">
                  Learn more
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-900 py-12 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to transform your workday?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Book a tour today and experience the ERGO-SPACE difference.
          </p>
          <Link to="/login" className="bg-white text-blue-900 py-3 px-8 rounded-md font-semibold hover:bg-blue-50 transition inline-flex items-center">
            Book a tour
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">ERGO-SPACE</h3>
            <p className="text-gray-400 mb-4">
              Premium workspaces designed for productivity, collaboration, and growth.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Workspace</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Hotdesking</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Dedicated Desks</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Private Offices</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Meeting Rooms</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Event Spaces</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Press</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Location</h3>
            <address className="text-gray-400 not-italic">
              ERGO-SPACE<br />
              123 Innovation Street<br />
              Tech City, TC 10101<br />
              <a href="mailto:info@ergo-space.com" className="text-blue-400 hover:underline mt-2 block">info@ergo-space.com</a>
              <a href="tel:+1234567890" className="text-blue-400 hover:underline block">+1 (234) 567-890</a>
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} ERGO-SPACE. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/login" className="text-gray-400 hover:text-white text-sm">Admin Access</Link>
              <a href="#" className="text-gray-400 hover:text-white text-sm">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
