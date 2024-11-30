import React from 'react'
import yooImg from '../assets/img/yoo.jpg'; // 정확한 상대 경로를 지정
import goo2Img from '../assets/img/goo2.jpg'; // 정확한 상대 경로를 지정
import binImg from '../assets/img/bin.jpg'; // 정확한 상대 경로를 지정
import choiImg from '../assets/img/choi.jpg'; // 정확한 상대 경로를 지정
import shinImg from '../assets/img/shin.jpg'; // 정확한 상대 경로를 지정


const textInfo = [
    {
        title: "유준일",
        desc: "인하대병원 정형외과 부교수 <br />대한골대사학회 산학협력이사<br /> 대한근감소증학회 학술이사",
        src: "/",
        imgSrc: yooImg
    },{
        title: "최선우",
        desc: "연구관리총괄",
        src: "/",
        imgSrc: choiImg
    },{
        title: "김신준",
        desc: "수석연구원 <br /> 보행분석 ",
        src: "/",
        imgSrc: shinImg
    },{
        title: "이유희",
        desc: "임상연구원",
        src: "/"
    },{
        title: "주현진",
        desc: "임상간호사",
        src: "/"
    },{
        title: "김현빈",
        desc: "연구원 <br />",
        src: "/",
        imgSrc: binImg
    },{
        title: "구본상",
        desc: "연구원 <br /> 세포실험 <br /> 동물실험 <br /> 재활임상연구",
        src: "/",
         imgSrc: goo2Img
    },{
        title: "김현수",
        desc: "수석연구원 <br /> 의료영상분석",
        src: "/"
    },{
        title: "박현우",
        desc: "전공의 <br />",
        src: "/"
    }
]

const Text = ( props ) => {
    return (
        <section id="textType" className={`text__wrap ${props.element}`}>
            <span>{props.title}</span>
            <h2 className="mb70">Members</h2>
            <div className="text__inner container">
                {textInfo.map((text, key) => (
                    <div className={`text t${key+1}`} key={key}>
                        {/* 이미지 렌더링 */}
                        {text.imgSrc && (
                            <img
                                src={text.imgSrc}
                                alt={text.title}
                                className="text__image"
                                style={{ width: "100px", height: "100px", borderRadius: "50%" }} // 스타일 추가
                            />
                        )}
                        <h3 className="text__title">{text.title}</h3>
                        <p
                            className="text__desc"
                            dangerouslySetInnerHTML={{ __html: text.desc }}
                        ></p>
                        {/*<a className="text__btn" href={text.src}>더보기</a>*/}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Text;
