import style from "./HomePage.module.css"

import homepageImg from "../assets/homepage.png";
import dishImg1 from "../assets/homepage1.png";
import dishImg2 from "../assets/homepage2.png";

import { FaStar } from "react-icons/fa";

function Stars ({ count }) {
    return (
        <div>
            {Array(count).fill(null).map((_, index) => (
                <span key={index}><FaStar /></span>
            ))}
        </div>
    )
}

function HomePage () {
    return (
        <>
            <div className={style.contentFrame}>
                <div className={style.textFrame}>
                    <div class={style.slogan}>細細品味西式料理的藝術。</div>
                    <div class={style.secSlogan}>精緻餐飲，應該成為日常生活的一部分。</div>
                    <div class={style.content}>
                        我們嚴選高品質食材，以主廚等級的專業手藝精心製作每一道料理，
                        <br class={style.nextLine} />
                        讓您無論何時、在家中也能輕鬆享受餐廳級的西式饗宴。
                    </div>
                    <div className={style.btn}>了解更多</div>
                </div>
                <img src={homepageImg} />
            </div>
            <div className={style.contentFrame}>
                <div className={style.title}>熱門菜色</div>
                <div className={style.dishBox}>
                    <img src={dishImg1} className={style.dishImg} />
                    <div className={style.dishInfoBox}>
                        <div className={style.dishName}>茄汁肉醬寬扁麵</div>
                        <div className={style.dishDisc}>
                            以新鮮番茄熬製的濃郁肉醬，搭配彈牙的寬扁麵，帶來豐富的口感與層次
                        </div>
                        <div className={style.scoreBox}>
                            <span>推薦指數</span>
                            <Stars count={5} />
                        </div> 
                    </div>
                </div>
                <div className={style.dishBox}>
                    <div className={style.dishInfoBox}>
                        <div className={style.dishName}>青醬貝殼義大利麵</div>
                        <div className={style.dishDisc}>
                            以新鮮羅勒和松子製成的青醬，搭配貝殼義大利麵，風味獨特
                        </div>
                        <div className={style.scoreBox}>
                            <span>推薦指數</span>
                            <Stars count={5} />
                        </div>
                    </div>
                    <img src={dishImg2} className={style.dishImg} />
                </div>
            </div>
        </>
    )
}

export default HomePage;