import React, { useRef } from 'react'
import './SubForm.css'
export default function FoodStyle(props) {
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
            foodstyle:[]

        }
        allcheckboxes.current.forEach(item =>{
            if(item.checked){
                styleData.foodstyle.push(item.value)
            }
        })

        props.modifyIndex(4,styleData)
    }


console.log(allcheckboxes )

    const handleReturn =()=>{
        props.modifyIndex(2)
    }
    return (
        <form
            className='checkbox-form'
            onSubmit={preventFunc}
        >
            <p>quelle sont tes cuisines préferes?</p>
            <span> Choix multiples</span>
            <label htmlFor='italian'> Italienne</label>
            <input
            ref={addcheck}
                type="checkbox"
                id="italian"
                value="italian"

            />

<label htmlFor='japanese'> japonaise</label>
            <input
            ref={addcheck}
                type="checkbox"
                id="japanese"
                value="japanese"

            />

<label htmlFor='indian'> indienne</label>
            <input
            ref={addcheck}
                type="checkbox"
                id="indian"
                value="indian"

            />

<label htmlFor='thai'> thailandaise</label>
            <input
            ref={addcheck}
                type="checkbox"
                id="thai"
                value="thai"

            />


<label htmlFor='french'> francaise</label>
            <input
            ref={addcheck}
                type="checkbox"
                id="french"
                value="french"

            />


<label htmlFor='chinese'> chinoise</label>
            <input
            ref={addcheck}
                type="checkbox"
                id="chinese"
                value="chinese"

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
