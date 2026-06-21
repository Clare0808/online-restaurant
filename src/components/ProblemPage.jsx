import { useState } from "react";

import style from "./ProblemPage.module.css";

import questionData from "../assets/data/questionData.json";

function ProblemPage () {
    const [questions, setQuestions] = useState(questionData);

    const handleQuestionClick = (id) => {
        setQuestions((prev) => 
            prev.map((que) => 
                que.id === id ? {... que, show: !que.show} : que
            )
        );
    };

    return (
        <>
            <div className={style.title}>常見問題</div>
            <div className={style.questionFrame}>
                {questions.map((que) => (
                    <div className={style.questionBox} key={que.id}>
                        <div
                            className={style.questionContent}
                            onClick={() => {
                                handleQuestionClick(que.id)
                            }}
                        >{que.question}</div>
                        <div
                            className={`${style.answer} ${que.show ? style.slideDownIn : style.slideDownOut}`}
                            dangerouslySetInnerHTML={{ __html: que.answer }}
                        ></div>
                    </div>
                ))}
            </div>

            <div className={style.addBtn}>+</div>
        </>
    )
}

export default ProblemPage;