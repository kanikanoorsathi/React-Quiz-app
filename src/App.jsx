// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";

const Qustion = [
  {
    title: "What is the capital of Bangladesh?",
    option: ["Chittagong", "Dhaka", "Sylhet", "Khulna"],
    Ans: "Dhaka",
  },
  {
    title: "What is the national flower of Bangladesh?",
    option: ["Rose", "Lotus", "Water Lily", "Sunflower"],
    Ans: "Water Lily",
  },
  {
    title: "What is the national animal of Bangladesh?",
    option: ["Elephant", "Royal Bengal Tiger", "Lion", "Deer"],
    Ans: "Royal Bengal Tiger",
  },
  {
    title: "What is the national bird of Bangladesh?",
    option: ["Dove", "Magpie Robin", "Parrot", "Crow"],
    Ans: "Magpie Robin",
  },
  {
    title: "Which river is the longest in Bangladesh?",
    option: ["Padma", "Jamuna", "Meghna", "Brahmaputra"],
    Ans: "Brahmaputra",
  },
  {
    title: "In which year did Bangladesh gain independence?",
    option: ["1969", "1971", "1975", "1981"],
    Ans: "1971",
  },
  {
    title: "Who is known as the Father of the Nation of Bangladesh?",
    option: [
      "Ziaur Rahman",
      "Sheikh Mujibur Rahman",
      "Hussain Muhammad Ershad",
      "Tajuddin Ahmad",
    ],
    Ans: "Sheikh Mujibur Rahman",
  },
  {
    title: "What is the national fruit of Bangladesh?",
    option: ["Mango", "Jackfruit", "Banana", "Litchi"],
    Ans: "Jackfruit",
  },
  {
    title: "What is the currency of Bangladesh?",
    option: ["Rupee", "Taka", "Riyal", "Dollar"],
    Ans: "Taka",
  },
  {
    title: "What is the national sport of Bangladesh?",
    option: ["Football", "Kabaddi", "Cricket", "Hockey"],
    Ans: "Kabaddi",
  },
];

function App() {
  // const [count, setCount] = useState(0);
  const currentQuestion = Qustion[0];

  return (
    <>
      <div className="navbar bg-base-100 shadow-sm flex justify-center">
        <div>
          <a className="btn btn-ghost text-xl">Quiz-App</a>
        </div>
      </div>

      {/* Quiiz */}
      <div className="min-h-screen bg-base-100 flex items-center justify-center p-4">
        <div>
          <h2 className="text-xl font-semibold my-4 leading-tight">
            {currentQuestion.title}
          </h2>
          {currentQuestion.option.map((option)=> option)}
        </div>
      </div>
    </>
  );
}

export default App;
