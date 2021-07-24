import React from 'react';

export const Details = (props) => {
    console.log(props);

    if(props.location.state.dataFromAlert.loading) return <h1>Loading...</h1>

    return (
        <div>            
            <strong> ID: </strong> {props.match.params.id} <br/> 
            <strong>TITLE: </strong>{props.location.state.dataFromAlert.title} <br/>
            <strong>BODY: </strong>{props.location.state.dataFromAlert.body} 
        </div>
    )
}