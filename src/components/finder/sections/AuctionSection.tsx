import { useNavigate } from "react-router-dom";

import Card from "../../ui/Card";
import FinderCard from "../FinderCard";

import type { FinderItem } from "../../../types/finder";

interface AuctionSectionProps {

    items: FinderItem[];

}

export default function AuctionSection({

    items,

}: AuctionSectionProps) {

    const navigate = useNavigate();

    return (

        <Card title="⚖ 오늘의 법원경매">

            {

                items.length === 0 ? (

                    <p>등록된 경매 물건이 없습니다.</p>

                ) : (

                    items.map(item => (

                        <FinderCard

                            key={item.id}

                            item={item}

                            onClick={() =>

                                navigate("/analysis", {

                                    state: { item },

                                })

                            }

                        />

                    ))

                )

            }

        </Card>

    );

}