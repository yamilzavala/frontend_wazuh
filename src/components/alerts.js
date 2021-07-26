import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import { Pagination } from './pagination';
import {Spinner} from 'react-bootstrap'
import {Form} from 'react-bootstrap'
import './alert.css';


export const Alerts = () => {
    const [alerts, setAlerts] = useState([]);
    const [loading, setLoading] = useState(false);    
    const [currentPage, setCurrentPage] = useState(1);
    const [alertsPerPage] = useState(8);
    const [search, setSearch] = useState('');
    const [searching, setSearching] = useState(false);

    const url = 'http://localhost:3000';

    const fetchAlerts = () => {
        setLoading(true);
        axios.get(`${url}/alerts`).then(alertData => {
            console.log(alertData); 
            setLoading(false); 
            setAlerts(alertData.data.data);
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
    
    if(loading) return <Spinner style={{position: 'absolute', left: '50%', transform: 'translateX(-50%)', top: '50%', transform: 'translateY(-50%)'}} animation="grow" />
    if(alerts.length === 0 && !loading) return <h6 style={{position: 'absolute', left: '50%', transform: 'translateX(-50%)'}}>No found alerts</h6>
    
    return(
        <div className="container" style={{position: 'absolute', left: '50%', transform: 'translateX(-50%)', marginTop: '1%'}}>

            <Form.Group className="mb-3" controlId="formBasicEmail" style={{width: '300px'} }>
                <Form.Label>Search</Form.Label>
                <Form.Control onChange={e => setSearch(e.target.value)} size="sm" type="text" placeholder="Enter alert id" style={{background: '#474B4E', color: 'white'}}/>
                {/* <Button className="button" onClick={handleSearch} type="button">{searching ? 'Searching...' : 'Search'}</Button> */}
            </Form.Group>
         
            <ul className="list-group mb-4">
                {currentAlerts.map(currentAlert => 
                    <Link className="custom-hover" to={{pathname: `/details/${currentAlert._id}`, state: {dataFromAlert: currentAlert}}} key={currentAlert._id} style={{textDecoration: 'none', width: 'auto'}}>
                        <li key={currentAlert._id} className="list-group-item">
                            <strong>Id: </strong>{currentAlert._id} - <strong>Index: </strong>{currentAlert._index}
                        </li>
                    </Link>
                )}
            </ul>
           
            <Pagination alertsPerPage={alertsPerPage} totalAlers={alerts.length} paginate={paginate}/>
        </div>
    )
}