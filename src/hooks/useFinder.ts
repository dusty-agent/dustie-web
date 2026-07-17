import { useEffect, useState } from "react";

import { finderService } from "../services/finder.service";

import type {

    FinderItem,

    LocationAnalysis,

} from "../types/finder";

export type FinderTab =

    | "auction"

    | "public"

    | "location";

export function useFinder(){

    const [tab,setTab]=useState<FinderTab>("auction");

    const [auctions,setAuctions]=useState<FinderItem[]>([]);

    const [publicSales,setPublicSales]=useState<FinderItem[]>([]);

    const [locationResult,setLocationResult]=

        useState<LocationAnalysis|null>(null);

    useEffect(()=>{

        load();

    },[]);

    async function load(){

        setAuctions(

            await finderService.getAuctions()

        );

        setPublicSales(

            await finderService.getPublicSales()

        );

    }

    async function analyze(address:string){

        const result=

            await finderService.analyzeLocation(address);

        setLocationResult(result);

        return result;

    }

    return{

        tab,

        setTab,

        auctions,

        publicSales,

        locationResult,

        analyze,

    };

}