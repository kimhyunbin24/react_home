import React from 'react';

const Image = (props) => {
    return (
        <section id="imageType" className={`imageType__wrap ${props.element}`}>
            <h2>{props.title}</h2>
            <p>Our lab focuses on the following areas:</p>
            <div className="image__inner container">
                {/* 첫 번째 이미지 섹션 */}
                <article className="image img1">
                    <div className="image__content">
                        <img src="/path/to/your/image1.jpg" alt="Gait analysis" className="image__img" />
                        <div className="image__desc">
                            {/*<h3 className="image__title">Gait analysis</h3>*/}
                            {/*<p>We analyze gait patterns to improve biomechanics and rehabilitation methods.</p>*/}
                        </div>
                    </div>
                </article>

                {/* 두 번째 이미지 섹션 */}
                <article className="image img2">
                    <div className="image__content">
                        <img src="/path/to/your/image2.jpg" alt="Medical imaging" className="image__img" />
                        <div className="image__desc">
                            {/*<h3 className="image__title">Medical imaging</h3>*/}
                            {/*<p>We develop precise diagnostic tools using AI for medical imaging analysis.</p>*/}
                        </div>
                    </div>
                </article>
            </div>

            {/* Additional Content Below Images */}
            <div className="additional-content">
                <h3>Gait analysis</h3>
                <p>
                    We analyze gait patterns to improve biomechanics and rehabilitation methods.
                </p>
                <h3>Medical imaging</h3>
                <p>
                    We develop precise diagnostic tools using AI for medical imaging analysis.
                </p>
            </div>
        </section>
    );
};

export default Image;
