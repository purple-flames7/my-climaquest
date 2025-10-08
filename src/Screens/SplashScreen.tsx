import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router";
import logoIcon from "../assets/icons/icononly_transparent_nobuffer.png";

export default function SplashScreen() {
  const navigate = useNavigate();
  const [exit, setExit] = useState(false);
  const text = "CLIMAQUEST";

  useEffect(() => {
    const timer = setTimeout(() => {
      setExit(true); // trigger exit animation
      setTimeout(() => navigate("/home"), 600);
    }, 3500);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <motion.div
      className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-emerald-100 to-teal-200 overflow-hidden"
      initial={{ opacity: 1, scale: 1 }}
      animate={exit ? { opacity: 0, scale: 0.95 } : { opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      {/* Logo Icon with one-time spin */}
      <motion.img
        src={logoIcon}
        alt="Logo Icon"
        className="w-28 h-28 mb-6"
        initial={{ scale: 0, rotate: -45, opacity: 0 }}
        animate={{ scale: 1, rotate: 5, opacity: 1 }}
        transition={{
          rotate: { type: "spring", stiffness: 200, damping: 15 },
          scale: { duration: 1.2, ease: "easeOut" },
          opacity: { duration: 0.8 },
        }}
      />

      {/* Letter-by-letter animated text */}
      <div className="flex space-x-1 text-4xl md:text-5xl font-raleway font-extrabold text-[#048444] drop-shadow-lg tracking-[0.12em]">
        {text.split("").map((char, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              delay: 0.3 + index * 0.1,
              duration: 0.5,
              ease: "easeOut",
            }}
          >
            {char}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}
