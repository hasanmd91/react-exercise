import React, { useState } from 'react'


const booksData = [

    { id :1, name:"pather pechali"},
    { id:2, name : "padma nadir majhi"},
    { id: 3, name : " Srikanta"}
    
]

const Modal = ({ modalTxt} )=> { 
  return <p> { modalTxt} </p>
}

const Uselibrary= () => {

    const [ books, setBooks] = useState(booksData);
    const [ bookname, setBookName] = useState("");
    const [ modalTxt, setModalText] = useState("");
    const [ isModalopen, setModelIsOpen] = useState(false)


    const submithandeler = (e)=>{
       e.preventDefault();
       setBooks((prevstate)=>{
           const newBook = {id: new Date().getTime().toString(), name: bookname }
        return [...prevstate, newBook];
       });
       setModelIsOpen(true);
       setModalText("new book added")
    }

  return (
    <div>
        <h3> book list </h3>
        <form onSubmit={submithandeler}> 
        <input type="text"
        value={bookname}
        onChange={(e)=>{setBookName(e.target.value) }} />
        <button type='submit'> Add book</button>
        </form>
        {isModalopen && <Modal modalTxt= {modalTxt} />}
        {books.map((book)=> { 
            const { id, name} = book
            return <li> {name}  </li>
        })}
    </div>
  )
}

export default Uselibrary
