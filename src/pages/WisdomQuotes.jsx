import React from 'react';
import { Link } from 'react-router-dom';

const quotes = [
  {
    img: 'https://simplevedas.com/wp-content/uploads/2022/02/1-1024x1024.png',
  },
  {
    img: 'https://simplevedas.com/wp-content/uploads/2022/02/21-1024x1024.jpg',
  },
  {
    img: 'https://simplevedas.com/wp-content/uploads/2022/02/20-1024x1024.png',
  },
  {
    img: 'https://simplevedas.com/wp-content/uploads/2022/02/28-1024x1024.png',
  },
];

const WisdomQuotes = () => {
  return (
    <section className="bg-[#faf6f1] py-12 md:py-16 px-4">
      <div className="max-w-5xl mx-auto text-center">

        {/* Heading - SimpleVedas Style */}
        <div className="mb-10">
          <div className="flex items-center justify-center gap-4 mb-3">
            <div className="w-12 h-0.5 bg-[#d4a656]"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#3c2f2f]">
              Wisdom <span className="text-[#d4a656]">Quotes</span>
            </h2>
            <div className="w-12 h-0.5 bg-[#d4a656]"></div>
          </div>
        </div>

        {/* 4 Quotes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {quotes.map((quote, index) => (
            <Link 
              to="/quotes" 
              key={index} 
              className={`block group ${index > 0 ? 'hidden sm:block' : ''}`}
            >
              <div className="relative h-80 overflow-hidden transition-all duration-500">
                
                {/* Image */}
                <img
                  src={quote.img}
                  alt="Wisdom quote"
                  className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110"
                />

                {/* Subtle Golden Border on Hover */}
                <div className="absolute inset-0 ring-4 ring-transparent group-hover:ring-[#d4a656]/40 transition-all duration-500"></div>
              </div>
            </Link>
          ))}
        </div>

        {/* See More Button - Mobile Only */}
        <div className="mt-6 sm:hidden">
          <Link 
            to="/quotes"
            className="text-[#3c2f2f] hover:underline group inline-block"
          >
            <span className="opacity-0 group-hover:opacity-100 transition-opacity">[</span>
            <span>See More</span>
            <span className="opacity-0 group-hover:opacity-100 transition-opacity">]</span>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default WisdomQuotes;