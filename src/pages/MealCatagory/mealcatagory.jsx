import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import './mealcatagory.css';

const MealCatagory = () => {
  const [mealCata, setMealCata] = useState([]);

  const { anyMealName } = useParams();

  const fetchData = async () => {
    const response = await fetch(
      'https://www.themealdb.com/api/json/v1/1/filter.php?c=' + anyMealName
    );
    const data = await response.json();
    setMealCata(data.meals);
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(mealCata);

  const navigate = useNavigate();

  const onIdMeal = idOfMeal => {
    navigate('/idmeal/' + idOfMeal);
  };
  return (
    <div className="mealcatagory">
      <div className="mealcatagory2">
        {mealCata.map(item => {
          return (
            <div
              className="card"
              onClick={() => {
                onIdMeal(item.idMeal);
              }}
            >
              <img src={item.strMealThumb} alt="" />
              <h4>{item.strMeal}</h4>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MealCatagory;
