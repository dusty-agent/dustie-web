export interface FinderItem {

    id: string;

    type: "auction" | "public";

    title: string;

    address: string;

    appraisalPrice?: string;

    minimumBid?: string;

    expectedPrice?: string;

    score: number;

    grade?: "S" | "A" | "B" | "C" | "D";

    image?: string;

    court?: string;

    auctionDate?: string;

    items: string[];

}

export interface BusinessRecommendation {

    business: string;

    score: number;

}

export interface LocationAnalysis {

    address: string;

    convenienceStore: number;

    tobacco: boolean;

    footTraffic: "낮음" | "보통" | "높음";

    competition: "낮음" | "보통" | "높음";

    station: string;

    parking: string;

    recommendation: BusinessRecommendation[];

}