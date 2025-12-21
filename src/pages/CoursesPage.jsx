import { useState, useEffect, useRef } from "react";
import CourseCard from "../components/CourseCard";
import coursesImg from "../assets/images/course.png";

const courses = [
  { image: coursesImg, title: "Madhurya Kadambini", duration: "Ongoing", language: ["Bhakti, Hindi"], price: "400", originalPrice: "1400", startDate: "May 23", rating: 4.5 },
  { image: coursesImg, title: "Madhurya Kadambini", duration: "Self-paced", language: ["Bhakti"], price: "400", originalPrice: "1400", startDate: "May 23", rating: 4.5 },
  { image: coursesImg, title: "Prabhupada", duration: "Upcoming", language: ["Bhakti English"], price: "Free", originalPrice: "1400", startDate: "May 23", rating: 4.5 },
  { image: coursesImg, title: "Bhagavad Gita", duration: "Past", language: ["Philosophy"], price: "500", originalPrice: "1500", startDate: "May 23", rating: 1.5},
  { image: coursesImg, title: "Yoga and Meditation", duration: "Past", language: ["Wellness"], price: "300", originalPrice: "1400", startDate: "May 23", rating: 4.5 },
  { image: coursesImg, title: "Sanskrit Basics", duration: "Upcoming", language: ["Bhakti English"], price: "Free", originalPrice: "1400", startDate: "May 23", rating: 4.5 },
];

