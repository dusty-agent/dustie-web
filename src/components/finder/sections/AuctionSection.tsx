import {
    useMemo,
    useState,
} from "react";

import {
    ArrowUpDown,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

import Card from "../../ui/Card";
import FinderCard from "../FinderCard";

import type { FinderItem } from "../../../types/finder";

import "./AuctionSection.css";


interface AuctionSectionProps {
    items: FinderItem[];
}


type Region =
    | "전체"
    | "서울특별시"
    | "부산광역시"
    | "대구광역시"
    | "인천광역시"
    | "광주광역시"
    | "대전광역시"
    | "울산광역시"
    | "세종특별자치시"
    | "경기도"
    | "강원특별자치도"
    | "충청북도"
    | "충청남도"
    | "전북특별자치도"
    | "전라남도"
    | "경상북도"
    | "경상남도"
    | "제주특별자치도";


type AuctionSort =
    | "date"
    | "minimumPrice"
    | "minimumRate"
    | "failedCount"
    | "appraisalPrice";


const REGIONS: Array<{
    value: Region;
    label: string;
}> = [
    { value: "전체", label: "전체" },
    { value: "서울특별시", label: "서울" },
    { value: "부산광역시", label: "부산" },
    { value: "대구광역시", label: "대구" },
    { value: "인천광역시", label: "인천" },
    { value: "광주광역시", label: "광주" },
    { value: "대전광역시", label: "대전" },
    { value: "울산광역시", label: "울산" },
    { value: "세종특별자치시", label: "세종" },
    { value: "경기도", label: "경기" },
    { value: "강원특별자치도", label: "강원" },
    { value: "충청북도", label: "충북" },
    { value: "충청남도", label: "충남" },
    { value: "전북특별자치도", label: "전북" },
    { value: "전라남도", label: "전남" },
    { value: "경상북도", label: "경북" },
    { value: "경상남도", label: "경남" },
    { value: "제주특별자치도", label: "제주" },
];


const SORT_OPTIONS: Array<{
    value: AuctionSort;
    label: string;
}> = [
    {
        value: "date",
        label: "매각기일 빠른순",
    },
    {
        value: "minimumPrice",
        label: "최저가 낮은순",
    },
    {
        value: "minimumRate",
        label: "최저가율 낮은순",
    },
    {
        value: "failedCount",
        label: "유찰 많은순",
    },
    {
        value: "appraisalPrice",
        label: "감정가 높은순",
    },
];


function getNumber(
    value: number | undefined,
    fallback: number,
): number {
    return typeof value === "number"
        ? value
        : fallback;
}


export default function AuctionSection({
    items,
}: AuctionSectionProps) {
    const navigate = useNavigate();

    const [
        selectedRegion,
        setSelectedRegion,
    ] = useState<Region>("전체");

    const [
        sortBy,
        setSortBy,
    ] = useState<AuctionSort>("date");

    const visibleItems = useMemo(() => {
        const filtered =
            selectedRegion === "전체"
                ? [...items]
                : items.filter((item) =>
                      item.address
                          .trim()
                          .startsWith(selectedRegion),
                  );

        filtered.sort((first, second) => {
            switch (sortBy) {
                case "minimumPrice":
                    return (
                        getNumber(
                            first.minimumBidValue,
                            Number.MAX_SAFE_INTEGER,
                        ) -
                        getNumber(
                            second.minimumBidValue,
                            Number.MAX_SAFE_INTEGER,
                        )
                    );

                case "minimumRate":
                    return (
                        getNumber(
                            first.minimumRateValue,
                            Number.MAX_SAFE_INTEGER,
                        ) -
                        getNumber(
                            second.minimumRateValue,
                            Number.MAX_SAFE_INTEGER,
                        )
                    );

                case "failedCount":
                    return (
                        getNumber(
                            second.failedCountValue,
                            -1,
                        ) -
                        getNumber(
                            first.failedCountValue,
                            -1,
                        )
                    );

                case "appraisalPrice":
                    return (
                        getNumber(
                            second.appraisalPriceValue,
                            -1,
                        ) -
                        getNumber(
                            first.appraisalPriceValue,
                            -1,
                        )
                    );

                case "date":
                default:
                    return (
                        first.auctionDateValue ?? ""
                    ).localeCompare(
                        second.auctionDateValue ?? "",
                    );
            }
        });

        return filtered;
    }, [
        items,
        selectedRegion,
        sortBy,
    ]);

    return (
        <Card title="⚖ 오늘의 법원경매">

            <div className="auction-toolbar">

                <div className="auction-region-chips">
                    {REGIONS.map((region) => {
                        const isActive =
                            selectedRegion ===
                            region.value;

                        return (
                            <button
                                key={region.value}
                                type="button"
                                className={[
                                    "auction-region-chip",
                                    isActive
                                        ? "is-active"
                                        : "",
                                ]
                                    .filter(Boolean)
                                    .join(" ")}
                                aria-pressed={isActive}
                                onClick={() =>
                                    setSelectedRegion(
                                        region.value,
                                    )
                                }
                            >
                                {region.label}
                            </button>
                        );
                    })}
                </div>

                <div className="auction-toolbar-bottom">

                    <span className="auction-result-count">
                        {visibleItems.length.toLocaleString()}
                        건
                    </span>

                    <label
                        className="auction-sort-control"
                        htmlFor="auction-sort"
                    >
                        <ArrowUpDown
                            size={16}
                            aria-hidden="true"
                        />

                        <select
                            id="auction-sort"
                            value={sortBy}
                            onChange={(event) =>
                                setSortBy(
                                    event.target
                                        .value as AuctionSort,
                                )
                            }
                        >
                            {SORT_OPTIONS.map(
                                (option) => (
                                    <option
                                        key={
                                            option.value
                                        }
                                        value={
                                            option.value
                                        }
                                    >
                                        {option.label}
                                    </option>
                                ),
                            )}
                        </select>
                    </label>

                </div>

            </div>

            {visibleItems.length === 0 ? (
                <div className="auction-empty">
                    <p>
                        선택한 지역에 등록된 경매
                        물건이 없습니다.
                    </p>
                </div>
            ) : (
                <div className="auction-list">
                    {visibleItems.map((item) => (
                        <FinderCard
                            key={item.id}
                            item={item}
                            onClick={() =>
                                navigate(
                                    "/analysis",
                                    {
                                        state: {
                                            item,
                                        },
                                    },
                                )
                            }
                        />
                    ))}
                </div>
            )}

        </Card>
    );
}