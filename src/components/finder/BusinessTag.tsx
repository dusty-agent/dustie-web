import "./BusinessTag.css";

interface BusinessTagProps {

    icon: string;

    title: string;

    score?: number;

    selected?: boolean;

    onClick?: () => void;

}

export default function BusinessTag({

    icon,

    title,

    score,

    selected = false,

    onClick,

}: BusinessTagProps) {

    return (

        <div

            className={`business-tag ${selected ? "selected" : ""}`}

            onClick={onClick}

        >

            <div className="business-icon">

                {icon}

            </div>

            <div className="business-info">

                <strong>

                    {title}

                </strong>

                {

                    score !== undefined && (

                        <span>

                            적합도 {score}점

                        </span>

                    )

                }

            </div>

        </div>

    );

}