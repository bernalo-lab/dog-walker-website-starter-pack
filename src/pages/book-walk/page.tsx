
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import React, { useState } from 'react';


export default function BookWalkPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    dogBreed: '',
    dogSize: '',
    preferredTime: '',
    notes: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formDataToSend = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        formDataToSend.append(key, value);
      });

      const response = await fetch('https://readdy.ai/api/form/d4c9tqqels5gugpjmblg', {
        method: 'POST',
        body: new URLSearchParams(formDataToSend as any)
      });

      if (response.ok) {
        setShowSuccess(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          dogBreed: '',
          dogSize: '',
          preferredTime: '',
          notes: ''
        });
      }
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
   <>
   <Header />
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-50">
      {/* Hero Banner */}
      <div className="relative bg-gradient-to-r from-teal-600 to-blue-600 py-16">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Book Your Dog Walk
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Schedule a professional dog walking service for your furry friend. We'll take great care of them!
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Introduction */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Ready to Give Your Dog the Exercise They Deserve?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Fill out the form below and we'll get back to you within 24 hours to confirm your booking. 
            Our professional dog walkers are vetted, insured, and passionate about pet care.
          </p>
        </div>

        {/* Success Message */}
        {showSuccess && (
          <div className="mb-8 p-6 bg-green-50 border border-green-200 rounded-2xl shadow-sm">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-4">
                <i className="ri-check-line text-white text-lg"></i>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-green-800">Booking Request Submitted!</h3>
                <p className="text-green-700">We'll contact you within 24 hours to confirm your dog walking appointment.</p>
              </div>
            </div>
          </div>
        )}

        {/* Booking Form */}
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
          <form onSubmit={handleSubmit} data-readdy-form id="dog-walking-booking">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200 shadow-sm text-sm"
                  placeholder="Enter your full name"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200 shadow-sm text-sm"
                  placeholder="your.email@example.com"
                />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200 shadow-sm text-sm"
                  placeholder="(555) 123-4567"
                />
              </div>

              {/* Dog Breed */}
              <div>
                <label htmlFor="dogBreed" className="block text-sm font-semibold text-gray-700 mb-2">
                  Dog Breed *
                </label>
                <input
                  type="text"
                  id="dogBreed"
                  name="dogBreed"
                  value={formData.dogBreed}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200 shadow-sm text-sm"
                  placeholder="e.g., Golden Retriever, Mixed Breed"
                />
              </div>

              {/* Dog Size */}
              <div>
                <label htmlFor="dogSize" className="block text-sm font-semibold text-gray-700 mb-2">
                  Dog Size *
                </label>
                <div className="relative">
                  <select
                    id="dogSize"
                    name="dogSize"
                    value={formData.dogSize}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 pr-8 border border-gray-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200 shadow-sm text-sm appearance-none bg-white"
                  >
                    <option value="">Select dog size</option>
                    <option value="Small (under 25 lbs)">Small (under 25 lbs)</option>
                    <option value="Medium (25-60 lbs)">Medium (25-60 lbs)</option>
                    <option value="Large (60-90 lbs)">Large (60-90 lbs)</option>
                    <option value="Extra Large (over 90 lbs)">Extra Large (over 90 lbs)</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <i className="ri-arrow-down-s-line text-gray-400"></i>
                  </div>
                </div>
              </div>

              {/* Preferred Walking Time */}
              <div>
                <label htmlFor="preferredTime" className="block text-sm font-semibold text-gray-700 mb-2">
                  Preferred Walking Time *
                </label>
                <div className="relative">
                  <select
                    id="preferredTime"
                    name="preferredTime"
                    value={formData.preferredTime}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 pr-8 border border-gray-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200 shadow-sm text-sm appearance-none bg-white"
                  >
                    <option value="">Select preferred time</option>
                    <option value="Morning (7:00 AM - 11:00 AM)">Morning (7:00 AM - 11:00 AM)</option>
                    <option value="Midday (11:00 AM - 2:00 PM)">Midday (11:00 AM - 2:00 PM)</option>
                    <option value="Afternoon (2:00 PM - 5:00 PM)">Afternoon (2:00 PM - 5:00 PM)</option>
                    <option value="Evening (5:00 PM - 7:00 PM)">Evening (5:00 PM - 7:00 PM)</option>
                    <option value="Flexible">Flexible</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <i className="ri-arrow-down-s-line text-gray-400"></i>
                  </div>
                </div>
              </div>
            </div>

            {/* Notes */}
            <div className="mb-8">
              <label htmlFor="notes" className="block text-sm font-semibold text-gray-700 mb-2">
                Additional Notes
              </label>
              <textarea
                id="notes"
                name="notes"
                value={formData.notes}
                onChange={handleInputChange}
                rows={4}
                maxLength={500}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200 shadow-sm text-sm resize-none"
                placeholder="Tell us about your dog's personality, special needs, favorite routes, or any other important information..."
              />
              <div className="text-right text-xs text-gray-500 mt-1">
                {formData.notes.length}/500 characters
              </div>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-teal-600 to-blue-600 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                    Submitting...
                  </>
                ) : (
                  <>
                    <i className="ri-calendar-check-line mr-3 text-lg"></i>
                    Confirm Booking Request
                  </>
                )}
              </button>
            </div>

            <p className="text-center text-sm text-gray-500 mt-4">
              By submitting this form, you agree to our terms of service and privacy policy.
            </p>
          </form>
        </div>

        {/* Additional Info */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-white rounded-2xl shadow-sm">
            <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="ri-time-line text-teal-600 text-xl"></i>
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">Quick Response</h3>
            <p className="text-sm text-gray-600">We'll confirm your booking within 24 hours</p>
          </div>

          <div className="text-center p-6 bg-white rounded-2xl shadow-sm">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="ri-shield-check-line text-blue-600 text-xl"></i>
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">Insured & Bonded</h3>
            <p className="text-sm text-gray-600">All our walkers are fully insured and background checked</p>
          </div>

          <div className="text-center p-6 bg-white rounded-2xl shadow-sm">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="ri-heart-line text-green-600 text-xl"></i>
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">Loving Care</h3>
            <p className="text-sm text-gray-600">Your dog will receive personalized attention and care</p>
          </div>
        </div>
      </div>
    </div>
   <Footer />
   </>
  );
}
