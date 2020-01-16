import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import Header from '../components/Header';
import BookSearch from '../components/BookSearch';
import BookItem from '../components/BookItem';

class SearchWrapper extends Component {
    constructor(props) {
        super(props)
        this.state = {
            books: []
        }
        this.getBooks = this.getBooks.bind(this);
    }

    getBooks(books){
        this.setState({books:books.items});
    }

    render() {
        return (
            <div>
                <Row>
                    <Col><Header /></Col>
                </Row>
                <Row className="my-3">
                    <Col><BookSearch getBooks={this.getBooks}/></Col>
                </Row>
                <Row>
                    <div>
                        {this.state.books.map(book=>{
                            return <BookItem className="my-4" key={book.id} book={book} />
                        })}
                    </div>
                </Row>
            </div>
        )

    }
}

export default SearchWrapper;