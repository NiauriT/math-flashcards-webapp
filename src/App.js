import { useState } from "react";
import FlashCard from "./FlashCard";
import AnswerForm from "./AnswerForm";
import ScoreBoard from "./ScoreBoard";

function generateQuestion() {
  const a = Math.floor(Math.random() * 10);
  const b = Math.floor(Math.random() * 10);
  const operators = ["+", "-", "*"];
  const operator = operators[Math.floor(Math.random() * operators.length)];
  return { a, b, operator };
}

function getCorrectAnswer({ a, b, operator }) {
  switch (operator) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    default:
      return null;
  }
}

export default function App() {
  const [question, setQuestion] = useState(generateQuestion());
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState("");

  function handleAnswer(userAnswer) {
    const correct = getCorrectAnswer(question);
    if (userAnswer === correct) {
      setScore((s) => s + 1);
      setFeedback("✅ Correct!");
    } else {
      setFeedback(`❌ Wrong! Correct answer was ${correct}`);
    }

    // Wait 1.5 seconds before showing the next question
    setTimeout(() => {
      setQuestion(generateQuestion());
      setFeedback("");
    }, 1500);
  }

  return (
    <div className="app">
      <h1>Math Flash Cards 🧮</h1>
      <FlashCard question={question} />
      <AnswerForm onSubmit={handleAnswer} />
      <p>{feedback}</p>
      <ScoreBoard score={score} />
    </div>
  );
}
