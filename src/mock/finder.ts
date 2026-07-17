import type {

    FinderItem,

    LocationAnalysis,

} from "../types/finder";

export const auctionItems: FinderItem[] = [

    {

        id: "1",

        type: "auction",

        title: "2026타경12345",

        address: "서울 영등포구 문래동",

        appraisalPrice: "18억 원",

        minimumBid: "14억 4천만 원",

        score: 92,

        grade: "A",

        court: "서울남부지방법원",

        auctionDate: "2026.07.24",

        items: [

            "감정가 : 18억 원",

            "최저가 : 14억 4천만 원",

            "매각기일 : 2026.07.24",

        ],

    },

];

export const publicItems: FinderItem[] = [

    {

        id: "2",

        type: "public",

        title: "온비드 공매",

        address: "서울 강서구",

        expectedPrice: "12억 원",

        score: 88,

        grade: "B",

        auctionDate: "2026.07.22",

        items: [

            "예정가 : 12억 원",

            "입찰마감 : 2026.07.22",

        ],

    },

];

export const sampleLocation: LocationAnalysis = {

    address: "서울 영등포구 문래동",

    convenienceStore: 5,

    tobacco: true,

    footTraffic: "높음",

    competition: "낮음",

    station: "도보 3분",

    parking: "가능",

    recommendation: [

        {

            business: "편의점",

            score: 96,

        },

        {

            business: "약국",

            score: 91,

        },

        {

            business: "음식점",

            score: 87,

        },

        {

            business: "카페",

            score: 82,

        },

        {

            business: "의원",

            score: 78,

        },

    ],

};