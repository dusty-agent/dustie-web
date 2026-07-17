import Card from "../../../components/ui/Card";
import Button from "../../../components/ui/Button";

import "./Research.css";

export default function Research() {

    return (

        <div className="research-page">

            <h1>📚 AP Research</h1>

            <p className="research-subtitle">

                In-depth market insights by AssetPicker.

            </p>

            <Card>

                <h2>

                    Understand the Market Beyond the Headlines.

                </h2>

                <p>

                    AP Research에서는 단순한 뉴스 요약을 넘어
                    시장 변화와 정책, 재개발·재건축, 투자 전략 등을
                    AI와 함께 심층적으로 분석합니다.

                </p>

                <p>

                    부동산 시장을 더 깊이 이해하고
                    투자 판단에 도움이 되는 인사이트를 제공합니다.

                </p>

            </Card>

            <Card>

                <h2>

                    📝 Visit the AssetPicker Blog

                </h2>

                <p>

                    최신 시장 분석과 정책 해설,
                    투자 아이디어 및 리서치를
                    네이버 블로그에서 만나보세요.

                </p>

                <div className="research-buttons">

                    <Button
                        href="http://blog.naver.com/assetpicker"
                    >
                        Visit Naver Blog →
                    </Button>

                </div>

            </Card>

            <Card>

                <h2>

                    What You'll Find

                </h2>

                <ul className="research-list">

                    <li>📊 Market Analysis</li>

                    <li>🏙 Redevelopment & Reconstruction</li>

                    <li>🏛 Policy & Regulation</li>

                    <li>💰 Investment Strategy</li>

                    <li>🤖 AI Research & Insights</li>

                </ul>

            </Card>

        </div>

    );

}