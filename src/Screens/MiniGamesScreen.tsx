// src/screens/MiniGamesScreen.tsx
import React from "react";
import { useNavigate } from "react-router";
import { motion } from "framer-motion";

const miniGames = [
  {
    name: "Recycle Sorting",
    description: "Drag items into the correct bin and learn recycling!",
    route: "/mini-games/recycle-sorting",
    color: "bg-green-400",
  },
  {
    name: "Eco Dash",
    description: "Jump over obstacles and save the environment!",
    route: "/mini-games/eco-dash",
    color: "bg-blue-400",
  },
  {
    name: "Energy Grid Puzzle",
    description: "Place energy sources to power your city efficiently!",
    route: "/mini-games/energy-grid",
    color: "bg-yellow-400",
  },
  {
    name: "Time Attack",
    description: "Answer as many climate questions as you can in 30 seconds!",
    route: "/mini-games/time-attack",
    color: "bg-red-400",
  },
  {
    name: "Build Your Eco City",
    description: "Design a green city with renewable energy and trees!",
    route: "/mini-games/build-eco-city",
    color: "bg-purple-400",
  },
];

export const MiniGames: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-100 to-teal-200 p-6 flex flex-col items-center">
      <motion.h1
        className="text-3xl font-extrabold mb-6"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Mini-Games Hub
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
        {miniGames.map((game) => (
          <motion.div
            key={game.name}
            className={`p-6 rounded-xl shadow-lg cursor-pointer flex flex-col justify-between ${game.color} text-white`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate(game.route)}
          >
            <h2 className="text-xl font-bold mb-2">{game.name}</h2>
            <p className="text-sm">{game.description}</p>
          </motion.div>
        ))}
      </div>

      <motion.button
        onClick={() => navigate("/")}
        className="mt-8 bg-white/20 text-white font-bold py-3 px-6 rounded-xl hover:bg-white/30 transition-colors duration-200"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Back to Home
      </motion.button>
    </div>
  );
};
