import React from 'react';
import { Link } from 'react-router-dom'; // Link를 가져옵니다.

const Srax = () => {
    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            {/* Page Title */}
            <h1 style={{ marginBottom: '20px', fontSize: '2.0rem', fontWeight: 'bold' }}>
                Dietary Inflammatory Index-Sarcopenia Risk Assesment Tool (DII-SRAX)
            </h1>

            {/* Section 1: Introduction */}
            <section style={{ marginBottom: '40px' }}>
                <p style={{ fontSize: '1.2rem', lineHeight: '1.8' }}>
                    DII-SRAX is a comprehensive tool designed to evaluate the risk of sarcopenia in patients based on
                    their Dietary Inflammatory Index (DII) score. The prediction model employs a multi-logistic regression
                    approach, incorporating various factors such as smoking status, Body Mass Index (BMI), and C-Reactive
                    Protein (CRP) levels to enhance accuracy. By analyzing these diverse indicators, DII-SRAX provides a nuanced
                    assessment of sarcopenia risk, facilitating early intervention and personalized treatment strategies.
                </p>
            </section>

            {/* Section 2: How DII is Measured */}
            <section style={{ marginBottom: '40px' }}>
                <h2 style={{ fontSize: '2rem', marginBottom: '10px' }}>How is DII Calculated?</h2>
                <p style={{ fontSize: '1.2rem', lineHeight: '1.8' }}>
                    The DII score is derived from dietary data such as food frequency questionnaires or detailed dietary recalls.
                    Each dietary component is scored based on its pro-inflammatory or anti-inflammatory properties using a standardized reference database.
                    The total score reflects the overall inflammatory potential of a diet.
                </p>
                <ul style={{ marginTop: '15px', fontSize: '1.2rem', lineHeight: '1.8' }}>
                    <li>High DII scores indicate a more pro-inflammatory diet.</li>
                    <li>Low DII scores indicate an anti-inflammatory or balanced diet.</li>
                </ul>
            </section>

            {/* Section 3: Benefits of DII */}
            <section style={{ marginBottom: '40px' }}>
                <h2 style={{ fontSize: '2rem', marginBottom: '10px' }}>Why is DII Important for sarcopenia?</h2>
                <p style={{ fontSize: '1.2rem', lineHeight: '1.8' }}>
                    The Dietary Inflammatory Index (DII) is a valuable tool for understanding how diet impacts inflammation, which plays a key role in various chronic conditions, including sarcopenia. Sarcopenia, the age-related loss of muscle mass, strength, and function, is increasingly recognized as an inflammation-related condition. Here's why DII is important in the context of sarcopenia
                </p>
                <ul style={{ marginTop: '15px', fontSize: '1.2rem', lineHeight: '1.8' }}>

                </ul>
                <p style={{ marginTop: '15px', fontSize: '1.2rem', lineHeight: '1.8' }}>
                </p>
            </section>

            {/* Section 4: Call to Action */}
            <section
                style={{
                    textAlign: 'center',
                    padding: '20px',
                    backgroundColor: '#f9f9f9',
                    borderRadius: '10px',
                }}
            >
                <h2 style={{ fontSize: '2rem', marginBottom: '10px' }}>Use it yourself DII-SRAX</h2>
                <p style={{ fontSize: '1.2rem', marginBottom: '20px' }}>
                    Interested in understanding your DII score or integrating it into your research? Get in touch with us to learn more.
                </p>
                {/* Link 컴포넌트로 Page1로 연결 */}
                <Link
                    to="/page1"
                    style={{
                        display: 'inline-block',
                        padding: '10px 20px',
                        backgroundColor: '#007BFF',
                        color: '#fff',
                        textDecoration: 'none',
                        borderRadius: '5px',
                        fontSize: '1.2rem',
                    }}
                >
                    Link
                </Link>
            </section>
        </div>
    );
};

export default Srax;
