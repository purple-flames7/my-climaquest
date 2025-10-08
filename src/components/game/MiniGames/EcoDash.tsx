// src/components/game/MiniGames/EcoDash/EcoDash.tsx
import React, { useState, useEffect } from "react";

export const EcoDash: React.FC = () => {
  const [playerY, setPlayerY] = useState(50); // 0-100%
  const [obstacles, setObstacles] = useState<number[]>([]);
  const [score] = useState(0);

  // Move obstacles
  useEffect(() => {
    const interval = setInterval(() => {
      setObstacles((obs) => obs.map((x) => x - 5).filter((x) => x > 0));
    }, 300);
    return () => clearInterval(interval);
  }, []);

  // Spawn obstacles
  useEffect(() => {
    const spawn = setInterval(() => {
      setObstacles((obs) => [...obs, 100]);
    }, 2000);
    return () => clearInterval(spawn);
  }, []);

  const jump = () => {
    setPlayerY(30);
    setTimeout(() => setPlayerY(50), 300);
  };

  return (
    <div className="p-4 flex flex-col items-center">
      <h2 className="text-xl font-bold mb-2">Eco Dash</h2>
      <p className="mb-2">Score: {score}</p>
      <div
        className="relative w-64 h-32 border bg-blue-200 overflow-hidden"
        onClick={jump}
      >
        <div
          className="absolute w-6 h-6 bg-red-500 rounded"
          style={{ bottom: `${playerY}%`, left: "10px" }}
        />
        {obstacles.map((x, i) => (
          <div
            key={i}
            className="absolute w-6 h-6 bg-gray-700 rounded"
            style={{ bottom: "10%", left: `${x}%` }}
          />
        ))}
      </div>
      <p className="mt-2 text-sm">Click/tap to jump!</p>
    </div>
  );
};
