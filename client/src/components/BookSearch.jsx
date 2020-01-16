import React, { useState } from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import axios from 'axios';


function BookSearch(props) {
    const [bookName, setBookName] = useState("");

    function handleInputChange(event) {
        event.preventDefault();
        console.log(event.target);
        setBookName(event.target.value);
    }

    function handleSubmit(event){
        event.preventDefault();
        axios.post(`/api/books/search?bookName=${bookName}`).then(res=>{
            const books = res.data;
            console.log(books);
            props.getBooks(books);
        })

    }

    return (
        <div>
            <Row>
                <Col><h3>Book Search</h3></Col>
            </Row>
            <Row className="mt-3">
                <Col>
                    <Form onSubmit={handleSubmit}>
                        <Row>
                            <Col>
                                <Form.Control required type="text" placeholder="Book Name"
                                    name="bookName" value={bookName} onChange={handleInputChange}
                                />
                            </Col>
                        </Row>
                        <Row className="d-flex justify-content-end">
                        <Col md={2} className="d-flex mt-3 justify-content-end" >
                                <Button variant="outline-success" onClick={handleSubmit}
                                className="w-75">Search</Button>
                            </Col>
                        </Row>
                    </Form>
                </Col>
            </Row>
        </div>
    )
}

export default BookSearch;