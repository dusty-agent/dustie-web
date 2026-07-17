import { Outlet } from "react-router-dom";

import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

export default function MainLayout() {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                minHeight: "100vh",
            }}
        >
            <Header />

            <div
                style={{
                    display: "flex",
                    flex: 1,
                }}
            >
                <Sidebar />

                <main
                    style={{
                        flex: 1,
                        padding: 32,
                    }}
                >
                    <Outlet />
                </main>
            </div>

            <Footer />
        </div>
    );
}