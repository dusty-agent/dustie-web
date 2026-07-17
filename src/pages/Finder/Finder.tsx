import Card from "../../components/ui/Card";
import Button from "../../components/ui/Button";

import "./Finder.css";

export default function Finder() {

    return (

        <div className="finder-page">

            <h1>🏢 오늘의 투자 기회</h1>

            <p className="finder-subtitle">

                AI가 선별한 오늘의 추천 물건과 경매 정보를 확인해보세요.

            </p>

            <Card title="🏬 오늘의 추천 매물">

                <div className="finder-list">

                    <FinderCard
                        title="업무시설"
                        location="서울 영등포구"
                        price="52억 원"
                        roi="6.4%"
                    />

                    <FinderCard
                        title="근린생활시설"
                        location="서울 마포구"
                        price="28억 원"
                        roi="5.8%"
                    />

                    <FinderCard
                        title="공장"
                        location="경기도 김포시"
                        price="84억 원"
                        roi="7.1%"
                    />

                </div>

            </Card>

            <Card title="⚖ 오늘의 경매 물건">

                <div className="finder-list">

                    <FinderCard
                        title="근린생활시설"
                        location="서울 구로구"
                        price="18억 원"
                        roi="-"
                    />

                    <FinderCard
                        title="다가구주택"
                        location="서울 강서구"
                        price="13억 원"
                        roi="-"
                    />

                </div>

            </Card>

            <Card title="🤖 AI 추천 업종">

                <div className="business-grid">

                    <Business title="🍜 일반음식점" />

                    <Business title="☕ 카페" />

                    <Business title="🏋 피트니스" />

                    <Business title="🏥 의원" />

                    <Business title="🏪 편의점" />

                    <Business title="💊 약국" />

                </div>

            </Card>

            <Card title="📈 오늘의 시장 인사이트">

                <ul className="insight-list">

                    <li>📈 서울 업무시설 거래량이 증가하고 있습니다.</li>

                    <li>🏦 기준금리 동결 전망이 유지되고 있습니다.</li>

                    <li>🏢 공실률이 점차 감소하고 있습니다.</li>

                    <li>⚖ 수도권 경매 물건이 증가하고 있습니다.</li>

                </ul>

            </Card>

        </div>

    );

}

function FinderCard(props: any) {

    return (

        <div className="finder-card">

            <h3>{props.title}</h3>

            <p>📍 {props.location}</p>

            <p>💰 {props.price}</p>

            <p className="roi">

                예상 수익률 {props.roi}

            </p>

            <Button>

                투자 분석하기

            </Button>

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