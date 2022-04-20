import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getMealById } from '../components/api';
import Preloader from './Preloader';

function Recipe(props) {
  const [recipe, setRecipe] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getMealById(id).then((data) => {
      setRecipe(data.meals[0]);
    });
  }, [id]);

  const {
    idMeal,
    strMealThumb,
    strMeal,
    strCategory,
    strArea,
    strInstructions,
    strYoutube,
  } = recipe;
  return (
    <>
      {!idMeal ? (
        <Preloader />
      ) : (
        <div className='recipe'>
          <img src={strMealThumb} alt={strMeal} />
          <h2 className=''>{strMeal}</h2>
          <h6>Категория: {strCategory}</h6>
          {strArea ? <h6>Страна: {strArea}</h6> : null}
          <p>Инструкция: {strInstructions}</p>

          <table className='centered'>
            <thead>
              <tr>
                <th>Ingredient</th>
                <th>Measure</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(recipe).map((key) => {
                if (key.includes('Ingredient') && recipe[key]) {
                  return (
                    <tr key={key}>
                      <td>{recipe[key]}</td>
                      <td> {recipe[`strMeasure${key.slice(13)}`]} </td>
                    </tr>
                  );
                }
                return null;
              })}
            </tbody>
          </table>

          {strYoutube ? (
            <div className='row'>
              <h5 style={{ margin: '2rem 0 1.5rem' }}>Video Recipe</h5>
              <iframe
                allowFullScreen
                title={id}
                src={`https://www.youtube.com/embed/${strYoutube.slice(-11)}`}
              />
            </div>
          ) : null}
          <button className='btn ' onClick={() => navigate(-1)}>
            Назад
          </button>
        </div>
      )}
    </>
  );
}

export default Recipe;
