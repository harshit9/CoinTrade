const PaginationComponent = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="flex justify-center items-center mt-5 mb-10">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-l"
        onClick={() => onPageChange(1)}
        disabled={currentPage === 1}
      >
        {'<<'} First
      </button>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
       {'<'} Prev
      </button>
      <span className="px-4">
        Page {currentPage} of {totalPages}
      </span>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
         Next {'>'}
      </button>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r"
        onClick={() => onPageChange(totalPages)}
        disabled={currentPage === totalPages}
      >
        Last {'>>'}
      </button>
    </div>
  );
};

export default PaginationComponent;