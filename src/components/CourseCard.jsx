import { CalendarDaysIcon, ClockIcon } from "@heroicons/react/24/outline";
import { Globe } from "lucide-react";
import { StarIcon } from '@heroicons/react/24/solid';
import { StarIcon as StarIconOutline } from '@heroicons/react/24/outline';

const CourseCard = ({
  image,
  headline,
  subheadline,
  title,
  startDate,
  duration,
  language,
  price,
  onViewDetails,
  onRegister,
  originalPrice,
  rating = 4.5,
}) => {
  return (
    <div className="w-full shadow-lg overflow-hidden h-[600px] sm:h-[500px] bg-white flex flex-col max-w-full mb-6 sm:mb-0">
      {/* Image with overlay text */}
      <div className="relative h-[50%] sm:h-[220px] flex-shrink-0">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover brightness-75"
        />

        {/* Overlay */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4">
          <h3 className="text-lg sm:text-xl font-bold leading-tight drop-shadow-[0_1px_4px_rgba(0,0,0,0.6)] line-clamp-2 truncate">
            {headline}
          </h3>

          {subheadline && (
            <span className="mt-2 bg-black/50 px-3 py-1 text-yellow-300 font-semibold text-sm leading-tight drop-shadow-[0_1px_3px_rgba(0,0,0,0.6)] truncate">
              {subheadline}
            </span>
          )}

          <span className="mt-2 text-base text-white">▼</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 sm:p-5 pb-4 sm:pb-5 flex-1 flex flex-col justify-between min-h-0 overflow-visible">
        <div className="flex-1 flex flex-col">
          {/* Title */}
          <h4 className="text-xl sm:text-xl font-bold text-gray-900 mb-3 sm:mb-2 leading-tight line-clamp-2 truncate">
            {title}
          </h4>
          
          <div className="mb-3 sm:mb-2">
            <div className="flex items-center gap-1 flex-nowrap">
              {[1, 2, 3, 4, 5].map((star) => {
                const normalizedRating = Math.max(0, Math.min(5, rating));
                const filled = star <= normalizedRating;
                const halfFilled = star - 0.5 <= normalizedRating && star > normalizedRating;
                
                return (
                  <span key={star} className="inline-flex items-center justify-center flex-shrink-0">
                    {filled ? (
                      <StarIcon className="w-4 h-4 text-yellow-400" />
                    ) : halfFilled ? (
                      <span className="relative inline-flex items-center justify-center flex-shrink-0 w-4 h-4">
                        <StarIconOutline className="w-4 h-4 text-gray-300" />
                        <span className="absolute left-0 top-0 overflow-hidden" style={{ width: '50%', height: '100%' }}>
                          <StarIcon className="w-4 h-4 text-yellow-400" />
                        </span>
                      </span>
                    ) : (
                      <StarIconOutline className="w-4 h-4 text-gray-300 opacity-55" />
                    )}
                  </span>
                );
              })}
            </div>
          </div>
          
          {/* Info Row */}
          <div className="flex flex-wrap gap-2 sm:gap-2 items-center mb-4 sm:mb-3">
            <span className="inline-flex items-center gap-1 bg-gray-100 text-sm sm:text-sm h-7 sm:h-6 px-3 sm:px-2 font-medium">
              <CalendarDaysIcon className="w-4 h-4 sm:w-3.5 sm:h-3.5" />
              {startDate}
            </span>
            <span className="inline-flex items-center gap-1 bg-gray-100 text-sm sm:text-sm h-7 sm:h-6 px-3 sm:px-2 font-medium">
              <ClockIcon className="w-4 h-4 sm:w-3.5 sm:h-3.5" />
              {duration}
            </span>
            <span className="inline-flex items-center gap-1 bg-gray-100 text-sm sm:text-sm h-7 sm:h-6 px-3 sm:px-2 font-medium truncate max-w-full">
              <Globe className="w-4 h-4 sm:w-3.5 sm:h-3.5 flex-shrink-0" />
              <span className="truncate">{Array.isArray(language) ? language.join(", ") : language}</span>
            </span>
          </div>

          {/* Description */}
          <p className="text-base sm:text-sm text-gray-600 mb-4 sm:mb-3 leading-relaxed line-clamp-3 sm:line-clamp-2">
            Learn yoga philosophy, asanas and meditations to take charge of your joy!
          </p>
        </div>

        {/* Buttons */}
        <div className="flex gap-3 sm:gap-2 mt-auto flex-shrink-0 mb-0 sm:mb-0 w-full items-center overflow-visible">
          <div className="flex items-center gap-2 flex-shrink-0">
            {price === "Free" ? (
              <>
                <span className="text-base sm:text-sm line-through text-gray-500 font-medium">
                  ₹{originalPrice}
                </span>
                <span className="text-lg sm:text-base font-bold text-gray-900">
                  {price}
                </span>
              </>
            ) : (
              <>
                <span className="text-base sm:text-sm line-through text-gray-500 font-medium">
                  ₹{originalPrice}
                </span>
                <span className="text-lg sm:text-base font-bold text-gray-900">
                  ₹{price}
                </span>
              </>
            )}
          </div>

          <button
            onClick={onViewDetails}
            className="flex-1 px-3 sm:px-2 py-2.5 sm:py-1.5 text-sm sm:text-xs font-medium border border-gray-300 hover:bg-[#ffc13c] hover:border-[#ffc13c] min-h-[44px] sm:min-h-[36px] whitespace-nowrap"
          >
            Details
          </button>
          <button
            onClick={onRegister}
            className="flex-1 px-3 sm:px-2 py-2.5 sm:py-1.5 text-sm sm:text-xs font-medium border border-gray-300 hover:bg-[#ffc13c] hover:border-[#ffc13c] min-h-[44px] sm:min-h-[36px] whitespace-nowrap"
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;

