import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import StoryDetails from "./Pages/StoryDetails";
import CommingSoon from "./Pages/CommingSoon";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/story/:id" element={<StoryDetails/>} />
          {/* <Route path="/insn00001/details" element={<INSN00001 />} />
          <Route path="/insn00002/details" element={<INSN00002 />} />
          <Route path="/insn00003/details" element={<INSN00003 />} /> */}
          <Route path="*" element={<h1>404 Not Found</h1>} />
          <Route path='/coming-soon' element={<CommingSoon />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
