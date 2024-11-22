import React from 'react';

const Footer = () => (
  <section className="py-6 bg-gray-900 sm:py-8 lg:py-12">
    <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-full">
      <div className="grid grid-cols-2 gap-x-5 gap-y-8 md:grid-cols-4 md:gap-x-10">
        {/* Google Maps Iframe */}
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d233432.14999518057!2d29.28629495788261!3d-23.91168856702947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ec6d8401183307b%3A0xa720ddd4b18e4df7!2sPolokwane!5e0!3m2!1sen!2sza!4v1732267725916!5m2!1sen!2sza"
          width="600" 
          height="450" 
          style={{ border: '0' }} 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade">
        </iframe>

        {/* Company Links */}
        <div>
          <p className="text-base text-gray-500">Company</p>
          <ul className="mt-6 space-y-3">
            <li>
              <a href="#" className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80">About</a>
            </li>
            <li>
              <a href="#" className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80">Features</a>
            </li>
            <li>
              <a href="#" className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80">Works</a>
            </li>
            <li>
              <a href="#" className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80">Career</a>
            </li>
          </ul>
        </div>

        {/* Help Links */}
        <div>
          <p className="text-base text-gray-500">Help</p>
          <ul className="mt-6 space-y-3">
            <li>
              <a href="#" className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80">Customer Support</a>
            </li>
            <li>
              <a href="#" className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80">Delivery Details</a>
            </li>
            <li>
              <a href="#" className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80">Terms & Conditions</a>
            </li>
            <li>
              <a href="#" className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80">Privacy Policy</a>
            </li>
          </ul>
        </div>

        {/* Resources Links */}
        <div>
          <p className="text-base text-gray-500">Resources</p>
          <ul className="mt-6 space-y-3">
            <li>
              <a href="#" className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80">Free eBooks</a>
            </li>
            <li>
              <a href="#" className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80">Development Tutorial</a>
            </li>
            <li>
              <a href="#" className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80">How to - Blog</a>
            </li>
            <li>
              <a href="#" className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80">YouTube Playlist</a>
            </li>
          </ul>
        </div>

        {/* Extra Links */}
        
      </div>

      <hr className="mt-12 mb-6 border-gray-800" />

    </div>
  </section>
);

export default Footer;
