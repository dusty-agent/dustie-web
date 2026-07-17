import "./Card.css";

interface CardProps {

    title?: string;

    children: React.ReactNode;

    onClick?: () => void;

}

export default function Card({

    title,

    children,

    onClick,

}: CardProps){

    return(

        <div
            className="card"
            onClick={onClick}
        >

            {title &&

                <h2 className="card-title">

                    {title}

                </h2>

            }

            {children}

        </div>

    );

}