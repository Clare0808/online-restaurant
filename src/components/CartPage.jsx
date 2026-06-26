import style from "./CartPage.module.css";

import dishImg from "../assets/img/homepage1.png";

import { FaTrash } from "react-icons/fa";
import { MdOutlineIndeterminateCheckBox } from "react-icons/md";

function CartPage () {
    const sendClick = async () => {
        const resp = await fetch("http://localhost/send-buy", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            },
                body: JSON.stringify({
                list: {
                    email: "test@gmail.com",
                    dish: [
                        {
                            name: "test",
                            amount: 3,
                            price: 100,
                            total: 300,
                        }
                    ],
                    total: 300,
                    code: "test",
                    date: "2026/2/21",
                }
            }),
        });

        const data = await resp.json();
        console.log(data);
    };

    return (
        <>
            <div className={style.title}>購物車</div>
            <div className={style.contentFrame}>
                <div className={style.dishBox}>
                    <img className={style.dishImg} src={dishImg} />
                    <div className={style.dishInfoFrame}>
                        <div className={style.dishInfo}>
                            <div className={style.dishName}>Test</div>
                            <div className={style.numBox}>
                                <div className={style.numBtn}>-</div>
                                <div className={style.dishAmount}>1</div>
                                <div className={style.numBtn}>+</div>
                            </div>
                        </div>
                        <div className={style.price}>$1000</div>
                    </div>
                    <div className={style.funcFrame}>
                        <input className={style.checkbox} type="checkbox" />
                        <FaTrash className={style.cancelBtn} />
                    </div>
                </div>
            </div>

            <div className={style.endBan}>
                <div className={style.totalPrice}>$1000</div>
                <div className={style.btn} onClick={sendClick}>結帳</div>
            </div>
        </>
    )
}

export default CartPage;