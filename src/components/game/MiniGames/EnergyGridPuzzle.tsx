// src/components/game/MiniGames/EnergyGridPuzzle/EnergyGridPuzzle.tsx
import React, { useState } from "react";

type Cell = "empty" | "solar" | "wind" | "hydro";

export const EnergyGridPuzzle: React.FC = () => {
  const [grid, setGrid] = useState<Cell[][]>(
    Array(3)
      .fill(null)
      .map(() => Array(3).fill("empty"))
  );

  const [selected, setSelected] = useState<Cell>("solar");

  const place = (row: number, col: number) => {
    setGrid((g) => {
      const copy = g.map((r) => [...r]);
      copy[row][col] = selected;
      return copy;
    });
  };

  return (
    <div className="p-4 flex flex-col items-center">
      <h2 className="text-xl font-bold mb-4">Energy Grid Puzzle</h2>
      <div className="flex gap-2 mb-4">
        {(["solar", "wind", "hydro"] as Cell[]).map((type) => (
          <button
            key={type}
            className={`px-3 py-1 border rounded ${
              selected === type ? "bg-green-300" : "bg-white"
            }`}
            onClick={() => setSelected(type)}
          >
            {type.toUpperCase()}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-3 gap-2">
        {grid.map((row, r) =>
          row.map((cell, c) => (
            <div
              key={`${r}-${c}`}
              className="w-16 h-16 border flex items-center justify-center cursor-pointer bg-blue-50"
              onClick={() => place(r, c)}
            >
              {cell !== "empty" ? cell[0].toUpperCase() : ""}
            </div>
          ))
        )}
      </div>
    </div>
  );
};
