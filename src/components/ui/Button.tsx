import "./Button.css";

interface ButtonProps {

    children: React.ReactNode;

    href?: string;

    onClick?: () => void;

}

export default function Button({

    children,

    href,

    onClick,

}: ButtonProps) {

    if (href) {

        return (

            <a
                className="primary-button"
                href={href}
                target="_blank"
                rel="noopener noreferrer"
            >

                {children}

            </a>

        );

    }

    return (

        <button
            className="primary-button"
            onClick={onClick}
        >

            {children}

        </button>

    );

}