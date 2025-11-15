import { Link } from 'react-router-dom';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';

export default function Home() {
  const services = [
    {
      icon: 'ri-walk-line',
      title: 'Daily Dog Walks',
      description: 'Regular exercise and outdoor time for your furry friend with experienced walkers.'
    },
    {
      icon: 'ri-group-line',
      title: 'Group Play Sessions',
      description: 'Socialization opportunities with other dogs in a safe, supervised environment.'
    },
    {
      icon: 'ri-heart-pulse-line',
      title: 'Pet Care Check-ins',
      description: 'Wellness checks, feeding, and companionship visits when you\'re away.'
    },
    {
      icon: 'ri-camera-line',
      title: 'Photo Updates',
      description: 'Real-time photos and updates so you know your pet is happy and safe.'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      text: 'Amazing service! My golden retriever Max loves his daily walks with the team. They\'re reliable, caring, and always send cute photos.',
      rating: 5
    },
    {
      name: 'Mike Chen',
      text: 'Professional and trustworthy. I feel completely comfortable leaving my two dogs with Paws & Play. Highly recommend!',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      text: 'The best dog walking service in the city! My rescue pup has become so much more social and happy since starting with them.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="relative h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(20, 184, 166, 0.2), rgba(59, 130, 246, 0.3)), url('https://readdy.ai/api/search-image?query=Professional%20dog%20walker%20with%20multiple%20happy%20dogs%20of%20different%20breeds%20walking%20on%20a%20beautiful%20tree-lined%20path%20in%20a%20premium%20neighborhood%20park%2C%20golden%20hour%20lighting%2C%20peaceful%20and%20serene%20atmosphere%2C%20high-quality%20professional%20photography%20with%20soft%20natural%20lighting%2C%20clean%20modern%20aesthetic%2C%20joyful%20pets%20and%20caring%20service%2C%20luxury%20pet%20care%20experience&width=1920&height=1080&seq=premium-hero&orientation=landscape')`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/30"></div>
        <div className="relative z-10 text-center text-white px-6 max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight tracking-tight">
            Trusted Dog Walkers for Happy, Healthy Pets
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-white/90 font-light leading-relaxed max-w-3xl mx-auto">
            Daily exercise, love, and care from vetted local dog walkers.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              to="/book-walk"
              className="bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-white px-10 py-4 rounded-full text-lg font-semibold transition-all duration-300 cursor-pointer whitespace-nowrap shadow-2xl hover:shadow-teal-500/25 transform hover:scale-105"
            >
              Book Now
            </Link>
            <Link
              to="/pricing"
              className="bg-white/90 backdrop-blur-sm hover:bg-white text-gray-900 px-10 py-4 rounded-full text-lg font-semibold transition-all duration-300 cursor-pointer whitespace-nowrap shadow-2xl hover:shadow-xl transform hover:scale-105"
            >
              View Prices
            </Link>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Paws & Play?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide professional, reliable, and loving care for your pets with personalized attention and peace of mind
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <i className={`${service.icon} text-2xl text-blue-600`}></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">{service.title}</h3>
                <p className="text-gray-600 text-center leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Experienced & Caring Dog Walkers</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our team of professional dog walkers are passionate pet lovers with years of experience. We understand that every dog is unique and deserves personalized care and attention.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                    <i className="ri-check-line text-green-600 text-sm"></i>
                  </div>
                  <span className="text-gray-700">Fully insured and bonded</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                    <i className="ri-check-line text-green-600 text-sm"></i>
                  </div>
                  <span className="text-gray-700">Background checked walkers</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                    <i className="ri-check-line text-green-600 text-sm"></i>
                  </div>
                  <span className="text-gray-700">Real-time updates and photos</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                    <i className="ri-check-line text-green-600 text-sm"></i>
                  </div>
                  <span className="text-gray-700">Flexible scheduling options</span>
                </li>
              </ul>
              <Link
                to="/about"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold transition-colors cursor-pointer whitespace-nowrap"
              >
                Learn More About Us
              </Link>
            </div>
            <div className="relative">
              <img
                src="https://readdy.ai/api/search-image?query=Professional%20female%20dog%20walker%20with%20multiple%20happy%20dogs%20on%20leashes%20in%20a%20beautiful%20park%20setting%2C%20diverse%20dog%20breeds%20including%20labrador%20and%20small%20terrier%2C%20sunny%20day%20with%20green%20trees%2C%20caring%20pet%20service%20professional%2C%20warm%20and%20friendly%20atmosphere&width=600&height=400&seq=about-walker&orientation=landscape"
                alt="Professional dog walker with happy dogs"
                className="rounded-2xl shadow-lg object-cover w-full h-96"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Pet Parents Say</h2>
            <p className="text-xl text-gray-600">Don't just take our word for it - hear from our happy customers</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <i key={i} className="ri-star-fill text-yellow-400 text-lg"></i>
                  ))}
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <i className="ri-user-line text-blue-600 text-lg"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-gray-500 text-sm">Happy Pet Parent</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Give Your Dog the Best Care?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Join hundreds of happy pet parents who trust us with their furry family members
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/book-walk"
              className="bg-white hover:bg-gray-100 text-blue-600 px-8 py-4 rounded-full text-lg font-semibold transition-colors cursor-pointer whitespace-nowrap shadow-lg"
            >
              Book Your First Walk
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white hover:bg-white hover:text-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors cursor-pointer whitespace-nowrap"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
