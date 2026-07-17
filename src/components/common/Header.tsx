import "./Header.css";
import dustieLogo from "../../assets/dustie.svg";

export default function Header() {
    return (
        <header className="header">

            <div className="header-left">

                <button className="menu-button">

                    <img
                        src={dustieLogo}
                        alt="Dustie"
                    />

                </button>

                <span className="logo">
                    Dustie
                </span>

            </div>

            <div className="header-right">
                AI Investment Assistant
            </div>

        </header>
    );
}