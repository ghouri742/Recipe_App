import React ,{useEffect,useState} from 'react';
import './App.css';
import Recipe from './recipe';
 
function App() {
 const App_id="6c750d6a"
 const App_key=
 "842f0c9524d09bb1d5517a5e8916d14f"
const app_req=`https://api.edamam.com/search?q=chicken&app_id=${App_id}&app_key=${App_key}`

const [recipes,setRecipes]=useState([])
const [search,setSearch]=useState("");
const [query,setQueary]=useState('chicken')
useEffect(() => {
  console.log("Effect has Been Running")
  recepi()
  },[query]
)

const recepi=async()=>{
  const responce=await fetch(`https://api.edamam.com/search?q=${query}&app_id=${App_id}&app_key=${App_key}`)
  const data=await responce.json()
  setRecipes(data.hits)
  console.log(data.hits)
}

const updateSearch=(e)=>{
  setSearch(e.target.value)
}

const getSearch=(e)=>{
e.preventDefault()
setQueary(search)
setSearch('')

}
  return (
    <div className="App">
     <form onSubmit={getSearch} className="search-form"> 
     <input className="search-bar" type="text" value={search}
     onChange={updateSearch}  />
     <button 
    className="search-button" type="submit" >Search</button>
     </form>
     <div className="recipe">
     {
       recipes.map(data=>(
      <Recipe title={data.recipe.labal} calories={data.recipe.calories}
      image={data.recipe.image} 
      key={data.recipe.labal }
      ingredients={data.recipe.ingredients} />
        
 ))
} </div>
    </div>
  );
}

export default App;
