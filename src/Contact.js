import React from 'react';

const Contact = () => {
    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <h1 style={{ marginBottom: '20px', fontSize: '2.5rem', fontWeight: 'bold' }}>Contact</h1>

            {/* Section: Location Information */}
            <section style={{ marginBottom: '40px' }}>
                <h2 style={{ fontSize: '2rem', marginBottom: '10px' }}>Our Location</h2>
                <p style={{ fontSize: '1.2rem', lineHeight: '1.8', marginBottom: '10px' }}>
                    Address: 인천광역시 중구 인항로 27<br />
                    (지번) 인천 중구 신흥동3가 7-206<br />
                    (우) 22332 인하대학병원
                </p>
                <iframe
                    title="Inha University Hospital Location Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3165.192102117505!2d126.62649177677476!3d37.45805507835837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b791c5a0ef84d%3A0x16138f7e6b785d97!2z7IK87KCV66a867CU7J6l7ZWc7JuQIOyduOyaqeuwieydtOumrOyeheuLiOuLpCDrj5nqsbTrqqHo!5e0!3m2!1sko!2skr!4v1700000000000"
                    width="100%"
                    height="300"
                    style={{ border: 0, borderRadius: '10px', marginBottom: '20px' }}
                    allowFullScreen=""
                    loading="lazy"
                ></iframe>
            </section>

            {/* Section: Email Information */}
            <section style={{ marginBottom: '40px' }}>
                <h2 style={{ fontSize: '2rem', marginBottom: '10px' }}>Email address</h2>
                <p style={{ fontSize: '1.2rem', lineHeight: '1.8', marginBottom: '20px' }}>
                    For any inquiries or support, please email us at:
                </p>
                <a
                    href="mailto:contact@inha.ac.kr"
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
                    furim@daum.net
                </a>
            </section>

            {/* Section: Contact Form */}
            <section style={{ marginBottom: '40px' }}>
                <h2 style={{ fontSize: '2rem', marginBottom: '10px' }}>Send Us a Message</h2>
                <form style={{ maxWidth: '600px', margin: '0 auto' }}>
                    <div style={{ marginBottom: '20px' }}>
                        <label htmlFor="name" style={{ fontSize: '1rem', marginBottom: '5px', display: 'block' }}>
                            Your Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            placeholder="Enter your name"
                            style={{
                                width: '100%',
                                padding: '10px',
                                fontSize: '1rem',
                                borderRadius: '5px',
                                border: '1px solid #ccc',
                            }}
                        />
                    </div>
                    <div style={{ marginBottom: '20px' }}>
                        <label htmlFor="email" style={{ fontSize: '1rem', marginBottom: '5px', display: 'block' }}>
                            Your Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Enter your email"
                            style={{
                                width: '100%',
                                padding: '10px',
                                fontSize: '1rem',
                                borderRadius: '5px',
                                border: '1px solid #ccc',
                            }}
                        />
                    </div>
                    <div style={{ marginBottom: '20px' }}>
                        <label htmlFor="message" style={{ fontSize: '1rem', marginBottom: '5px', display: 'block' }}>
                            Your Message
                        </label>
                        <textarea
                            id="message"
                            placeholder="Enter your message"
                            rows="5"
                            style={{
                                width: '100%',
                                padding: '10px',
                                fontSize: '1rem',
                                borderRadius: '5px',
                                border: '1px solid #ccc',
                            }}
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        style={{
                            display: 'block',
                            width: '100%',
                            padding: '10px',
                            backgroundColor: '#007BFF',
                            color: '#fff',
                            border: 'none',
                            borderRadius: '5px',
                            fontSize: '1.2rem',
                            cursor: 'pointer',
                        }}
                    >
                        Send Message
                    </button>
                </form>
            </section>
        </div>
    );
};

export default Contact;
