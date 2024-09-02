import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import TypePage from "./pages/TypePage.jsx";
import { createRoutesFromElements, Route } from "react-router-dom";

import getTypeDetails from "./getTypeDetails.js";

const typesLoader = async ({ params }) => {
  console.log("params", params);
  const types = await getTypeDetails(params.id);
  return types;
};

const myRoutes = createRoutesFromElements(
  <Route path='/' element={<App />}>
    <Route index element={<Home />} />
    <Route path='about' element={<About />} />
    <Route path='/types/:id' loader={typesLoader} element={<TypePage />} />
    <Route path='/communications/:id' element={<h1>communication</h1>} />
  </Route>
);

export default myRoutes;
