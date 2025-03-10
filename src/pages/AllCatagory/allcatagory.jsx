import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import './allcatagory.css';

const AllCatagory = () => {
  const [cata, setCata] = useState([]);

  const fetchdata = async () => {
    const response = await fetch(
      'https://www.themealdb.com/api/json/v1/1/categories.php'
    );
    const data = await response.json();

    setCata(data.categories);
  };

  useEffect(() => {
    fetchdata();
  }, []);

  // console.log(cata);

  const navigate = useNavigate();
  const onMealCata = mealName => {
    navigate('/mealcatagory/' + mealName);
  };

  return (
    <div className="allcata">
      <h1 className="card-head">All Catagories Meals</h1>
      <div className="allcata-card">
        {cata.map(item => {
          return (
            <div
              className="card"
              onClick={() => {
                onMealCata(item.strCategory);
              }}
            >
              <img src={item.strCategoryThumb} alt="meal img" />
              <h2>{item.strCategory}</h2>
              <p className="description">{item.strCategoryDescription}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllCatagory;
