import React from "react";

import { Route, Routes } from "react-router-dom";

import Main from "./screens/Main";
import ShortLinks from "./screens/ShortLinks";
import NotFound from "./screens/NotFound";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/short-links" element={<ShortLinks />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
