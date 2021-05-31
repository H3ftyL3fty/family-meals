export interface Ingredient {
  foodGroup: FoodGroup;
  id: number;
  name: string;
}

export enum FoodGroup {
  BAKING = 'baking',
  BEAN = 'bean',
  DAIRY = 'dairy',
  FRUIT = 'fruit',
  GRAIN = 'grain',
  HERB = 'herb',
  MISCELLANEOUS = 'miscellaneous',
  NUT = 'nut',
  PROTEIN = 'protein',
  SEAFOOD = 'seafood',
  SEASONING = 'seasoning',
  SEED = 'seed',
  VEGETABLE = 'vegetable',
}
