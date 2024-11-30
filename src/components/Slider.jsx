import React from 'react';

const Slider = ( props ) => {
    return (
        <section id="sliderType" className={`slider__wrap ${props.element}`}>
            <h2 className="blind">슬라이드 유형</h2>
            <div className="slider__inner">
                <div className="slider">
                    <div className="slider__img">
                        <div className="desc">
                            <h3>GAIME LAB</h3>
                            <p>
                                GAIME LAB은 정형외과 고관절 중심 의료영상 분석 솔루션 개발에 주력하고 있으며, 근감소증 및 보행 분석 분야에서도 혁신적인 연구를 진행하고 있습니다. 최신 의료 영상 기술을 활용하여 고관절의 구조와 기능을 정밀하게 분석하고, 이를 통해 환자 맞춤형 치료 방안을 제시합니다.<br /><br />
                                Contact: furim@daum.net, Tel: +82-32-890-2114
                            </p>
                            <div className="btn">
{/*                                 <a href="/">자세히 보기</a> */}
{/*                                 <a href="/" className="black">사이트 보기</a> */}
                            </div>
                        </div>
                    </div>
                    <div className="slider__dot">

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Slider;
