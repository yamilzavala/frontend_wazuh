import React from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import logo from '../shared/wazuh_logo_w.png'

export const RuleDetails = (props) => {
    console.log(props);

    return (
        <div>   
            <Card style={{ width: '45rem', position: 'absolute', left: '50%', transform: 'translateX(-50%)', marginTop: '1%'}}>
                <Card.Img src={logo} />
                <Card.Body>
                    <Card.Title>{props.location.state.dataFromRule.id}</Card.Title>                   
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem><strong>Description: </strong>{props.location.state.dataFromRule.description}</ListGroupItem>
                    <ListGroupItem><strong>Level: </strong>{props.location.state.dataFromRule.level}</ListGroupItem>
                    <ListGroupItem><strong>Firedtimes: </strong>{props.location.state.dataFromRule.firedtimes}</ListGroupItem>                    
                </ListGroup>
                <Card.Body>
                    <Card.Link href="#">
                        <Link to={'/rules'}>Go Back</Link> 
                    </Card.Link>                    
                </Card.Body>
            </Card>
        </div>
    )
}