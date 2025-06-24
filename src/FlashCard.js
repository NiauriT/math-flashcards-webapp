export default function FlashCard({ question }) {
  return (
    <div className="flashcard">
      <h2>
        {question.a} {question.operator} {question.b} = ?
      </h2>
    </div>
  );
}
