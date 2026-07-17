import { useNavigate } from "react-router-dom";

import Card from "../../components/ui/Card";
import Button from "../../components/ui/Button";

import "./Intelligence.css";

export default function Intelligence() {

    const navigate = useNavigate();

    return (

        <div className="intelligence-page">

            <h1>📰 Intelligence</h1>

            <p className="intelligence-subtitle">

                Real Estate Intelligence by AssetPicker

            </p>

            <Card>

                <div className="status">

                    <div className="status-dot"></div>

                    <div>

                        <h3>Today's Intelligence</h3>

                        <p>

                            Daily Brief and AI Research are ready.

                        </p>

                        <span>

                            Updated Today 07:30 KST

                        </span>

                    </div>

                </div>

            </Card>

            <section className="intelligence-grid">

                <Card title="📰 AP Daily">

                    <p>

                        Start your day with today's AI real estate briefing.

                    </p>

                    <Button
                        onClick={() => navigate("/intelligence/daily")}
                    >
                        View Daily →
                    </Button>

                </Card>

                <Card title="📚 AP Research">

                    <p>

                        Explore market research, policy, redevelopment and AI insights.

                    </p>

                    <Button
                        onClick={() => navigate("/intelligence/research")}
                    >
                        View Research →
                    </Button>

                </Card>

            </section>

            <Card title="🎥 AssetPicker Channel">

                <p>

                    Watch daily market briefings, investment analysis,
                    property tours and Shorts.

                </p>

                <Button
                    onClick={() =>
                        window.open(
                            "https://www.youtube.com/@assetpicker",
                            "_blank"
                        )
                    }
                >
                    Watch on YouTube →
                </Button>

            </Card>

            <section className="social-grid">

                <Card title="📸 Instagram">

                    <p>

                        Daily card news and market highlights.

                    </p>

                    <Button
                        onClick={() =>
                            window.open(
                                "https://www.instagram.com/assetpicker",
                                "_blank"
                            )
                        }
                    >
                        Open Instagram →
                    </Button>

                </Card>

                <Card title="📘 Facebook">

                    <p>

                        Follow AssetPicker for the latest updates.

                    </p>

                    <Button
                        onClick={() =>
                            window.open(
                                "https://www.facebook.com/assetpicker",
                                "_blank"
                            )
                        }
                    >
                        Open Facebook →
                    </Button>

                </Card>

            </section>

        </div>

    );

}