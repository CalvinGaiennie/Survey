import styles from "./Question.module.css";

function Question({ question, answerArr, setCurrIndex, isFinalQuestion }) {
  return (
    <div>
      <h2>{question}</h2>

      {answerArr.map((option, index) => (
        <p key={index} className={styles.option}>
          {option}
        </p>
      ))}
    </div>
  );
}

export default Question;
