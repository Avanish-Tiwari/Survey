import React from "react"

export default function Navigation({
  index,
  setIndex,
  selectedOption,
  setError,
  showPrev,
  showSubmit,
  showNext,
  score,
  setScore,
  correctAnswer,
}) {
  function handleNext() {
    if (selectedOption) {
      setIndex(index + 1)
      if (selectedOption == correctAnswer) {
        setScore(score + 1)
      }
    } else {
      setError("Please select an option")
    }
  }
  function handlePrev() {
    selectedOption ? setIndex(index - 1) : setError("Please select an option")
  }
  return (
    <div
      className={`flex ${showPrev ? "justify-between" : "justify-end"} bg-amber-300 px-10 py-5`}
    >
      {showPrev ? (
        <button
          className="bg-blue-500  w-[120px] py-2 rounded-2xl cursor-pointer"
          onClick={handlePrev}
        >
          Previous
        </button>
      ) : null}
      {showSubmit ? (
        <button className="bg-blue-500 py-2 rounded-2xl w-[120px] cursor-pointer">
          Submit
        </button>
      ) : null}
      {showNext ? (
        <button
          className="bg-blue-500 py-2 rounded-2xl w-[120px] cursor-pointer"
          onClick={handleNext}
        >
          Next
        </button>
      ) : null}
    </div>
  )
}
