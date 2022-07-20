import React, { useRef } from 'react'
import './SubForm.css'
export default function Allergies(props) {
// je recupere les valeur des input 
const allcheckboxes = useRef([])

const addcheck =(item)=>{
  
                 //et si il nest pas présent dans le tableau
     if(item && !allcheckboxes.current.includes(item)){
        //alors je le rajoute dans le tableau 
         allcheckboxes.current.push(item)

     }
}



    const preventFunc = (e) => {
         e.preventDefault();
        const styleData ={
            Allergies:[]

        }
        allcheckboxes.current.forEach(item =>{
            if(item.checked){
                styleData.Allergies.push(item.value)
            }
        })

        props.modifyIndex(5,styleData)
    }


console.log(allcheckboxes )

    const handleReturn =()=>{
        props.modifyIndex(3)
    }
    return (
        <form
            className='checkbox-form'
            onSubmit={preventFunc}
        >
            <p>as-tu des allergies?</p>
            <span> Choix multiples</span>
            <label htmlFor='milk'> lait</label>
            <input
            ref={addcheck}
                type="checkbox"
                id="milk"
                value="milk"

            />

<label htmlFor='pollen'> pollen</label>
            <input
            ref={addcheck}
                type="checkbox"
                id="pollen"
                value="pollen"

            />

<label htmlFor='nuts'>noix</label>
            <input
            ref={addcheck}
                type="checkbox"
                id="nuts"
                value="innutsdian"

            />

<label htmlFor='eggs'> oeuf</label>
            <input
            ref={addcheck}
                type="checkbox"
                id="eggs"
                value="eggs"

            />


<label htmlFor='shellfish'> fruits de mer</label>
            <input
            ref={addcheck}
                type="checkbox"
                id="shellfish"
                value="shellfish"

            />




            <div className='container-nav-btns'>
                <button 
                onClick={handleReturn}
                type="button" className='prev'> précédent</button>
               <button>valider</button>
            </div>
        </form>
    )
}
