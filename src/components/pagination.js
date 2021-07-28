import './pagination-style.css';
import React from 'react';

export const Pagination = ({alertsPerPage, totalAlers, paginate}) => {
    let pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalAlers / alertsPerPage); i++) {
        if (totalAlers <= alertsPerPage) {
            pageNumbers = []
        } else {
            pageNumbers.push(i);
        }
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