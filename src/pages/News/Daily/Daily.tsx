import Card from "../../../components/ui/Card";
import Button from "../../../components/ui/Button";

import "./Daily.css";

export default function Daily() {

    return (

        <div className="daily-page">

            <h1>📰 AP Daily</h1>

            <p className="daily-subtitle">

                Start your day with today's real estate briefing.

            </p>

            <Card>

                <h2>
                    Every Morning, Before the Market Opens.
                </h2>

                <p>

                    지난 24시간 동안의 주요 부동산 뉴스를
                    AI가 선별하고 핵심만 요약하여 제공합니다.

                </p>

                <p>

                    바쁜 아침에도 3분이면
                    오늘 시장을 빠르게 파악할 수 있습니다.

                </p>

            </Card>

            <Card>

                <h2>

                    📲 Receive AP Daily Every Morning

                </h2>

                <p>

                    매일 오전 생성되는 AP Daily 카드뉴스는
                    Instagram과 Facebook에서 가장 먼저 확인하실 수 있습니다.

                </p>

                <div className="daily-buttons">

                    <Button
                        href="https://www.instagram.com/assetpicker"
                    >
                        📸 Follow on Instagram
                    </Button>

                    <Button
                        href="https://www.facebook.com/assetpicker"
                    >
                        📘 Follow on Facebook
                    </Button>

                </div>

            </Card>

            <Card>

                <h2>

                    🎥 Watch AP Daily on YouTube

                </h2>

                <p>

                    AP Daily 뉴스 브리핑과
                    투자 인사이트,
                    임장 콘텐츠를
                    AssetPicker YouTube에서 만나보세요.

                </p>

                <Button
                    href="https://www.youtube.com/@assetpicker"
                >

                    ▶ Visit AssetPicker

                </Button>

            </Card>

        </div>

    );

}