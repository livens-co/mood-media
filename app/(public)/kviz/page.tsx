import Quiz from "@/components/Quiz";
import "./style.scss";

type Props = {};

const QuizPage = (props: Props) => {
  return (
    <div className="quizPage">
      <div className="bg"></div>
      <div className="bg bg2"></div>
      <div className="bg bg3"></div>
      <Quiz />
    </div>
  );
};

export default QuizPage;
