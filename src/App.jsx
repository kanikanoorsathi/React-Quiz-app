// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import { useState } from "react";
import "./App.css";
import Qustion from "./data/Qustion";
import ResultScreen from "./components/ResultScreen";



function App() {
  // const [count, setCount] = useState(0);
  const [screen, setScreen] = useState("quiz")
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState("");
  const [useAnswers, setUseAnswers] = useState([]);

  const currentQuestion = Qustion[currentIndex];
  const totalQuestions = Qustion.length;

  const handleNext = () => {
    const isCorrect = selected === currentQuestion.Ans;
    if (isCorrect) setScore((prev) => prev + 1);

    setUseAnswers([...useAnswers, selected]);
    if(currentIndex < totalQuestions -1){
      setCurrentIndex((prev) => prev + 1);
      setSelected("");
    } else{
      setScreen("result")
    }
  };
  console.log({ selected, score });
  const playAgain =() =>{
    setScreen("quiz");
    setCurrentIndex(0);
    setScore(0);
    setSelected("")
    setUseAnswers([]);
  }

  // result screen

  if(screen === "result"){
    
     return <ResultScreen score={score} totalQuestions={totalQuestions} useAnswers={useAnswers} playAgain={playAgain}></ResultScreen>
  }
  

  return (
    <>
      <div className="navbar bg-base-100 shadow-sm flex justify-center">
        <div>
          <a className="btn btn-ghost text-xl">Quiz-App</a>
        </div>
      </div>

      <div className="border solid border-indigo-200 w-2/6 mx-auto my-4 shadow-xl">
        <div className="flex justify-between my-2 p-4">
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
        <div className="p-8 bg-base-100 flex items-center justify-center">
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
