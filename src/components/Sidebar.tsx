import { Link } from "react-router-dom";

export default function Sidebar() {
    return (
        <aside
            style={{
                width: 240,
                background: "#fff",
                borderRight: "1px solid #e5e7eb",
                padding: 24,
            }}
        >
            <nav
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 18,
                }}
            >
                <Link to="/">🏠 Dashboard</Link>

                <Link to="/chat">🤖 Ask Dustie</Link>

                <Link to="/daily">📰 AP Daily</Link>

                <Link to="/property">🏢 Today's Property</Link>

                <Link to="/analysis">📈 Property Analysis</Link>

                <Link to="/research">📚 AP Research</Link>

                <Link to="/settings">⚙ Settings</Link>
            </nav>
        </aside>
    );
}