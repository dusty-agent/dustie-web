export default function Header() {
    return (
        <header
            style={{
                height: 64,
                background: "#ffffff",
                borderBottom: "1px solid #e5e7eb",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "0 24px",
                position: "sticky",
                top: 0,
                zIndex: 100,
            }}
        >
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                }}
            >
                <button
                    style={{
                        border: "none",
                        background: "transparent",
                        fontSize: 20,
                    }}
                >
                    ☰
                </button>

                <h2>Dustie</h2>
            </div>

            <div
                style={{
                    color: "#666",
                }}
            >
                AI Investment Assistant
            </div>
        </header>
    );
}