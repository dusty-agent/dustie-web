import company from "./dictionary/company.json";
import realEstate from "./dictionary/real_estate.json";
import finance from "./dictionary/finance.json";
import construction from "./dictionary/construction.json";
import policy from "./dictionary/policy.json";
import region from "./dictionary/region.json";

export const dictionary = [
    ...company,
    ...realEstate,
    ...finance,
    ...construction,
    ...policy,
    ...region,
];

export function findTerm(term: string) {
    return dictionary.find((item) => {
        if (item.term === term) return true;

        return item.aliases.some(
            (alias) => alias.toLowerCase() === term.toLowerCase()
        );
    });
}

export function search(keyword: string) {
    return dictionary.filter((item) => {
        if (item.term.includes(keyword)) return true;

        return item.aliases.some((a) => a.includes(keyword));
    });
}