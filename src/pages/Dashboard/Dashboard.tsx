export default function Dashboard() {
    return (
        <div>

            <h1>Good Morning ☀️</h1>

            <p>
                Welcome back to Dustie.
            </p>

            <div
                style={{
                    marginTop: 40,
                    display: "grid",
                    gridTemplateColumns: "repeat(2,1fr)",
                    gap: 24,
                }}
            >

                <Card
                    title="📰 AP Daily"
                    description="Today's Morning Brief"
                />

                <Card
                    title="🏢 Today's Property"
                    description="Recommended Deals"
                />

                <Card
                    title="📈 Property Analysis"
                    description="Investment Calculator"
                />

                <Card
                    title="🤖 Ask Dustie"
                    description="AI Investment Assistant"
                />

            </div>

        </div>
    );
}

function Card({
    title,
    description,
}: {
    title: string;
    description: string;
}) {
    return (
        <div
            style={{
                background: "#fff",
                borderRadius: 16,
                padding: 24,
                border: "1px solid #e5e7eb",
                minHeight: 180,
            }}
        >
            <h2>{title}</h2>

            <p
                style={{
                    marginTop: 10,
                    color: "#666",
                }}
            >
                {description}
            </p>
        </div>
    );
}