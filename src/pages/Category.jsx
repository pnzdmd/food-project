import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getFilteredCategory } from '../components/api';

import Preloader from '../components/Preloader';
import MealList from '../components/MealList';

function Category(props) {
  const { name } = useParams();
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    getFilteredCategory(name).then((data) => {
      setMeals(data.meals);
    });
  }, [name]);

  return <>{!meals.length ? <Preloader /> : <MealList meals={meals} />}</>;
}

export default Category;
