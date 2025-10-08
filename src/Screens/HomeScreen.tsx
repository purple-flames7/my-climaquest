// src/screens/HomeScreen.tsx
import { useGame } from "../context/useGame";
import { motion } from "framer-motion";
import { useNavigate } from "react-router";
import logoIcon from "../assets/icons/fulllogo_transparent_nobuffer.png";

export default function HomeScreen() {
  const navigate = useNavigate();
  const { tutorialCompleted, xp } = useGame();

  const handlePlay = () => {
    if (tutorialCompleted) navigate("/progress-map");
    else navigate("/tutorial");
  };

  const handleMiniGames = () => {
    navigate("/mini-games");
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gradient-to-b from-emerald-100 to-teal-200 p-6">
      {/* Header / XP Bar */}
      <motion.div
        className="w-full flex justify-end mb-8 px-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="w-48 bg-white/20 rounded-full h-4 overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-lime-400 to-emerald-500"
            initial={{ width: 0 }}
            animate={{ width: `${Math.min((xp / 300) * 100, 100)}%` }}
            transition={{ duration: 1 }}
          />
        </div>
      </motion.div>

      {/* Logo */}
      <motion.img
        src={logoIcon}
        alt="ClimaQuest Logo"
        className="w-56 h-auto mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 1 }}
      />

      {/* Primary Start Button */}
      <motion.button
        onClick={handlePlay}
        className="bg-gradient-to-b from-green-500 to-green-600 text-white font-extrabold text-2xl px-16 py-4 rounded-xl shadow-lg hover:from-green-600 hover:to-green-700 active:scale-95 transition-all duration-200"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.6 }}
      >
        {tutorialCompleted ? "Continue Journey" : "Start Adventure"}
      </motion.button>

      {/* Secondary Buttons */}
      <motion.div
        className="mt-8 flex flex-col gap-4 w-64"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <button
          onClick={() => navigate("/rewards")}
          className="bg-white/20 text-white font-medium py-3 rounded-xl hover:bg-white/30 transition-colors duration-200"
        >
          View Rewards
        </button>

        {/* New Mini-Games Button */}
        <button
          onClick={handleMiniGames}
          className="bg-yellow-400/80 text-white font-bold py-3 rounded-xl hover:bg-yellow-400 transition-colors duration-200 shadow-md"
        >
          Play Mini-Games
        </button>
      </motion.div>
    </div>
  );
}
