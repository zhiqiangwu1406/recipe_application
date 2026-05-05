import { useEffect, useState } from "react";
import type { Recipe as RecipeType } from "../types/Recipe";
import { Link } from "react-router";

function Home() {
  const [recipes, setRecipes] = useState<RecipeType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | undefined>(undefined);
  useEffect(() => {
    const getRecipes = async () => {
      try {
        setLoading(true);
        const response = await fetch("https://dummyjson.com/recipes");
        const data = await response.json();
        setRecipes(data.recipes);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err);
        }
      } finally {
        setLoading(false);
      }
    };
    getRecipes();
  }, []);

  return (
    <main className="grid grid-cols-4 gap-4 p-4">
      {loading && <p className="text-xl p-4">Loading ...</p>}
      {error && (
        <p className="text-red-500">
          {error.name} {error.message}
        </p>
      )}
      {!loading && !recipes && (
        <p className="text-xl p-4 text-red-500"> Something went wrong.</p>
      )}
      {recipes.map((recipe) => (
        <Link
          to={`/recipes/${recipe.id}`}
          className="rounded-md text-center"
          key={recipe.id}
        >
          <img
            className="rounded-md object-cover"
            src={recipe.image}
            alt={recipe.name}
          />
          <h2 className="text-xl font-bold">
            {recipe.name.length > 17
              ? recipe.name.substring(0, 17) + "..."
              : recipe.name}
          </h2>
          <p className="text-sm">Difficulty - {recipe.difficulty}</p>
          <p className="text-sm">Rating - {recipe.rating}</p>
        </Link>
      ))}
    </main>
  );
}

export default Home;
