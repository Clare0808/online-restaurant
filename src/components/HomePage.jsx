import { useState, useEffect } from "react";

import style from "./HomePage.module.css"

import homepageImg from "../assets/img/homepage9.jpg";
import dishImg1 from "../assets/img/homepage1.png";
import dishImg2 from "../assets/img/homepage2.png";
import userImg from "../assets/img/user.jpg";

import { 
    FaStar, 
    FaUtensils, 
    FaLeaf, 
    FaSnowflake, 
    FaGift,
    FaEnvelope,
    FaPhoneAlt
} from "react-icons/fa";
import { FaEarthAmericas } from "react-icons/fa6";

const infoData1 = [
    {
        id: 1,
        icon: <FaUtensils />,
        title: "主廚等級的料理工藝",
        description:
            "我們的料理由經驗豐富的主廚精心製作，確保每一道菜色都達到最高品質標準。",
    },
    {
        id: 2,
        icon: <FaLeaf />,
        title: "嚴選頂級食材來源",
        description:
            "我們只選用通過品質認證的進口肉品、新鮮蔬菜與天然香料，堅持不使用來路不明或過度加工的食材，為您的餐桌把關每一口安心。",
    },
    {
        id: 3,
        icon: <FaSnowflake />,
        title: "冷鏈直送鎖住新鮮",
        description:
            "全程低溫配送，從出餐到您手中皆維持最佳保存狀態，完美鎖住鮮度與風味，確保餐點到家仍如剛出爐般美味。",
    },
];
const infoData2 = [
    {
        id: 1,
        icon: <FaGift />,
        title: "儀式感為日常而生",
        description:
            "Le Savor 相信用餐不只是填飽肚子，我們為每一道料理設計專屬擺盤與份量比例，讓平凡的夜晚，也能變成值得記住的饗宴時刻。",
    },
    {
        id: 2,
        icon: <FaEarthAmericas />,
        title: "用心對待地球",
        description:
            "支持在地小農與友善飼養，使用環保包裝材料，讓美味與責任同時被端上餐桌。",
    },
];

function Stars ({ count }) {
    return (
        <div>
            {Array(count).fill(null).map((_, index) => (
                <span className={style.scoreStars} key={index}><FaStar /></span>
            ))}
        </div>
    )
}

