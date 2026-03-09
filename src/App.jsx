// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import { useState } from "react";
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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState("");
  const [useAnswers, setUserAnswers] = useState([]);
  const currentQuestion = Qustion[currentIndex];

  const handleNext = () => {
    const isCorrect = selected === currentQuestion.Ans;
    if (isCorrect) setScore((prev) => prev + 1);

    setUserAnswers([...useAnswers, selected]);

    setCurrentIndex((prev) => prev + 1);
    setSelected("");
  };
  console.log({ selected, score });
  const totalQuestions = Qustion.length;

  return (
    <>
      <div className="navbar bg-base-100 shadow-sm flex justify-center">
        <div>
          <a className="btn btn-ghost text-xl">Quiz-App</a>
        </div>
      </div>

      <div className="border border-indigo-200 w-2/6 mx-auto my-4 shadow-sm">
        <div className="flex justify-between my-2 ">
          <span className="font-bold">
            Question {currentIndex + 1} of {totalQuestions}
          </span>
          <span className=" badge badge-outline">
            {((currentIndex + 1) / totalQuestions) * 100}%
          </span>
        </div>
        {/* Progress */}
        <progress
          className="progress progress-primary w-full"
          value={currentIndex}
          max={totalQuestions}
        ></progress>


        {/* Quiiz */}
        <div className="min-h-screen bg-base-100 flex items-center justify-center">
          {/* quiz-title */}
          <div>
            <h2 className="text-2xl font-bold leading-tight">
              {currentQuestion.title}
            </h2>
            {/* quiz-options */}
            <div className="grid grid-cols-1 gap-2 mt-8">
              {currentQuestion.option.map((option) => (
                <button
                  className={`btn justify-start text-left text-base btn-primary h-auto py-4 px-6 ${selected === option ? "btn-primary" : "btn-outline"} `}
                  onClick={() => setSelected(option)}
                >
                  {option}
                </button>
              ))}
            </div>
            {/* Quiz-Next-Button */}
            <div>
              <button
                className="btn btn-primary btn-block mt-8 text-base h-auto py-4 px-6"
                onClick={handleNext}
                disabled={!selected}
              >
                {currentIndex === totalQuestions -1 ? "Finish Quiz" : "Next Quiz ->"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
