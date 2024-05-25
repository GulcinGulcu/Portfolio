import { Routes, Route } from "react-router-dom";
import { Intro } from "./Components/Intro";
import { MyServices } from "./Components/MyServices";
import { About } from "./Components/About";
import { MyWork } from "./Components/MyWork";
import { MyWorkDetail } from "./Components/MyWorkDetail";
import { Layout } from "./Components/Layout";

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
              <MyWork />
            </>
          }
        ></Route>
        <Route path=":id" element={<MyWorkDetail />}></Route>
      </Route>
    </Routes>
  );
};
