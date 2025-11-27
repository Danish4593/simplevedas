import React from 'react';

const SimpleVedasSection = () => {
  const bg = 'https://i0.wp.com/simplevedas.com/wp-content/uploads/2022/03/composition-with-happy-emotion-scaled.jpg?fit=1503%2C1080&ssl=1';

  const featureBoxes = [
    {
      iconClass: 'fas fa-graduation-cap',
      title: 'Systematic',
      description: 'Our courses are well-designed and extremely structured.',
    },
    {
      iconClass: 'fas fa-question',
      title: 'Quiz',
      description: 'We not only teach you, but also make sure you learn.',
    },
    {
      iconClass: 'fab fa-gratipay',
      title: 'Free Learning',
      description: 'Except a few, all our courses are either free or minimally charged.',
    },
    {
      iconClass: 'far fa-lightbulb',
      title: 'Practical',
      description: 'Knowledge is of true value only when theory is turned into practical.',
    },
    {
      iconClass: 'fas fa-bars',
      title: '4 Levels',
      description: 'Basic (Level 1) to Pro (Level 4) levels of learning the subjects.',
    },
    {
      iconClass: 'fas fa-hourglass-start',
      title: 'Pace',
      description: 'You decide the pace at which you are comfortable to learn.',
    },
  ];

  return (
    <div
      className="hidden md:block relative py-12 md:py-12 px-4 sm:px-8 text-center min-h-screen"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/25 z-[1]"></div>

      {/* Content */}
      <div className="relative z-[2] max-w-7xl mx-auto">
        {/* Title */}
        <h2 className="font-thin text-white/80 mb-8 md:mb-12 text-2xl sm:text-3xl md:text-5xl">
          Why Simple Vedas?
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 sm:gap-3 md:gap-4 justify-items-center">
          {featureBoxes.map((feature, index) => {
            return (
              <div
                key={index}
                className="bg-[#fbc02d] p-6 sm:p-8 flex flex-col justify-between items-start text-left w-[300px] sm:w-[320px] md:w-[340px] h-[160px] sm:h-[180px] md:h-[200px] border-2 border-transparent transition-all duration-[1500ms] ease-in-out shadow-lg hover:bg-white group"
              >
                {/* Icon + Title */}
                <div className="w-full">
                  <div className="mb-3 text-[#2b2c2e] transition-colors duration-300 group-hover:text-[#fbc02d]">
                    <i className={`${feature.iconClass} text-[35px]`}></i>
                  </div>

                  <h3 className="text-[#2b2c2e] font-semibold mb-3 text-[18px] leading-tight">
                    {feature.title}
                  </h3>

                  <div className="w-10 h-0.5 bg-[#2b2c2e] mb-0 transition-colors duration-300 group-hover:bg-[#fbc02d]"></div>

                  {/* Description */}
                  <p className="text-[#2b2c2e] text-[14px] leading-[22px] mt-1 w-full">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SimpleVedasSection;