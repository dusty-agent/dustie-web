import Card from "../../ui/Card";

import BusinessTag from "../BusinessTag";
import LocationSearch from "../LocationSearch";
import LocationResult from "../LocationResult";

import { getBusinessIcon } from "../../../utils/business";

import type { LocationAnalysis } from "../../../types/finder";

interface LocationSectionProps {

    result: LocationAnalysis | null;

    onAnalyze: (address: string) => void | Promise<void>;

}

export default function LocationSection({

    result,

    onAnalyze,

}: LocationSectionProps) {

    return (

        <>

            <Card title="📍 입지 시뮬레이션">

                <LocationSearch

                    onAnalyze={onAnalyze}

                />

            </Card>

            {

                result && (

                    <LocationResult

                        data={result}

                    />

                )

            }

            {

                result && (

                    <Card title="🤖 AI 추천 업종">

                        <div className="business-grid">

                            {

                                result.recommendation.map(item => (

                                    <BusinessTag

                                        key={item.business}

                                        icon={getBusinessIcon(item.business)}

                                        title={item.business}

                                        score={item.score}

                                    />

                                ))

                            }

                        </div>

                    </Card>

                )

            }

        </>

    );

}