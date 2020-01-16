import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Header from '../components/Header';
import BookSearch from '../components/BookSearch';

function SearchWrapper(props) {
    return (
        <div>
            <Row>
                <Col><Header /></Col>
            </Row>
            <Row className="mt-3">
                <Col><BookSearch /></Col>
            </Row>
        </div>
    )
}

export default SearchWrapper;