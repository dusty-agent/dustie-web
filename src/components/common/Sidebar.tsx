import { NavLink } from "react-router-dom";

import "./Sidebar.css";

export default function Sidebar() {

    return (

        <aside className="sidebar">

            <nav>

                <NavLink to="/">
                    🏠 대시보드
                </NavLink>

                <NavLink to="/chat">
                    🤖 Ask Dustie
                </NavLink>

                <NavLink to="/intelligence">
                    📰 Intelligence
                </NavLink>

                <NavLink to="/property">
                    🏢 추천 물건
                </NavLink>

                <NavLink to="/analysis">
                    📈 투자 분석
                </NavLink>

                <NavLink to="/workspace">
                    📂 Workspace
                </NavLink>

            </nav>

        </aside>

    );

}