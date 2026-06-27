import style from "./UserPage.module.css";

import userImg from "../assets/img/user.jpg";

import { FaPencilAlt } from "react-icons/fa";

const orderData = [
    {
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
        code: "test01234567",
        date: "2026/2/21",
    },
    {
        email: "test@gmail.com",
        dish: [
            {
                name: "test1",
                amount: 3,
                price: 100,
                total: 300,
            },
            {
                name: "test2",
                amount: 3,
                price: 100,
                total: 300,
            }
        ],
        total: 300,
        code: "test01234567",
        date: "2026/2/21",
    },
    {
        email: "test@gmail.com",
        dish: [
            {
                name: "test1",
                amount: 3,
                price: 100,
                total: 300,
            },
            {
                name: "test2",
                amount: 3,
                price: 100,
                total: 300,
            }
        ],
        total: 300,
        code: "test01234567",
        date: "2026/2/21",
    },
    {
        email: "test@gmail.com",
        dish: [
            {
                name: "test1",
                amount: 3,
                price: 100,
                total: 300,
            },
            {
                name: "test2",
                amount: 3,
                price: 100,
                total: 300,
            }
        ],
        total: 300,
        code: "test01234567",
        date: "2026/2/21",
    },
    {
        email: "test@gmail.com",
        dish: [
            {
                name: "test1",
                amount: 3,
                price: 100,
                total: 300,
            },
            {
                name: "test2",
                amount: 3,
                price: 100,
                total: 300,
            }
        ],
        total: 300,
        code: "test01234567",
        date: "2026/2/21",
    }
]

function UserPage () {
    return (
        <>
            <div className={style.page}>
                <div className={style.title}>使用者中心</div>
                <div className={style.contentFrame}>
                    <div className={style.userInfoFrame}>
                        <div className={style.userInfoBox}>
                            <img src={userImg} className={style.userImg} />
                            <FaPencilAlt className={style.imgPencil} />
                        </div>
                        <div className={style.userInfoBox}>
                            <div className={style.userInfo}>測試員</div>
                            <FaPencilAlt className={style.pencil} />
                        </div>
                        <div className={style.userInfoBox}>
                            <div className={style.userInfo}>0912345678</div>
                            <FaPencilAlt className={style.pencil} />
                        </div>
                    </div>
                    <div className={style.orderOutFrame}>
                        <div className={style.subTitle}>訂單紀錄</div>
                        <div className={style.orderFrame}>
                            {orderData.map((order) => (
                                <div className={style.orderBox}>
                                    <div className={style.orderInfoBox}>
                                        <div className={style.orderInfo}>{order.code}</div>
                                        <div className={style.orderDate}>{order.date}</div>
                                    </div>
                                    <div className={style.dishBoxFrame}>
                                        {order.dish.map((dish) => (
                                            <div className={style.dishBox}>
                                                <div className={style.dishInfo}>{dish.name}</div>
                                                <div className={style.dishInfo}>x{dish.amount}</div>
                                                <div className={style.dishInfo}>${dish.total}</div>
                                            </div>
                                        ))}
                                    </div>
                                    <div className={style.orderPriceBox}>
                                        <div className={style.orderInfo}>總計</div>
                                        <div className={style.orderPrice}>$1000</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserPage;