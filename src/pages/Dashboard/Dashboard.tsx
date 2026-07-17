import Card from "../../components/ui/Card";
import { useNavigate } from "react-router-dom";

import "./Dashboard.css";

export default function Dashboard() {

    const navigate = useNavigate();

    return (

        <div>

            <h1>Good Morning ☀️</h1>

            <p>
                Welcome back to Dustie.
            </p>

            <div className="dashboard-grid">

                <Card
                    title="📰 AP Daily"
                    onClick={() => navigate("/daily")}
                >
                    <p>Today's Morning Brief</p>
                </Card>

                <Card
                    title="🏢 Today's Property"
                    onClick={() => navigate("/property")}
                >
                    <p>Recommended Deals</p>
                </Card>

                <Card
                    title="📈 Property Analysis"
                    onClick={() => navigate("/analysis")}
                >
                    <p>Investment Calculator</p>
                </Card>

                <Card
                    title="🤖 Ask Dustie"
                    onClick={() => navigate("/chat")}
                >
                    <p>AI Investment Assistant</p>
                </Card>

            </div>

        </div>

    );

}