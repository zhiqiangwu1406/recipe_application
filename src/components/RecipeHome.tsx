import { Link } from "react-router";
import type { RecipesHomePage } from "../types/Recipe";
function RecipeHome({ loading, error, recipes }: RecipesHomePage) {
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
      {!loading && recipes.length === 0 && <p>No items found</p>}
      {!loading &&
        recipes.length > 0 &&
        recipes.map((recipe) => (
          <Link
            to={`/recipe_application/recipes/${recipe.id}`}
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

export default RecipeHome;
