
import React,{ useState } from 'react'
import './MultiForm.css'
import Indicator from './Indicator/Indicator'
import CarBegin from './Infos/CarBegin'
import CardEnd from './Infos/CardEnd'
import DietForm from './SubForms/DietForm'
import FoodStyle from './SubForms/FoodStyle'
import Allergies from './SubForms/Allergies'
import HateLove from './SubForms/HateLove'

export default function Multiform() {
  
    const [formIndex,setFormIndex]= useState(1)
    const [allFormData,setAllFormData]=useState({
        dietForm:"",
        foodStyle:[],
        allergies:[],
        prefs:{},
    })
    //ici je passe mes props 
    const modifyIndex =(index,data)=>{
      setFormIndex(index)
      if(data){
        //je fais une copie du tableau 
      const newData={...allFormData}
      //je recupere le premier objet de mon state
       const firstProppNewData = Object.keys(data)[0]
       //je lui affecte la valeur 
       newData[firstProppNewData] = data[firstProppNewData]
       //je met a jour le state   
       setAllFormData(newData)
      }
    

    }
    console.log(allFormData)

    const elements =[
      <CarBegin modifyIndex={modifyIndex}/>,
      <DietForm modifyIndex={modifyIndex}/>,
      <FoodStyle modifyIndex={modifyIndex}/>,
      <Allergies modifyIndex={modifyIndex}/> ,
      <HateLove modifyIndex={modifyIndex}/>,
      <CardEnd modifyIndex={modifyIndex}/>,


    ]
  return (
    <div className='container-multiform'>
        
        <Indicator formIndex={formIndex}/>
        
       {elements.map((item,index)=>{
         if((index +1)== formIndex){
          
          return elements[index]
         }
       })}



        {/* {formIndex === 1 ?<CarBegin modifyIndex={modifyIndex}/> 
        :formIndex === 2 ? <DietForm modifyIndex={modifyIndex}/> 
        :formIndex === 3 ? <FoodStyle modifyIndex={modifyIndex}/>
        :formIndex === 4 ? <Allergies modifyIndex={modifyIndex}/> 
        :formIndex === 5 ? <HateLove modifyIndex={modifyIndex}/> :""} */}
        
        
    </div>
  )
}
