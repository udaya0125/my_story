import React from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence, motion as Motion } from "framer-motion";
import Home from "./Pages/Home";
import StoryDetails from "./Pages/StoryDetails";
import CommingSoon from "./Pages/CommingSoon";
import StoryPage from "./Pages/StoryPage";
import PoemPage from "./Pages/PoemPage";
import PoemDetails from "./Pages/PoemDetails";
import ButtontoTop from "./Components/ButtontoTop";
import Navigation from "./Components/Navigation";
import ContactUs from "./Pages/ContactUs";

const pageTransition = {
  initial: { opacity: 0, y: 24, filter: "blur(2px)" },
  animate: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    opacity: 0,
    y: -16,
    filter: "blur(2px)",
    transition: { duration: 0.28, ease: [0.4, 0, 1, 1] },
  },
};

const PageShell = ({ children }) => (
  <Motion.div
    variants={pageTransition}
    initial="initial"
    animate="animate"
    exit="exit"
    className="min-h-screen"
  >
    {children}
  </Motion.div>
);

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageShell>
              <Home />
            </PageShell>
          }
        />
        <Route
          path="/story/:slug"
          element={
            <PageShell>
              <StoryDetails />
            </PageShell>
          }
        />
        <Route
          path="/story"
          element={
            <PageShell>
              <StoryPage />
            </PageShell>
          }
        />
        <Route
          path="/poem"
          element={
            <PageShell>
              <PoemPage />
            </PageShell>
          }
        />
        <Route
          path="/poem/:slug"
          element={
            <PageShell>
              <PoemDetails />
            </PageShell>
          }
        />
        <Route
          path="/story/coming-soon"
          element={
            <PageShell>
              <CommingSoon />
            </PageShell>
          }
        />
        <Route
          path="/realms"
          element={
            <PageShell>
              <CommingSoon />
            </PageShell>
          }
        />
        <Route
          path="/realms/:slug"
          element={
            <PageShell>
              <CommingSoon />
            </PageShell>
          }
        />
        <Route
          path="/characters"
          element={
            <PageShell>
              <CommingSoon />
            </PageShell>
          }
        />
        <Route
          path="/characters/:slug"
          element={
            <PageShell>
              <CommingSoon />
            </PageShell>
          }
        />
        <Route
          path="/legends"
          element={
            <PageShell>
              <CommingSoon />
            </PageShell>
          }
        />
        <Route
          path="/legends/:slug"
          element={
            <PageShell>
              <CommingSoon />
            </PageShell>
          }
        />
        <Route
          path="/chronicles"
          element={
            <PageShell>
              <CommingSoon />
            </PageShell>
          }
        />
        <Route
          path="/chronicles/:slug"
          element={
            <PageShell>
              <CommingSoon />
            </PageShell>
          }
        />
        <Route
          path="/contact-us"
          element={
            <PageShell>
              <ContactUs />
            </PageShell>
          }
        />
        <Route
          path="*"
          element={
            <PageShell>
              <h1>404 Not Found</h1>
            </PageShell>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => {
  return (
    <>
      <BrowserRouter>
       <Navigation />
        <ButtontoTop />
        <AnimatedRoutes />
      </BrowserRouter>
    </>
  );
};

export default App;
