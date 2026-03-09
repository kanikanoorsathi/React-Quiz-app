import React from "react";
import Qustion from "../data/Qustion";

const ResultScreen = ({ score, totalQuestions, useAnswers, playAgain }) => {
  return (
    <div className="min-h-screen bg-base-300 p-4 ">
      <div className="border solid border-indigo-200 w-2/6 mx-auto my-4 shadow-xl">
        <h2 className="text-2xl text-center mt-4 font-semibold mb-2">
          {" "}
          Quiz Complete!
        </h2>

        <div className="stats shadow w-full my-8 ">
          {/* 1st stats */}
          <div className="stat">
            <div className="stat-title">Total Corrects</div>
            <div className="stat-value text-primary">{score}</div>
          </div>
          {/* 2nd stats */}
          <div className="stat">
            <div className="stat-title">Percentage</div>
            <div className="stat-value text-primary">
              {(score / totalQuestions) * 100} %{" "}
            </div>
          </div>
        </div>
        {/*  */}

        <h2>Your Answers</h2>
        {
            Qustion.map((Qustion, index) => {
               const userAnswer = useAnswers[index];
               const isCorrect = userAnswer === Qustion.Ans;
               return (
                    <div className="mb-6 border border-base-200 rounded-2xl p-5">
                         <p>{Qustion.title}</p>
                         <div className="my-2">
                            <span className="badge badge-lg badge-primary">Your Answer</span>
                            <span className={`${isCorrect ? "text-success" : "text-error"}`}>   {userAnswer}</span>
                         </div>
                         <div className=" my-2"> 
                            <span className="badge badge-lg badge-primary">Correct Answer</span>
                            <span>   {Qustion.Ans}</span>
                         </div>
                    </div>
                );
        
            })
        }

        <button className="btn btn-primary btn-block mt-8 " onClick={playAgain} >
            Play Your Game
        </button>
      </div>
    </div>
  );
};

export default ResultScreen;
