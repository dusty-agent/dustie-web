const businessIcons: Record<string, string> = {

    "편의점": "🏪",

    "카페": "☕",

    "약국": "💊",

    "음식점": "🍜",

    "피트니스": "🏋",

    "의원": "🏥",

    "병원": "🏥",

    "미용실": "💇",

    "베이커리": "🥐",

    "학원": "📚",

    "마트": "🛒",

    "주유소": "⛽",

    "은행": "🏦",

    "사무실": "🏢",

};

export function getBusinessIcon(name: string): string {

    return businessIcons[name] ?? "🏢";

}