import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signUp } from './Authslice'; // import the correct action
import doms3 from '../assets/Serene Spa Setting.jpeg';
import { Link, useNavigate } from 'react-router-dom';

function RegistrationPage() {
  const navigate = useNavigate();

  // Define state to manage form inputs
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form from reloading the page

    // Dispatch the signUp action with email and password
    dispatch(signUp({ email, password }));
  };

  return (
    <div>
      <section className="relative py-10 bg-gray-900 sm:py-16 lg:py-24">
        <div className="absolute inset-0">
          <img className="object-cover w-full h-full" src={doms3} alt="Background" />
        </div>
        <div className="absolute inset-0 bg-gray-900/20"></div>

        <div className="relative max-w-lg px-4 mx-auto sm:px-0">
          <div className="overflow-hidden bg-white rounded-md shadow-md">
            <div className="px-4 py-6 sm:px-8 sm:py-7">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-gray-900">Create an account</h2>
                <p className="mt-2 text-base text-gray-600">
                  Already joined?{' '}
                  <Link to="/" className="text-blue-600 transition-all duration-200 hover:underline hover:text-blue-700">
                    Sign in now
                  </Link>
                </p>
              </div>

              <form onSubmit={handleSubmit} className="mt-8">
                <div className="space-y-5">
                  <div>
                    <label htmlFor="full-name" className="text-base font-medium text-gray-900">
                      First & Last name
                    </label>
                    <div className="mt-2.5">
                      <input
                        id="full-name"
                        type="text"
                        placeholder="Enter your full name"
                        className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="text-base font-medium text-gray-900">
                      Email address
                    </label>
                    <div className="mt-2.5">
                      <input
                        id="email"
                        type="email"
                        placeholder="Enter email to get started"
                        onChange={(e) => setEmail(e.target.value)}
                        className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                        value={email}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="password" className="text-base font-medium text-gray-900">
                      Password
                    </label>
                    <div className="mt-2.5">
                      <input
                        id="password"
                        type="password"
                        placeholder="Enter your password"
                        onChange={(e) => setPassword(e.target.value)}
                        className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                        value={password}
                      />
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md focus:outline-none hover:bg-blue-700 focus:bg-blue-700"
                    >
                      Sign up
                    </button>
                  </div>

                  <div>
                    <button
                      type="button"
                      className="relative inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-gray-700 transition-all duration-200 bg-white border-2 border-gray-200 rounded-md hover:bg-gray-100 focus:bg-gray-100 hover:text-black focus:text-black focus:outline-none"
                    >
                      <div className="absolute inset-y-0 left-0 p-4">
                        <svg
                          className="w-6 h-6 text-blue-600"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"></path>
                        </svg>
                      </div>
                      Sign up with Google
                    </button>
                  </div>
                </div>
              </form>

              <p className="max-w-xs mx-auto mt-5 text-sm text-center text-gray-600">
                This site is protected by reCAPTCHA and the Google{' '}
                <a href="#" className="text-blue-600 transition-all duration-200 hover:underline hover:text-blue-700">
                  Privacy Policy
                </a>{' '}
                &{' '}
                <a href="#" className="text-blue-600 transition-all duration-200 hover:underline hover:text-blue-700">
                  Terms of Service
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default RegistrationPage;
