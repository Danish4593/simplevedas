import { useState } from 'react';

const NewsLetter = () => {
  const [email, setEmail] = useState('');
  
  const handleSubscribe = () => {
    console.log('Subscribe:', email);
  };

  return (
    <div className="bg-[#ffc03d] py-11 px-8 md:px-16 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Mobile View - Stacked */}
        <div className="md:hidden flex flex-col gap-4">
          <h3 className="text-2xl font-light text-gray-900">
            Subscribe Newsletter
          </h3>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-white border-none text-gray-800 text-sm rounded-md w-full px-4 py-3 placeholder:text-gray-400 placeholder:text-xs outline-none focus:ring-0"
            placeholder="Enter E-mail address"
          />
          <button
            type="button"
            onClick={handleSubscribe}
            className="bg-[#001F3F] text-white font-medium text-base px-6 py-3 rounded-md hover:bg-[#003366] transition-colors w-full"
          >
            Send
          </button>
        </div>

        {/* Desktop View - Horizontal */}
        <div className="hidden md:flex items-center ml-15 gap-40">
          <div className="flex-shrink-0 ">
            <h3 className="text-4xl lg:text-5xl font-light text-gray-900">
              Subscribe Newsletter
            </h3>
          </div>
          <div className="flex flex-row gap-3  md:min-w-[500px] lg:min-w-[550px]">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-white border border-[#001F3F] text-gray-800 text-base rounded-md px-5 py-3 placeholder:text-gray-400 placeholder:text-sm outline-none focus:ring-0"
              placeholder="Enter E-mail address"
            />
            <button
              type="button"
              onClick={handleSubscribe}
              className="bg-[#001F3F] text-white font-medium text-base px-12 py-3 rounded-md hover:bg-[#003366] transition-colors whitespace-nowrap"
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