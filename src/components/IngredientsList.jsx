export default function IngredientsList(props) {
    
    const ingredientsListItems = props.ingredients.map(ingredient => (
        <li key={ingredient}>{ingredient}</li>
    ))
    
    return (
        <section>
            <h2>Ingredients on hand:</h2>
            <ul className="ingredients-list" aria-live="polite">{ingredientsListItems}</ul>
            {props.ingredients.length > 3 &&
                <div className="get-recipe-container">
                    <div>
                        <h3 className="get-recipe-header">Ready for a recipe?</h3>
                        <p className="get-recipe-text">Generate a recipe from your list of ingredients.</p>
                    </div>
                    <button onClick={props.getRecipe} className="get-recipe-button">Get a recipe</button>
                </div>
            }
        </section>
    )
}