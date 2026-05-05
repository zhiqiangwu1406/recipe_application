export type Recipe = {
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
