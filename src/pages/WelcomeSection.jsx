export default function WelcomeSection() {
  return (
    <section className="py-20 bg-white flex items-center">
      <div className="  md:px-40  ">
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
              className="max-w-full h-auto max-h-full object-contain w-110 h-110"
            />
          </div>
          
          {/* Text Content */}
          <div className="w-full md:w-2/3 text-center p-4  md:pr-8 md:pl-0 order-2 relative">
            {/* Right border - 80% yellow, 10% top and bottom transparent */}
            <div 
              className="absolute right-0 top-[10%] w-0.75 h-[85%]"
              style={{backgroundColor: '#ffb20c'}}
            ></div>
            {/* Title - hidden on mobile, shown on desktop */}
            <h2 className="hidden md:block text-4xl md:text-5xl font-light mb-3 text-gray-800" >
              Welcome to Simple Vedas
            </h2>
            
            {/* Orange underline */}
            <div className="hidden md:flex justify-center items-center gap-15 mb-8 p-2">
              <div className="w-10 h-1" style={{backgroundColor: '#e8e4e1ff'}}></div>
              <div className="w-10 h-1" style={{backgroundColor: '#e8e4e1ff'}}></div>
            </div>
            
            <h3 className="hidden md:block text-lg md:text-2xl font-medium mb-8" style={{color: '#ffb20c'}}>
              Making Spirituality Simple for You
            </h3>
            
            <p className="text-gray-600 mb-10 leading-relaxed text-medium " style={{textAlign: 'justify' , width: '95%',fontSize: 18}}>
              Simple Vedas is to serve as a bridge between the ancient and the modern, between the spiritual and the material, between the philosophy and the practice, so that one can easily understand, appreciate, and apply the Vedic technologies in one's life, bringing to it more meaning and content, and thus enjoy the bliss that we all are really made for.
            </p>
            
            {/* Read More Button */}
            <div className="flex justify-center p-2">
              <button 
                type="button"
                className="inline-flex items-center gap-2 px-6 py-2 text-gray-500 transition-colors duration-300 bg-white rounded-lg border-2 border-gray-400 text-sm font-medium alignitems-center"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#ffb20c';
                  e.currentTarget.style.borderColor = 'transparent';
                  e.currentTarget.style.color = '#000000';
                  const arrow = e.currentTarget.querySelector('span');
                  if (arrow) arrow.style.color = '#000000';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'white';
                  e.currentTarget.style.borderColor = '#46484aff';
                  e.currentTarget.style.color = '#46484aff';
                  const arrow = e.currentTarget.querySelector('span');
                  if (arrow) arrow.style.color = '#46484aff';
                }}
              >
                Read More
                <span className="text-3xl" style={{color: '#46484aff'}}>»</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}