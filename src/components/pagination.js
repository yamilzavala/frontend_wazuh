import './pagination-style.css';
import React from 'react';

export const Pagination = ({alertsPerPage, totalAlers, paginate}) => {
    const pageNumbers = [];
    // console.log(alertsPerPage, totalAlers);

    for(let i = 1; i <= Math.ceil(totalAlers / alertsPerPage); i++) {
        pageNumbers.push(i);
    }
    // console.log(pageNumbers);

    return (
        <nav className="navbar-center">   
            <ul className="pagination">            
                {pageNumbers.map(number => (                    
                    <li key={number} className="page-item">
                      <a onClick={() => paginate(number)} className="page-link">{number}</a> 
                    </li>
                ))}
            </ul>
        </nav>
    )
}