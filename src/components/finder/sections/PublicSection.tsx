import { useNavigate } from "react-router-dom";

import Card from "../../ui/Card";
import FinderCard from "../FinderCard";

import type { FinderItem } from "../../../types/finder";

interface PublicSectionProps {

    items: FinderItem[];

}

export default function PublicSection({

    items,

}: PublicSectionProps) {

    const navigate = useNavigate();

    return (

        <Card title="🏛 오늘의 온비드 공매">

            {

                items.length === 0 ? (

                    <p>등록된 공매 물건이 없습니다.</p>

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