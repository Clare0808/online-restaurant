import { useState, useEffect } from "react";

import style from "./ProblemReturnEle.module.css";

function ProblemReturnEle ({ clickChat, showEle, setShowEle }) {
    const [showSlide, setShowSlide] = useState(showEle);
    
    const handleAnimationEnd = () => {
        if (!showEle) {
            setShowSlide(false);
        }
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
                    <textarea></textarea>
                </div>
                <div className={style.btn}>送出</div>
            </div>
        </>
    )
}

export default ProblemReturnEle;