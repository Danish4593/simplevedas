export default function WelcomeSection() {
  return (
    <section className="py-12 bg-white flex items-center">
      <div className="  md:px-20  ">
        {/* Title - shows first on mobile, hidden on desktop (will be in text content) */}
        <h2 className="text-3xl md:text-4xl font-light mb-6 text-gray-800 text-center md:hidden" style={{fontFamily: 'serif'}}>
          Welcome to Simple Vedas
        </h2>
        
        <div className="flex flex-col md:flex-row items-center gap-16">
          {/* Image - shows second on mobile */}
          <div className="flex-shrink-0 w-full md:w-1/3 flex justify-center md:justify-start items-center order-1 md:order-none p-4 md:pt-4 md:pr-4 md:pb-4 md:pl-0">
            <img 
              src="https://i0.wp.com/simplevedas.com/wp-content/uploads/2022/07/2-1.jpg?w=1080&ssl=1" 
              alt="Guru Ji" 
              className="max-w-full h-auto max-h-96 object-contain"
            />
          </div>
          
          {/* Text Content */}
          <div className="w-full md:w-2/3 text-center p-4 md:pr-8 md:pl-0 order-2 relative">
            {/* Right border - 80% yellow, 10% top and bottom transparent */}
            <div 
              className="absolute right-0 top-[10%] w-0.5 h-[80%]"
              style={{backgroundColor: '#ffb20c'}}
            ></div>
            {/* Title - hidden on mobile, shown on desktop */}
            <h2 className="hidden md:block text-3xl md:text-4xl font-light mb-3 text-gray-800" style={{fontFamily: 'serif'}}>
              Welcome to Simple Vedas
            </h2>
            
            {/* Orange underline */}
            <div className="hidden md:flex justify-center items-center gap-3 mb-8 p-2">
              <div className="w-10 h-px" style={{backgroundColor: '#ffb20c'}}></div>
              <div className="w-6 h-px" style={{backgroundColor: '#ffb20c'}}></div>
            </div>
            
            <h3 className="hidden md:block text-lg md:text-xl font-medium mb-8" style={{color: '#ffb20c'}}>
              Making Spirituality Simple for You
            </h3>
            
            <p className="text-gray-600 mb-10 leading-relaxed text-sm" style={{textAlign: 'justify'}}>
              Simple Vedas is to serve as a bridge between the ancient and the modern, between the spiritual and the material, between the philosophy and the practice, so that one can easily understand, appreciate, and apply the Vedic technologies in one's life, bringing to it more meaning and content, and thus enjoy the bliss that we all are really made for.
            </p>
            
            {/* Read More Button */}
            <div className="flex justify-center p-2">
              <button 
                type="button"
                className="inline-flex items-center gap-2 px-5 py-2 text-gray-600 transition-colors duration-300 bg-white shadow-sm text-sm"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#ffb20c';
                  e.currentTarget.style.color = '#000000';
                  const arrow = e.currentTarget.querySelector('span');
                  if (arrow) arrow.style.color = '#000000';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '';
                  e.currentTarget.style.color = '';
                  const arrow = e.currentTarget.querySelector('span');
                  if (arrow) arrow.style.color = '#ffb20c';
                }}
              >
                Read More
                <span className="font-bold" style={{color: '#ffb20c'}}>»</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}