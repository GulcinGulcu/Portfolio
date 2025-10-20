import { Routes, Route } from "react-router-dom";
import { MyServices } from "./Components/MyServices";
import { About } from "./Components/About";
import { MyWork } from "./Components/MyWork";
import { MyWorkDetail } from "./Components/MyWorkDetail";
import { Layout } from "./Components/Layout";
import { TechStack } from "./Components/TechStack";
import { NoteworthyProjects } from "./Components/NoteworthyProjects";
import { Intro } from "./Components/Intro"

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
