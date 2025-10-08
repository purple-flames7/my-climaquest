// src/App.tsx
import React from "react";
import AppRoutes from "./routes/AppRoutes";
import { GameProvider } from "./context/gameContext";

const App: React.FC = () => {
  return (
    <GameProvider>
      <AppRoutes />
    </GameProvider>
  );
};

export default App;
