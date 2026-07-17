import { useState } from "react";
import Button from "../../components/ui/Button";
import Card from "../../components/ui/Card";

import "./Chat.css";

export default function Chat() {

    const [message, setMessage] = useState("");

    const suggestions = [

        "오늘 주요 부동산 뉴스 알려줘",

        "이 건물 투자해도 될까요?",

        "서울 아파트 전망은?",

        "ROI 계산 도와줘",

        "여의도 상가 투자 어때?",

        "금리 인하 영향은?",

    ];

    return (

        <div className="chat-page">

            <h1>🤖 Ask Dustie</h1>

            <p className="chat-subtitle">

                Your AI Investment Assistant

            </p>

            <Card>

                <div className="chat-context">

                    <div className="live-dot"></div>

                    <div>

                        <strong>Today's Context</strong>

                        <p>

                            Dustie is ready to help with today's market.

                        </p>

                    </div>

                </div>

            </Card>

            <Card title="Ask anything">

                <textarea

                    className="chat-input"

                    placeholder="Ask about real estate, investment, policy, ROI..."

                    value={message}

                    onChange={(e) => setMessage(e.target.value)}

                />

                <div className="chat-actions">

                    <Button>

                        Send

                    </Button>

                </div>

            </Card>

            <h2 className="chat-title">

                Suggested Questions

            </h2>

            <div className="suggest-grid">

                {

                    suggestions.map((item) => (

                        <Card

                            key={item}

                            onClick={() => setMessage(item)}

                        >

                            {item}

                        </Card>

                    ))

                }

            </div>

        </div>

    );

}