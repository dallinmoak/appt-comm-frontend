import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import TypePage from "./pages/TypePage.jsx";
import TemplatePage from "./pages/TemplatePage.jsx";
import { createRoutesFromElements, Route } from "react-router-dom";

import getTypeDetails from "./data/getTypeDetails.js";
import getTemplateDetails from "./data/getTemplateDetails.js";

const typesLoader = async ({ params }) => {
  return await getTypeDetails(params.id);
};

const templatesLoader = async ({ params }) => {
  return await getTemplateDetails(params.id);
};

const myRoutes = createRoutesFromElements(
  <Route path='/' element={<App />}>
    <Route index element={<Home />} />
    <Route path='about' element={<About />} />
    <Route path='/types/:id' loader={typesLoader} element={<TypePage />} />
    <Route
      path='/templates/:id'
      loader={templatesLoader}
      element={<TemplatePage />}
    />
  </Route>
);

export default myRoutes;
