import React from 'react';
import 'bootstrap';

const Pagination = ({ countryPerPage, totalCountry, paginate }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalCountry / countryPerPage); i++) {
        pageNumbers.push(i)
    }
    
    return (
        // <nav>
            <ul className='pagination' style={{marginLeft: '10px', marginBottom: '30px'}}>
                {pageNumbers.map(number => (
                    <li key={number} className="page-item">
                        <a onClick={() => paginate(number)} className='page-link'>
                            <button>
                                {number}
                            </button>
                        </a>
                    </li>
                ))}
            </ul>
        
        
    )
}

export default Pagination;
