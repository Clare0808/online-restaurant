import { useEffect } from "react";

import style from "./StartPage.module.css";

import dishImg1 from "../assets/img/homepage1.png";
import dishImg3 from "../assets/img/homepage3.jpg";
import dishImg4 from "../assets/img/homepage4.jpg";
import dishImg5 from "../assets/img/homepage5.jpg";
import dishImg6 from "../assets/img/homepage6.jpg";
import dishImg7 from "../assets/img/homepage7.jpg";
import dishImg8 from "../assets/img/homepage8.jpg";

function StartPage () {
    useEffect (() => {
        const dishEle = document.querySelectorAll("#dish");
        const logoEle = document.querySelector("#logo");
        const btnEle = document.querySelector("#btn");

        setTimeout(() => {
            dishEle.forEach((ele) => {
                ele.style.display = "none";
            });
            
            logoEle.style.display = "block";
        }, 4600);

        setTimeout(() => {
            btnEle.style.display = "block";
        }, 6300);
    }, []);

    return (
        <>
            <div className={style.contentFrame}>
                <img className={style.dishImg1} id="dish" src={dishImg1} />
                <img className={style.dishImg3} id="dish" src={dishImg3} />
                <img className={style.dishImg4} id="dish" src={dishImg4} />
                <img className={style.dishImg5} id="dish" src={dishImg5} />
                <img className={style.dishImg6} id="dish" src={dishImg6} />
                <img className={style.dishImg7} id="dish" src={dishImg7} />
                <img className={style.dishImg8} id="dish" src={dishImg8} />
                <div className={style.logo} id="logo">Le Savor 西饗</div>
                <div className={style.startBtn} id="btn">開始</div>
            </div>
        </>
    )
}

export default StartPage;