import React, { useState } from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import axios from 'axios';


function BookSearch(props) {
    const [bookName, setBookName] = useState("");

    function handleInputChange(event) {
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
                    <Form>
                        <Row>
                            <Col>
                                <Form.Control required type="text" placeholder="Book Name"
                                    name="bookName" value={bookName} onChange={handleInputChange}
                                />
                            </Col>
                            <Col md={2}>
                                <Button variant="outline-success" onClick={handleSubmit}>Search</Button>
                            </Col>
                        </Row>
                    </Form>
                </Col>
            </Row>
        </div>
    )
}

export default BookSearch;