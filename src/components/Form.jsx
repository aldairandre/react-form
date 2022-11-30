import React, {useState} from 'react'

const Form = () => {
  const [input,setInput] = useState({
    title:'',
    author:'',
    email:'',
    date:''
  })

  const [emptyValue, setEmptyValue] = useState(false)

  function onchange(e) {
    const {name, value} = e.target
    const obj = {}
    obj[name] = value
    setInput({...obj})
    console.log(input)
  }

  function handleSubmit(e){
    e.preventDefault()
    const rgx =  /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/
    const {email} = input
    //checking if have empaty values

    let emptyValue = Object.values(input).some(obj => obj === '')

    if(email.match(rgx) || emptyValue){
      e.currentTarget.submit()
      return input
    }else{
      return email
    }
      
  }
  return (
    <div className="flex justify-between flex-col items-center text-white max-w-[1240px] mx-auto px-4">
      <h1 className='mt-6 text-cyan-500 text-2xl'>LABRARY</h1>
      <form className='container flex flex-col mt-6 md:w-96'>

        <label htmlFor="" className='mb-2'>Title</label>
        <input 
          onBlur={onchange} 
          type="text" 
          name="title" 
          id="" 
          className='inputs'
          required
        />

        <label htmlFor="" className='mb-2'>Author</label>
        <input 
         onBlur={onchange}
          type="text" 
          name="author" 
          id="" 
          className='inputs'
          required
        />

        <label htmlFor="" className='mb-2'>Release Date  </label>
        <input 
          onBlur={onchange}
          type="date" 
          name="date" 
          id="" 
          className='inputs'
          required
        />
        
        <label htmlFor="" className='mb-2'>Email Address</label>
        <input 
           onBlur={onchange}
          type="email"  
          name='email'
          placeholder='jonh@example.com' 
          className="inputs"
          required
        />
        
        
        <button 
          onSubmit={handleSubmit} 
          type="submit" 
          className='mt-4 bg-green-500 text-white px-4 py-3 rounded-md'
        >
          UPLOAD
        </button>
      </form>

    </div>
  )
}

export default Form
