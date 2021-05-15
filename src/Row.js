import React , {useState,useEffect} from 'react'
import axios from 'axios'
import Book from './Book';
import './row.css'



function Row() {
    const base_url="https://www.googleapis.com/books/v1/volumes?q=";
    
    const [search, setsearch] = useState('subject:Fiction')
    const [example,setexample] =useState('Popular Titles in Fiction')
    const [books,setbooks] = useState([])
    
    useEffect(() => {
        
        async function fetchbookdata(){
          
           const response = await axios.get(base_url+search)
           setbooks(response.data.items);
          // console.log(response);
            return response;
        }fetchbookdata();
      if(search!=='subject:Fiction'){
          setexample('Results found')
      }
      else{
        setexample('Popular Titles in Fiction')
      }
    }, [search])
    
    return (
        <div className="container">
        <header >
        <h1 style={{color:"#34626c"}}>Bookify</h1>
        <p> <em>Explore among millions of book titles</em></p>
        <input type="text" placeholder="Search by title,author" onChange={(e)=>setsearch(e.target.value)}/>
        <h5 >{example}</h5>
        <hr/>
      </header>  
         
           
           
        <div className="row">
            {books?.map(book=>{
                return  <Book id={book.id}  book={book}/>
                 
           })}
        </div>
        </div>
        
    )
}

export default Row
