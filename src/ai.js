export async function getRecipeFromChefClaude(ingredientsArr) {
    const PROXY_URL = "/netlify/functions/get-recipe.js"; 

    try {
        const response = await fetch(PROXY_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ ingredients: ingredientsArr }),
        });

        if (!response.ok) {
            throw new Error(`Server error: ${response.status}`);
        }

        const data = await response.json();
        return data.recipe;
    } catch (err) {
        console.error("Fetch error:", err);
        return "Sorry, Chef Claude is having trouble in the kitchen right now.";
    }
}