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

        const date = now.toLocaleDateString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
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

                    <h1>☀ Good Morning</h1>

                    <p className="dashboard-date">
                        {date}
                    </p>

                    <p className="dashboard-time">
                        {time} KST
                    </p>

                    <p className="subtitle">
                        Welcome back to Dustie.
                    </p>

                </div>

            </div>

            {/* Main Menu */}

            <section className="dashboard-grid">

                <Card
                    title="📰 AP Daily"
                    onClick={() => navigate("/intelligence/daily")}
                >

                    <p>Today's Morning Brief</p>

                    <span>
                        Check today's briefing →
                    </span>

                </Card>

                <Card
                    title="🏢 Today's Property"
                    onClick={() => navigate("/property")}
                >

                    <p>Recommended Deals</p>

                    <span>
                        View today's properties →
                    </span>

                </Card>

                <Card
                    title="📈 Property Analysis"
                    onClick={() => navigate("/analysis")}
                >

                    <p>Investment Toolkit</p>

                    <span>
                        Calculate ROI →
                    </span>

                </Card>

                <Card
                    title="🤖 Ask Dustie"
                    onClick={() => navigate("/chat")}
                >

                    <p>AI Investment Assistant</p>

                    <span>
                        Start chatting →
                    </span>

                </Card>

            </section>

            {/* Quick Actions */}

            <h2 className="section-title">

                Quick Actions

            </h2>

            <section className="action-grid">

                <Card
                    title="📰 AP Daily"
                    onClick={() => navigate("/intelligence/daily")}
                >
                    <p>Today's Brief</p>
                </Card>

                <Card
                    title="🤖 Ask Dustie"
                    onClick={() => navigate("/chat")}
                >
                    <p>Investment Assistant</p>
                </Card>

                <Card
                    title="📈 ROI Calculator"
                    onClick={() => navigate("/analysis")}
                >
                    <p>Investment Analysis</p>
                </Card>

                <Card
                    title="🏢 Today's Property"
                    onClick={() => navigate("/property")}
                >
                    <p>Recommended Deals</p>
                </Card>

            </section>

            {/* Market */}

            <h2 className="market-title">

                Today's Market

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

                    <li>📰 AP Daily generated successfully</li>

                    <li>📸 Instagram card uploaded</li>

                    <li>📘 Facebook card uploaded</li>

                    <li>🤖 Dustie is ready</li>

                </ul>

            </Card>

        </div>

    );

}