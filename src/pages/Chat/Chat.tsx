import { useState } from "react";

import Card from "../../components/ui/Card";
import Button from "../../components/ui/Button";

import "./Chat.css";

type Message = {
    role: "user" | "assistant";
    content: string;
};

export default function Chat() {

    const [message, setMessage] = useState("");

    const [note, setNote] = useState("");

    const [conversation, setConversation] = useState<Message[]>([]);

    const suggestions = [

        "🏢 이 건물 투자해도 될까요?",

        "⚖ 오늘 경매 물건 보여주세요.",

        "📈 수익률(ROI)을 계산해주세요.",

        "📍 이 입지를 분석해주세요.",

        "📰 오늘 부동산 뉴스를 요약해주세요.",

        "🏪 어떤 업종이 가장 적합할까요?",

    ];

    const handleSend = () => {

        if (!message.trim()) return;

        const userMessage: Message = {

            role: "user",

            content: message,

        };

        // OpenAI 연결 전 임시 응답

        const assistantMessage: Message = {

            role: "assistant",

            content:
            "안녕하세요.\n\n현재는 UI 개발 단계입니다.\n\n추후 AssetPicker AI가 연결되면 이곳에 실제 분석 결과가 표시됩니다.",
        };

        setConversation((prev) => [

            ...prev,

            userMessage,

            assistantMessage,

        ]);

        setMessage("");

    };

    const handleDownload = () => {

        const text = `
    
    ========================================
    
    Dustie 상담 기록
    
    ========================================
    
    생성일시
    
    ${new Date().toLocaleString("ko-KR")}
    
    ========================================
    
    대화 내용
    
    ${conversation
        .map(
            (m) =>
    `${m.role === "user" ? "🙋 사용자" : "🤖 Dustie"}
    
    ${m.content}
    `
        )
        .join("\n")}
    
    ========================================
    
    상담 메모
    
    ${note}
    
    ========================================
    
    Powered by Dustie
    AssetPicker Intelligence
    
    `;
    
        const blob = new Blob([text], {
    
            type: "text/plain;charset=utf-8",
    
        });
    
        const url = URL.createObjectURL(blob);
    
        const a = document.createElement("a");
    
        a.href = url;
    
        a.download = `Dustie_상담기록_${new Date()
            .toISOString()
            .slice(0, 10)}.txt`;
    
        a.click();
    
        URL.revokeObjectURL(url);
    
    };

    return (

        <div className="chat-page">

            <h1>🤖 Ask Dustie</h1>

            <p className="chat-subtitle">

                더스티 AI 부동산 투자 비서

            </p>

            <Card>

                <div className="chat-context">

                    <div className="live-dot"></div>

                    <div>

                        <h3>오늘의 인텔리전스</h3>

                        <p>

                            AP Daily · AP Research · 투자 분석 준비 완료

                        </p>

                    </div>

                </div>

            </Card>

            <Card title="질문하기">

                <textarea

                    className="chat-input"

                    placeholder="주소를 입력하거나 부동산, 투자, 정책 등에 대해 자유롭게 질문해보세요."

                    value={message}

                    onChange={(e) => setMessage(e.target.value)}

                />

                <div className="chat-actions">

                    <Button onClick={handleSend}>

                        🤖 질문하기

                    </Button>

                </div>

            </Card>

            <h2 className="chat-title">

                빠른 질문

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

            <Card title="상담 내용">

                {

                    conversation.length === 0 ? (

                        <div className="conversation-empty">

                            <h3>

                                아직 상담 내용이 없습니다.

                            </h3>

                            <p>

                                더스티에게 질문하면 상담 내용이 여기에 표시됩니다.

                            </p>

                        </div>

                    ) : (

                        <div className="conversation">

                            {

                                conversation.map((msg, index) => (

                                    <div

                                        key={index}

                                        className={`message ${msg.role}`}

                                    >

                                        <strong>

                                            {

                                                msg.role === "user"

                                                    ? "🙋 사용자"

                                                    : "🤖 Dustie"

                                            }

                                        </strong>

                                        <p>

                                            {msg.content}

                                        </p>

                                    </div>

                                ))

                            }

                        </div>

                    )

                }

            </Card>

            <Card title="상담 메모">

                <textarea

                    className="note-input"

                    placeholder="이번 상담에 대한 메모를 작성하세요."

                    value={note}

                    onChange={(e) => setNote(e.target.value)}

                />

            </Card>

            <Card title="활용하기">

                <div className="save-button">

                    <Button>

                        ⭐ 상담 저장

                    </Button>

                </div>

                <div className="action-grid">

                    <Button>

                        📄 상담기록 다운로드

                    </Button>

                    <Button>

                        💬 카카오톡 공유

                    </Button>

                    <Button>

                        📋 복사하기

                    </Button>

                </div>

            </Card>

        </div>

    );

}