import React, { useEffect, useState } from "react";
import { data } from "../assets/data";
import Navigation from "./Navigation";

export default function Quiz() {
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [showNext, setShowNext] = useState(false);
  const [showPrev, setShowPrev] = useState(false);
  const [showSubmit, setShowSubmit] = useState(false);
  const [showStart, setShowStart] = useState(true);
  const [question, setQuestions] = useState(data[index]);
  const [selectedOption, setSelectedOption] = useState("");
  const [correctAnswer, setCorrectAnswer] = useState(data[index].ans);
  const [checkAns, setCheckAns] = useState(false);
  const [error, setError] = useState("");
  const [allAnswers, setAllAnswers] = useState(() => {
    // Load initial state from localStorage
    const savedAnswers = localStorage.getItem("allAnswers");
    return savedAnswers ? JSON.parse(savedAnswers) : {};
  });

  useEffect(() => {
    setQuestions(data[index]);
    setCorrectAnswer(data[index].ans);
    setSelectedOption("");
    index === 0 ? setShowPrev(false) : setShowPrev(true);
    if (index === data.length - 1) {
      setShowNext(false);
      setShowSubmit(true);
    } else {
      setShowNext(true);
      setShowSubmit(false);
    }
  }, [index]);

  useEffect(() => {
    // Save allAnswers to localStorage whenever it updates
    localStorage.setItem("allAnswers", JSON.stringify(allAnswers));
  }, [allAnswers]);

  const handleOptionClick = (value) => {
    setSelectedOption(value);
    setAllAnswers((prevAnswers) => ({
      ...prevAnswers,
      ["_"+index]: value,
    }));
    setError("");
  };

  return (
    <div className="p-5 flex flex-col grow">
      <div className="flex flex-col grow p-10 gap-10">
        <div className="relative">
          <h2 className="text-2xl font-bold">
            Question {index + 1}: {question.question}
          </h2>
          <span className="text-red-700 flex absolute top-full left-0">
            {error}
          </span>
        </div>

        <ul className="flex flex-col gap-5">
          <li
            value={1}
            className={`cursor-pointer p-2 max-w-2xl shadow-[1px_1px_12px_grey] rounded-2xl pl-7 ${
              selectedOption == 1 ? "bg-blue-500" : ""
            }`}
            onClick={() => handleOptionClick(1)}
          >
            {question.option1}
          </li>
          <li
            value={2}
            className={`cursor-pointer p-2 max-w-2xl shadow-[1px_1px_12px_grey] rounded-2xl pl-7 ${
              selectedOption == 2 ? "bg-blue-500" : ""
            }`}
            onClick={() => handleOptionClick(2)}
          >
            {question.option2}
          </li>
          <li
            value={3}
            className={`cursor-pointer p-2 max-w-2xl shadow-[1px_1px_12px_grey] rounded-2xl pl-7 ${
              selectedOption == 3 ? "bg-blue-500" : ""
            }`}
            onClick={() => handleOptionClick(3)}
          >
            {question.option3}
          </li>
          <li
            value={4}
            className={`cursor-pointer p-2 max-w-2xl shadow-[1px_1px_12px_grey] rounded-2xl pl-7 ${
              selectedOption == 4 ? "bg-blue-500" : ""
            }`}
            onClick={() => handleOptionClick(4)}
          >
            {question.option4}
          </li>
        </ul>
      </div>
      <div> {index + 1} out of 5</div>
      <Navigation
        index={index}
        showPrev={showPrev}
        showNext={showNext}
        setIndex={setIndex}
        checkAns={checkAns}
        selectedOption={selectedOption}
        setError={setError}
        showSubmit={showSubmit}
        setScore={setScore}
        setShowScore={setShowScore}
        correctAnswer={correctAnswer}
        score={score}
      />
    </div>
  );
}
