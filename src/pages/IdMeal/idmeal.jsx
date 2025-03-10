import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './idmeal.css';
import CardSkelton from '../../components/CardSkelton/cardSkelton';

const IdMeal = () => {
  const [loading, setLoading] = useState(true);
  const [idMeal, setIdMeal] = useState([]);
  const { idofmeal } = useParams();

  const fetchData = async () => {
    const response = await fetch(
      'https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + idofmeal
    );
    const data = await response.json();
    setIdMeal(data.meals);
    setLoading(false);
  };

  console.log(idMeal);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="idMeal">
      <div className="idMeal2">
        {loading ? (
          <div
            className="card"
            style={{ backgroundColor: 'white', height: '550px' }}
          >
            <CardSkelton />
          </div>
        ) : (
          idMeal.map((item, index) => {
            return (
              <div className="card" key={index}>
                <div className="top">
                  <div className="left">
                    <h1>{item.strMeal}</h1>
                    <p>{item.strCategory}</p>
                    <img src={item.strMealThumb} alt="" />
                  </div>
                  <div className="right">
                    <h3>Incredeance</h3>
                    <ul>
                      <li>{item.strIngredient1}</li>
                      <li>{item.strIngredient2}</li>
                      <li>{item.strIngredient3}</li>
                      <li>{item.strIngredient4}</li>
                      <li>{item.strIngredient5}</li>
                      <li>{item.strIngredient6}</li>
                      <li>{item.strIngredient7}</li>
                      <li>{item.strIngredient8}</li>
                      <li>{item.strIngredient9}</li>
                      <li>{item.strIngredient10}</li>
                      <li>{item.strIngredient11}</li>
                      <li>{item.strIngredient12}</li>
                      <li>{item.strIngredient13}</li>
                      <li>{item.strIngredient14}</li>
                      <li>{item.strIngredient15}</li>
                      <li>{item.strIngredient16}</li>
                      <li>{item.strIngredient17}</li>
                      <li>{item.strIngredient18}</li>
                      <li>{item.strIngredient19}</li>
                    </ul>
                  </div>
                </div>
                <div className="bottom">
                  <h2>Recepi to Cook the Food {item.strMeal}</h2>
                  <p>{item.strInstructions}</p>
                  <i className="fa-brands fa-youtube"></i>
                  <a href={item.strYoutube}>{item.strYoutube}</a>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default IdMeal;
