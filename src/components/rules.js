import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {Spinner} from 'react-bootstrap';
import './rules.css';

export const Rules = () => {
    const [rules, setRules] = useState([]);
    const [loading, setLoading] = useState(false);  

    const url = 'http://localhost:3000';

    const fetchRules = () => {
        setLoading(true);
        axios.get(`${url}/rules`).then(ruleData => {
            console.log(ruleData); 
            setLoading(false); 
            setRules(ruleData.data.data.rules);
        });
    }

    useEffect(() => {
        fetchRules();        
    }, []);

    if(loading) return <Spinner style={{position: 'absolute', left: '50%', transform: 'translateX(-50%)', top: '50%', transform: 'translateY(-50%)'}} animation="grow" />
    if(rules.length === 0 && !loading) return <h6 style={{position: 'absolute', left: '50%', transform: 'translateX(-50%)'}}>No found rules</h6>
    

    return(
        <div className="container" style={{position: 'absolute', left: '50%', transform: 'translateX(-50%)', marginTop: '1%'}}>

            <ul className="list-group mb-4">
                {rules.map((currentRule, k) => 
                    <Link className="rule-hover" to={{pathname: `/rule/details/${currentRule.id}`, state: {dataFromRule: currentRule}}} key={k} style={{textDecoration: 'none', width: 'auto'}}>
                        <li key={k} className="list-group-item">
                            <strong>Id: </strong>{currentRule.id} - <strong>Description: </strong>{currentRule.description}
                        </li>
                    </Link>
                )}
            </ul>          

        </div>
    )
}