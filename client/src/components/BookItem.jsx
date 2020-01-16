import React from 'react';
import {Card} from 'react-bootstrap';

function BookItem(props){
    return(
        <Card className={props.className ? props.className : null} >
            <Card.Header>{props.book.volumeInfo.title}</Card.Header>
            <Card.Body>{props.book.volumeInfo.description}</Card.Body>
        </Card>    
    )
}

export default BookItem;