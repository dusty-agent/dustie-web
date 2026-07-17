import { useNavigate } from "react-router-dom";

import Card from "../../components/ui/Card";
import Button from "../../components/ui/Button";

import "./news.css";

export default function News() {

    const navigate = useNavigate();

    return (

        <div className="news-page">

            <h1>📰 News</h1>

            <p className="news-subtitle">

                부동산 뉴스, 리서치, AI 인사이트를 한 곳에서. AssetPicker 부동산 인텔리전스.

            </p>

            <Card>

                <div className="status">

                    <div className="status-dot"></div>

                    <div>

                        <h3>오늘의 인텔리전스</h3>

                        <p>

                            AP Daily와 AP Research가 준비되었습니다.

                        </p>

                        <span>

                            오늘 오전 07:30 업데이트

                        </span>

                    </div>

                </div>

            </Card>

            <section className="news-grid">

                <Card title="📰 AP Daily">

                    <p>

                        AI가 선별한 오늘의 주요 부동산 뉴스를 빠르게 확인해보세요.

                    </p>

                    <Button
                        onClick={() => navigate("/news/daily")}
                    >
                        오늘의 브리핑 보기 →
                    </Button>

                </Card>

                <Card title="📚 AP Research">

                    <p>

                        시장 분석, 정책, 재개발·재건축 등 심층 리서치를 제공합니다.

                    </p>

                    <Button
                        onClick={() => navigate("/news/research")}
                    >
                        리서치 보기 →
                    </Button>

                </Card>

            </section>

            <Card title="🎥 AssetPicker 유튜브">

                <p>

                    AP Daily 브리핑,
                    투자 분석,
                    임장 콘텐츠와 Shorts를 만나보세요.

                </p>

                <Button
                    onClick={() =>
                        window.open(
                            "https://www.youtube.com/@assetpicker",
                            "_blank"
                        )
                    }
                >
                    유튜브 바로가기 →
                </Button>

            </Card>

            <section className="social-grid">

                <Card title="📸 Instagram">

                    <p>

                        매일 업로드되는 카드뉴스와
                        시장 인사이트를 확인해보세요.

                    </p>

                    <Button
                        onClick={() =>
                            window.open(
                                "https://www.instagram.com/assetpicker",
                                "_blank"
                            )
                        }
                    >
                        인스타그램 방문 →
                    </Button>

                </Card>

                <Card title="📘 Facebook">

                    <p>

                        최신 부동산 소식과
                        AP Daily 카드뉴스를 받아보세요.

                    </p>

                    <Button
                        onClick={() =>
                            window.open(
                                "https://www.facebook.com/assetpicker",
                                "_blank"
                            )
                        }
                    >
                        페이스북 방문 →
                    </Button>

                </Card>

            </section>

        </div>

    );

}