import React from "react";
import { Route, Routes } from "react-router-dom";

import Error404 from "./pages/Error404";
import PreJunior from "./pages/PreJunior";
import JuniorPlus from "./pages/JuniorPlus";
import Junior from "./pages/Junior";

export const PATH = {
  MISTAKE: "/*",
  PRE_JUNIOR: "/PreJunior",
  JUNIOR: "/Junior",
  JUNIORPLUS: "/JuniorPlus",
};

function Pages() {
  return (
    <div>
      {/*Routes выбирает первый подходящий роут*/}
      <Routes>
        {/*в начале мы попадаем на страницу '/' и переходим сразу на страницу PRE_JUNIOR*/}
        <Route path={PATH.MISTAKE} element={<Error404 />} />
        <Route path={PATH.PRE_JUNIOR} element={<PreJunior />} />
        <Route path={PATH.JUNIOR} element={<Junior />} />
        <Route path={PATH.JUNIORPLUS} element={<JuniorPlus />} />
        // add routes
        {/*он отрисуется если пользователь захочет попасть на несуществующую страницу*/}
        <Route path={"/*"} element={<Error404 />} />
      </Routes>
    </div>
  );
}

export default Pages;