function HomePage () {
    const [showSlide, setShowSlide] = useState(false);
    const [showFade, setShowFade] = useState(false);

    useEffect(() => {
        // 初始化動畫
        setShowSlide(true);
        setShowFade(true);

        // 元素進入視窗後顯示動畫
        const handleScroll = () => {
            // 判斷元素是否進入視窗
            document.querySelectorAll(".slideTarget").forEach((ele) => {
                const rect = ele.getBoundingClientRect();

                if (rect.top < window.innerHeight) {
                    ele.classList.add(style.slideIn);
                }
            });

            document.querySelectorAll(".slideRTarget").forEach((ele) => {
                const rect = ele.getBoundingClientRect();

                if (rect.top < window.innerHeight) {
                    ele.classList.add(style.slideInR);
                }
            });
            document.querySelectorAll(".slideLTarget").forEach((ele) => {
                const rect = ele.getBoundingClientRect();

                if (rect.top < window.innerHeight) {
                    ele.classList.add(style.slideInL);
                }
            });
        };

        async function fetchData() {
            try {
                const res = await fetch("http://localhost/user");
                const data = await res.json();
                console.log(data);
                } catch (err) {
                console.error(err);
            }
        }
        fetchData();

        window.addEventListener("scroll", handleScroll); // 滾動畫面時進行檢查
        return () => window.removeEventListener("scroll", handleScroll);
    }, []); // 空陣列代表只在初次渲染時執行一次

    return (
        <>
            <div className={style.contentFrame}>
                <div className={`${style.textFrame} ${showSlide ? style.slideIn : ""}`}>
                    <div className={style.textBox}>
                        <div className={style.slogan}>細細品味西式料理的藝術。</div>
                        <div className={style.secSlogan}>精緻餐飲，應該成為日常生活的一部分。</div>
                        <div className={style.content}>
                            我們嚴選高品質食材，以主廚等級的專業手藝精心製作每一道料理，
                            <br className={style.nextLine} />
                            讓您無論何時、在家中也能輕鬆享受餐廳級的西式饗宴。
                        </div>
                    </div>
                    <div className={style.btn}>了解更多</div>
                </div>
                <img src={homepageImg} className={`${style.homepageImg} ${showFade ? style.fadeIn : ""}`} />
            </div>

            <div className={style.dishFrame}>
                <div className={style.title}>熱門菜色</div>
                <div className={`${style.dishBox} slideRTarget`}>
                    <img src={dishImg1} className={style.dishImg} />
                    <div className={style.dishInfoBox}>
                        <div className={style.dishName}>茄汁肉醬寬扁麵</div>
                        <div className={style.dishDisc}>
                            以新鮮番茄熬製的濃郁肉醬，搭配彈牙的寬扁麵，帶來豐富的口感與層次
                        </div>
                        <div className={style.scoreBox}>
                            <span className={style.scoreTitle}>推薦指數</span>
                            <Stars count={5} />
                        </div> 
                    </div>
                </div>
                <div className={`${style.dishBox} slideLTarget`}>
                    <div className={style.dishInfoBox}>
                        <div className={style.dishName}>青醬貝殼義大利麵</div>
                        <div className={style.dishDisc}>
                            以新鮮羅勒和松子製成的青醬，搭配貝殼義大利麵，風味獨特
                        </div>
                        <div className={style.scoreBox}>
                            <span className={style.scoreTitle}>推薦指數</span>
                            <Stars count={5} />
                        </div>
                    </div>
                    <img src={dishImg2} className={style.dishImg} />
                </div>
            </div>

            <div className={style.specialFrame}>
                <div className={style.title}>
                    <span className={style.logo}>Le Savor 西饗</span>特色
                </div>
                <div className={style.specialBox1}>
                    {infoData1.map(info => (
                        <div className={`${style.specialEle} slideTarget`} key={info.id}>
                            <div className={style.specialIcon}>{info.icon}</div>
                            <div className={style.specialTitle}>{info.title}</div>
                            <div className={style.specialDisc}>{info.description}</div>
                        </div>
                    ))}
                </div>
                <div className={style.specialBox2}>
                    {infoData2.map(info => (
                        <div className={`${style.specialEle} slideTarget`} key={info.id}>
                            <div className={style.specialIcon}>{info.icon}</div>
                            <div className={style.specialTitle}>{info.title}</div>
                            <div className={style.specialDisc}>{info.description}</div>
                        </div>
                    ))}
                </div>
            </div>

            <div className={style.reviewFrame}>
                <div className={style.title}>顧客評論</div>

                <div className={style.reviewOutFrame}>
                    <div className={style.lastPage}>〈</div>
                    <div className={`${style.reviewBox} slideTarget`}>
                        <Stars count={5} />
                        <div className={style.reviewContent}>
                            在家也能享受餐廳級的美味，服務也非常貼心，強烈推薦！
                        </div>
                        <div className={style.reviewUserBox}>
                            <img src={userImg} />
                            <div className={style.reviewUserIfon}>
                                <div className={style.reviewUserName}>張小姐</div>
                                <div className={style.reviewDate}>2026/06/18</div>
                            </div>
                        </div>
                    </div>
                    <div className={style.nextPage}> 〉 </div>
                </div>

                <div className={style.contactBox}>
                    <div className={style.contactTitle}>有任何問題歡迎聯絡我們！</div>
                    <div className={style.contactInfo}>
                        <FaEnvelope className={style.contactIcon} />
                        123456@gmail.com
                    </div>
                    <div className={style.contactInfo}>
                        <FaPhoneAlt className={style.contactIcon} />
                        0987654321
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomePage;