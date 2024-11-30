import React from 'react';

import cardBg01 from "../assets/img/aju.jpg";
import cardBg02 from "../assets/img/clari.jpg";
import cardBg03 from "../assets/img/dae.jpg";
import cardBg04 from "../assets/img/exo.jpg";
import cardBg05 from "../assets/img/pro.jpg";
import cardBg06 from "../assets/img/ronfic.jpg";
import cardBg07 from "../assets/img/bumin.jpg";
import cardBg08 from "../assets/img/dee.jpg";

const cardInfo = [
    { img: cardBg01 },
    { img: cardBg02 },
    { img: cardBg03 },
    { img: cardBg04 },
    { img: cardBg05 },
    { img: cardBg06 },
    { img: cardBg07 },
    { img: cardBg08 }
];

const Card = (props) => {
    return (
        <section
            id="cardType"
            className={`card__wrap ${props.element}`}
            style={{
                backgroundColor: "#f5f5f5", // 회색 배경
                padding: "20px", // 선택적으로 여백 추가
                borderRadius: "10px", // 선택적으로 둥근 모서리 추가
            }}
        >
            <h2>{props.title}</h2>
            <p><br /></p>
            <div
                className="card__inner container"
                style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "30px",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                {cardInfo.map((card, key) => (
                    <article
                        className="card"
                        key={key}
                        style={{
                            flex: "1 1 calc(33.33% - 30px)",
                            maxWidth: "200px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            textAlign: "center",
                        }}
                    >
                        <figure
                            className="card__header"
                            style={{
                                width: "100%",
                                height: "auto",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                overflow: "hidden",
                                borderRadius: "10px",
                                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                            }}
                        >
                            <img
                                src={card.img}
                                alt={`Partnership Image ${key + 1}`}
                                style={{
                                    maxWidth: "100%",
                                    maxHeight: "150px",
                                    objectFit: "contain",
                                }}
                            />
                        </figure>
                    </article>
                ))}
            </div>
        </section>
    );
};


export default Card;
