import { useState, useEffect } from "react";

import style from "./WriteReviewEle.module.css";

import { FaStar } from "react-icons/fa";

function Stars ({ count }) {
    const [starTouch, setStarTouch] = useState(Array(5).fill(false));
    const [starClick, setStarClick] = useState(0);

    const handleStarTouch = (index) => {
        const newStars = Array(count).fill(false);

        for (let i = 0; i < 5; i++) {
            newStars[i] = i < index;
        }

        setStarTouch(newStars);
    };

    const handleStarLeave = () => {
        const newStars = Array(count).fill(false);

        for (let i = 0; i < 5; i++) {
            newStars[i] = i < starClick;
        }

        setStarTouch(newStars);
    };

    const clickStar = (index) => {
        setStarClick(index + 1);

        handleStarTouch(index);
    };

    return (
        <div>
            {Array(count).fill(null).map((_, index) => (
                <span 
                    className={`${style.scoreStars} ${starTouch[index] ? style.starTouch : ""}`} 
                    onMouseEnter={() => handleStarTouch(index)}
                    onMouseLeave={() => handleStarLeave()}
                    onClick={() => clickStar(index)}
                    key={index}
                ><FaStar /></span>
            ))}
        </div>
    )
}

function WriteReviewEle ({ clickAdd, showEle }) {
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
                <div className={style.title}>評論填寫</div>
                <div className={style.eleFrame}>
                    <div className={style.subTitle}>評分 :</div>
                    <Stars count={5} />
                </div>
                <div className={style.eleFrame}>
                    <div className={style.subTitle}>寫下你的評論吧!</div>
                    <textarea></textarea>
                </div>
                <div className={style.btn}>送出</div>
            </div>
        </>
    )
}

export default WriteReviewEle;