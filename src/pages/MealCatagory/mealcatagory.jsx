import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import CardSkelton from '../../components/CardSkelton/cardSkelton';
import './mealcatagory.css';

const MealCatagory = () => {
  const [loading, setLoading] = useState(true);
  const [mealCata, setMealCata] = useState([]);
  const { anyMealName } = useParams();

  const fetchData = async () => {
    const response = await fetch(
      'https://www.themealdb.com/api/json/v1/1/filter.php?c=' + anyMealName
    );
    const data = await response.json();
    setMealCata(data.meals);
    setLoading(false);
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
        {loading
          ? [1, 2, 3, 4, 5, 6, 7, 8].map(index => <CardSkelton key={index} />)
          : mealCata.map((item, index) => {
              return (
                <div
                  className="card"
                  key={index}
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
