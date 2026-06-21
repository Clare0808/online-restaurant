import { useState } from "react";

import style from "./ProblemPage.module.css";

import ProblemReturnEle from "./pageEle/ProblemReturnEle";

import questionData from "../assets/data/questionData.json";

import { FaMessage } from "react-icons/fa6";

function ProblemPage () {
    const [questions, setQuestions] = useState(questionData);
    const [clickChat, setClickChat] = useState(false);
    const [showEle, setShowEle] = useState(false);

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

            <div
                className={style.chatBtn}
                onClick={() => {
                    setClickChat(true)
                    setShowEle(!showEle)
                }}
            ><FaMessage /></div>

            {
                clickChat && 
                <div className={style.ele}>
                    <div
                        className={`${style.overlay} ${showEle ? style.overlayShow : style.overlayHide}`}
                        onClick={() => setShowEle(!showEle)}
                    ></div>
                    <div>
                        <ProblemReturnEle
                            clickChat={clickChat}
                            showEle={showEle}
                            setShowEle={setShowEle}
                        />
                    </div>
                </div>
            }
        </>
    )
}

export default ProblemPage;