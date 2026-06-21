import { useState, useEffect } from "react";

import style from "./ReviewPage.module.css";

import WriteReviewEle from "./pageEle/WriteReviewEle";

import userImg from "../assets/img/user.jpg";

import { FaStar } from "react-icons/fa";

const reviewData = [
    {
        id: 1,
        score: 5,
        content: "在家也能享受餐廳級的美味，服務也非常貼心，強烈推薦！",
        userName: "張小姐",
        date: "2026/06/18",
    },
    {
        id: 2,
        score: 5,
        content: "在家也能享受餐廳級的美味，服務也非常貼心，強烈推薦！",
        userName: "張小姐",
        date: "2026/06/18",
    },
    {
        id: 3,
        score: 5,
        content: "在家也能享受餐廳級的美味，服務也非常貼心，強烈推薦！",
        userName: "張小姐",
        date: "2026/06/18",
    }
]

function Stars ({ count }) {
    return (
        <div>
            {Array(count).fill(null).map((_, index) => (
                <span className={style.scoreStars} key={index}><FaStar /></span>
            ))}
        </div>
    )
}

function ReviewPage () {
    const [clickAdd, setClickAdd] = useState(false);
    const [showEle, setShowEle] = useState(false);
    const [showFade, setShowFade] = useState(false);

    useEffect(() => {
        setShowFade(true);
    }, []);

    return (
        <>
            <div className={style.title}>顧客回饋</div>
            <div className={style.reviewFrame}>
                {reviewData.map((review) => (
                    <div className={`${style.reviewBox} ${showFade ? style.fadeIn : ""}`} key={review.id}>
                        <Stars count={review.score} />
                        <div className={style.reviewContent}>
                            {review.content}
                        </div>
                        <div className={style.reviewUserBox}>
                            <img src={userImg} />
                            <div className={style.reviewUserIfon}>
                                <div className={style.reviewUserName}>{review.userName}</div>
                                <div className={style.reviewDate}>{review.date}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div
                className={style.addBtn}
                onClick={() => {
                    setClickAdd(true)
                    setShowEle(!showEle)
                }}
            >+</div>

            {
                clickAdd && 
                <div className={style.ele}>
                <div
                    className={`${style.overlay} ${showEle ? style.overlayShow : style.overlayHide}`}
                    onClick={() => setShowEle(!showEle)}
                ></div>
                <div>
                    <WriteReviewEle
                        clickAdd={clickAdd}
                        showEle={showEle}
                        setShowEle={setShowEle}
                     />
                </div>
                </div>
            }
        </>
    )
}

export default ReviewPage;