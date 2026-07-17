import type { FinderItem } from "../types/finder";

export function getFinderBadge(type: FinderItem["type"]): string {

    switch (type) {

        case "auction":
            return "⚖ 경매";

        case "public":
            return "🏛 공매";

        default:
            return "🏢 일반";

    }

}

export function getFinderBadgeClass(type: FinderItem["type"]): string {

    switch (type) {

        case "auction":
            return "auction";

        case "public":
            return "public";

        default:
            return "default";

    }

}

export function getScoreColor(score: number): string {

    if (score >= 90) return "excellent";

    if (score >= 80) return "good";

    if (score >= 70) return "normal";

    return "low";

}

export function getGrade(score: number) {

    if (score >= 95) return "S";

    if (score >= 90) return "A";

    if (score >= 80) return "B";

    if (score >= 70) return "C";

    return "D";

}