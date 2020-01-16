import React from 'react';
import { Card, Image, Row } from 'react-bootstrap';

function BookItem(props) {
    return (
        <Card className={props.className ? props.className : null} >
            <Card.Header>{props.book.volumeInfo.title}</Card.Header>
            <Card.Body>
                <Row>
                    {props.book.volumeInfo.description}
                </Row>
                <Row>
                    <Image src={props.book.volumeInfo.imageLinks.thumbnail} rounded />
                </Row>

            </Card.Body>
        </Card>
    )
}

export default BookItem;