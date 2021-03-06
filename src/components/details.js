import React from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import logo from '../shared/wazuh_logo_w.png'


export const Details = (props) => {
    console.log(props);

    if(props.location.state.dataFromAlert.loading) return <h1>Loading...</h1>

    return (
        <div>   
            <Card style={{ width: '45rem', position: 'absolute', left: '50%', transform: 'translateX(-50%)', marginTop: '1%'}}>
                <Card.Img src={logo} />
                <Card.Body>
                    <Card.Title>{props.location.state.dataFromAlert._index}</Card.Title>                   
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem><strong>Id: </strong>{props.location.state.dataFromAlert._id}</ListGroupItem>
                    <ListGroupItem><strong>Score: </strong>{props.location.state.dataFromAlert._score}</ListGroupItem>
                    <ListGroupItem><strong>Type: </strong>{props.location.state.dataFromAlert._type}</ListGroupItem>                    
                </ListGroup>
                <Card.Body>
                    <Card.Link href="#">
                        <Link to={'/alerts'}>Go Back</Link> 
                    </Card.Link>                    
                </Card.Body>
            </Card>
        </div>
    )
}