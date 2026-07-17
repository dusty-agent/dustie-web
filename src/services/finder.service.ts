import type {

    FinderItem,

    LocationAnalysis,

} from "../types/finder";

import {

    auctionItems,

    publicItems,

    sampleLocation,

} from "../mock/finder";

class FinderService {

    async getAuctions(): Promise<FinderItem[]> {

        // TODO : FastAPI 연결

        return auctionItems;

    }

    async getPublicSales(): Promise<FinderItem[]> {

        // TODO : FastAPI 연결

        return publicItems;

    }

    async analyzeLocation(

        address: string

    ): Promise<LocationAnalysis> {

        console.log("Analyze :", address);

        // TODO : FastAPI 연결

        return {

            ...sampleLocation,

            address,

        };

    }

}

export const finderService = new FinderService();