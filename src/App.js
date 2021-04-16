import React, {useEffect, useState} from 'react';
import Recipe from './Recipe.js'
import './App.css';

const App = () => {
  const APP_ID = '3e7a8591';
  const APP_KEY = 'd05b68b1281e6a5af054a339293db298';

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');

  useEffect(() => {
    getRecipe();
  }, [query])

  const getRecipe = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
    const data = await response.json()
    setRecipes(data.hits)
  }

  const updateSearch = event => {
    setSearch(event.target.value)
  }

  const getSearch = event => {
    event.preventDefault()
    setQuery(search)
    setSearch('')
  }
  return (
    <div className='App'>
      <form onSubmit={getSearch} className='search-form'> 
        <input className = 'search-form' type='text' value={search} onChange={updateSearch} />
        <button className = 'search-button' type='submit'>Submit</button>
      </form>
      {recipes.map(recipe => (
        <Recipe
          key={recipe.recipe.label}
          title={recipe.recipe.label}
          image={recipe.recipe.image}
          calories={recipe.recipe.calories}
        />
      ))}
    </div>

  )
}

export default App;
