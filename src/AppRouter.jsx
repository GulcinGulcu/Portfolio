import { Routes, Route } from "react-router-dom";
import { Intro } from "./Components/Intro";
import { MyServices } from "./Components/MyServices";
import { About } from "./Components/About";
import { MyWork } from "./Components/MyWork";
import { MyWorkDetail } from "./Components/MyWorkDetail";
import { Layout } from "./Components/Layout";
import { TechStack } from "./Components/TechStack";

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
              <TechStack />
              <MyWork />
            </>
          }
        ></Route>
        <Route path=":id" element={<MyWorkDetail />}></Route>
      </Route>
    </Routes>
  );
};
