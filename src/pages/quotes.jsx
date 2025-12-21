import { useState, useEffect } from 'react';
import { Search, X, MessageCircle } from 'lucide-react';
import PageHeader from './PageHeader';
import simpleVedasLogo from '../assets/images/simple-vedas-logo.png';
import faithImg from '../assets/images/faith.png';
import gitaCourseImg from '../assets/images/gita-course.jpg';
import embraceImg from '../assets/images/embrace.jpg';
import madhusudanImg from '../assets/images/madhusudan-visnu-dev.png';
import weeknessImg from '../assets/images/weekness.jpg';
import relationshipsImg from '../assets/images/relationships.jpg';
import questionarisImg from '../assets/images/questionaris.webp';
import courseAppImg from '../assets/images/course-app.jpg';
import srilaPrabhupadaImg from '../assets/images/Srila-Prabhupada.jpg';
import simpleVedasImg from '../assets/images/simple-vedas.jpg';
import abouthImg from '../assets/images/abouth.jpg';
import homeBannerImg from '../assets/images/home-page-banners.png';

const images = [faithImg, gitaCourseImg, embraceImg, madhusudanImg, weeknessImg, relationshipsImg, questionarisImg, courseAppImg, srilaPrabhupadaImg, simpleVedasImg, abouthImg, homeBannerImg];
const borderColors = ['border-amber-900', 'border-red-700', 'border-gray-300', 'border-yellow-400', 'border-amber-900', 'border-red-700', 'border-amber-900', 'border-yellow-400', 'border-blue-900', 'border-green-700', 'border-purple-700', 'border-indigo-700'];

