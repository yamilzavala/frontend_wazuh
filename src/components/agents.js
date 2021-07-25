import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {Spinner} from 'react-bootstrap'

export const Agents = () => {
    const [agents, setAgents] = useState([]);
    const [loading, setLoading] = useState(false);  

    const url = 'http://localhost:3000';

    const fetchAgents = () => {
        setLoading(true);
        axios.get(`${url}/agents`).then(agentData => {
            console.log(agentData); 
            setLoading(false); 
            setAgents(agentData.data.data.agents);
        });
    }

    useEffect(() => {
        fetchAgents();        
    }, []);

    if(loading) return <Spinner style={{position: 'absolute', left: '50%', transform: 'translateX(-50%)', top: '50%', transform: 'translateY(-50%)'}} animation="grow" />
    if(agents.length === 0 && !loading) return <h6 style={{position: 'absolute', left: '50%', transform: 'translateX(-50%)'}}>No found agents</h6>
    

    return(
        <div className="container" style={{position: 'absolute', left: '50%', transform: 'translateX(-50%)', marginTop: '1%'}}>

            <ul className="list-group mb-4">
                {agents.map((currentAgent, k) => 
                    <Link to={{pathname: `/agent/details/${currentAgent.id}`, state: {dataFromAgent: currentAgent}}} key={k} style={{textDecoration: 'none', width: 'auto'}}>
                        <li key={k} className="list-group-item">
                            <strong>Id: </strong>{currentAgent.id} - <strong>Name: </strong>{currentAgent.name}
                        </li>
                    </Link>
                )}
            </ul>          

        </div>
    )
}