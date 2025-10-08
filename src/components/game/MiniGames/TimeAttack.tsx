// src/components/MiniGames/TimeAttack.tsx
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";

type Question = {
  question: string;
  options: string[];
  answer: string;
};

const sampleQuestions: Question[] = [
  {
    question: "Which gas is the main contributor to climate change?",
    options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Helium"],
    answer: "Carbon Dioxide",
  },
  {
    question: "Which energy source is renewable?",
    options: ["Coal", "Oil", "Solar", "Natural Gas"],
    answer: "Solar",
  },
  {
    question: "What is the main cause of deforestation?",
    options: ["Agriculture", "Recycling", "Wind Energy", "Solar Panels"],
    answer: "Agriculture",
  },
];

export const TimeAttack: React.FC = () => {
  const navigate = useNavigate();
  const [timeLeft, setTimeLeft] = useState(30);
  const [score, setScore] = useState(0);
  const [currentQ, setCurrentQ] = useState(0);

  useEffect(() => {
    if (timeLeft <= 0) return;
    const timer = setTimeout(() => setTimeLeft((t) => t - 1), 1000);
    return () => clearTimeout(timer);
  }, [timeLeft]);

  const handleAnswer = (option: string) => {
    if (option === sampleQuestions[currentQ].answer) setScore((s) => s + 1);
    setCurrentQ((q) => (q + 1) % sampleQuestions.length);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gradient-to-b from-emerald-100 to-teal-200">
      {timeLeft > 0 ? (
        <>
          <h2 className="text-2xl font-bold mb-2">Time Attack</h2>
          <p className="mb-4 text-lg">
            Time Left: {timeLeft}s | Score: {score}
          </p>
          <div className="bg-white/80 p-6 rounded-xl shadow-lg w-full max-w-md">
            <h3 className="text-lg font-semibold mb-4">
              {sampleQuestions[currentQ].question}
            </h3>
            <div className="flex flex-col gap-2">
              {sampleQuestions[currentQ].options.map((opt) => (
                <button
                  key={opt}
                  onClick={() => handleAnswer(opt)}
                  className="bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition-colors"
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>
        </>
      ) : (
        <>
          <h2 className="text-2xl font-bold mb-2">Time's Up!</h2>
          <p className="text-lg mb-4">Your Score: {score}</p>
          <button
            onClick={() => navigate("/mini-games")}
            className="bg-white/20 text-white py-2 px-6 rounded-xl hover:bg-white/30 transition-colors"
          >
            Back to Hub
          </button>
        </>
      )}
    </div>
  );
};
