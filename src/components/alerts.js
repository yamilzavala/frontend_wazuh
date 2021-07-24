import './alerts.css';
import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import { Pagination } from './pagination';
import {Spinner} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

export const Alerts = () => {
    const [alerts, setAlerts] = useState([]);
    const [loading, setLoading] = useState(false);    
    const [currentPage, setCurrentPage] = useState(1);
    const [alertsPerPage] = useState(8);

    // const url = 'http://localhost:3000';
    const url = 'https://jsonplaceholder.typicode.com/posts';

    const fetchAlerts = () => {
        // axios.get(`${url}/alerts`).then(alertData => {console.log(alertData); setAlerts(alertData.data)});
        setLoading(true);
        axios.get(`${url}`).then(alertData => {
            setLoading(false);     
            setAlerts(alertData.data);                         
        });
    }

    useEffect(() => {
        fetchAlerts();        
    }, []);


    //Current alerts
    const indexOfLastAlert = currentPage * alertsPerPage;    
    const indexOfFirstAlert = indexOfLastAlert - alertsPerPage;      
    const currentAlerts = alerts.slice(indexOfFirstAlert, indexOfLastAlert);

    //Change the page
    const paginate = (pageNumber) => setCurrentPage(pageNumber); 

         
    // if(loading) return <h5>Loading...</h5>
    if(loading) return <Spinner style={{position: 'absolute', left: '50%', transform: 'translateX(-50%)', top: '50%', transform: 'translateY(-50%)'}} animation="grow" />
    if(alerts.length === 0 && !loading) return <h6 style={{position: 'absolute', left: '50%', transform: 'translateX(-50%)'}}>No found alerts</h6>

    return(
        <div className="container; alertList" style={{position: 'absolute', left: '50%', transform: 'translateX(-50%)'}}>
            <ul className="list-group mb-4">
                {currentAlerts.map(currentAlert => 
                    <Link to={{pathname: `/details/${currentAlert.id}`, state: {dataFromAlert: currentAlert}}} key={currentAlert.id} style={{textDecoration: 'none', width: '800px'}}>
                        <li key={currentAlert.id} className="list-group-item">
                            {currentAlert.id} - {currentAlert.title}
                        </li>
                    </Link>
                )}
            </ul>
            <Pagination alertsPerPage={alertsPerPage} totalAlers={alerts.length} paginate={paginate}/>
        </div>
    )
}