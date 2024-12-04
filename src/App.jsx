import { useState } from 'react'

function App() {
  const [title, setTitle] = useState("")
  const[posts, setPost] = useState([])
 


  const handleSubmit=(event)=>{
    event.preventDefault();
    setPost([...posts,{name:title}]);
    setTitle("");
  }

 

const handleDelete=(index)=>{
  setPost(posts.filter((_,i) =>i !==index));
}

  return (
    <>
<div className="container">
  <div className="header">
        <h1>IL MIO BLOG</h1>
  </div>
  <form onSubmit={handleSubmit}>
     <input 
       type="text" 
       value={title}
       onChange={e=>{setTitle(e.target.value)}}
       className='form-control'
       placeholder='Inserisci nome post'
       />
       <p>{title}</p>
   <button  type='submit'   className='btn btn-primary m-5'>
        aggiungi
    </button>
  </form>
  <ul>
  {posts.map((post,index)=>
  <li key={index}>
    <span>{post.name}</span>
   <button onClick={()=>handleDelete(index)}>❌</button>
  </li>
)} 
  </ul>
</div>
    </>
  )
}



export default App
