import React from 'react';
const ScientificSpirituality = () => {
  // Add custom animation styles
  const playIconStyle = {
    animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
  };
  const mediaContent = [
    {
      type: 'image',
      src: 'https://i0.wp.com/simplevedas.com/wp-content/uploads/2022/03/12.jpg?fit=630%2C450&ssl=1',
      alt: 'Does God Exist?',
      title: 'DOES GOD EXIST',
      titlePosition: 'top',
      titleBgColor: 'transparent',
      titleColor: '#000000',
      link: 'https://simplevedas.com/english-videos/',
    },
    {
      type: 'image',
      src: 'https://i0.wp.com/simplevedas.com/wp-content/uploads/2022/02/11-1.jpg?fit=630%2C450&ssl=1',
      alt: 'Goloka Vrindavan',
      title: 'Goloka Vrindavan',
      titleBgColor: '#fbc02d', // Yellow background for title
      titlePosition: 'bottom',
      titleColor: '#212121',
      link: 'https://simplevedas.com/english-videos/',
    },
    {
      type: 'image',
      src: 'https://i0.wp.com/simplevedas.com/wp-content/uploads/2022/03/13.jpg?fit=630%2C450&ssl=1',
      alt: 'Sri Nrsimha Kavacha Mantra',
      title: 'Sri Nrsimha Kavacha Mantra',
      titlePosition: 'bottom',
      titleBgColor: 'transparent',
      titleColor: '#000000',
      link: 'https://simplevedas.com/english-videos/',
    },
    {
      type: 'image',
      src: 'https://i0.wp.com/simplevedas.com/wp-content/uploads/2022/03/4-1.jpg?fit=630%2C450&ssl=1',
      alt: 'Mitra',
      title: 'मित्रता', // Mitrata text in Hindi
      titlePosition: 'bottom',
      titleBgColor: '#fbc02d',
      titleColor: '#212121',
      link: 'https://simplevedas.com/english-videos/',
    },
  ];

  return (
    <>
      <style>{`
        @keyframes playEaseIn {
          0% {
            transform: scale(1.2);
            opacity: 0;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }
      `}</style>
      <div
        className="mx-auto"
      >
        <div
          className="bg-[#021844] py-16 px-12 md:px-32 flex flex-col md:flex-row items-center justify-center min-h-[60vh] gap-8 md:gap-8"
        >
      {/* Left Section: Text Content */}
      <div className="w-full md:w-1/2 flex flex-col items-center" style={{ textAlign: 'justify', padding: '20px', boxSizing: 'border-box' }}>
        <h2 style={{ fontWeight: 300, color: '#ffc13c', fontSize: '35px' }}>
          Scientific Spirituality
        </h2>
        <div className="h-8"></div>
        <p
          className="text-white mb-8 text-sm"
          style={{ fontWeight: 400,fontSize: '16px', lineHeight: '2',width: '85%' }}
        >
          Scientific study is not limited to the realm of material or physical. It is
          also equally valid, if not more, in the metaphysical and spiritual arena.
          At Simple Vedas, we learn the vast and rich Science of Spirituality.
        </p>
        <div className="flex justify-center w-full">
          <a
            href="https://simplevedas.com/english-videos/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#ffc13c] text-[#021844] hover:opacity-90 py-4 px-4 rounded flex items-center gap-2 transition-opacity text-sm"
            style={{ backgroundColor: '#ffc13c', color: '#021844', fontSize: '14px', fontWeight: 400 }}
          >
            Check our Video Gallery
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </a>
        </div>
        <div className="h-8"></div>
      </div>

      {/* Right Section: Image Grid */}
      <div
        className="w-full md:w-1/2 text-center"
        style={{ padding: '10px', boxSizing: 'border-box' }}
      >
        {/* First Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10 mr-20">
          {mediaContent.slice(0, 2).map((item, index) => (
            <a
              key={index}
              href={item.link || 'https://simplevedas.com/english-videos/'}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full aspect-[5/4] rounded-none flex flex-col relative overflow-hidden cursor-pointer group block"
              style={{ 
                backgroundColor: item.titleBgColor || 'transparent'
              }}
            >
              {item.type === 'image' && (
                <>
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="h-full w-full object-cover"
                  />
                  {/* Light dark overlay on hover */}
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-300 pointer-events-none"></div>
                  {/* Video Play Icon Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="relative opacity-0 group-hover:opacity-100 group-hover:[animation:playEaseIn_0.5s_ease-in_forwards] flex items-center justify-center">
                      {/* Light grey outer ring - attached to button */}
                      <div className="absolute rounded-full" style={{ width: '68px', height: '68px', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}></div>
                      {/* Dark blue circle with yellow triangle */}
                      <div className="relative bg-[#021844] rounded-full shadow-lg flex items-center justify-center z-10" style={{ width: '64px', height: '64px' }}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="#ffc13c"
                          className="w-8 h-8"
                          style={{ marginLeft: '4px' }}
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  {/* {item.title && (
                    <div
                      className={`absolute ${item.titlePosition === 'bottom' ? 'bottom-0 left-0' : 'top-0 left-0'} w-full p-2 text-center font-bold`}
                      style={{
                        fontSize: '10px',
                        backgroundColor: item.titleBgColor === 'transparent' ? 'transparent' : (item.titleBgColor || 'rgba(0,0,0,0.5)'),
                        color: item.titleColor || (item.titleBgColor ? '#212121' : 'white'),
                      }}
                    >
                      {item.title}
                    </div>
                  )} */}
                </>
              )}
            </a>
          ))}
        </div>
        {/* Second Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mr-20">
          {mediaContent.slice(2, 4).map((item, index) => (
            <a
              key={index + 2}
              href={item.link || 'https://simplevedas.com/english-videos/'}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-full aspect-[5/4] rounded-none flex flex-col relative overflow-hidden cursor-pointer group block ${index === 1 ? 'hidden md:block' : ''}`}
              style={{ 
                backgroundColor: item.titleBgColor || 'transparent'
              }}
            >
              {item.type === 'image' && (
                <>
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="h-full w-full object-cover"
                  />
                  {/* Light dark overlay on hover */}
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-300 pointer-events-none"></div>
                  {/* Video Play Icon Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="relative opacity-0 group-hover:opacity-100 group-hover:[animation:playEaseIn_0.5s_ease-in_forwards] flex items-center justify-center">
                      {/* Light grey outer ring - attached to button */}
                      <div className="absolute rounded-full" style={{ width: '68px', height: '68px', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}></div>
                      {/* Dark blue circle with yellow triangle */}
                      <div className="relative bg-[#021844] rounded-full shadow-lg flex items-center justify-center z-10" style={{ width: '64px', height: '64px' }}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="#ffc13c"
                          className="w-8 h-8"
                          style={{ marginLeft: '4px' }}
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  {/* {item.title && (
                    <div
                      className={`absolute ${item.titlePosition === 'bottom' ? 'bottom-0 left-0' : 'top-0 left-0'} w-full p-2 text-center font-bold`}
                      style={{
                        fontSize: '10px',
                        backgroundColor: item.titleBgColor === 'transparent' ? 'transparent' : (item.titleBgColor || 'rgba(0,0,0,0.5)'),
                        color: item.titleColor || (item.titleBgColor ? '#212121' : 'white'),
                      }}
                    >
                      {item.title}
                    </div>
                  )} */}
                </>
              )}
            </a>
          ))}
        </div>
      </div>
        </div>
      </div>
    </>
  );
};
export default ScientificSpirituality;
