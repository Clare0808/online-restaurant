import { useState, useEffect } from "react";

import style from "./ProblemReturnEle.module.css";

function ProblemReturnEle ({ clickChat, showEle, setShowEle }) {
    const [showSlide, setShowSlide] = useState(showEle);
    const [content, setContent] = useState("");

    const handleAnimationEnd = () => {
        if (!showEle) {
            setShowSlide(false);
        }
    };

    const handleContentInput = (event) => {
        setContent(event.target.value);
    };

    const sendContact = async () => {
        const resp = await fetch("http://localhost/send-contact", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            },
                body: JSON.stringify({
                list: {
                    email: "test@gmail.com",
                    name: "test",
                    content: content,
                    date: "2026/09/03"
                },
            }),
        });

        const data = await resp.json();
        console.log(data);

        setShowEle(false);
        setContent("");
    };

    useEffect(() => {
        if (showEle) {
            setShowSlide(true);
        }
    }, [showEle])

    if (!showSlide) {
        return null;
    }
    
    return (
        <>
            <div 
                className={`${style.contentFrame} ${showEle ? style.slideIn : style.slideOut}`}
                onAnimationEnd={handleAnimationEnd}
            >
                <div className={style.title}>問題回報</div>
                <div className={style.eleFrame}>
                    <div className={style.subTitle}>寫下你的想說的話!</div>
                    <textarea value={content} onChange={handleContentInput}></textarea>
                </div>
                <div className={style.btn} onClick={sendContact}>送出</div>
            </div>
        </>
    )
}

export default ProblemReturnEle;