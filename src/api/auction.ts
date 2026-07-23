import { DATA_BASE_URL } from "../config/data";

import type {
    AuctionJsonResponse,
} from "../types/finder";

export async function fetchLatestAuction(): Promise<AuctionJsonResponse> {
    const dataUrl =
        `${DATA_BASE_URL}/auction_latest.json`;

    const response = await fetch(
        dataUrl,
        {
            cache: "no-store",
            headers: {
                Accept: "application/json",
            },
        },
    );

    if (!response.ok) {
        throw new Error(
            `경매 데이터 조회 실패: ${response.status}`,
        );
    }

    return (
        await response.json()
    ) as AuctionJsonResponse;
}