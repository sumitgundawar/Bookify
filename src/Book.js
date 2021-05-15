import React,{ useContext} from 'react'
import './book.css'
import {Link} from 'react-router-dom'
import {Bookcontext} from './BookProvider'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'

function Book({book}) {
    const [novel ,setnovel]= useContext(Bookcontext);
   
    return (
        <Container className="book">
          <Row>
            <Col 
            >
            <Link
            to="/info"
              >  
            <img src={book?.volumeInfo.imageLinks?.thumbnail} alt="Image unvailable" onClick={()=>setnovel(book)} />
            
            </Link> 
           
             <h5>{book.volumeInfo.authors}</h5>
            </Col>
          </Row>
           
        </Container>
    )
}

export default Book;
