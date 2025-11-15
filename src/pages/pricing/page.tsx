
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import { Link } from 'react-router-dom';

export default function Pricing() {
  const pricingPlans = [
    {
      name: 'Basic Walk',
      duration: '30 minutes',
      price: '$20',
      period: 'per walk',
      description: 'Perfect for quick exercise and bathroom breaks',
      features: [
        'Group walks (max 4 dogs)',
        '30-minute exercise session',
        'Basic photo updates',
        'Flexible scheduling',
        'Weekend availability',
        'Experienced walkers'
      ],
      popular: false,
      icon: 'ri-walk-line',
      color: 'gray'
    },
    {
      name: 'Standard Walk',
      duration: '45 minutes',
      price: '$25',
      period: 'per walk',
      description: 'Most popular choice for daily exercise needs',
      features: [
        'Individual or small group walks',
        '45-minute exercise session',
        'Detailed photo updates',
        'Custom route planning',
        'Fresh water provided',
        'Post-walk reports',
        'Priority scheduling'
      ],
      popular: true,
      icon: 'ri-heart-pulse-line',
      color: 'blue'
    },
    {
      name: 'Premium Walk',
      duration: '60 minutes',
      price: '$35',
      period: 'per walk',
      description: 'Extended care with premium attention and activities',
      features: [
        'One-on-one personalized walks',
        '60-minute extended session',
        'Video updates available',
        'Interactive games & fetch',
        'Basic training reinforcement',
        'Socialization activities',
        'Emergency contact priority',
        'Weather protection gear'
      ],
      popular: false,
      icon: 'ri-vip-crown-line',
      color: 'green'
    }
  ];

  const additionalServices = [
    {
      name: 'Puppy Care',
      price: '$18',
      description: 'Special care for puppies including potty breaks and gentle exercise',
      duration: '20-30 minutes',
      icon: 'ri-heart-line'
    },
    {
      name: 'Senior Dog Care',
      price: '$28',
      description: 'Gentle exercise and specialized care for older dogs',
      duration: '30-45 minutes',
      icon: 'ri-wheelchair-line'
    },
    {
      name: 'Pet Sitting',
      price: '$40',
      description: 'In-home care including feeding, companionship, and basic tasks',
      duration: '45-60 minutes',
      icon: 'ri-home-heart-line'
    },
    {
      name: 'Emergency Visits',
      price: '$50',
      description: 'Same-day urgent care visits for unexpected situations',
      duration: '30-60 minutes',
      icon: 'ri-alarm-warning-line'
    }
  ];

  const addOns = [
    { name: 'Additional Dog', price: '+$10', description: 'Add another dog from your household' },
    { name: 'Weekend/Holiday', price: '+$5', description: 'Weekend and holiday surcharge' },
    { name: 'Last Minute Booking', price: '+$8', description: 'Same-day booking (subject to availability)' },
    { name: 'Extended Time', price: '+$15', description: 'Add extra 30 minutes to any service' },
    { name: 'Medication Admin', price: '+$5', description: 'Give prescribed medications' },
    { name: 'Basic Grooming', price: '+$12', description: 'Brushing and basic grooming care' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="relative py-24 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(20, 184, 166, 0.15), rgba(59, 130, 246, 0.25)), url('https://readdy.ai/api/search-image?query=Happy%20golden%20retriever%20and%20border%20collie%20walking%20together%20with%20professional%20dog%20walker%20in%20beautiful%20park%20setting%2C%20premium%20pet%20care%20service%2C%20sunny%20day%20with%20green%20trees%2C%20clean%20modern%20aesthetic%2C%20high-quality%20professional%20photography%20with%20soft%20natural%20lighting%2C%20peaceful%20atmosphere&width=1920&height=600&seq=pricing-hero&orientation=landscape')`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed font-light">
            Quality dog care services at affordable rates. No hidden fees, no long-term contracts required.
          </p>
        </div>
      </section>

      {/* Main Pricing Plans */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Choose Your Perfect Plan</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Professional dog walking services designed to fit your schedule and your pet's needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${plan.popular ? 'ring-2 ring-blue-500 scale-105' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-teal-500 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="p-8">
                  <div className="text-center mb-8">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-teal-100 rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-md">
                      <i className={`${plan.icon} text-3xl text-blue-600`}></i>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                    <div className="text-sm text-gray-500 mb-4 bg-gray-100 px-3 py-1 rounded-full inline-block">
                      {plan.duration}
                    </div>
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                      <span className="text-gray-600 ml-2">{plan.period}</span>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{plan.description}</p>
                  </div>

                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature, i) => (
                      <div key={i} className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-0.5 shadow-sm">
                          <i className="ri-check-line text-green-600 text-sm"></i>
                        </div>
                        <span className="text-gray-700 leading-relaxed">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    to="/book-walk"
                    className={`block w-full text-center py-4 rounded-2xl font-semibold transition-all duration-300 cursor-pointer whitespace-nowrap shadow-md hover:shadow-lg transform hover:scale-105 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-white'
                        : 'bg-gray-900 hover:bg-gray-800 text-white'
                    }`}
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          {/* Package Discounts */}
          <div className="mt-16 text-center">
            <div className="bg-blue-50 rounded-2xl p-8 border border-blue-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Package Discounts Available</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <i className="ri-calendar-line text-blue-600 text-xl"></i>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Weekly Package</h4>
                  <p className="text-green-600 font-bold text-lg">Save 10%</p>
                  <p className="text-gray-600 text-sm">3+ walks per week</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <i className="ri-calendar-check-line text-green-600 text-xl"></i>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Daily Package</h4>
                  <p className="text-green-600 font-bold text-lg">Save 15%</p>
                  <p className="text-gray-600 text-sm">5+ walks per week</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <i className="ri-vip-crown-line text-purple-600 text-xl"></i>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Premium Plan</h4>
                  <p className="text-green-600 font-bold text-lg">Save 20%</p>
                  <p className="text-gray-600 text-sm">Monthly commitment</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Additional Services</h2>
            <p className="text-xl text-gray-600">Specialized care options to meet unique needs and situations</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalServices.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 transform hover:-translate-y-1">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-teal-100 to-blue-100 rounded-xl flex items-center justify-center mb-4 mx-auto shadow-md">
                    <i className={`${service.icon} text-2xl text-teal-600`}></i>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.name}</h3>
                  <div className="text-2xl font-bold text-blue-600 mb-2">{service.price}</div>
                  <div className="text-xs text-gray-500 mb-3 bg-gray-100 px-2 py-1 rounded-full">
                    {service.duration}
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{service.description}</p>
                  <Link
                    to="/book-walk"
                    className="bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-white px-4 py-2 rounded-xl font-semibold transition-all duration-300 cursor-pointer whitespace-nowrap shadow-md hover:shadow-lg transform hover:scale-105 text-sm"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Service Add-ons</h2>
            <p className="text-xl text-gray-600">Customize your service with these additional options</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {addOns.map((addon, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-lg font-semibold text-gray-900">{addon.name}</h3>
                  <span className="text-xl font-bold text-blue-600">{addon.price}</span>
                </div>
                <p className="text-gray-600 text-sm">{addon.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Pricing Questions</h2>
            <p className="text-xl text-gray-600">Common questions about our pricing and policies</p>
          </div>
          
          <div className="space-y-6">
            {[
              {
                question: "Do you offer package discounts?",
                answer: "Yes! We offer discounts for regular weekly services. Book 3+ walks per week and save 10%, or book 5+ walks per week and save 15%. Perfect for busy professionals who need consistent care."
              },
              {
                question: "What's included in the base price?",
                answer: "All our services include basic exercise, fresh water, waste cleanup, and photo updates. We also provide leashes and waste bags if needed. Additional services like medication administration or grooming are available as add-ons."
              },
              {
                question: "How do you handle cancellations?",
                answer: "We require 24-hour notice for cancellations to avoid charges. Emergency cancellations are handled case-by-case. We understand that plans change and try to be as flexible as possible with our valued clients."
              },
              {
                question: "Do you offer holiday and emergency services?",
                answer: "Yes, we provide services on most holidays and offer emergency visits when possible. Holiday services include a small surcharge. For emergency situations, please call our emergency line for immediate assistance."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-teal-600 to-blue-700">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-teal-100 mb-10 leading-relaxed">
            Book your first walk today and see why hundreds of pet parents trust us with their furry family members
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              to="/book-walk"
              className="bg-white hover:bg-gray-100 text-blue-600 px-10 py-4 rounded-2xl text-lg font-semibold transition-all duration-300 cursor-pointer whitespace-nowrap shadow-xl hover:shadow-2xl transform hover:scale-105"
            >
              Book Your First Walk
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white hover:bg-white hover:text-blue-600 text-white px-10 py-4 rounded-2xl text-lg font-semibold transition-all duration-300 cursor-pointer whitespace-nowrap shadow-lg hover:shadow-xl"
            >
              Ask Questions
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