const CoursesPage = () => {
  // Create extended array for infinite loop: [last 2, ...all, first 2]
  // For 3 cards view, we need 2 duplicates at start and 2 at end
  const extendedCourses = [
    courses[courses.length - 2],
    courses[courses.length - 1],
    ...courses,
    courses[0],
    courses[1],
  ];
  
  const [currentIndex, setCurrentIndex] = useState(2); // Start at first real course
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [slidesToShow, setSlidesToShow] = useState(3);
  const carouselRef = useRef(null);

  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      setSlidesToShow(mobile ? 1 : 3);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => {
      const prev = prevIndex - 1;
      // If we're at the first duplicate, jump to last real course seamlessly
      if (prev < 2) {
        setTimeout(() => {
          setIsTransitioning(false);
          requestAnimationFrame(() => {
            setCurrentIndex(extendedCourses.length - 4);
            requestAnimationFrame(() => {
              setIsTransitioning(true);
            });
          });
        }, 700);
        return prev;
      }
      return prev;
    });
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex + 1;
      // If we're at the last duplicate, jump to first real course seamlessly
      if (nextIndex >= extendedCourses.length - 2) {
        setTimeout(() => {
          setIsTransitioning(false);
          requestAnimationFrame(() => {
            setCurrentIndex(2);
            requestAnimationFrame(() => {
              setIsTransitioning(true);
            });
          });
        }, 700);
        return nextIndex;
      }
      return nextIndex;
    });
  };

  const goToSlide = (index) => {
    // Map actual course index to extended array index
    setCurrentIndex(index + 2);
  };

  // Auto-play functionality with infinite loop
  useEffect(() => {
    if (!isMobile) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => {
          const nextIndex = prevIndex + 1;
          if (nextIndex >= extendedCourses.length - 2) {
            setTimeout(() => {
              setIsTransitioning(false);
              requestAnimationFrame(() => {
                setCurrentIndex(2);
                requestAnimationFrame(() => {
                  setIsTransitioning(true);
                });
              });
            }, 700);
            return nextIndex;
          }
          return nextIndex;
        });
      }, 3500);

      return () => clearInterval(interval);
    }
  }, [isMobile, extendedCourses.length]);

  return (
    <>
      <div className="bg-[#f1f5f8] py-8 sm:py-12 md:py-16 px-4 sm:px-8 md:px-16 lg:px-24">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 md:mb-12 pt-4">
          <div className="flex flex-wrap justify-center items-center gap-2 mb-1">
            <div className="hidden sm:block w-12 h-0.5 bg-[#FFC13C]"></div>
            <h2 className="text-2xl sm:text-4xl font-semibold text-center font-roboto">
              Our <span className="text-[#FFC13C]">Courses</span>
            </h2>
            <div className="hidden sm:block w-12 h-0.5 bg-[#FFC13C]"></div>
          </div>
          <p className="text-[#222] tracking-widest uppercase text-xs sm:text-base mt-2">
            Learn as never before
          </p>
        </div>

        {/* Carousel */}
        <div id="courses-carousel" className="relative w-full pb-8" data-carousel="slide">
          {/* Carousel wrapper - overflow container */}
          <div className="relative overflow-hidden w-full">
            {/* Cards container - flex container with transform */}
            <div
              ref={carouselRef}
              className={`flex ${isTransitioning ? 'transition-transform duration-700 ease-in-out' : 'transition-none'}`}
              style={{
                gap: isMobile ? '0' : '1.5rem',
                transform: isMobile 
                  ? `translateX(-${currentIndex * 100}%)`
                  : `translateX(calc(-${currentIndex * (100 / 3)}% - ${currentIndex * 0.5}rem))`
              }}
            >
              {extendedCourses.map((course, index) => (
                <div
                  key={index}
                  className="flex-shrink-0"
                  style={isMobile 
                    ? { width: '100%' } 
                    : { width: 'calc((100% - 3rem) / 3)' }}
                  data-carousel-item
                >
                  <CourseCard {...course} />
                </div>
              ))}
            </div>
          </div>

          {/* Slider indicators - positioned at bottom */}
          <div className="flex justify-center items-center space-x-2 mt-6">
            {courses.map((_, index) => {
              // Calculate which course is currently visible (accounting for extended array)
              let actualIndex = currentIndex - 2;
              // Handle wrap-around for infinite loop
              if (actualIndex < 0) actualIndex = courses.length + actualIndex;
              if (actualIndex >= courses.length) actualIndex = actualIndex % courses.length;
              
              // For desktop showing 3 cards, highlight first visible course's indicator
              const isActive = isMobile 
                ? index === actualIndex
                : (index >= actualIndex && index < actualIndex + 3) || 
                  (actualIndex + 3 > courses.length && index < (actualIndex + 3) % courses.length);
              
              return (
                <button
                  key={index}
                  type="button"
                  className={`w-2 h-2 rounded-full ${
                    isActive ? 'bg-[#FFC13C]' : 'bg-gray-300'
                  }`}
                  aria-current={index === actualIndex}
                  aria-label={`Slide ${index + 1}`}
                  onClick={() => goToSlide(index)}
                  data-carousel-slide-to={index}
                ></button>
              );
            })}
          </div>

          {/* Navigation buttons - below indicators */}
          <div className="flex justify-center items-center gap-3 mt-4">
            <button
              type="button"
              onClick={goToPrevious}
              className="group relative inline-flex items-center px-5 py-1.5 border border-gray-300 hover:bg-[#FFC13C] hover:border-[#FFC13C] active:bg-[#FFC13C] active:border-[#FFC13C] focus:outline-none transition-all duration-300 overflow-hidden"
              data-carousel-prev
            >
              <span className="absolute left-0 flex items-center justify-end w-8 h-full duration-300 transform translate-x-full opacity-0 group-hover:opacity-100 group-hover:-translate-x-2 ease">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h21" />
                </svg>
              </span>
              <span className="relative text-sm transform transition-all duration-300 group-hover:translate-x-3">Prev</span>
            </button>
            <button
              type="button"
              onClick={goToNext}
              className="group relative inline-flex items-center px-5 py-1.5 border border-gray-300 hover:bg-[#FFC13C] hover:border-[#FFC13C] active:bg-[#FFC13C] active:border-[#FFC13C] focus:outline-none transition-all duration-300 overflow-hidden"
              data-carousel-next
            >
              <span className="relative text-sm transform transition-all duration-300 group-hover:-translate-x-3">Next</span>
              <span className="absolute right-0 flex items-center justify-start w-8 h-full duration-300 transform -translate-x-full opacity-0 group-hover:opacity-100 group-hover:translate-x-2 ease">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </button>
          </div>

        </div>
      </div>
    </>
  );
};

export default CoursesPage;