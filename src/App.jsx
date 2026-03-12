import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import StoryDetails from "./Pages/StoryDetails";
import CommingSoon from "./Pages/CommingSoon";
import StoryPage from "./Pages/StoryPage";
import PoemPage from "./Pages/PoemPage";
import PoemDetails from "./Pages/PoemDetails";
import ButtontoTop from "./Components/ButtontoTop";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <ButtontoTop/>
        <Routes>
        
          <Route path="/" element={<Home />} />
          {/* <Route path="/story/:id" element={<StoryDetails/>} /> */}
          <Route path="/story/:slug" element={<StoryDetails/>} />
          {/* <Route path="/story/" element={<MyStory>} /> */}
          <Route path="/story" element={<StoryPage/>} />
          <Route path="/poem" element={<PoemPage/>} />

          <Route path="/poem/:slug" element={<PoemDetails/>} />
          {/* <Route path="/insn00001/details" element={<INSN00001 />} />
          <Route path="/insn00002/details" element={<INSN00002 />} />
          <Route path="/insn00003/details" element={<INSN00003 />} /> */}
          <Route path="*" element={<h1>404 Not Found</h1>} />
          <Route path='/story/coming-soon' element={<CommingSoon />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
