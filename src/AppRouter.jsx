import { Routes, Route } from "react-router-dom";
import { Intro } from "./components/Intro";
import { MyServices } from "./components/MyServices";
import { About } from "./components/About";
import { MyWork } from "./components/MyWork";
import { MyWorkDetail } from "./components/MyWorkDetail";
import { Layout } from "./components/Layout";
import { TechStack } from "./components/TechStack";
import { NoteworthyProjects } from "./components/NoteworthyProjects";

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
