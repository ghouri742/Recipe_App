import React from 'react'
import style from './recipe.module.css'

const Recipe=({image,calories,title,ingredients})=>{
return(
    <div className={style.recipe}>
    <h1>{title}</h1>
    <ol>
    {ingredients.map(data=>(
        <li>{data.text}</li>
))}
    </ol>
    <p>{calories}</p>
    <img src={image} alt="" className={style.image}></img>
    </div>
)
}
export default Recipe