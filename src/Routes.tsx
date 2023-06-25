import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const Home1 = React.lazy(() => import("pages/Home1"));
const FrameTwo = React.lazy(() => import("pages/FrameTwo"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/frametwo" element={<FrameTwo />} />
          <Route path="/home1" element={<Home1 />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
