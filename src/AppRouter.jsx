import { Routes, Route } from "react-router-dom";
import { MyServices } from "./components/MyServices/index.jsx";
import { About } from "./components/About/index.jsx";
import { MyWork } from "./components/MyWork/index.jsx";
import { MyWorkDetail } from "./components/MyWorkDetail/index.jsx";
import { Layout } from "./components/Layout/index.jsx";
import { TechStack } from "./components/TechStack/index.jsx";
import { NoteworthyProjects } from "./components/NoteworthyProjects/index.jsx";
import { Intro } from "./components/Intro/index.jsx"

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={
            <>
              <Intro />
              <About />
              <MyServices />
              <NoteworthyProjects />
              <MyWork />
              <TechStack />
            </>
          }
        ></Route>
        <Route path=":id" element={<MyWorkDetail />}></Route>
      </Route>
    </Routes>
  );
};
