import Button from "../ui/Button";

import type { FinderItem } from "../../types/finder";

import {
    getFinderBadge,
    getFinderBadgeClass,
    getScoreColor,
} from "../../utils/finder";

import "./FinderCard.css";

interface FinderCardProps {

    item: FinderItem;

    onClick?: () => void;

}

export default function FinderCard({

    item,

    onClick,

}: FinderCardProps) {

    return (

        <div className="finder-card">

            <div className="finder-header">

                <span
                    className={`finder-badge ${getFinderBadgeClass(item.type)}`}
                >
                    {getFinderBadge(item.type)}
                </span>

                <div className="finder-score-wrap">

                    <span
                        className={`finder-score ${getScoreColor(item.score)}`}
                    >
                        AI 점수 {item.score}
                    </span>

                    <span className="finder-grade">

                        {item.grade ?? "-"}

                    </span>

                </div>

            </div>

            <h3 className="finder-title">
                {item.caseNumber && item.sourceUrl ? (
                    <a
                        href={item.sourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="finder-case-link"
                        title="대한민국 법원경매정보에서 확인"
                        onClick={(event) => {
                            event.stopPropagation();
                        }}
                    >
                        {item.caseNumber}
                        <span aria-hidden="true">
                            ↗
                        </span>
                    </a>
                ) : null}

                {item.caseNumber ? (
                    <span className="finder-title-divider">
                        ·
                    </span>
                ) : null}

                <span>{item.title}</span>
            </h3>

            <p className="finder-address">

                📍 {item.address}

            </p>

            {

                item.appraisalPrice && (

                    <p>

                        💰 감정가 : {item.appraisalPrice}

                    </p>

                )

            }

            {

                item.minimumBid && (

                    <p>

                        ⚖ 최저가 : {item.minimumBid}

                    </p>

                )

            }

            {

                item.expectedPrice && (

                    <p>

                        🏛 예정가 : {item.expectedPrice}

                    </p>

                )

            }

            <ul className="finder-items">

                {

                    item.items.map((text, index) => (

                        <li key={index}>

                            {text}

                        </li>

                    ))

                }

            </ul>

            <Button onClick={onClick}>

                투자 분석하기

            </Button>

        </div>

    );

}