import React, { useReducer, useState }  from 'react'

const booksData = [

    { id :1, name:"pather pechali"},
    { id:2, name : "padma nadir majhi"},
    { id: 3, name : " Srikanta"}
    
]

const Modal = ({modaltext})=> { 
    return <p> {modaltext} </p>
}

const initialState = { 
    books : booksData,
    isModalopen : false,
    modaltext :""
};

const reducer = (state, action ) =>{
    //action.type action.payload
    if(action.type === "ADD"){
        const allBooks = [...state.books, action.payload]
        return {
            ...state,
            books : allBooks,
            isModalopen : true,
            modaltext: "book is added",
        }
    };
    if(action.type === "REMOVE"){
        console.log([...state.books])
        const filteredbooks = [...state.books].filter((book)=>book.id !== action.payload)
        console.log()
        return{
            ...state,
            books : filteredbooks,
            isModalopen : true, 
            modaltext : "book is removed"
        }
    }
    return state;
}

const Usereducer37 = () => {


const [bookState, dispatch] = useReducer(reducer, initialState)
const [bookName, setbookName] = useState("")

const handelsumit = (e) => {
    e.preventDefault();
    const newbook = { id: new Date().getTime().toString(), name: bookName} // adding newbook object 
    dispatch({ type: "ADD", payload: newbook})
    setbookName("")
}

const removeBook =(id)=> {
    dispatch({type:"REMOVE", payload: id })
}
  return (
    <div>   
        <h3> Book list </h3>
       <form onSubmit={handelsumit}> 
       <input type="text" value={bookName} onChange={(e) => {setbookName(e.target.value)}}/>
       <button type='submit'> Add book</button>
       </form>
       {bookState.isModalopen && <Modal modaltext= {bookState.modaltext} />}
        <div>
        {bookState.books.map((book)=>{
            const { id, name} = book;
        return <li key={id}>{name} <button onClick={()=>removeBook(id)}> Remove</button> </li>
        }
         )}
        </div>

    </div>
  )
}

export default Usereducer37