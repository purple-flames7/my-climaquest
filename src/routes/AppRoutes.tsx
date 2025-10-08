// src/routes/AppRoutes.tsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import HomeScreen from "../screens/HomeScreen";
import QuizScreen from "../screens/QuizScreen";
import ResultsScreen from "../screens/ResultsScreen";
import ProgressMapScreen from "../screens/ProgressMap";

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/progress-map" element={<ProgressMapScreen />} />
        <Route path="/quiz/:levelId" element={<QuizScreen />} />
        <Route path="/results/:levelId" element={<ResultsScreen />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
