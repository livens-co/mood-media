"use client";

import { qts, result } from "@/lib/quizQuestions";
import { Question, Result } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState, MouseEvent } from "react";
import { CgSandClock } from "react-icons/cg";
import { FaLink } from "react-icons/fa6";


const Quiz = () => {
  const [name, setName] = useState<string>("");
  const [nameEntered, setNameEntered] = useState<boolean>(false);
  const [index, setIndex] = useState<number>(0);
  const [question, setQuestion] = useState<Question>(qts[index]);
  const [lock, setLock] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [resultState, setResultState] = useState<Result | null>(null);

  const Option1 = useRef<HTMLLIElement>(null);
  const Option2 = useRef<HTMLLIElement>(null);
  const Option3 = useRef<HTMLLIElement>(null);
  const Option4 = useRef<HTMLLIElement>(null);

  const optionArray = [Option1, Option2, Option3, Option4];

  const checkAns = (e: MouseEvent<HTMLLIElement>, ans: number) => {
    if (!lock) {
      if (question.ans === ans) {
        e.currentTarget.classList.add("correct");
        setLock(true);
        setScore((prev) => prev + 1);
      } else {
        e.currentTarget.classList.add("wrong");
        setLock(true);
        optionArray[question.ans - 1].current?.classList.add("correct");
      }
    }
  };

  const next = () => {
    if (lock) {
      if (index === qts.length - 1) {
        const finalResult = getResult(score);
        setResultState(finalResult);
        return;
      }

      const newIndex = index + 1;
      setIndex(newIndex);
      setQuestion(qts[newIndex]);
      setLock(false);
      optionArray.forEach((option) => {
        option.current?.classList.remove("wrong");
        option.current?.classList.remove("correct");
      });
    }
  };

  const reset = () => {
    setName("");
    setNameEntered(false);
    setIndex(0);
    setQuestion(qts[0]);
    setScore(0);
    setLock(false);
    setResultState(null);
  };

  const getResult = (score: number): Result => {
    if (score >= 1 && score <= 2) {
      return result[0];
    } else if (score >= 3 && score <= 4) {
      return result[1];
    } else {
      return result[2];
    }
  };

  const startQuiz = () => {
    if (name.trim() !== "") {
      setNameEntered(true);
    }
  };

  return (
    <div className="quizContainer">
      {!nameEntered ? (
        <div className="nameInputContainer">
          <div className="nameInputRow">

          <h1>Unesi svoje ime:</h1>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Ime"
            />
            </div>
          <button onClick={startQuiz} className="startButton">Započni kviz</button>
        </div>
      ) : resultState ? (
        <>
          <header>
            <h1>Ime: {name}</h1>
            <p>
              <CgSandClock /> 5:00
            </p>
          </header>
          <hr />
          <div
            style={{
              backgroundColor: resultState.bgColor,
              color: resultState.color,
            }}
            className="result"
          >
            <div className="resultColumn">
              <h3>{resultState.row1}</h3>
              <h3>{resultState.row2}</h3>
              <h3>{resultState.row3}</h3>
            </div>
            <div className="resultColumn">
              <p>
                Kako bismo bili odgovorni korisnici interneta, a i kako bi
                spriječili cyber nasilje i smanjiti negov negativan utjecaj,
                klikni na link i saznaj
              </p>
              <Link href={'https://csi.hr/'}><FaLink/> www.csi.hr</Link>
            </div>
          </div>
          <h2>
            Tvoj rezultat {score} od {qts.length}
          </h2>
          <button onClick={reset}>Igraj ponovo</button>
        </>
      ) : (
        <>
          <div className="questionsContainer">
            <header>
              <h1>Ime: {name}</h1>
              <p>
                <CgSandClock /> 5:00
              </p>
            </header>
            <hr />

            <div className="questionRow">
              <div className="questionColumn">
                <h2>{question.question}</h2>
                <ul>
                  <li
                    ref={Option1}
                    onClick={(e) => {
                      checkAns(e, 1);
                    }}
                  >
                    <div className="circle">1</div>
                    <p>{question.option1}</p>
                  </li>
                  <li
                    ref={Option2}
                    onClick={(e) => {
                      checkAns(e, 2);
                    }}
                  >
                    <div className="circle">2</div>
                    <p>{question.option2}</p>
                  </li>
                  <li
                    ref={Option3}
                    onClick={(e) => {
                      checkAns(e, 3);
                    }}
                  >
                    <div className="circle">3</div>
                    <p>{question.option3}</p>
                  </li>
                  <li
                    ref={Option4}
                    onClick={(e) => {
                      checkAns(e, 4);
                    }}
                  >
                    <div className="circle">4</div>
                    <p>{question.option4}</p>
                  </li>
                </ul>
                <button onClick={next}>Dalje</button>
                <div className="index">
                  {index + 1} od {qts.length} pitanja
                </div>
              </div>
              <div className="imageColumn">
                <Image
                  src={question.image}
                  height={400}
                  width={400}
                  alt="Image"
                />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Quiz;
