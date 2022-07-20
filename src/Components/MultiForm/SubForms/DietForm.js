
import React,{useState} from 'react'
import './SubForm.css'
export default function DietForm(props) {

    const [formData, setFormData]= useState({
        dietForm:'nodiet'
    })
    const handleRadio=(e)=>{
        setFormData({
            dietForm: e.target.value
        })
      
    }

const preventFunc=(e)=>{
 return e.preventDefault()
}

  return (
    <form 
    onSubmit={preventFunc}
    className='diet-form'>
     <p> quelle est ton régime alimentaire ? </p>
     <label htmlFor='nodiet'> pas de régime en particulier</label>
     <input
     onChange={handleRadio} 
     name="diet"
     id="nodiet"
     value="nodiet"
     type="radio"/>


<label htmlFor='homnivorous'> Homnivore</label>
     <input
     onChange={handleRadio} 
     name="diet"
     id="homnivorous"
     value="homnivorous"
     type="radio"/>


<label htmlFor='vegetarian'> végetarien</label>
     <input
     onChange={handleRadio} 
     name="diet"
     id="vegetarian"
     value="vegetarian"
     type="radio"/>


<label htmlFor='vegan'> vegan</label>
     <input
     onChange={handleRadio} 
     name="diet"
     id="vegan"
     value="vegan"
     type="radio"/>
     <button onClick={()=>props.modifyIndex(3,formData)}>valider</button>
     
    </form>
  )
}
