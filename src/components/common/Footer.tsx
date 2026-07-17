import "./Footer.css";

export default function Footer() {
    return (
        <footer
            style={{
                height: 50,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderTop: "1px solid #eee",
            }}
        >
            © 2026 Dustie · Powered by DustyDraft
        </footer>
    );
}