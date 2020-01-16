import React from 'react';
import { Card, Image, Row } from 'react-bootstrap';

function BookItem(props) {
    const placeholderImg = "/images/book_placeholder.jpg";
    const imgSrc = props.book.volumeInfo.imageLinks.thumbnall ? props.book.volumeInfo.imageLinks.thumbnail : placeholderImg;

    return (
        <Card className={props.className ? props.className : null} >
            <Card.Header>{props.book.volumeInfo.title}</Card.Header>
            <Card.Body>
                <Row>
                    {props.book.volumeInfo.description}
                </Row>
                <Row>
                    <Image src={imgSrc} rounded />
                </Row>

            </Card.Body>
        </Card>
    )
}

export default BookItem;