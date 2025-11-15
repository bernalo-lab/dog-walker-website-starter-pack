
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import { Link } from 'react-router-dom';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      location: 'Downtown Core',
      dogName: 'Max',
      dogBreed: 'Golden Retriever',
      rating: 5,
      text: 'Paws & Play has been a lifesaver! Max absolutely loves his daily walks with Jessica. She sends the cutest photos and I can tell he\'s getting great exercise. The team is professional, reliable, and truly cares about the dogs.',
      service: 'Individual Walks',
      duration: '6 months',
      image: 'https://readdy.ai/api/search-image?query=Happy%20professional%20woman%20in%20her%2030s%20with%20warm%20smile%2C%20casual%20business%20attire%2C%20standing%20outdoors%20in%20urban%20setting%2C%20natural%20lighting%2C%20friendly%20and%20approachable%20appearance%2C%20testimonial%20photo%20style&width=300&height=300&seq=sarah-testimonial&orientation=squarish'
    },
    {
      name: 'Mike Chen',
      location: 'Riverside District',
      dogName: 'Luna & Buddy',
      dogBreed: 'Border Collie & Beagle Mix',
      rating: 5,
      text: 'I was hesitant about group walks at first, but Luna and Buddy have made so many friends! The socialization has been incredible for their behavior. Michael is fantastic with the pack and always keeps everyone safe.',
      service: 'Group Walks',
      duration: '1 year',
      image: 'https://readdy.ai/api/search-image?query=Professional%20Asian%20man%20in%20his%2040s%20with%20friendly%20smile%2C%20casual%20outdoor%20clothing%2C%20park%20background%2C%20confident%20and%20satisfied%20expression%2C%20natural%20lighting%2C%20customer%20testimonial%20style&width=300&height=300&seq=mike-testimonial&orientation=squarish'
    },
    {
      name: 'Emily Rodriguez',
      location: 'Hillside Neighborhoods',
      dogName: 'Bella',
      dogBreed: 'Rescue Mix',
      rating: 5,
      text: 'Bella was very anxious when I first adopted her. Sarah\'s patience and gentle approach have helped her become so much more confident. The progress reports are detailed and I love seeing her personality shine through.',
      service: 'Individual Walks',
      duration: '8 months',
      image: 'https://readdy.ai/api/search-image?query=Young%20Hispanic%20woman%20with%20gentle%20smile%2C%20wearing%20casual%20sweater%2C%20outdoor%20setting%20with%20soft%20lighting%2C%20caring%20and%20warm%20expression%2C%20natural%20testimonial%20photo%20style&width=300&height=300&seq=emily-testimonial&orientation=squarish'
    },
    {
      name: 'David Thompson',
      location: 'University Area',
      dogName: 'Charlie',
      dogBreed: 'French Bulldog',
      rating: 5,
      text: 'As a graduate student, I have unpredictable hours. Paws & Play\'s flexible scheduling has been perfect. Charlie gets his exercise even when I\'m stuck in the lab all day. The team is understanding and accommodating.',
      service: 'Flexible Scheduling',
      duration: '4 months',
      image: 'https://readdy.ai/api/search-image?query=Young%20professional%20man%20in%20his%2020s%20with%20glasses%20and%20friendly%20smile%2C%20casual%20academic%20style%20clothing%2C%20university%20campus%20background%2C%20intelligent%20and%20satisfied%20appearance&width=300&height=300&seq=david-testimonial&orientation=squarish'
    },
    {
      name: 'Jennifer Walsh',
      location: 'Downtown Core',
      dogName: 'Rosie',
      dogBreed: 'Senior Labrador',
      rating: 5,
      text: 'Rosie is 12 years old and needs special care. The team\'s senior dog program is wonderful - gentle walks, medication reminders, and lots of love. I feel completely comfortable leaving her in their hands.',
      service: 'Senior Dog Care',
      duration: '10 months',
      image: 'https://readdy.ai/api/search-image?query=Middle-aged%20woman%20with%20kind%20smile%20and%20silver%20hair%2C%20professional%20casual%20attire%2C%20outdoor%20garden%20setting%2C%20caring%20and%20grateful%20expression%2C%20natural%20lighting%2C%20testimonial%20style&width=300&height=300&seq=jennifer-testimonial&orientation=squarish'
    },
    {
      name: 'Alex Kim',
      location: 'Riverside District',
      dogName: 'Zeus',
      dogBreed: 'German Shepherd',
      rating: 5,
      text: 'Zeus is a high-energy dog who needs lots of exercise. The dog park adventures are perfect for him! He comes home tired and happy. The walkers are experienced with large breeds and handle him with confidence.',
      service: 'Dog Park Adventures',
      duration: '7 months',
      image: 'https://readdy.ai/api/search-image?query=Young%20Asian%20man%20with%20confident%20smile%2C%20athletic%20casual%20wear%2C%20park%20setting%20with%20trees%2C%20energetic%20and%20satisfied%20expression%2C%20natural%20outdoor%20lighting%2C%20customer%20photo%20style&width=300&height=300&seq=alex-testimonial&orientation=squarish'
    }
  ];

  const stats = [
    { number: '500+', label: 'Happy Dogs Served' },
    { number: '200+', label: 'Satisfied Families' },
    { number: '4.9/5', label: 'Average Rating' },
    { number: '98%', label: 'Customer Retention' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">What Pet Parents Say</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Hear from real customers about their experiences with Paws & Play Dog Walkers and how we've made a difference in their pets' lives.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Customer Stories</h2>
            <p className="text-xl text-gray-600">Real experiences from our valued pet parent community</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover object-top mr-4"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                    <p className="text-gray-600 text-sm">{testimonial.location}</p>
                    <div className="flex mt-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <i key={i} className="ri-star-fill text-yellow-400 text-sm"></i>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-900">Pet: {testimonial.dogName}</span>
                    <span className="text-sm text-gray-600">{testimonial.dogBreed}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <span>Service: {testimonial.service}</span>
                    <span>Duration: {testimonial.duration}</span>
                  </div>
                </div>
                
                <blockquote className="text-gray-700 leading-relaxed">
                  "{testimonial.text}"
                </blockquote>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonials Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">See Happy Dogs in Action</h2>
            <p className="text-xl text-gray-600">Watch how much our furry clients love their walks and playtime</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="relative h-48 bg-gradient-to-br from-blue-100 to-green-100 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4 mx-auto shadow-lg">
                    <i className="ri-play-fill text-blue-600 text-2xl"></i>
                  </div>
                  <p className="text-gray-700 font-medium">Max's Daily Adventure</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Golden Retriever Playtime</h3>
                <p className="text-gray-600 text-sm">Watch Max enjoy his favorite park with endless energy and joy</p>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="relative h-48 bg-gradient-to-br from-green-100 to-blue-100 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4 mx-auto shadow-lg">
                    <i className="ri-play-fill text-green-600 text-2xl"></i>
                  </div>
                  <p className="text-gray-700 font-medium">Group Walk Fun</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Socialization Success</h3>
                <p className="text-gray-600 text-sm">See how our group walks help dogs make friends and stay active</p>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="relative h-48 bg-gradient-to-br from-yellow-100 to-orange-100 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4 mx-auto shadow-lg">
                    <i className="ri-play-fill text-orange-600 text-2xl"></i>
                  </div>
                  <p className="text-gray-700 font-medium">Senior Dog Care</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Gentle Exercise</h3>
                <p className="text-gray-600 text-sm">Specialized care for older dogs with patience and understanding</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Review Highlights */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Customers Choose Us</h2>
            <p className="text-xl text-gray-600">The most common reasons pet parents love our service</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <i className="ri-heart-line text-blue-600 text-xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Genuine Care & Love</h3>
              <p className="text-gray-600 leading-relaxed">
                "They treat my dog like their own family member. The love and attention is genuine, not just a job."
              </p>
              <div className="mt-4 text-sm text-gray-500">- Mentioned in 89% of reviews</div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <i className="ri-time-line text-green-600 text-xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Reliability & Punctuality</h3>
              <p className="text-gray-600 leading-relaxed">
                "Never missed a walk, always on time, and great communication. I can count on them completely."
              </p>
              <div className="mt-4 text-sm text-gray-500">- Mentioned in 94% of reviews</div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                <i className="ri-camera-line text-purple-600 text-xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Photo Updates & Communication</h3>
              <p className="text-gray-600 leading-relaxed">
                "The photos and updates give me peace of mind. I love seeing my dog happy and having fun."
              </p>
              <div className="mt-4 text-sm text-gray-500">- Mentioned in 92% of reviews</div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                <i className="ri-shield-check-line text-orange-600 text-xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Professional & Trustworthy</h3>
              <p className="text-gray-600 leading-relaxed">
                "Fully insured, background checked, and professional. I feel completely safe leaving my pet with them."
              </p>
              <div className="mt-4 text-sm text-gray-500">- Mentioned in 87% of reviews</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">Join Our Happy Customer Family</h2>
          <p className="text-xl text-blue-100 mb-8">
            Experience the same level of care and professionalism that our customers rave about
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
              Ask Questions
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
