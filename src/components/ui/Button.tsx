import "./Button.css";

interface ButtonProps {

    children: React.ReactNode;

    href?: string;

}

export default function Button({

    children,

    href

}:ButtonProps){

    if(href){

        return(

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

    return(

        <button className="primary-button">

            {children}

        </button>

    );

}