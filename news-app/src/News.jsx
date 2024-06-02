import { useState } from 'react';
import PropTypes from 'prop-types'; 
import useWindowSize from './UseWindowSize.jsx'; 
import { CirclesWithBar } from 'react-loader-spinner';

function News({ news = [] }) {
  const [currentPage, setCurrentPage] = useState(1);
  const { width } = useWindowSize(); 
  const itemsPerPage = width > 1024 ? 12 : 5; 

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = news.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(news.length / itemsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="p-4">
      {currentItems.length > 0 ? (
        <div className={`grid ${width > 1024 ? 'grid-cols-3 gap-6' : 'grid-cols-1'}`}>
          {currentItems.map((item, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-xl font-bold mb-2 text-cyan-500">{item.title}</h3>
              <a href={item.link}>
                <img
                  src={item.og}
                  alt={item.title}
                  className="w-full h-auto mb-2 rounded-md shadow-lg"
                />
              </a>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex justify-center items-center">
          <CirclesWithBar
            height="100"
            width="100"
            color="#4fa94d"
            outerCircleColor="#4fa94d"
            innerCircleColor="#4fa94d"
            barColor="#4fa94d"
            ariaLabel="circles-with-bar-loading"
            visible={true}
          />
        </div>
      )}

      {news.length > itemsPerPage && (
        <div className="flex justify-between items-center mt-4">
          <button
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-blue-500 text-white rounded-md disabled:opacity-50"
          >
            Previous
          </button>
          <span className="text-gray-700">Page {currentPage} of {totalPages}</span>
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-blue-500 text-white rounded-md disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}

// Add prop types for validation
News.propTypes = {
  news: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      og: PropTypes.string.isRequired
    })
  )
};

export default News;
