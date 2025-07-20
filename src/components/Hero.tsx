import React from 'react';
import { ArrowRight, TrendingUp, Users, Zap } from 'lucide-react';

const Hero = () => {
  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-20 pb-16 min-h-screen flex items-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-cyan-50"></div>
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-blue-100 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-cyan-100 rounded-full opacity-20 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
                <Zap className="h-4 w-4" />
                <span>Empowering Businesses Through Technology</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Transform Your
                <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent"> Business</span>
                <br />
                with Digital Excellence
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                At Catalyze Digital Consulting, we specialize in empowering businesses through technology. 
                Our tailored solutions in Salesforce, AI, and Marketing help drive growth, streamline processes, 
                and enhance customer experiences.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToServices}
                className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-4 rounded-lg hover:shadow-xl transition-all duration-300 font-semibold flex items-center justify-center space-x-2 group"
              >
                <span>Explore Our Services</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button
                onClick={scrollToContact}
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg hover:border-blue-500 hover:text-blue-600 transition-all duration-300 font-semibold"
              >
                Get Free Consultation
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 mb-2">150+</div>
                <div className="text-gray-600 text-sm">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 mb-2">95%</div>
                <div className="text-gray-600 text-sm">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 mb-2">24/7</div>
                <div className="text-gray-600 text-sm">Support Available</div>
              </div>
            </div>
          </div>

          {/* Visual Elements */}
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl p-8 shadow-2xl">
              <div className="space-y-6">
                <div className="flex items-center space-x-4 bg-white/20 rounded-lg p-4">
                  <div className="bg-white rounded-lg p-3">
                    <TrendingUp className="h-8 w-8 text-blue-600" />
                  </div>
                  <div className="text-white">
                    <div className="font-semibold">Revenue Growth</div>
                    <div className="text-white/80 text-sm">Average 40% increase</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 bg-white/20 rounded-lg p-4">
                  <div className="bg-white rounded-lg p-3">
                    <Users className="h-8 w-8 text-cyan-600" />
                  </div>
                  <div className="text-white">
                    <div className="font-semibold">Customer Satisfaction</div>
                    <div className="text-white/80 text-sm">98% retention rate</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 bg-white/20 rounded-lg p-4">
                  <div className="bg-white rounded-lg p-3">
                    <Zap className="h-8 w-8 text-orange-500" />
                  </div>
                  <div className="text-white">
                    <div className="font-semibold">Process Automation</div>
                    <div className="text-white/80 text-sm">Up to 70% time saved</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;