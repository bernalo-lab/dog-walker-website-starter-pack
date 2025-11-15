
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import { Link } from 'react-router-dom';

export default function ServiceAreas() {
  const areas = [
    {
      name: 'Downtown Core',
      description: 'Financial district, shopping areas, and high-rise residential buildings',
      coverage: 'Full Coverage',
      responseTime: '15-30 minutes',
      features: ['Urban parks access', 'High-rise friendly', 'Business district walks'],
      popular: true
    },
    {
      name: 'Riverside District',
      description: 'Waterfront communities with parks and walking trails',
      coverage: 'Full Coverage',
      responseTime: '20-35 minutes',
      features: ['Waterfront trails', 'Large park access', 'Scenic routes'],
      popular: true
    },
    {
      name: 'Hillside Neighborhoods',
      description: 'Residential areas with tree-lined streets and local parks',
      coverage: 'Full Coverage',
      responseTime: '25-40 minutes',
      features: ['Quiet residential streets', 'Neighborhood parks', 'Family-friendly areas'],
      popular: false
    },
    {
      name: 'University Area',
      description: 'Student housing and academic buildings near the campus',
      coverage: 'Full Coverage',
      responseTime: '20-30 minutes',
      features: ['Campus green spaces', 'Student-friendly pricing', 'Flexible scheduling'],
      popular: false
    },
    {
      name: 'Suburban Outskirts',
      description: 'Newer developments and suburban communities',
      coverage: 'Limited Coverage',
      responseTime: '30-45 minutes',
      features: ['Suburban parks', 'Quiet neighborhoods', 'Larger yards'],
      popular: false
    },
    {
      name: 'Industrial Zone',
      description: 'Mixed-use areas with warehouses and light industrial',
      coverage: 'Limited Coverage',
      responseTime: '35-50 minutes',
      features: ['Open spaces', 'Less crowded', 'Unique walking routes'],
      popular: false
    }
  ];

  const landmarks = [
    {
      name: 'Central Park',
      type: 'Large Park',
      description: 'Our most popular destination with off-leash areas and water features',
      amenities: ['Off-leash zones', 'Water fountains', 'Agility equipment', 'Waste stations'],
      icon: 'ri-tree-line'
    },
    {
      name: 'Riverside Trail',
      type: 'Walking Trail',
      description: '3-mile paved trail perfect for longer walks and scenic views',
      amenities: ['Paved paths', 'Scenic views', 'Multiple entry points', 'Rest areas'],
      icon: 'ri-road-map-line'
    },
    {
      name: 'Neighborhood Commons',
      type: 'Community Park',
      description: 'Smaller parks throughout residential areas for quick visits',
      amenities: ['Grass areas', 'Benches', 'Shade trees', 'Local access'],
      icon: 'ri-community-line'
    },
    {
      name: 'Dog Beach Access',
      type: 'Beach Area',
      description: 'Seasonal access to dog-friendly beach areas (summer months)',
      amenities: ['Sand play area', 'Water access', 'Rinse stations', 'Parking available'],
      icon: 'ri-sun-line'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="relative py-24 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=Professional%20dog%20walker%20with%20multiple%20dogs%20in%20a%20beautiful%20city%20neighborhood%20with%20tree-lined%20streets%2C%20parks%20visible%20in%20background%2C%20golden%20hour%20lighting%2C%20modern%20urban%20setting%20with%20green%20spaces%2C%20clean%20and%20inviting%20atmosphere%2C%20premium%20lifestyle%20photography&width=1920&height=600&seq=service-hero&orientation=landscape')`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-teal-600/80 to-blue-600/80"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Service Areas</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed opacity-95">
            Trusted dog walking services across the metropolitan area. Find your neighborhood and discover the best walking spots for your furry friend.
          </p>
        </div>
      </section>

      {/* Interactive Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Coverage Map</h2>
            <p className="text-xl text-gray-600">Interactive map showing our service areas and popular walking destinations</p>
          </div>
          
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="relative h-96 bg-gradient-to-br from-blue-50 to-teal-50 flex items-center justify-center">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387190.2799160891!2d-74.25987368715491!3d40.697670063539654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sus!4v1635959542742!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-3xl"
              ></iframe>
            </div>
            
            <div className="p-8 bg-white">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <i className="ri-map-pin-fill text-green-600 text-2xl"></i>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">15+ Neighborhoods</h3>
                  <p className="text-gray-600">Comprehensive coverage across the metro area</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <i className="ri-time-fill text-blue-600 text-2xl"></i>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Quick Response</h3>
                  <p className="text-gray-600">Average 25-minute response time</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <i className="ri-route-fill text-teal-600 text-2xl"></i>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">25+ Parks & Trails</h3>
                  <p className="text-gray-600">Access to the best walking destinations</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Areas We Serve</h2>
            <p className="text-xl text-gray-600">Detailed coverage information for each neighborhood</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {areas.map((area, index) => (
              <div key={index} className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border ${area.popular ? 'border-blue-200 ring-2 ring-blue-100' : 'border-gray-100'}`}>
                {area.popular && (
                  <div className="inline-flex items-center bg-gradient-to-r from-teal-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
                    <i className="ri-star-fill mr-2"></i>
                    Popular Area
                  </div>
                )}
                
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-teal-100 to-blue-100 rounded-full flex items-center justify-center mr-4">
                    <i className="ri-map-pin-line text-teal-600 text-xl"></i>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{area.name}</h3>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">{area.description}</p>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <span className="text-gray-700 font-medium">Coverage:</span>
                    <span className={`font-semibold px-3 py-1 rounded-full text-sm ${area.coverage === 'Full Coverage' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                      {area.coverage}
                    </span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <span className="text-gray-700 font-medium">Response Time:</span>
                    <span className="font-semibold text-gray-900">{area.responseTime}</span>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900 flex items-center">
                    <i className="ri-check-double-line text-teal-600 mr-2"></i>
                    Features:
                  </h4>
                  {area.features.map((feature, i) => (
                    <div key={i} className="flex items-center space-x-3">
                      <div className="w-5 h-5 bg-teal-100 rounded-full flex items-center justify-center">
                        <i className="ri-check-line text-teal-600 text-sm"></i>
                      </div>
                      <span className="text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Popular Walking Destinations</h2>
            <p className="text-xl text-gray-600">The best spots where we love to take your dogs for exercise and fun</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {landmarks.map((landmark, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center">
                      <div className="w-14 h-14 bg-gradient-to-r from-teal-100 to-blue-100 rounded-xl flex items-center justify-center mr-4">
                        <i className={`${landmark.icon} text-teal-600 text-2xl`}></i>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{landmark.name}</h3>
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                          {landmark.type}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">{landmark.description}</p>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                      <i className="ri-service-line text-teal-600 mr-2"></i>
                      Available Amenities:
                    </h4>
                    <div className="grid grid-cols-2 gap-3">
                      {landmark.amenities.map((amenity, i) => (
                        <div key={i} className="flex items-center space-x-2">
                          <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                            <i className="ri-check-line text-green-600 text-sm"></i>
                          </div>
                          <span className="text-gray-600 text-sm">{amenity}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Expansion CTA */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Don't See Your Area?</h2>
          <p className="text-xl mb-8 leading-relaxed opacity-95">
            We're constantly expanding our service areas based on demand. If your neighborhood isn't listed, let us know! We may be able to accommodate special requests or add your area to our expansion plans.
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl mb-8">
            <h3 className="text-2xl font-semibold mb-6">How to Request Service in Your Area</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <i className="ri-phone-line text-white text-2xl"></i>
                </div>
                <h4 className="font-semibold mb-2">1. Contact Us</h4>
                <p className="text-white/90 text-sm">Call or email with your location details and service needs</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <i className="ri-search-line text-white text-2xl"></i>
                </div>
                <h4 className="font-semibold mb-2">2. Area Assessment</h4>
                <p className="text-white/90 text-sm">We'll evaluate feasibility, demand, and local resources</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <i className="ri-notification-line text-white text-2xl"></i>
                </div>
                <h4 className="font-semibold mb-2">3. Service Launch</h4>
                <p className="text-white/90 text-sm">Get notified when we expand to your neighborhood</p>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-teal-600 hover:bg-gray-50 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 cursor-pointer whitespace-nowrap shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Request Service Area
            </Link>
            <Link
              to="/book-walk"
              className="bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 cursor-pointer whitespace-nowrap border border-white/30"
            >
              Book in Current Areas
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-teal-600 mb-2">15+</div>
              <div className="text-gray-600">Neighborhoods Served</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">25+</div>
              <div className="text-gray-600">Parks & Trails</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-teal-600 mb-2">500+</div>
              <div className="text-gray-600">Happy Dogs</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">25min</div>
              <div className="text-gray-600">Avg Response Time</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
