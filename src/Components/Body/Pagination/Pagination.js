import React from 'react';
import './Pagination.css';

const Pagination = ({ countryPerPage, totalCountry, paginate }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalCountry / countryPerPage); i++) {
        pageNumbers.push(i)
    }
    
    return (
        <div>
            <ul className='pagination'>
                {pageNumbers.map(number => (
                    <button  key={number} onClick={() => paginate(number)}>
                        {number}
                    </button>
                ))}
            </ul>
        </div>
    )
}

export default Pagination;
