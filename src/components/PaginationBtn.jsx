import React from 'react';
import usePagination from '../hooks/usePagination';
import './styles/paginationBtn.css';

const PaginationBtn = ({ pageCharacter, infoPagination, setPageCharacter }) => {
  const { btnsBlock } = usePagination(pageCharacter, infoPagination);

  const handleNextBtn = () => {
    if (pageCharacter === infoPagination.pages) return setPageCharacter(1);
    const nextPage = pageCharacter + 1;
    setPageCharacter(nextPage);
  };

  const handlePrevBtn = () => {
    if (pageCharacter === 1) return setPageCharacter(infoPagination.pages);
    const prevPage = pageCharacter - 1;
    setPageCharacter(+prevPage);
  };

  const handleNumberBtn = number => {
    setPageCharacter(number);
  };

  return (
    <ul className="c-pagination-btn">
      <li className="pagination-btn__item">
        <button
          className="pagination-btn__btn"
          onClick={handlePrevBtn}
          style={infoPagination.pages === 1 ? { display: 'none' } : {}}
        >
          <i className="fa-solid fa-angle-left"></i>
        </button>
      </li>
      {btnsBlock?.map((btnNumber, idx) => (
        <li key={idx} className="pagination-btn__item">
          <button
            className={`pagination-btn__btn ${
              btnNumber === pageCharacter
                ? 'pagination-btn__btn--active'
                : 'pagination-btn__btn--inactive'
            }`}
            onClick={() => handleNumberBtn(btnNumber)}
          >
            {btnNumber}
          </button>
        </li>
      ))}
      <li className="pagination-btn__item">
        <button
          className="pagination-btn__btn"
          onClick={handleNextBtn}
          style={infoPagination.pages === 1 ? { display: 'none' } : {}}
        >
          <i className="fa-solid fa-angle-right"></i>
        </button>
      </li>
    </ul>
  );
};

export default PaginationBtn;
