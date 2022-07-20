import React, { useState } from 'react'
import './SubForm.css'

export default function HateLove(props) {

    
const [formData, setFormData]= useState({
    prefs:{
     love:"",
     hate:""
 
    }
 }) 
 
 const handleTextArea=(e , prefs)=>{
    if(prefs== "love"){
     setFormData({
         prefs:{
             ...formData.prefs,
             love:e.target.value
         } 
     })
    }else if (prefs== "hate"){
        setFormData({
            prefs:{
                ...formData.prefs,
                hate:e.target.value
            } 
        })

    } 
 }
 console.log(formData)
 const prevenFunct = (e) => {
     e.preventDefault()
      props.modifyIndex(6,formData)
 }
 
 const hadleReturn =()=>{
     props.modifyIndex(4)
 }
    return (
        <form className='preferences-form'
            onSubmit={prevenFunct}
        >
            <p> parle-nous des aliemntaire que tu préferes et que tu detestes</p>
            <label htmlFor='prefered'>tes aliments préférés , séparer par une virgules</label>
            <textarea onChange={e=> handleTextArea(e,'love')} id="prefered" placeholder='Un ou plusieurs, si tu en as  '>

            </textarea>

            <p> parle-nous des aliemntaire que tu ne supportes pas séparé par une virgules </p>
            <label htmlFor='hated'>tes aliments préférés , séparer par une virgules</label>
            <textarea onChange={e=> handleTextArea(e,'hate')} id="hated" placeholder='Un ou plusieurs, si tu en as  '>

            </textarea>

            <div className='container-nav-btns'>
             <button type="button" onClick={hadleReturn} className="prev"> precedent </button>
              <button >valider</button>
            </div>
        </form>
    )
}
