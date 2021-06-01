// Lib
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import React from 'react';
import useSWR from 'swr';
// App
import { BaseLayout, PageLayout } from '../components';
import { Ingredient } from '../entities';

export const IngredientsPage: React.FC = () => {
  const { getAccessTokenSilently } = useAuth0();

  const dataFetcher = async (path: string): Promise<Ingredient[]> => {
    const token = await getAccessTokenSilently({ audience: process.env.REACT_APP_AUTH0_AUDIENCE });
    const response = await axios.get<Ingredient[]>(`${process.env.REACT_APP_API_URL}/${path}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  };

  const { data: ingredients, error } = useSWR('ingredients', dataFetcher);

  if (error) {
    console.log(error);
  }

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
