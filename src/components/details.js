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
                    <Card.Title>{props.location.state.dataFromAlert.title}</Card.Title>                   
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>{props.location.state.dataFromAlert.body}</ListGroupItem>
                    <ListGroupItem>{props.match.params.id} </ListGroupItem>
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