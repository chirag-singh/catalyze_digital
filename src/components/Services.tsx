import React, { useState } from 'react';
import { X, ArrowRight, Database, Brain, Search, CheckCircle } from 'lucide-react';

const Services = () => {
  const [selectedService, setSelectedService] = useState<number | null>(null);

  const services = [
    {
      icon: Database,
      title: 'Salesforce Solutions',
      description: 'Transform your customer relationship management with Salesforce. We offer customized Salesforce implementation, integration, and optimization to help you manage and grow your business with ease.',
      gradient: 'from-blue-600 to-blue-800',
      bgGradient: 'from-blue-50 to-blue-100',
      details: {
        fullDescription: 'We help businesses of all sizes implement Salesforce, the world\'s leading CRM platform. Our Salesforce solutions range from initial setup and customization to full-scale integrations. Whether you need to optimize sales processes, improve customer service, or enhance marketing automation, our team ensures your Salesforce system is perfectly aligned with your business objectives.',
        services: [
          'Salesforce Implementation & Customization',
          'Salesforce Integration with third-party applications',
          'Sales Cloud, Service Cloud, and Marketing Cloud solutions',
          'Ongoing Support & Optimization'
        ],
        whyChoose: [
          'Expertise in both technical and strategic Salesforce solutions',
          'Tailored services based on your business needs',
          'Proven track record of successful Salesforce projects'
        ]
      }
    },
    {
      icon: Brain,
      title: 'AI Solutions',
      description: 'Unlock the potential of Artificial Intelligence with cutting-edge solutions. From intelligent agents that drive automation to advanced data analytics, we create AI-driven systems that solve business challenges and boost operational efficiency.',
      gradient: 'from-purple-600 to-pink-600',
      bgGradient: 'from-purple-50 to-pink-50',
      details: {
        fullDescription: 'AI is transforming businesses, and we are at the forefront of this change. Our AI solutions focus on creating intelligent agents for businesses that automate tasks, improve customer service, and enhance decision-making processes. From NLP-powered chatbots to custom AI models, we offer a wide range of AI solutions designed to increase efficiency and drive growth.',
        services: [
          'AI-powered Chatbots & Virtual Agents',
          'Natural Language Processing (NLP) Solutions',
          'Machine Learning & Predictive Analytics',
          'AI-based Process Automation'
        ],
        whyChoose: [
          'Deep expertise in AI technologies like NLP, ML, and data analytics',
          'Ability to integrate AI seamlessly into your business operations',
          'Scalable solutions that grow with your business'
        ]
      }
    },
    {
      icon: Search,
      title: 'Digital Marketing & SEO',
      description: 'Increase your online presence with Digital Marketing strategies tailored to your business needs. Our services include search engine optimization (SEO), content marketing, and social media strategies that help you reach and engage your target audience effectively.',
      gradient: 'from-green-600 to-teal-600',
      bgGradient: 'from-green-50 to-teal-50',
      details: {
        fullDescription: 'In the ever-changing digital landscape, we help you stand out with Digital Marketing solutions tailored to your brand. Our team focuses on driving organic traffic, improving website rankings, and increasing conversions through effective SEO strategies and content marketing.',
        services: [
          'SEO Strategy & Website Optimization',
          'Content Marketing & Blog Management',
          'Social Media Strategy & Paid Ads Campaigns',
          'Conversion Rate Optimization (CRO)'
        ],
        whyChoose: [
          'Data-driven strategies for measurable growth',
          'In-depth SEO analysis and reporting',
          'Ongoing optimization to keep you ahead of competitors'
        ]
      }
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Services</h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            At Catalyze Digital Consulting, we specialize in empowering businesses through technology. 
            Our tailored solutions help drive growth, streamline processes, and enhance customer experiences.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className={`bg-gradient-to-br ${service.bgGradient} p-8 rounded-2xl border border-white shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer`}
                onClick={() => setSelectedService(index)}
              >
                <div className={`bg-gradient-to-r ${service.gradient} w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <IconComponent className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                
                <button className="inline-flex items-center space-x-2 text-gray-700 font-semibold hover:text-gray-900 transition-colors group">
                  <span>Click to Learn More</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* Modal */}
      {selectedService !== null && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              {/* Header */}
              <div className="flex justify-between items-start mb-8">
                <div className="flex items-center space-x-4">
                  <div className={`bg-gradient-to-r ${services[selectedService].gradient} w-16 h-16 rounded-xl flex items-center justify-center`}>
                    {React.createElement(services[selectedService].icon, { className: "h-8 w-8 text-white" })}
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900">{services[selectedService].title}</h3>
                </div>
                <button
                  onClick={() => setSelectedService(null)}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <X className="h-6 w-6 text-gray-500" />
                </button>
              </div>

              {/* Content */}
              <div className="space-y-8">
                <p className="text-lg text-gray-600 leading-relaxed">
                  {services[selectedService].details.fullDescription}
                </p>

                {/* Services List */}
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4">Our services include:</h4>
                  <ul className="space-y-3">
                    {services[selectedService].details.services.map((item, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Why Choose Us */}
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4">Why Choose Us?</h4>
                  <ul className="space-y-3">
                    {services[selectedService].details.whyChoose.map((item, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 border-t">
                  <button
                    onClick={() => {
                      setSelectedService(null);
                      const element = document.getElementById('contact');
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold"
                  >
                    Get Started Today
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Services;