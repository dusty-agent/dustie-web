import { Outlet } from "react-router-dom";

import Header from "../components/common/Header";
import Sidebar from "../components/common/Sidebar";
import Footer from "../components/common/Footer";

import "./MainLayout.css";

export default function MainLayout() {

    return (

        <div className="layout">

            <Header />

            <div className="layout-body">

                <Sidebar />

                <main className="layout-main">

                    <Outlet />

                </main>

            </div>

            <Footer />

        </div>

    );

}