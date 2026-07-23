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

    caseNumber?: string;

    sourceUrl?: string;
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

export interface AuctionPropertyDetail {
    type?: string;
    address?: string;
    usage?: string;
    detail?: string;

    [key: string]: unknown;
}

export interface AuctionPropertyJson {
    detail_id?: string;

    group_id?: string;

    case_number: string;

    court: string;

    department: string;

    address: string;

    property_type: string;

    appraisal_price: number;

    minimum_price: number;

    minimum_rate?: number;

    auction_date: string;

    auction_time?: string;

    failed_count: number;

    remarks?: string;

    properties?: AuctionPropertyDetail[];
}

export interface AuctionJsonResponse {
    source: string;

    searchDate: string;

    totalCount: number;

    collectedAt: string;

    items: AuctionPropertyJson[];
}