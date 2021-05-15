import React,{useState,useContext,createContext} from 'react'
 
//creating the book context
export const Bookcontext = createContext();

export const BookProvider =(props)=>{
       const [novel, setnovel] = useState({});
       //passing the value of novel
       return(<Bookcontext.Provider value={[novel, setnovel]}>
           {props.children}
           </Bookcontext.Provider>)
}

