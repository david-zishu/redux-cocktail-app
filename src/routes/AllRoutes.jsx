import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import SingleCocktail from "../pages/SingleCocktail";
const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cocktail/:id" element={<SingleCocktail />} />
    </Routes>
  );
};

export default AllRoutes;
