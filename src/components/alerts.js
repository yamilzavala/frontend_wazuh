import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import { Pagination } from './pagination';
import {Spinner} from 'react-bootstrap'
import {Form, Button} from 'react-bootstrap'
import './alert.css';


export const Alerts = () => {
    const [alerts, setAlerts] = useState([]);
    const [loading, setLoading] = useState(false);    
    const [currentPage, setCurrentPage] = useState(1);
    const [alertsPerPage] = useState(8);

    const [search, setSearch] = useState(''); 
    const [alertsFiltered, setAlertsFiltered] = useState([]);

    const url = 'http://localhost:3001';
    const fetchAlerts = () => {
        setLoading(true);
        axios.get(`${url}/alerts`).then(alertData => {
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
    
    function handleSearch() {        
            setAlertsFiltered(alerts.filter(currentAlert => currentAlert._id === search)); 
            console.log(!!alertsFiltered.length);   
    }


    if(loading) return <Spinner style={{position: 'absolute', left: '50%', transform: 'translateX(-50%)', top: '50%', transform: 'translateY(-50%)'}} animation="grow" />
    if(alerts.length === 0 && !loading) return <h6 style={{position: 'absolute', left: '50%', transform: 'translateX(-50%)'}}>No found alerts</h6>
    
    return(
        <div className="container" style={{position: 'absolute', left: '50%', transform: 'translateX(-50%)', marginTop: '1%'}}>

            <Form.Group className="mb-3" controlId="formBasicEmail" style={{width: '1000px', marginTop: '1%'} }>
                <Form.Label style={{ width: '60px'}}><h6> Search: </h6></Form.Label>
                <Form.Control  value={search} onChange={e => setSearch(e.target.value)} size="sm" type="text" placeholder="Enter alert id" style={{display: 'inline-block', background: '#474B4E', color: 'white', width: '200px', height: '20px'}}/>
                <Button style={{width: '100px', background: '#409dc4', height: '20px', color: 'white'}} className="button" onClick={handleSearch} type="button">Search</Button>               
            </Form.Group>
            
            <ul className="list-group mb-4">               
                {
                (!alertsFiltered.length || search === '') ?                 
                    currentAlerts.map(currentAlert => 
                        <Link className="custom-hover" to={{pathname: `/details/${currentAlert._id}`, state: {dataFromAlert: currentAlert}}} key={currentAlert._id} style={{textDecoration: 'none', width: 'auto'}}>                           
                            <li key={currentAlert._id} className="list-group-item">
                                <strong>Id: </strong>{currentAlert._id} - <strong>Index: </strong>{currentAlert._index}
                            </li>                           
                        </Link>)
                    :  
                    alertsFiltered.map(currentAlertFiltered => 
                        <Link className="custom-hover" to={{pathname: `/details/${currentAlertFiltered._id}`, state: {dataFromAlert: currentAlertFiltered}}} key={currentAlertFiltered._id} style={{textDecoration: 'none', width: 'auto'}}>
                            <li key={currentAlertFiltered._id} className="list-group-item">
                                <strong>Id: </strong>{currentAlertFiltered._id} - <strong>Index: </strong>{currentAlertFiltered._index}
                            </li>                            
                        </Link>)
                    }
            </ul>    
            {!alertsFiltered.length || search === '' ?       
                <Pagination alertsPerPage={alertsPerPage} totalAlers={alerts.length} paginate={paginate}/> 
                :
                <div>
                    <p style={{color: '#f0c0ad'}}>You must delete the search field if you want to see all the alerts again...</p>
                    <Pagination alertsPerPage={alertsPerPage} totalAlers={alertsFiltered.length} paginate={paginate}/>   
                </div>              
            }
        </div>
    )
}