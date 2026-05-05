import { useEffect, useState } from "react";
import { useParams } from "react-router";
import type { Recipe } from "../types/Recipe";

function RecipePage() {
  const recipeId = useParams();
  const [recipe, setRecipe] = useState<Recipe | null>(null);
  useEffect(() => {
    const getSingleRecipe = async () => {
      try {
        const response = await fetch(
          `https://dummyjson.com/recipes/${recipeId.id}`,
        );
        const data = await response.json();
        setRecipe(data);
      } catch (error) {
        console.log(error);
      }
    };
    getSingleRecipe();
  }, [recipeId]);

  return (
    <main className=" grid grid-cols-2 gap-10 my-6">
      <img className="rounded-md" src={recipe?.image} alt={recipe?.name} />
      <article>
        <section className="text-sm font-medium mb-2">
          <p className="text-2xl font-bold mb-4">{recipe?.name}</p>
          <p className="text-xl font-semibold mb-2">
            {recipe?.cuisine} Cuisine
          </p>
          <p>Rating - {recipe?.rating}</p>
          <p>Difficulty - {recipe?.difficulty}</p>
        </section>
        <section>
          <h3 className="text-lg font-bold mb-2">Ingredients</h3>
          <ul className=" list-disc ps-8">
            {recipe?.ingredients.map((ing, index) => (
              <li key={index}>{ing}</li>
            ))}
          </ul>
        </section>
        <section>
          <h3 className="text-lg font-bold my-2">Instructions</h3>
          <ol className="pl-7">
            {recipe?.instructions.map((inst, index) => (
              <li key={index} className="list-decimal ps-4">
                {inst}
              </li>
            ))}
          </ol>
        </section>
      </article>
    </main>
  );
}

export default RecipePage;
