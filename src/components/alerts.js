import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import { Pagination } from './pagination';

export const Alerts = () => {
    const [alerts, setAlerts] = useState([]);
    const [alertsPagination, setAlertsPagination] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [alertsPerPage, setPerPage] = useState(10);

    // const url = 'http://localhost:3000';
    const url = 'https://jsonplaceholder.typicode.com/posts';

    const fetchAlerts = () => {
        // axios.get(`${url}/alerts`).then(alertData => {console.log(alertData); setAlerts(alertData.data)});
        setLoading(true);
        axios.get(`${url}`).then(alertData => {
            setLoading(false);     
            setAlerts(alertData.data);
            // console.log(alertData);             
            const indexOfLastAlert = currentPage * alertsPerPage;
            const indexOfFirstAlert = indexOfLastAlert - alertsPerPage;
            setAlertsPagination(alertData.data.slice(indexOfFirstAlert, indexOfLastAlert));    
            console.log(indexOfFirstAlert, indexOfLastAlert);     
        });
    }

    useEffect(() => {
        setAlerts([]);
        fetchAlerts();       
    }, []);

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
        fetchAlerts();
    }   

    
    if(alerts.length === 0 && loading) return <h1>Loading...</h1>
    if(alerts.length === 0 && !loading) return <h1>No found alerts</h1>

    return(
        <div>
            {alertsPagination.map(currentAlert => 
                <Link to={{pathname: `/details/${currentAlert.id}`, state: {dataFromAlert: currentAlert}}}>
                    <li key={currentAlert.id}>
                        {currentAlert.id} 
                        {currentAlert.title}
                    </li>
                </Link>
            )}
            <Pagination alertsPerPage={alertsPerPage} totalAlers={alerts.length} paginate={paginate}/>
        </div>
    )
}