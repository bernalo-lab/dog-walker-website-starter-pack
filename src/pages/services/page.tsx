
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import { Link } from 'react-router-dom';

export default function Services() {
  const mainServices = [
    {
      title: 'Daily Dog Walking',
      description: 'Regular exercise and outdoor adventures for your furry friend with experienced, caring walkers who understand your dog\'s unique needs.',
      features: [
        'Customized walking routes',
        'Fresh water provided',
        'Real-time photo updates',
        'Flexible scheduling',
        'Post-walk reports'
      ],
      icon: 'ri-walk-line',
      duration: '30-60 minutes',
      popular: true
    },
    {
      title: 'Puppy Visits',
      description: 'Specialized care for young puppies including potty breaks, feeding assistance, and gentle socialization in a safe environment.',
      features: [
        'Potty training support',
        'Feeding assistance',
        'Gentle socialization',
        'Age-appropriate exercise',
        'Progress tracking'
      ],
      icon: 'ri-heart-pulse-line',
      duration: '20-30 minutes',
      popular: false
    },
    {
      title: 'Group Walks',
      description: 'Fun socialization opportunities with other friendly dogs in small, carefully supervised groups for maximum safety and enjoyment.',
      features: [
        'Maximum 4 dogs per group',
        'Carefully matched playmates',
        'Supervised social interaction',
        'Group photos and updates',
        'Enhanced socialization'
      ],
      icon: 'ri-group-line',
      duration: '45 minutes',
      popular: false
    },
    {
      title: 'Solo Walks',
      description: 'One-on-one premium attention for dogs who prefer individual care or have special needs requiring personalized service.',
      features: [
        'Individual attention',
        'Customized pace and route',
        'Special needs accommodation',
        'Basic training reinforcement',
        'Detailed progress reports'
      ],
      icon: 'ri-user-heart-line',
      duration: '30-60 minutes',
      popular: false
    },
    {
      title: 'Pet Sitting',
      description: 'Comprehensive in-home care including feeding, companionship, medication administration, and home security checks.',
      features: [
        'In-home companionship',
        'Feeding and fresh water',
        'Medication administration',
        'Basic grooming care',
        'Home security monitoring'
      ],
      icon: 'ri-home-heart-line',
      duration: '45-60 minutes',
      popular: false
    },
    {
      title: 'Dog Park Adventures',
      description: 'Extended off-leash playtime at premium local dog parks with full supervision, transportation, and interactive activities.',
      features: [
        'Off-leash supervised play',
        'Transportation included',
        'Interactive games & fetch',
        'Extended exercise time',
        'Adventure photo albums'
      ],
      icon: 'ri-football-line',
      duration: '60-90 minutes',
      popular: false
    }
  ];

  const additionalServices = [
    {
      name: 'Senior Dog Care',
      description: 'Gentle, specialized care for older dogs with mobility or health considerations',
      icon: 'ri-heart-line'
    },
    {
      name: 'Holiday Pet Care',
      description: 'Extended care during holidays when you\'re away from home',
      icon: 'ri-gift-line'
    },
    {
      name: 'Emergency Visits',
      description: 'Same-day urgent care visits for unexpected situations',
      icon: 'ri-alarm-warning-line'
    },
    {
      name: 'Basic Training Support',
      description: 'Reinforcement of basic commands during walks and visits',
      icon: 'ri-graduation-cap-line'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="relative py-24 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(20, 184, 166, 0.15), rgba(59, 130, 246, 0.25)), url('https://readdy.ai/api/search-image?query=Professional%20dog%20walker%20with%20multiple%20happy%20dogs%20of%20different%20breeds%20walking%20together%20on%20a%20beautiful%20tree-lined%20path%2C%20golden%20hour%20lighting%2C%20peaceful%20park%20setting%2C%20premium%20pet%20care%20service%2C%20warm%20and%20caring%20atmosphere%2C%20high-quality%20photography%20with%20soft%20natural%20lighting&width=1920&height=600&seq=services-hero&orientation=landscape')`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Premium Dog Care Services
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed font-light">
            Comprehensive, professional pet care services designed to keep your furry family members happy, healthy, and well-exercised
          </p>
        </div>
      </section>

      {/* Main Services Grid */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Core Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Professional dog care services tailored to meet your pet's unique needs and your busy lifestyle
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mainServices.map((service, index) => (
              <div key={index} className={`relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 transform hover:-translate-y-2 ${service.popular ? 'ring-2 ring-blue-500 scale-105' : ''}`}>
                {service.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-teal-500 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-teal-100 rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-md">
                    <i className={`${service.icon} text-3xl text-blue-600`}></i>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <div className="flex justify-center items-center mb-6">
                    <span className="flex items-center bg-gray-100 px-4 py-2 rounded-full text-sm text-gray-600">
                      <i className="ri-time-line mr-2"></i>
                      {service.duration}
                    </span>
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
                </div>

                <div className="space-y-4 mb-8">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-0.5 shadow-sm">
                        <i className="ri-check-line text-green-600 text-sm"></i>
                      </div>
                      <span className="text-gray-700 leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="space-y-3">
                  <Link
                    to="/book-walk"
                    className={`block w-full text-center py-4 rounded-2xl font-semibold transition-all duration-300 cursor-pointer whitespace-nowrap shadow-md hover:shadow-lg transform hover:scale-105 ${
                      service.popular
                        ? 'bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-white'
                        : 'bg-gray-900 hover:bg-gray-800 text-white'
                    }`}
                  >
                    Book This Service
                  </Link>
                  <Link
                    to="/pricing"
                    className="block w-full text-center py-2 text-blue-600 hover:text-blue-700 font-medium transition-colors cursor-pointer whitespace-nowrap underline hover:no-underline"
                  >
                    View Pricing
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Additional Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Specialized care options to meet unique needs and situations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalServices.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 transform hover:-translate-y-1">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-teal-100 to-blue-100 rounded-xl flex items-center justify-center mb-6 mx-auto shadow-md">
                    <i className={`${service.icon} text-2xl text-teal-600`}></i>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.name}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">{service.description}</p>
                  <div className="space-y-3">
                    <Link
                      to="/book-walk"
                      className="block w-full bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 cursor-pointer whitespace-nowrap shadow-md hover:shadow-lg transform hover:scale-105 text-center"
                    >
                      Book Now
                    </Link>
                    <Link
                      to="/pricing"
                      className="block w-full text-center py-2 text-blue-600 hover:text-blue-700 font-medium transition-colors cursor-pointer whitespace-nowrap underline hover:no-underline"
                    >
                      View Pricing
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-gradient-to-br from-blue-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">How Our Service Works</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Simple, transparent process to get started with professional dog care
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '1',
                title: 'Book Online',
                description: 'Choose your service and schedule through our easy online booking system',
                icon: 'ri-calendar-check-line'
              },
              {
                step: '2',
                title: 'Meet & Greet',
                description: 'Free consultation to get to know you and your dog\'s specific needs',
                icon: 'ri-hand-heart-line'
              },
              {
                step: '3',
                title: 'Enjoy Service',
                description: 'Relax while we provide excellent, professional care for your pet',
                icon: 'ri-heart-3-line'
              },
              {
                step: '4',
                title: 'Get Updates',
                description: 'Receive photos and detailed reports so you know your pet is happy',
                icon: 'ri-camera-line'
              }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-teal-500 to-blue-600 rounded-2xl flex items-center justify-center mb-4 mx-auto shadow-lg">
                    <i className={`${step.icon} text-2xl text-white`}></i>
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md">
                    <span className="text-sm font-bold text-blue-600">{step.step}</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-teal-600 to-blue-700">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Give Your Dog the Best Care?</h2>
          <p className="text-xl text-teal-100 mb-10 leading-relaxed">
            Join hundreds of happy pet parents who trust us with their furry family members. Professional, reliable, and loving care every time.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              to="/book-walk"
              className="bg-white hover:bg-gray-100 text-blue-600 px-10 py-4 rounded-2xl text-lg font-semibold transition-all duration-300 cursor-pointer whitespace-nowrap shadow-xl hover:shadow-2xl transform hover:scale-105"
            >
              Book Your Service
            </Link>
            <Link
              to="/pricing"
              className="border-2 border-white hover:bg-white hover:text-blue-600 text-white px-10 py-4 rounded-2xl text-lg font-semibold transition-all duration-300 cursor-pointer whitespace-nowrap shadow-lg hover:shadow-xl"
            >
              View All Pricing
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
