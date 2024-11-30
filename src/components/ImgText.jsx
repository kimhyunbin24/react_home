import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

// Chart.js 설정
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ImgText = (props) => {
    // 연구 분야와 관련된 데이터
    const researchFields = [
        {
            title: "Sarcopenia research",
            description: "",
            count: 4, // 논문 개수
        },
        {
            title: "Gait analysis research",
            description: "",
            count: 5, // 논문 개수
        },
        {
            title: "Medical Imaging Analysis",
            description: "",
            count: 2, // 논문 개수
        },
    ];

    // Chart.js 데이터를 생성
    const chartData = {
        labels: researchFields.map((field) => field.title),
        datasets: [
            {
                label: '출판된 논문 수',
                data: researchFields.map((field) => field.count),
                backgroundColor: ['#4CAF50', '#FFC107', '#2196F3'], // 카테고리별 색상
            },
        ],
    };

    // Chart.js 옵션
    const chartOptions = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: '연구 카테고리별 출판 동향',
            font: {
                size: 32, // 타이틀 글꼴 크기 (2배로 확대)
            },
        },
    },
    scales: {
        y: {
            ticks: {
                callback: function (value) {
                    return Number.isInteger(value) ? value : ''; // 자연수만 표시
                },
                stepSize: 1, // 값의 간격을 1로 설정
            },
        },
    },
};


    return (
        <section id="imgTextType" className={`imgText__wrap ${props.element}`}>
            <h2 className="blind">{props.title}</h2>
            <div className="imgText__inner container">
                <div className="imgText__txt">
                    <span className="small">Publication Overview</span>
                    <h3 className="title">SCI급 논문 11편 출판</h3>
                    <p className="desc">
                        우리 랩은 다양한 연구 분야에서 총 11편의 SCI급 논문을 출판하였습니다. 아래는 연구 분야별 출판 성과 및 연구 흐름입니다.
                    </p>
                    <div className="imgText__fields">
                        {researchFields.map((field, index) => (
                            <div key={index} className="field">
                                <h4 className="field__title">{field.title}</h4>
                                <p className="field__desc">{field.description}</p>
                                <p className="field__count">
                                    <strong>{field.count}편</strong>의 논문 출판
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 오른쪽에 배치된 그래프 */}
                <div className="imgText__chart" style={{ width: '50%' }}>
                    <Bar data={chartData} options={chartOptions} />
                </div>
            </div>
        </section>
    );
};

export default ImgText;
