import { useState } from "react";

export default function AnswerForm({ onSubmit }) {
  const [answer, setAnswer] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(Number(answer));
    setAnswer("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        placeholder="Your answer"
      />
      <button type="submit">SUBMIT</button>
    </form>
  );
}
