import { useNavigate } from "react-router-dom";

import Tabs, {
    type TabItem,
} from "../../components/ui/Tabs";

import AuctionSection from "../../components/finder/sections/AuctionSection";
import PublicSection from "../../components/finder/sections/PublicSection";
import LocationSection from "../../components/finder/sections/LocationSection";

import { useFinder, type FinderTab } from "../../hooks/useFinder";

import "./Finder.css";

export default function Finder() {

    const navigate = useNavigate();

    const {

        tab,

        setTab,

        auctions,

        publicSales,

        locationResult,

        analyze,

    } = useFinder();

    const tabs: TabItem<FinderTab>[] = [
        {
            value: "auction",
            label: "⚖ 법원경매",
        },
        {
            value: "public",
            label: "🏛 온비드 공매",
        },
        {
            value: "location",
            label: "📍 입지 분석",
        },
    ];

    async function handleAnalyze(address: string) {

        const result = await analyze(address);

        navigate("/analysis", {

            state: {

                address,

                result,

            },

        });

    }

    return (

        <div className="finder-page">

            <h1>

                🔍 Finder

            </h1>

            <p className="finder-subtitle">

                경매, 공매, 입지 분석으로 투자 기회를 찾아보세요.

            </p>

            <Tabs<FinderTab>
                items={tabs}
                value={tab}
                onChange={setTab}
            />

            {

                tab === "auction" && (

                    <AuctionSection

                        items={auctions}

                    />

                )

            }

            {

                tab === "public" && (

                    <PublicSection

                        items={publicSales}

                    />

                )

            }

            {

                tab === "location" && (

                    <LocationSection

                        result={locationResult}

                        onAnalyze={handleAnalyze}

                    />

                )

            }

        </div>

    );

}