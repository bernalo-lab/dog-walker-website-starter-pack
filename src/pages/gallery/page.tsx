
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import { useState } from 'react';

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Photos' },
    { id: 'walks', name: 'Daily Walks' },
    { id: 'playtime', name: 'Playtime' },
    { id: 'groups', name: 'Group Fun' },
    { id: 'parks', name: 'Park Adventures' }
  ];

  const photos = [
    {
      id: 1,
      category: 'walks',
      title: 'Max enjoying his morning walk',
      description: 'Golden Retriever Max loves his daily exercise routine',
      image: 'https://readdy.ai/api/search-image?query=Happy%20golden%20retriever%20dog%20walking%20on%20leash%20with%20professional%20dog%20walker%20in%20beautiful%20park%20setting%2C%20sunny%20day%20with%20green%20trees%2C%20joyful%20expression%2C%20high%20quality%20pet%20photography&width=400&height=300&seq=gallery-1&orientation=landscape'
    },
    {
      id: 2,
      category: 'playtime',
      title: 'Luna playing fetch',
      description: 'Border Collie Luna showing off her agility skills',
      image: 'https://readdy.ai/api/search-image?query=Energetic%20border%20collie%20dog%20catching%20frisbee%20in%20mid-air%20at%20dog%20park%2C%20action%20shot%20with%20blue%20sky%20background%2C%20athletic%20dog%20in%20motion%2C%20professional%20pet%20photography&width=400&height=300&seq=gallery-2&orientation=landscape'
    },
    {
      id: 3,
      category: 'groups',
      title: 'Group socialization time',
      description: 'Multiple dogs enjoying supervised group play',
      image: 'https://readdy.ai/api/search-image?query=Multiple%20dogs%20of%20different%20breeds%20playing%20together%20in%20grassy%20park%20area%2C%20supervised%20group%20play%20session%2C%20diverse%20dog%20breeds%20including%20beagle%20and%20labrador%2C%20happy%20social%20interaction&width=400&height=300&seq=gallery-3&orientation=landscape'
    },
    {
      id: 4,
      category: 'walks',
      title: 'Bella exploring new trails',
      description: 'Rescue mix Bella discovering new walking routes',
      image: 'https://readdy.ai/api/search-image?query=Mixed%20breed%20rescue%20dog%20exploring%20forest%20trail%20with%20dog%20walker%2C%20curious%20expression%2C%20natural%20woodland%20setting%2C%20peaceful%20walking%20scene%2C%20professional%20pet%20care%20photography&width=400&height=300&seq=gallery-4&orientation=landscape'
    },
    {
      id: 5,
      category: 'parks',
      title: 'Charlie at the dog beach',
      description: 'French Bulldog Charlie enjoying beach playtime',
      image: 'https://readdy.ai/api/search-image?query=French%20bulldog%20playing%20in%20sand%20at%20dog-friendly%20beach%2C%20ocean%20waves%20in%20background%2C%20happy%20expression%2C%20summer%20beach%20day%2C%20professional%20pet%20photography&width=400&height=300&seq=gallery-5&orientation=landscape'
    },
    {
      id: 6,
      category: 'playtime',
      title: 'Zeus with his favorite toy',
      description: 'German Shepherd Zeus showing his playful side',
      image: 'https://readdy.ai/api/search-image?query=German%20shepherd%20dog%20playing%20with%20rope%20toy%20in%20park%20setting%2C%20powerful%20breed%20showing%20gentle%20playful%20nature%2C%20green%20grass%20background%2C%20professional%20dog%20photography&width=400&height=300&seq=gallery-6&orientation=landscape'
    },
    {
      id: 7,
      category: 'groups',
      title: 'Puppy socialization class',
      description: 'Young dogs learning social skills together',
      image: 'https://readdy.ai/api/search-image?query=Group%20of%20young%20puppies%20of%20different%20breeds%20playing%20together%20under%20supervision%2C%20puppy%20socialization%20training%2C%20cute%20and%20playful%20scene%2C%20professional%20pet%20care%20photography&width=400&height=300&seq=gallery-7&orientation=landscape'
    },
    {
      id: 8,
      category: 'walks',
      title: 'Rosie enjoying gentle exercise',
      description: 'Senior Labrador Rosie on her specialized walk',
      image: 'https://readdy.ai/api/search-image?query=Senior%20golden%20labrador%20dog%20walking%20slowly%20on%20peaceful%20tree-lined%20path%2C%20gentle%20exercise%20for%20older%20dog%2C%20caring%20pet%20service%2C%20serene%20natural%20setting&width=400&height=300&seq=gallery-8&orientation=landscape'
    },
    {
      id: 9,
      category: 'parks',
      title: 'Adventure at Central Park',
      description: 'Dogs exploring the off-leash area',
      image: 'https://readdy.ai/api/search-image?query=Multiple%20dogs%20running%20freely%20in%20large%20fenced%20dog%20park%20area%2C%20off-leash%20exercise%20time%2C%20various%20dog%20breeds%20enjoying%20freedom%2C%20professional%20dog%20park%20supervision&width=400&height=300&seq=gallery-9&orientation=landscape'
    },
    {
      id: 10,
      category: 'playtime',
      title: 'Buddy learning new tricks',
      description: 'Beagle mix Buddy during training session',
      image: 'https://readdy.ai/api/search-image?query=Beagle%20mix%20dog%20sitting%20and%20giving%20paw%20during%20training%20session%20with%20professional%20dog%20walker%2C%20positive%20reinforcement%20training%2C%20park%20setting%20with%20treats&width=400&height=300&seq=gallery-10&orientation=landscape'
    },
    {
      id: 11,
      category: 'groups',
      title: 'Small dog playgroup',
      description: 'Specialized group for smaller breeds',
      image: 'https://readdy.ai/api/search-image?query=Group%20of%20small%20dog%20breeds%20including%20chihuahua%20and%20yorkshire%20terrier%20playing%20together%20in%20safe%20enclosed%20area%2C%20small%20dog%20socialization%2C%20professional%20supervision&width=400&height=300&seq=gallery-11&orientation=landscape'
    },
    {
      id: 12,
      category: 'walks',
      title: 'Morning exercise routine',
      description: 'Starting the day with energetic walks',
      image: 'https://readdy.ai/api/search-image?query=Professional%20dog%20walker%20with%20multiple%20dogs%20on%20leashes%20during%20morning%20walk%2C%20sunrise%20lighting%2C%20urban%20park%20setting%2C%20responsible%20pet%20care%20service&width=400&height=300&seq=gallery-12&orientation=landscape'
    }
  ];

  const filteredPhotos = selectedCategory === 'all' 
    ? photos 
    : photos.filter(photo => photo.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Happy Dogs Gallery</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            See the joy and happiness on our furry clients' faces during their walks, playtime, and adventures with our professional dog walkers.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-white sticky top-16 z-40 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-colors cursor-pointer whitespace-nowrap ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredPhotos.map((photo) => (
              <div key={photo.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
                <div className="relative overflow-hidden">
                  <img
                    src={photo.image}
                    alt={photo.title}
                    className="w-full h-64 object-cover object-top group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{photo.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{photo.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Capturing Every Happy Moment</h2>
            <p className="text-xl text-gray-600">We love documenting the joy and progress of every dog in our care</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <div className="text-3xl font-bold text-blue-600 mb-2">2,500+</div>
              <div className="text-gray-600">Photos Shared</div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <div className="text-3xl font-bold text-green-600 mb-2">500+</div>
              <div className="text-gray-600">Happy Dogs</div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <div className="text-3xl font-bold text-purple-600 mb-2">25+</div>
              <div className="text-gray-600">Park Locations</div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <div className="text-3xl font-bold text-orange-600 mb-2">100%</div>
              <div className="text-gray-600">Smiling Faces</div>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Update Promise */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Real-Time Photo Updates</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Every walk includes photo updates so you can see exactly how much fun your dog is having. We capture the special moments, funny expressions, and pure joy that makes each walk unique.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                    <i className="ri-camera-line text-blue-600 text-sm"></i>
                  </div>
                  <span className="text-gray-700">Photos sent during every walk</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                    <i className="ri-time-line text-blue-600 text-sm"></i>
                  </div>
                  <span className="text-gray-700">Real-time updates via text or email</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                    <i className="ri-heart-line text-blue-600 text-sm"></i>
                  </div>
                  <span className="text-gray-700">Capturing personality and progress</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                    <i className="ri-download-line text-blue-600 text-sm"></i>
                  </div>
                  <span className="text-gray-700">High-quality photos you can keep forever</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://readdy.ai/api/search-image?query=Professional%20dog%20walker%20taking%20photo%20of%20happy%20golden%20retriever%20with%20smartphone%20during%20walk%20in%20beautiful%20park%2C%20capturing%20moment%2C%20modern%20pet%20care%20service%2C%20natural%20lighting&width=600&height=400&seq=photo-updates&orientation=landscape"
                alt="Dog walker taking photos"
                className="rounded-2xl shadow-lg object-cover w-full h-96"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Integration */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Follow Our Adventures</h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Stay connected with our daily adventures and see more happy moments from our furry friends on social media
          </p>
          
          <div className="flex justify-center space-x-6 mb-8">
            <a href="#" className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors cursor-pointer">
              <i className="ri-facebook-fill text-white text-2xl"></i>
            </a>
            <a href="#" className="w-16 h-16 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors cursor-pointer">
              <i className="ri-instagram-line text-white text-2xl"></i>
            </a>
            <a href="#" className="w-16 h-16 bg-blue-400 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors cursor-pointer">
              <i className="ri-twitter-fill text-white text-2xl"></i>
            </a>
          </div>
          
          <p className="text-gray-600 mb-8">
            Tag us in your photos with <span className="font-semibold text-blue-600">#PawsAndPlayAdventures</span> to be featured!
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
