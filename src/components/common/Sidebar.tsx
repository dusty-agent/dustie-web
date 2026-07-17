import { NavLink } from "react-router-dom";

import "./Sidebar.css";

export default function Sidebar() {

    return (

        <aside className="sidebar">

            <nav>

                <NavLink to="/">

                    <div className="menu-title">
                        🏠 Dashboard
                    </div>

                    <div className="menu-desc">
                        오늘의 업무
                    </div>

                </NavLink>

                <NavLink to="/chat">

                    <div className="menu-title">
                        🤖 Ask Dustie
                    </div>

                    <div className="menu-desc">
                        AI 투자 비서
                    </div>

                </NavLink>

                <NavLink to="/news">

                    <div className="menu-title">
                        📰 News
                    </div>

                    <div className="menu-desc">
                        부동산 뉴스와 리포트
                    </div>

                </NavLink>

                <NavLink to="/finder">

                    <div className="menu-title">
                        🔍 Finder
                    </div>

                    <div className="menu-desc">
                        투자 기회 탐색
                    </div>

                </NavLink>

                <NavLink to="/analysis">

                    <div className="menu-title">
                        📈 Analysis
                    </div>

                    <div className="menu-desc">
                        투자 분석 도구
                    </div>

                </NavLink>

                <NavLink to="/workspace">

                    <div className="menu-title">
                        📂 Workspace
                    </div>

                    <div className="menu-desc">
                        저장한 상담과 분석
                    </div>

                </NavLink>

            </nav>

        </aside>

    );

}