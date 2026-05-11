export type RecipeType = {
  id: number;
  name: string;
  ingredients: string[];
  instructions: string[];
  rating: number;
  image: string;
  cuisine: string;
  difficulty: Difficulty;
};

type Difficulty = "Easy" | "Medium" | "Hard";

export type RecipesHomePage = {
  recipes: RecipeType[];
  loading: boolean;
  error: Error | undefined;
};
