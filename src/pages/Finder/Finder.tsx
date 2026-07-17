import Card from "../../components/ui/Card";
import Button from "../../components/ui/Button";

import "./Finder.css";

export default function Finder() {

    return (

        <div className="finder-page">

            <h1>🔍 Finder</h1>

            <p className="finder-subtitle">

                오늘의 투자 기회를 찾아보세요.

            </p>

            <Card title="⚖ 오늘의 경매">

                <p>

                    오늘 등록된 경매 물건을 확인합니다.

                </p>

                <Button>

                    경매 보기

                </Button>

            </Card>

            <Card title="🏛 오늘의 공매">

                <p>

                    캠코 공매 물건을 확인합니다.

                </p>

                <Button>

                    공매 보기

                </Button>

            </Card>

            <Card title="📍 입지 시뮬레이션">

                <p>

                    주소를 입력하면 AI가 입지를 분석합니다.

                </p>

                <input

                    className="finder-input"

                    placeholder="예) 서울 영등포구 ○○로 123"

                />

                <div className="finder-action">

                    <Button>

                        분석하기

                    </Button>

                </div>

            </Card>

            <Card title="🤖 AI 분석 항목">

                <div className="business-grid">

                    <Business title="🏪 편의점" />

                    <Business title="🚬 담배권" />

                    <Business title="🏢 경쟁업종" />

                    <Business title="🚗 주차" />

                    <Business title="👨 유동인구" />

                    <Business title="🏥 병원" />

                    <Business title="🏫 학교" />

                    <Business title="🚉 역세권" />

                </div>

            </Card>

            <Card title="📈 오늘의 시장">

                <ul className="insight-list">

                    <li>📈 서울 업무시설 거래량 증가</li>

                    <li>⚖ 경매 진행 건수 증가</li>

                    <li>🏛 공매 물건 증가</li>

                    <li>🏦 기준금리 동결 전망</li>

                </ul>

            </Card>

        </div>

    );

}

function Business({ title }: { title: string }) {

    return (

        <div className="business-card">

            {title}

        </div>

    );

}