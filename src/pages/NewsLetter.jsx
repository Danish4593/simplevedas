import { useState } from 'react';

const NewsLetter = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = () => {
    console.log('Subscribe:', email);
  };

  return (
    <div className="bg-[#F5B935] py-8 px-8 md:px-16 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Mobile View - Stacked */}
        <div className="md:hidden flex flex-col gap-4">
          <h3 className="text-2xl font-thin text-gray-900">
            Subscribe Newsletter
          </h3>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-white border-none text-black text-sm rounded-md w-full px-4 py-3 placeholder:text-gray-400 placeholder:font-thin outline-none"
            placeholder="Enter E-mail address"
          />
          <button
            type="button"
            onClick={handleSubscribe}
            className="bg-[#001F3F] text-white font-normal text-base px-6 py-3 rounded-md hover:bg-[#003366] transition-colors w-full"
          >
            Send
          </button>
        </div>

        {/* Desktop View - Horizontal */}
        <div className="hidden md:flex items-center justify-between gap-10">
          <div className="flex-shrink-0">
            <h3 className="text-3xl md:text-4xl font-thin text-gray-900">
              Subscribe Newsletter
            </h3>
          </div>
          
          <div className="flex flex-row gap-3 md:min-w-[550px]">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-white border border-black text-black text-sm rounded-md px-4 py-2 placeholder:text-gray-300 placeholder:font-thin outline-none"
              placeholder="Enter E-mail address"
            />
            <button
              type="button"
              onClick={handleSubscribe}
              className="bg-gray-900 text-white font-normal text-lg px-10 py-2 rounded-lg hover:bg-gray-800 transition-colors whitespace-nowrap"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;