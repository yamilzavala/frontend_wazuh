import React from 'react';
import {Form} from 'react-bootstrap'
import { useState } from 'react';

export const Search = () => {
    const [search, setSearch] = useState('');

    const handlerSearch = () => {       
        this.props.onSearch(search)
    }
    

    return (        
        <Form.Group className="mb-3" controlId="formBasicEmail" style={{width: '300px'}}>
            <Form.Label>Search</Form.Label>
            <Form.Control onChange={e => setSearch(e.target.value)} size="sm" type="text" placeholder="Enter an id" style={{background: '#474B4E', color: 'white'}}/>
            {/* <button onClick={() => this.handlerSearch}>Search</button> */}
        </Form.Group>
    )
}