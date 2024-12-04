import { useState } from 'react'

function App() {
  const [formData, setFormData] = useState({
  title:"",
  author:"",
  Image: "",
  Description: "",
  category:"",
  isPublished:false,
  });

  const[posts, setPost] = useState([])

  const handleChange = (event)=>{
    const {name,value,type}=event.target;
    setFormData((prev) =>({
      ...prev,
    }))
  }

 


  const handleSubmit=(event)=>{
    event.preventDefault();
    setPost([...posts,formData]);
    setFormData({
      title:"",
      author:"",
      Image: "",
      Description: "",
      category:"",
      isPublished:false,
    });
  };

 

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
       name="title"
       value={formData.title}
       onChange={handleChange}
       className='form-control'
       id='title'
       placeholder='Inserisci nome post'
       />
       <input 
       type="text" 
       name='author'
       value={formData.author}
       onChange={handleChange}
       className='form-control'
       id='author'
       placeholder='inserisci autore post'
       />
       <input
        type="text" 
        name='image'
        value={formData.Image}
        onChange={handleChange}
        className='form-control'
        id='image'
        placeholder='inserisci URL immagine'
       />
       <textarea 
       name="description" 
       value={formData.Description}
       onChange={handleChange}
       className='form-control'
       id="description"
       placeholder='inserisci descrizione post'

       ></textarea>
       <select
       name='category' 
       value={formData.category}
       onChange={handleChange}
       className="form-select "
       id='category'

       >
  <option selected>scegli il tuo genere </option>
  <option value="Fantasy">Fantasy</option>
  <option value="Horror">Horror</option>
  <option value="Commedia">Commedia</option>
  <option value="Avventura">Avventura</option>
  <option value="Romantico">Romantico</option>
  <option value="Altro">Altro...</option>
</select>
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
