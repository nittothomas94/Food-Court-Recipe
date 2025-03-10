import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/navbar';
import AllCatagory from './pages/AllCatagory/allcatagory';
import Footer from './components/Footer/footer';
import MealCatagory from './pages/MealCatagory/mealcatagory';
import IdMeal from './pages/IdMeal/idmeal';

import './App.css';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<AllCatagory />} />
        <Route path="/mealcatagory/:anyMealName" element={<MealCatagory />} />
        <Route path="/idmeal/:idofmeal" element={<IdMeal />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
