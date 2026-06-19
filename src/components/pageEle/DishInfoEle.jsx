import { useState, useEffect } from "react";

import style from "./DishInfoEle.module.css";

function DishInfoEle ({clickDish, showEle}) {
    const [showSlide, setShowSlide] = useState(showEle);

    const handleAnimationEnd = () => {
        if (!showEle) {
            setShowSlide(false);
        }
    };

    const sendClickDish = async () => {
        const resp = await fetch("http://localhost/send-dish", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            },
                body: JSON.stringify({
                list: clickDish,
            }),
        });

        const data = await resp.json();
        console.log(data);
    };

    useEffect(() => {
        if (showEle) {
            setShowSlide(true);
        }

        console.log(clickDish);
    }, [showEle]);

    if (!showSlide) {
        return null;
    }

    return (
        <>
            <div 
                className={`${style.contentFrame} ${showEle ? style.slideIn : style.slideOut}`}
                onAnimationEnd={handleAnimationEnd}
            >
                <div className={style.title}>餐點資訊</div>
                <img src={clickDish.image} />
                <div className={style.textFrame}>
                    <div className={style.dishName}>{clickDish.name}</div>
                    <div className={style.dishDesc}>{clickDish.description}</div>
                    <div className={style.amountInfo}>
                        <div className={style.numBox}>
                            <div className={style.numBtn}>-</div>
                            <div className={style.dishAmount}>1</div>
                            <div className={style.numBtn}>+</div>
                        </div>
                        <div className={style.dishPrice}>${clickDish.price}</div>
                    </div>
                </div>
                <div className={style.btn} onClick={sendClickDish}>送出</div>
            </div>
        </>
    )
}

export default DishInfoEle;