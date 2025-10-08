// src/components/game/MiniGames/RecycleSorting/RecycleSorting.tsx
import React, { useState } from "react";

type Item = { name: string; type: "plastic" | "paper" | "organic" };

const items: Item[] = [
  { name: "Plastic Bottle", type: "plastic" },
  { name: "Newspaper", type: "paper" },
  { name: "Banana Peel", type: "organic" },
];

const bins = ["plastic", "paper", "organic"];

export const RecycleSorting: React.FC = () => {
  const [score, setScore] = useState(0);

  const handleDrop = (itemType: string, binType: string) => {
    if (itemType === binType) setScore((s) => s + 1);
    else setScore((s) => s - 1);
  };

  return (
    <div className="p-4 flex flex-col items-center">
      <h2 className="text-xl font-bold mb-4">Recycle Sorting</h2>
      <p className="mb-2">Score: {score}</p>
      <div className="flex gap-4 mb-6">
        {items.map((item) => (
          <div
            key={item.name}
            draggable
            onDragStart={(e) => e.dataTransfer.setData("type", item.type)}
            className="p-2 border rounded cursor-move bg-white"
          >
            {item.name}
          </div>
        ))}
      </div>
      <div className="flex gap-6">
        {bins.map((bin) => (
          <div
            key={bin}
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => handleDrop(e.dataTransfer.getData("type"), bin)}
            className="w-24 h-24 border-2 border-dashed rounded flex items-center justify-center bg-green-100"
          >
            {bin.toUpperCase()}
          </div>
        ))}
      </div>
    </div>
  );
};
