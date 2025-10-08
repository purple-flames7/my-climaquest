// src/components/MiniGames/BuildEcoCity.tsx
import React, { useState } from "react";
import { useNavigate } from "react-router";

type Tile = "empty" | "solar" | "wind" | "tree";

export const BuildEcoCity: React.FC = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState<Tile>("solar");
  const [grid, setGrid] = useState<Tile[][]>(
    Array(4)
      .fill(null)
      .map(() => Array(4).fill("empty"))
  );

  const placeTile = (r: number, c: number) => {
    setGrid((g) => {
      const copy = g.map((row) => [...row]);
      copy[r][c] = selected;
      return copy;
    });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gradient-to-b from-emerald-100 to-teal-200">
      <h2 className="text-2xl font-bold mb-4">Build Your Eco City</h2>

      <div className="flex gap-4 mb-4">
        {(["solar", "wind", "tree"] as Tile[]).map((type) => (
          <button
            key={type}
            onClick={() => setSelected(type)}
            className={`px-4 py-2 rounded-lg font-bold ${
              selected === type
                ? "bg-green-500 text-white"
                : "bg-white/20 text-black"
            }`}
          >
            {type.toUpperCase()}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-4 gap-2">
        {grid.map((row, r) =>
          row.map((cell, c) => (
            <div
              key={`${r}-${c}`}
              className="w-16 h-16 border bg-white/20 flex items-center justify-center cursor-pointer rounded-lg"
              onClick={() => placeTile(r, c)}
            >
              {cell !== "empty" ? cell[0].toUpperCase() : ""}
            </div>
          ))
        )}
      </div>

      <button
        onClick={() => navigate("/mini-games")}
        className="mt-6 bg-white/20 text-white py-2 px-6 rounded-xl hover:bg-white/30 transition-colors"
      >
        Back to Hub
      </button>
    </div>
  );
};
