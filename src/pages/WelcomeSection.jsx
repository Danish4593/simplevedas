export default function WelcomeSection() {
  return (
    <section className="py-12 bg-white flex items-center">
      <div className="container mx-auto px-8 md:px-20 max-w-6xl">
        {/* Title - shows first on mobile, hidden on desktop (will be in text content) */}
        <h2 className="text-3xl md:text-4xl font-light mb-6 text-gray-800 text-center md:hidden" style={{fontFamily: 'serif'}}>
          Welcome to Simple Vedas
        </h2>
        
        <div className="flex flex-col md:flex-row items-center gap-16">
          {/* Image - shows second on mobile */}
          <div className="flex-shrink-0 w-full md:w-1/3 flex justify-center items-center order-1 md:order-none">
            <img 
              src="https://i0.wp.com/simplevedas.com/wp-content/uploads/2022/07/2-1.jpg?w=1080&ssl=1" 
              alt="Guru Ji" 
              className="max-w-full h-auto max-h-96 object-contain"
            />
          </div>
          
          {/* Text Content */}
          <div className="w-full md:w-2/3 text-center md:border-r-2 md:pr-8 order-2" style={{borderColor: '#ffb20c'}}>
            {/* Title - hidden on mobile, shown on desktop */}
            <h2 className="hidden md:block text-3xl md:text-4xl font-light mb-3 text-gray-800" style={{fontFamily: 'serif'}}>
              Welcome to Simple Vedas
            </h2>
            
            {/* Orange underline */}
            <div className="hidden md:flex justify-center items-center gap-3 mb-8">
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
            <div className="flex justify-center">
              <button 
                type="button"
                className="inline-flex items-center gap-2 px-5 py-2 border border-black rounded text-gray-600 transition-colors duration-300 bg-white shadow-sm text-sm"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#ffb20c';
                  e.currentTarget.style.color = '#000000';
                  e.currentTarget.style.borderColor = 'transparent';
                  const arrow = e.currentTarget.querySelector('span');
                  if (arrow) arrow.style.color = '#000000';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '';
                  e.currentTarget.style.color = '';
                  e.currentTarget.style.borderColor = '';
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