import { ClockIcon } from "@heroicons/react/24/outline";

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
    <div className="w-full shadow-lg overflow-hidden bg-white flex flex-col max-w-full mb-6 sm:mb-0">
      {/* Image with centered dark title overlay and time badge */}
      <div className="relative h-[240px] sm:h-[300px] flex-shrink-0 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-110"
        />

        {/* Dark rounded title bar centered near bottom */}
        {/* <div className="absolute left-1/2 transform -translate-x-1/2 bottom-6 bg-black/85 text-white px-6 py-2 rounded-lg shadow-lg max-w-[85%] text-center">
          <h3 className="text-lg sm:text-xl font-bold leading-tight truncate">{headline || title}</h3>
        </div> */}

        {/* Time / duration badge on bottom right */}
        <div className="absolute right-4 bottom-4 bg-[#072241] text-white px-3 py-1 rounded-lg flex items-center gap-2">
          <ClockIcon className="w-4 h-4" />
          <span className="text-sm font-medium">{duration}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 sm:p-6 pb-6 flex-1 flex flex-col justify-between min-h-0">
        <div>
          {/* Language pills */}
          <div className="flex flex-wrap gap-3 mb-4">
            {(Array.isArray(language) ? language : (language ? String(language).split(',') : [])).map((lang, i) => (
              <span key={i} className="bg-[#FFC13C] text-black px-4 py-2 rounded-md font-medium text-sm">{lang.trim()}</span>
            ))}
          </div>

          {/* Main Title */}
          <h4 className="text-xl sm:text-xl font-medium text-gray-900 my-7 leading-tight">{title}</h4>
        </div>

        {/* Price row */}
        <div className="border-t border-gray-300 pt-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="ttext-2xl font-extrabold line-through text-[#082A52]">₹{originalPrice}</span>
            <span className="text-2xl font-extrabold text-[#082A52]">{price === 'Free' ? 'Free' : `₹${price}`}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;

