import React,{useContext} from 'react'
import {Link} from 'react-router-dom'
import {Bookcontext} from './BookProvider'
import './bookinfo.css'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'




function Bookinfo() {
    const [novel ,setnovel]= useContext(Bookcontext);
   console.log(novel)
    return (
        
        <div>
            <Link to="/"><Button className="m-3 btn1 " variant="info">Back</Button></Link>
          <Container className='mt-3 container1'>
            
            

            <Row>

            <Col  xs={12} sm={12} md={3} lg={3} className="col1 mr-3 ">
            
                
             <Image className="img1" src={novel?.volumeInfo.imageLinks?.thumbnail} alt="Image unvailable"  />
             <a href={novel?.volumeInfo.previewLink} target="_blank"><Button className="mt-2 btn2" variant="info">Preview</Button></a>
                
              </Col>
              <Col  >
              
               <h2>{novel?.volumeInfo.title}</h2>
                <h4>{novel?.volumeInfo.authors}</h4>
                <h5><strong>Publisher: </strong>{novel?.volumeInfo.publisher}</h5>
                <h5><strong>Publishing Date: </strong>{novel?.volumeInfo.publishedDate}</h5>
                <h5><strong>Page Count: </strong> {novel?.volumeInfo.pageCount}</h5>
                 <p>{novel?.volumeInfo.description}</p>
            
           
              </Col>
                
            </Row>
            
            
            
        
        </Container>
        </div>
        
    )
}

export default Bookinfo;
