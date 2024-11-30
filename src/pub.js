import React from 'react';
import id1 from './assets/img/id1.jpg'; // src 폴더 내부 경로
import id2 from './assets/img/id2.jpg'; // src 폴더 내부 경로
import id3 from './assets/img/id3.jpg'; // src 폴더 내부 경로
import id4 from './assets/img/id4.jpg'; // src 폴더 내부 경로
import id5 from './assets/img/id5.jpg'; // src 폴더 내부 경로
import id6 from './assets/img/id6.jpg'; // src 폴더 내부 경로
import id7 from './assets/img/id7.jpg'; // src 폴더 내부 경로
import id8 from './assets/img/id8.jpg'; // src 폴더 내부 경로
import id9 from './assets/img/id9.jpg'; // src 폴더 내부 경로
import id10 from './assets/img/id10.jpg'; // src 폴더 내부 경로
import id11 from './assets/img/id11.jpg'; // src 폴더 내부 경로



const Publication = () => {
    // 출판된 논문 데이터
    const publications = [
         {
            id: 1,
            title: "Assessing physical abilities of sarcopenia patients using gait analysis and smart insole for development of digital biomarker",
            journal: "Scientific Reports",
            status: "Publish",
            date: "2023.06.30",
            firstAuthor: ["Shin-june Kim"],
            doi: "10.1038/s41598-023-37794-7",
            image: id1,
            link: "https://doi.org/10.3390/metabo11010053",
        },
        {
            id: 2,
            title: "Assessment of Automated Identification of Phases in Videos of Total Hip Arthroplasty using Deep Learning Techniques",
            journal: "Clinics in Orthopedic Surgery",
            status: "Publish",
            date: "2024.03.15",
            firstAuthor: ["Yang-jae Kang"],
            doi: "10.4055/cios23280",
            image: id2,
            link: "https://pubmed.ncbi.nlm.nih.gov/38562629/",
        },
        {
            id: 3,
            title: "A machine learning model for prediction of sarcopenia in patients with Parkinson's disease",
            journal: "PLOS ONE",
            status: "Publish",
            date: "2024.01.02",
            firstAuthor: ["Shin-june Kim"],
            doi: "https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0296282",
            image: id3,
            link: "https://pubmed.ncbi.nlm.nih.gov/38165980/",
        },
        {
            id: 4,
            title: "Sarcopenia classification model for musculoskeletal patients using smart insole and artificial intelligence gait analysis",
            journal: "Journal of Cachexia, Sarcopenia and Muscle",
            status: "Publish",
            date: "2023.10.26",
            totalAuthors: 3,
            firstAuthor: ["Shin-june Kim"],
            doi: "10.1002/jcsm.13356",
            image: id4,
            link: "https://doi.org/10.1002/jcsm.13356",
        },
        {
            id: 5,
            title: "Correlation between Harris hip score and gait analysis through artificial intelligence pose estimation in patients after total hip arthroplasty",
            journal: "Asian Journal of Surgery",
            status: "Publish",
            date: "2023.12",
            firstAuthor: ["Sang Yeob Lee"],
            doi: "10.1016/j.asjsur.2023.05.107",
            image: id5,
            link: "https://doi.org/10.1016/j.asjsur.2023.05.107",
        },
        {
            id: 6,
            title: "Accelerometer-derived physical activity analysis of elderly osteoarthritis patients",
            journal: "Musculoskeletal Science and Practice",
            status: "Publish",
            date: "2023.08",
            firstAuthor: ["Sang Yeob Lee"],
            doi: "10.1016/j.msksp.2023.102808",
            image: id6,
            link: "https://pubmed.ncbi.nlm.nih.gov/37352763/",
        },
        {
            id: 7,
            title: "Precise Individual Muscle Segmentation in Whole Thigh CT Scans for Sarcopenia Assessment using U-net Transformer",
            journal: "Scientific Reports",
            status: "Publish",
            date: "2024.02.08",
            firstAuthor: ["Hyun-su Kim"],
            doi: "10.1038/s41598-024-53707-8",
            image: id7,
            link: "https://pubmed.ncbi.nlm.nih.gov/37391464/",
        },
        {
            id: 8,
            title: "spine muscle auto segmentation techniques in MRI imaging: a systematic review",
            journal: "BMC Musculoskeletal Disorders",
            status: "Publish",
            date: "2024.09.06",
            firstAuthor: ["Hyun-bin Kim"],
            doi: "https://doi.org/10.1186/s12891-024-07777-4",
            image: id8,
            link: "https://pubmed.ncbi.nlm.nih.gov/39243080/",
        },
        {
            id: 9,
            title: "Recent Update on the Prevalence of Sarcopenia in Koreans: Findings from the Korea National Health and Nutrition Examination Survey",
            journal: "Journal of Bone Metabolism",
            status: "Publish",
            date: "2024.05.31",
            firstAuthor: ["Shin-june Kim"],
            doi: "https://doi.org/10.11005/jbm.2024.31.2.150",
            image: id9,
            link: "https://pubmed.ncbi.nlm.nih.gov/38886972/",
        },
        {
            id: 10,
            title: "Open, Active-Controlled Clinical Study to Evaluate the Correlation Between Whole Body DEXA and BIA Muscle Measurements",
            journal: "Scientific Reports",
            status: "Publish",
            date: "2024.08.31",
            firstAuthor: ["Yong-chan Ha"],
            doi: "https://doi.org/10.11005/jbm.2024.31.3.219",
            image: id10,
            link: "https://pubmed.ncbi.nlm.nih.gov/39307522/",
        },
        {
            id: 11,
            title: "A retrospective evaluation of individual thigh muscle volume disparities based on hip fracture types in Followed-up Patients: An AI-Based Segmentation Approach Using UNETR",
            journal: "PeerJ",
            status: "Publish",
            date: "2024.08.16",
            firstAuthor: ["Hyun-su Kim"],
            doi: "https://doi.org/10.7717/peerj.17509",
            image: id11,
            link: "https://pubmed.ncbi.nlm.nih.gov/39161969/",
        }


    ];

    // 날짜순 정렬 (최신 날짜가 맨 위로 오도록)
    const sortedPublications = [...publications].sort(
        (a, b) => new Date(b.date) - new Date(a.date)
    );

    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <h1 style={{ marginBottom: '20px', fontSize: '2rem' }}>Publication</h1>
            <p style={{ marginBottom: '20px', fontSize: '1.2rem', lineHeight: '1.6' }}>

            </p>

            {sortedPublications.map((pub) => (
                <div
                    key={pub.id}
                    style={{
                        display: 'flex', // 텍스트와 이미지를 가로로 배치
                        alignItems: 'flex-start', // 텍스트와 이미지를 정렬
                        marginBottom: '20px',
                        padding: '10px',
                        border: '1px solid #ccc',
                        borderRadius: '10px',
                        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                        backgroundColor: '#f9f9f9',
                    }}
                >
                    {/* 이미지 */}
                    <img
                        src={pub.image}
                        alt={`Image for ${pub.title}`}
                        style={{
                            width: '450px', // 고정된 이미지 크기
                            height: 'auto',
                            borderRadius: '10px',
                            marginRight: '15px', // 텍스트와 이미지 간의 간격
                        }}
                    />

                    {/* 텍스트 영역 */}
                    <div style={{ flex: 1 }}>
                        <h2 style={{ fontSize: '1.5rem', marginBottom: '5px' }}>{pub.title}</h2>
                        <h3 style={{ fontSize: '1.2rem', color: '#555', marginBottom: '5px' }}>
                            {pub.journal}
                        </h3>
                        <p style={{ fontSize: '1rem', color: '#777', marginBottom: '5px' }}>
                            <strong>Published Date:</strong> {pub.date}
                        </p>
                        <p style={{ fontSize: '1rem', color: '#777', marginBottom: '5px' }}>
                            <strong>First Author:</strong> {pub.firstAuthor}
                        </p>
                        {pub.doi && (
                            <p style={{ fontSize: '1rem', color: '#007BFF', marginBottom: '10px' }}>
                                <strong>DOI:</strong>{' '}
                                <a href={pub.doi} target="_blank" rel="noopener noreferrer">
                                    {pub.doi}
                                </a>
                            </p>
                        )}
                        <a
                            href={pub.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                display: 'inline-block',
                                padding: '8px 12px',
                                backgroundColor: '#007BFF',
                                color: '#fff',
                                borderRadius: '5px',
                                textDecoration: 'none',
                                fontSize: '1rem',
                            }}
                        >
                            Read Full Text
                        </a>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Publication;