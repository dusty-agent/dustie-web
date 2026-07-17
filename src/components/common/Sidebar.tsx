import { NavLink } from "react-router-dom";

import "./Sidebar.css";

export default function Sidebar() {

    return (

        <aside className="sidebar">

            <nav>

                <NavLink to="/">
                    🏠 Dashboard
                </NavLink>

                <NavLink to="/chat">
                    🤖 Ask Dustie
                </NavLink>

                <NavLink to="/daily">
                    📰 AP Daily
                </NavLink>

                <NavLink to="/property">
                    🏢 Today's Property
                </NavLink>

                <NavLink to="/analysis">
                    📈 Property Analysis
                </NavLink>

                <NavLink to="/research">
                    📚 AP Research
                </NavLink>

                <NavLink to="/settings">
                    ⚙ Settings
                </NavLink>

            </nav>

        </aside>

    );

}