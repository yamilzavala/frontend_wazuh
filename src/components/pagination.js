import React from 'react';

export const Pagination = ({alertsPerPage, totalAlers, paginate}) => {
    const pageNumbers = [];
    // console.log(alertsPerPage, totalAlers);

    for(let i = 1; i <= Math.ceil(totalAlers / alertsPerPage); i++) {
        pageNumbers.push(i);
    }
    // console.log(pageNumbers);

    return (
        <nav>   
            <ul>            
                {pageNumbers.map(number => (                    
                    <li key={number} >
                      <a onClick={() => paginate(number)} >{number}</a> 
                    </li>
                ))}
            </ul>
        </nav>
    )
}