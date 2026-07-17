import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Card from "../../components/ui/Card";

import "./Dashboard.css";

export default function Dashboard() {

    const navigate = useNavigate();

    const [now, setNow] = useState(new Date());

        useEffect(() => {

            const timer = setInterval(() => {

                setNow(new Date());

            }, 1000);

            return () => clearInterval(timer);

        }, []);

        const hour = now.getHours();

        let greeting = "👋 안녕하세요!";

        if (hour >= 5 && hour < 12) {

            greeting = "☀ 좋은 아침입니다!";

        } else if (hour >= 12 && hour < 18) {

            greeting = "🌤 좋은 오후입니다!";

        } else {

            greeting = "🌙 좋은 저녁입니다!";

        }

        const date = now.toLocaleDateString("ko-KR", {

            year: "numeric",

            month: "long",

            day: "numeric",

            weekday: "long",

        });

        const time = now.toLocaleTimeString("ko-KR", {

            hour: "2-digit",

            minute: "2-digit",

            second: "2-digit",

            hour12: false,

        });

    return (

        <div className="dashboard">

            {/* Header */}

            <div className="dashboard-header">

                <div>

                    <h1>{greeting}</h1>

                    <p className="dashboard-date">
                        {date}
                    </p>

                    <p className="dashboard-time">
                        {time} KST
                    </p>

                    <p className="subtitle">
                        오늘도 더스티와 함께 부동산 시장을 분석해보세요.
                    </p>

                </div>

            </div>

            {/* Main Menu */}

            <section className="dashboard-grid">

                <Card
                    title="📰 AP Daily"
                    onClick={() => navigate("/News/daily")}
                >

                    <p>AI가 선별한 오늘의 주요 부동산 뉴스</p>

                    <span>
                        오늘의 브리핑 보기 →
                    </span>

                </Card>

                <Card
                    title="🏢 오늘의 추천 물건"
                    onClick={() => navigate("/finder")}
                >

                    <p>오늘의 투자 기회를 확인해보세요.</p>

                    <span>
                        추천 물건 보기 →
                    </span>

                </Card>

                <Card
                    title="📈 투자 분석"
                    onClick={() => navigate("/analysis")}
                >

                    <p>ROI, 입지, 업종을 분석합니다.</p>

                    <span>
                        투자 분석 시작 →
                    </span>

                </Card>

                <Card
                    title="🤖 Ask Dustie"
                    onClick={() => navigate("/chat")}
                >

                    <p>더스티 AI 부동산 투자 비서</p>

                    <span>
                        상담 시작하기 →
                    </span>

                </Card>

            </section>

            {/* Quick Actions */}

            <h2 className="section-title">

                빠른 실행
            </h2>

            <section className="action-grid">

            <Card
                title="📰 AP Daily"
                onClick={() => navigate("/News/daily")}
            >
                <p>오늘의 브리핑</p>
            </Card>

            <Card
                title="🤖 Ask Dustie"
                onClick={() => navigate("/chat")}
            >
                <p>AI 투자 상담</p>
            </Card>

            <Card
                title="📈 투자 분석"
                onClick={() => navigate("/analysis")}
            >
                <p>ROI · 입지 · 업종 분석</p>
            </Card>

            <Card
                title="🏢 오늘의 추천 물건"
                onClick={() => navigate("/finder")}
            >
                <p>오늘의 투자 기회</p>
            </Card>

            </section>

            {/* Market */}

            <h2 className="market-title">

                오늘의 시장 현황

            </h2>

            <section className="market-grid">

                <Card title="🏢 Apartment">

                    <p>서울 거래량 증가</p>

                </Card>

                <Card title="💰 Interest Rate">

                    <p>금리 동결 전망</p>

                </Card>

                <Card title="📑 Policy">

                    <p>세제 개편 논의</p>

                </Card>

            </section>

            {/* Activity */}

            <h2 className="section-title">

                Dustie Log

            </h2>

            <Card title="Latest Updates">

                <ul className="activity-list">

                    <li>📰 AP 데일리 생성 완료</li>

                    <li>📸 인스타그램 카드 업로드 완료</li>

                    <li>📘 Facebook 카드 업로드 완료</li>

                    <li>🤖 Dustie 준비 완료</li>

                </ul>

            </Card>

        </div>

    );

}