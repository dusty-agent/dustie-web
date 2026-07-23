import {
    useEffect,
    useState,
} from "react";

import type {
    AuctionJsonResponse,
    AuctionPropertyJson,
    FinderItem,
    LocationAnalysis,
} from "../types/finder";

export type FinderTab =
    | "auction"
    | "public"
    | "location";

function formatPrice(
    value?: number,
): string {
    if (
        value === undefined ||
        value === null ||
        Number.isNaN(value)
    ) {
        return "-";
    }

    if (value >= 100_000_000) {
        const eok = Math.floor(
            value / 100_000_000,
        );

        const remainder = value % 100_000_000;

        const man = Math.floor(
            remainder / 10_000,
        );

        if (man > 0) {
            return `${eok}억 ${man.toLocaleString()}만원`;
        }

        return `${eok}억원`;
    }

    if (value >= 10_000) {
        return `${Math.floor(
            value / 10_000,
        ).toLocaleString()}만원`;
    }

    return `${value.toLocaleString()}원`;
}

function formatAuctionDate(
    value?: string,
): string {
    if (!value) {
        return "";
    }

    const digits = value.replace(
        /\D/g,
        "",
    );

    if (digits.length !== 8) {
        return value;
    }

    return [
        digits.slice(0, 4),
        digits.slice(4, 6),
        digits.slice(6, 8),
    ].join(".");
}

function buildDetailItems(
    auction: AuctionPropertyJson,
): string[] {
    const items: string[] = [];

    if (auction.department) {
        items.push(auction.department);
    }

    if (auction.property_type) {
        items.push(auction.property_type);
    }

    if (
        auction.failed_count !== undefined
    ) {
        items.push(
            `유찰 ${auction.failed_count}회`,
        );
    }

    if (
        auction.minimum_rate !== undefined
    ) {
        items.push(
            `최저가율 ${auction.minimum_rate}%`,
        );
    }

    if (auction.auction_time) {
        items.push(
            `매각시간 ${auction.auction_time}`,
        );
    }

    if (auction.remarks) {
        items.push(auction.remarks);
    }

    return items;
}

function calculateScore(
    auction: AuctionPropertyJson,
): number {
    const appraisalPrice =
        auction.appraisal_price || 0;

    const minimumPrice =
        auction.minimum_price || 0;

    if (
        appraisalPrice <= 0 ||
        minimumPrice <= 0
    ) {
        return 0;
    }

    const discountRate =
        1 -
        minimumPrice /
            appraisalPrice;

    const score =
        70 +
        discountRate * 30;

    return Math.max(
        0,
        Math.min(
            100,
            Math.round(score),
        ),
    );
}

function calculateGrade(
    score: number,
): FinderItem["grade"] {
    if (score >= 90) {
        return "S";
    }

    if (score >= 80) {
        return "A";
    }

    if (score >= 70) {
        return "B";
    }

    if (score >= 60) {
        return "C";
    }

    return "D";
}

const COURT_AUCTION_URL =
    "https://www.courtauction.go.kr/pgj/index.on?w2xPath=/pgj/ui/pgj100/PGJ153F00.xml";

function mapAuctionItem(
    auction: AuctionPropertyJson,
): FinderItem {
    const score = calculateScore(auction);

    return {
        id:
            auction.group_id ||
            auction.detail_id ||
            auction.case_number,

        type: "auction",

        title: auction.property_type,

        caseNumber: auction.case_number,

        sourceUrl: COURT_AUCTION_URL,

        address: auction.address,

        appraisalPrice: formatPrice(
            auction.appraisal_price,
        ),

        minimumBid: formatPrice(
            auction.minimum_price,
        ),

        appraisalPriceValue:
            auction.appraisal_price,

        minimumBidValue:
            auction.minimum_price,

        minimumRateValue:
            auction.minimum_rate,

        failedCountValue:
            auction.failed_count,

        auctionDateValue:
            auction.auction_date,

        score,

        grade: calculateGrade(score),

        court: [
            auction.court,
            auction.department,
        ]
            .filter(Boolean)
            .join(" · "),

        auctionDate: formatAuctionDate(
            auction.auction_date,
        ),

        items: buildDetailItems(auction),
    };
}

export function useFinder() {
    const [
        tab,
        setTab,
    ] = useState<FinderTab>(
        "auction",
    );

    const [
        auctions,
        setAuctions,
    ] = useState<FinderItem[]>([]);

    const [
        publicSales,
    ] = useState<FinderItem[]>([]);

    const [
        locationResult,
        setLocationResult,
    ] = useState<LocationAnalysis | null>(
        null,
    );

    useEffect(() => {
        let cancelled = false;

        async function loadAuctions() {
            try {
                const response =
                    await fetch(
                        "/data/auction_latest.json",
                    );

                if (!response.ok) {
                    throw new Error(
                        `경매 데이터 요청 실패: ${response.status}`,
                    );
                }

                const data =
                    (await response.json()) as AuctionJsonResponse;

                const mapped =
                    data.items.map(
                        mapAuctionItem,
                    );

                if (!cancelled) {
                    setAuctions(mapped);
                }
            } catch (error) {
                console.error(
                    "법원경매 데이터를 불러오지 못했습니다.",
                    error,
                );

                if (!cancelled) {
                    setAuctions([]);
                }
            }
        }

        loadAuctions();

        return () => {
            cancelled = true;
        };
    }, []);

    async function analyze(
        address: string,
    ): Promise<LocationAnalysis> {
        const result: LocationAnalysis = {
            address,
            convenienceStore: 0,
            tobacco: false,
            footTraffic: "보통",
            competition: "보통",
            station: "분석 예정",
            parking: "분석 예정",
            recommendation: [],
        };

        setLocationResult(result);

        return result;
    }

    return {
        tab,
        setTab,
        auctions,
        publicSales,
        locationResult,
        analyze,
    };
}