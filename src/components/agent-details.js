import React from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import logo from '../shared/wazuh_logo_w.png'

export const AgentDetails = (props) => {
    console.log(props);

    return (
        <div>   
            <Card style={{ width: '45rem', position: 'absolute', left: '50%', transform: 'translateX(-50%)', marginTop: '1%'}}>
                <Card.Img src={logo} />
                <Card.Body>
                    <Card.Title><strong>Id: </strong>{props.location.state.dataFromAgent.id}</Card.Title>                   
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem><strong>Name: </strong>{props.location.state.dataFromAgent.name}</ListGroupItem>
                    <ListGroupItem><strong>Ip: </strong>{props.location.state.dataFromAgent.ip}</ListGroupItem>
                </ListGroup>
                <Card.Body>
                    <Card.Link href="#">
                        <Link to={'/agents'}>Go Back</Link> 
                    </Card.Link>                    
                </Card.Body>
            </Card>
        </div>
    )
}