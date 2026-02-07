import React from "react"
import IngredientsList from "./IngredientsList"
import ClaudeRecipe from "./ClaudeRecipe"
import { getRecipeFromChefClaude } from "../ai"

export default function Content() {

    const [ingredients, setIngredients] = React.useState([])

    const [recipe, setRecipe] = React.useState("")

    async function getRecipe() {
        const recipeMarkdown = await getRecipeFromChefClaude(ingredients)
        setRecipe(recipeMarkdown)
   }

    function addIngredient(formData) {
        const newIngredient = formData.get("ingredient")
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
    }
    
    return (
        <main>
            <form 
                className="add-ingredient-form"
                action={addIngredient}>
                <input
                    className="form-input" 
                    type="text"
                    placeholder="ex: oregano"
                    aria-label="Add ingredient" 
                    name="ingredient"
                />
                <button className="form-button">Add ingredient</button>
            </form>
        
            {ingredients.length > 0 && 
                <IngredientsList 
                    ingredients={ingredients} 
                    getRecipe={getRecipe} 
                />
            }
            
            {recipe && <ClaudeRecipe recipe={recipe} />}
        </main>
    )
}