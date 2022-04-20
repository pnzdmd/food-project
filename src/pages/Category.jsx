import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { getFilteredCategory } from '../components/api';

import Preloader from '../components/Preloader';
import MealList from '../components/MealList';

function Category(props) {
  const { name } = useParams();
  const [meals, setMeals] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getFilteredCategory(name).then((data) => {
      setMeals(data.meals);
    });
  }, [name]);

  return (
    <>
      <button className='btn' onClick={() => navigate(-1)}>
        Назад
      </button>
      {!meals.length ? <Preloader /> : <MealList meals={meals} />}
    </>
  );
}

export default Category;