const Quotes = () => {
  const [allQuotes, setAllQuotes] = useState([]);
  const [quotes, setQuotes] = useState([]);
  const [featuredQuote, setFeaturedQuote] = useState(null);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [selectedQuote, setSelectedQuote] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const quotesPerPage = 12;

  useEffect(() => {
    fetchQuotes();
  }, []);

  useEffect(() => {
    filterAndPaginateQuotes();
  }, [page, searchTerm, allQuotes]);

  const fetchQuotes = () => {
    setLoading(true);

    setFeaturedQuote({
      text: "He who knows not, and knows not he knows not, he is a fool—shun him; He who knows not, and knows he knows not, he is simple—teach him; He who knows, and knows not he knows, he is asleep—wake him; He who knows, and knows he knows, he is wise—follow him.",
      author: "Unknown"
    });

    const titles = ['Never Alone', 'Ask God', 'Personal Happiness', 'Completeness', 'Lonely Me', 'Morality & Spirituality', 'Shyness', 'Challenging Situations', 'Existence', 'Determination', 'Satisfaction', 'Mistake'];
    const dates = ['14/03/2024', '09/03/2024', '05/03/2024', '28/02/2024', '26/02/2024', '22/02/2024', '17/02/2024', '13/02/2024', '08/02/2024', '03/02/2024', '31/01/2024', '24/01/2024'];

    const mockQuotes = Array.from({ length: 12 }, (_, i) => ({
      id: i + 1,
      title: titles[i],
      date: dates[i],
      content: '',
      image: images[i],
      borderColor: borderColors[i]
    }));

    setAllQuotes(mockQuotes);
    setLoading(false);
  };

  const filterAndPaginateQuotes = () => {
    // First filter all quotes based on search term
    const filtered = allQuotes.filter(quote => 
      quote.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      quote.content.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Then paginate the filtered results
    const startIndex = (page - 1) * quotesPerPage;
    const endIndex = startIndex + quotesPerPage;
    
    setQuotes(filtered.slice(startIndex, endIndex));
    setTotalPages(Math.ceil(filtered.length / quotesPerPage));
  };

  const QuoteCard = ({ quote }) => (
    <div
      className={`bg-white rounded-lg border-4 ${quote.borderColor} cursor-pointer overflow-hidden flex flex-col`}
      onClick={() => setSelectedQuote(quote)}
    >
      {/* Image Section - Top */}
      <div className="relative w-full h-48">
        <img 
          src={quote.image} 
          alt={quote.title}
          className="w-full h-full rounded-t-lg object-cover"
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/400x300?text=Quote+Image';
          }}
        />
        {/* Simple Vedas Logo */}
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 z-10">
          <img 
            src={simpleVedasLogo} 
            alt="Simple Vedas" 
            className="h-8 w-auto bg-white rounded-full p-1"
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
        </div>
      </div>
      
      {/* Text Section - Bottom */}
      <div className="p-4 flex-1 flex flex-col min-h-0">
        <h3 className="text-base font-bold text-gray-900 mb-1 text-center">
          <a href="#" onClick={(e) => { e.preventDefault(); setSelectedQuote(quote); }}>
            {quote.title}
          </a>
        </h3>
        <span className="text-gray-500 text-xs mb-2 text-center">{quote.date}</span>
        <p className="text-sm font-light text-gray-500 flex-1 overflow-hidden line-clamp-3 mb-2">
          {quote.content}
        </p>
        <button 
          className="text-green-600 font-semibold text-xs mt-auto mx-auto"
          onClick={(e) => {
            e.stopPropagation();
            setSelectedQuote(quote);
          }}
        >
          See More &gt;&gt;
        </button>
      </div>
    </div>
  );

  return (
    <div>
      <PageHeader backgroundImage={abouthImg} title="Quotes" />

      {/* HEADER */}
      <div className="bg-white py-8">
        <div className="max-w-7xl mx-auto px-6">

          <div className="flex items-center gap-4 mb-6">
            <h1 className="text-3xl md:text-4xl font-extrabold">QUOTES</h1>
            <div className="w-20 h-2 bg-yellow-400 rounded"></div>
          </div>

          <div className="flex flex-col md:flex-row gap-3">
            
            <div className="flex-1 relative">
              <input
                type="text"
                placeholder="Search for Quotes here..."
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setPage(1); // Reset to first page when searching
                }}
                className="w-full h-12 px-4 pl-12 bg-gray-50 border border-gray-300 rounded-lg text-sm"
              />
              <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            </div>

            <button className="flex items-center justify-center gap-2 px-6 h-12 border-2 border-green-500 text-green-500 font-semibold rounded-full text-sm whitespace-nowrap">
              <MessageCircle size={18} />
              Subscribe for Quotes
            </button>
          </div>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-7xl mx-auto px-6 pb-10">

        {/* FEATURED QUOTE */}
        {featuredQuote && (
          <div className="bg-white mb-10">
            {/* Top Red Line */}
            <div className="border-t-2 border-red-900 mb-6"></div>
            
            {/* Quote Text */}
            <div className="px-4">
              <p className="text-base leading-relaxed text-red-900 font-serif text-left">
                {featuredQuote.text}
              </p>
            </div>
            
            {/* Bottom Red Line */}
            <div className="border-t-2 border-red-900 mt-6"></div>
            
            {/* Author - Outside the lines */}
            <p className="text-red-900 font-serif text-left mt-4 px-4">
              {featuredQuote.author}
            </p>
          </div>
        )}

        {/* QUOTE CARDS */}
        {loading ? (
          <p className="text-center py-10 text-gray-500">Loading quotes...</p>
        ) : (
          <>
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {quotes.map((quote) => (
                <QuoteCard key={quote.id} quote={quote} />
              ))}
            </div>

            {quotes.length === 0 && !loading && (
              <p className="text-center py-10 text-gray-500">
                No quotes found matching your search.
              </p>
            )}

            {/* PAGINATION */}
            <div className="flex justify-center mt-10 gap-2">
              <button
                onClick={() => setPage(Math.max(1, page - 1))}
                disabled={page === 1}
                className="px-4 py-2 rounded-lg border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Previous
              </button>
              
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i + 1}
                  onClick={() => setPage(i + 1)}
                  className={`w-10 h-10 rounded-lg font-semibold ${
                    page === i + 1 
                      ? 'bg-blue-600 text-white' 
                      : 'border border-gray-300'
                  }`}
                >
                  {i + 1}
                </button>
              ))}
              
              <button
                onClick={() => setPage(Math.min(totalPages, page + 1))}
                disabled={page === totalPages}
                className="px-4 py-2 rounded-lg border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Next
              </button>
            </div>
          </>
        )}

        {/* MODAL */}
        {selectedQuote && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
            onClick={() => setSelectedQuote(null)}
          >
            <div 
              className="bg-white rounded-xl p-8 max-w-2xl w-full max-h-[80vh] overflow-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-2xl font-bold">{selectedQuote.title}</h2>
                <button 
                  onClick={() => setSelectedQuote(null)}
                  className="rounded-full p-1"
                >
                  <X size={24} />
                </button>
              </div>

              <p className="text-sm text-gray-500 mb-6">{selectedQuote.date}</p>

              <p className="text-base leading-relaxed text-gray-700 mb-8">
                {selectedQuote.content}
              </p>

              <button
                onClick={() => setSelectedQuote(null)}
                className="w-full bg-yellow-400 text-black font-semibold py-3 rounded-lg"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Quotes;