import { useEffect, useState } from "react";
import type { RecipeType } from "../types/Recipe";

import RecipeHome from "../components/RecipeHome";
import { useParams } from "react-router";

function Home() {
  const params = useParams();
  const [recipes, setRecipes] = useState<RecipeType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | undefined>(undefined);

  useEffect(() => {
    let API: string;
    if (params.search) {
      API = `https://dummyjson.com/recipes/search?q=${params.search}`;
    } else {
      API = "https://dummyjson.com/recipes";
    }
    const getRecipes = async () => {
      try {
        setLoading(true);
        const response = await fetch(API);
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
  }, [params.search]);

  return <RecipeHome recipes={recipes} loading={loading} error={error} />;
}

export default Home;
