// Lib
import axios from 'axios';
import React, { useEffect, useState } from 'react';
// App
import { BaseLayout, PageLayout } from '../components';
import { Ingredient } from '../entities';

export const IngredientsPage: React.FC = () => {
  const [ingredients, setIngredients] = useState<Ingredient[]>();
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    const fetchIngredients = async () => {
      const response = await axios.get<Ingredient[]>(`${process.env.REACT_APP_API_URL}/ingredients`);
      setIngredients(response.data);
      setHasLoaded(true);
    };

    if (!hasLoaded)
    fetchIngredients();
  }, [hasLoaded, ingredients]);

  return (
    <BaseLayout>
      <PageLayout header="Ingredients">
        {ingredients?.length
          ?
            <ul>
              {ingredients.map(ingredient => (
                <li key={ingredient.id}>{ingredient.name}</li>
              ))}
            </ul>
          :
            null
        }
      </PageLayout>
    </BaseLayout>
  );
};
