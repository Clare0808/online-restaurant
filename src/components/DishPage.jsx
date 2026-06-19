import { useState, useEffect, useRef } from "react";

import style from "./DishPage.module.css";

import DishInfoEle from "./pageEle/DishInfoEle";

import optionData from "../assets/data/optionData.json";

function DishPage () {
  const [dishData, setDishData] = useState([]);
  const [clickDish, setClickDish] = useState({});
  const [showEle, setShowEle] = useState(false);
  const [showSlide, setShowSlide] = useState(false);
  const [showFade, setShowFade] = useState(false);

  const targetRef = useRef(null);

  // 點擊元件後滾動視窗至最上方
  const scrollToTarget = () => {
    targetRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  };

  useEffect(() => {
    // 讀取餐點資勳
    fetch("/data/dishData.json")
    .then(response => response.json())
    .then(json => setDishData(json));

    // 初始化動畫
    setShowSlide(true);
    setShowFade(true);

    // 元素進入視窗後顯示動畫
    const HandelScroll = () => {
      document.querySelectorAll(".slideTarget").forEach((ele) => {
        const rect = ele.getBoundingClientRect();

        if (rect.top < window.innerHeight) {
          ele.classList.add(style.slideIn);
        }
      });
    };

    window.addEventListener("scroll", HandelScroll); // 滾動畫面時進行檢查
    return () => window.removeEventListener("scroll", HandelScroll);
  }, []);

  return (
    <>
      {
        clickDish && 
        <div className={style.ele}>
          <div
            className={`${style.overlay} ${showEle ? style.overlayShow : style.overlayHide}`}
            onClick={() => setShowEle(!showEle)}
          ></div>
          <div ref={targetRef}>
            <DishInfoEle clickDish={clickDish} showEle={showEle} />
          </div>
        </div>
      }

      <div className={style.title}>菜單</div>
      <div className={`${style.optionFrame} ${showFade ? style.fadeIn : ""}`}>
        {optionData.map((option) => (
          <div className={style.optionItem} key={option.id}>{option.name}</div>
        ))}
      </div>
      <div className={`${style.dishFrame} ${showSlide ? style.slideIn : ""}`}>
        {dishData.map((dish) => (
          <div
            className={`${style.dishBox} slideTarget`} 
            key={dish.id}
            onClick={() => {
              setClickDish(dish)
              setShowEle(!showEle)
              scrollToTarget()
            }}
          >
            <img src={dish.image} />
            <div className={style.dishInfo}>
              <div className={style.dishName}>{dish.name}</div>
              <div className={style.dishPrice}>${dish.price}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default DishPage;