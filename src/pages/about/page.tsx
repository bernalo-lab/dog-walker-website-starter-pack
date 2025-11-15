
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';

export default function About() {
  const team = [
    {
      name: 'Jessica Martinez',
      role: 'Founder & Lead Walker',
      experience: '8 years',
      specialties: ['Large Breeds', 'Behavioral Training', 'Senior Dogs'],
      image: 'https://readdy.ai/api/search-image?query=Professional%20female%20dog%20walker%20in%20her%2030s%20with%20warm%20smile%2C%20wearing%20casual%20outdoor%20clothing%2C%20standing%20in%20a%20park%20with%20trees%20in%20background%2C%20friendly%20and%20approachable%20appearance%2C%20natural%20lighting%2C%20professional%20headshot%20style&width=300&height=300&seq=jessica&orientation=squarish'
    },
    {
      name: 'Michael Thompson',
      role: 'Senior Dog Walker',
      experience: '5 years',
      specialties: ['Puppy Training', 'Small Breeds', 'Group Walks'],
      image: 'https://readdy.ai/api/search-image?query=Professional%20male%20dog%20walker%20in%20his%2020s%20with%20friendly%20smile%2C%20wearing%20outdoor%20gear%2C%20standing%20in%20a%20park%20setting%2C%20approachable%20and%20caring%20demeanor%2C%20natural%20lighting%2C%20professional%20headshot%20style&width=300&height=300&seq=michael&orientation=squarish'
    },
    {
      name: 'Sarah Kim',
      role: 'Dog Walker & Pet Sitter',
      experience: '4 years',
      specialties: ['Rescue Dogs', 'Anxiety Support', 'Multi-Pet Families'],
      image: 'https://readdy.ai/api/search-image?query=Professional%20Asian%20female%20dog%20walker%20in%20her%2020s%20with%20gentle%20smile%2C%20wearing%20comfortable%20outdoor%20clothing%2C%20park%20background%20with%20greenery%2C%20caring%20and%20professional%20appearance%2C%20natural%20lighting%2C%20headshot%20style&width=300&height=300&seq=sarah&orientation=squarish'
    }
  ];

  const values = [
    {
      icon: 'ri-heart-line',
      title: 'Love & Compassion',
      description: 'Every dog receives individual attention and care as if they were our own pets.'
    },
    {
      icon: 'ri-shield-check-line',
      title: 'Safety First',
      description: 'Comprehensive safety protocols and fully insured services for complete peace of mind.'
    },
    {
      icon: 'ri-time-line',
      title: 'Reliability',
      description: 'Consistent, punctual service you can count on, rain or shine.'
    },
    {
      icon: 'ri-customer-service-line',
      title: 'Communication',
      description: 'Regular updates, photos, and open communication with pet parents.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">About Paws & Play Dog Walkers</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Founded in 2019, we're a team of passionate dog lovers dedicated to providing the highest quality care for your furry family members. Our mission is simple: happy dogs, happy families.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  Paws & Play Dog Walkers was born from a simple observation: busy pet parents needed reliable, loving care for their dogs, and we wanted to provide exactly that. What started as a small neighborhood service has grown into the most trusted dog walking company in the area.
                </p>
                <p>
                  Our founder, Jessica Martinez, began walking dogs while studying veterinary science. She quickly realized that many dogs weren't getting the exercise and socialization they needed, leading to behavioral issues and unhappy pets. This inspired her to create a professional service that prioritizes each dog's individual needs.
                </p>
                <p>
                  Today, we serve over 200 happy families and their beloved pets. Every member of our team shares the same passion for animal welfare and commitment to excellence that started it all.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://readdy.ai/api/search-image?query=Heartwarming%20scene%20of%20multiple%20dogs%20of%20different%20breeds%20playing%20together%20in%20a%20sunny%20park%20with%20professional%20dog%20walkers%20supervising%2C%20joyful%20atmosphere%2C%20green%20grass%20and%20trees%2C%20natural%20lighting%2C%20community%20feeling%2C%20diverse%20dog%20breeds%20including%20golden%20retriever%2C%20beagle%2C%20and%20border%20collie&width=600&height=400&seq=our-story&orientation=landscape"
                alt="Dogs playing together in the park"
                className="rounded-2xl shadow-lg object-cover w-full h-96"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <i className={`${value.icon} text-2xl text-blue-600`}></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600">Experienced professionals who love what they do</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover object-top"
                />
                <div className="p-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-2">{member.role}</p>
                  <p className="text-gray-600 mb-4">{member.experience} of experience</p>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Specialties:</h4>
                    <div className="flex flex-wrap gap-2">
                      {member.specialties.map((specialty, i) => (
                        <span key={i} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Insurance */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Fully Licensed & Insured</h2>
            <p className="text-xl text-gray-600">Your peace of mind is our priority</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <i className="ri-shield-check-line text-2xl text-green-600"></i>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Fully Insured</h3>
              <p className="text-gray-600 text-sm">Comprehensive liability coverage</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <i className="ri-user-search-line text-2xl text-green-600"></i>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Background Checked</h3>
              <p className="text-gray-600 text-sm">All team members thoroughly vetted</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <i className="ri-first-aid-kit-line text-2xl text-green-600"></i>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">First Aid Certified</h3>
              <p className="text-gray-600 text-sm">Pet first aid and CPR trained</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <i className="ri-award-line text-2xl text-green-600"></i>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Licensed Business</h3>
              <p className="text-gray-600 text-sm">Registered and compliant</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
