import { dictionary } from "./loader";
import type { DictionaryItem } from "../types/Dictionary";

export class DictionaryManager {

    /**
     * 정확한 용어 검색
     */
    find(term: string): DictionaryItem | undefined {

        const keyword = term.trim().toLowerCase();

        return dictionary.find(item =>

            item.term.toLowerCase() === keyword ||

            item.aliases.some(alias =>
                alias.toLowerCase() === keyword
            )
        );

    }

    /**
     * 부분 검색
     */
    search(keyword: string): DictionaryItem[] {

        const text = keyword.trim().toLowerCase();

        return dictionary.filter(item =>

            item.term.toLowerCase().includes(text) ||

            item.aliases.some(alias =>
                alias.toLowerCase().includes(text)
            ) ||

            item.tags.some(tag =>
                tag.toLowerCase().includes(text)
            )
        );

    }

    /**
     * Query Expansion
     * ex)
     * PF
     * ->
     * [PF, Project Financing, 프로젝트 파이낸싱]
     */
    expand(keyword: string): string[] {

        const item = this.find(keyword);

        if (!item)
            return [keyword];

        return [
            item.term,
            ...item.aliases
        ];

    }

    /**
     * Related Terms
     */
    related(keyword: string): string[] {

        const item = this.find(keyword);

        if (!item)
            return [];

        return item.related;

    }

    /**
     * RAG용 검색 문자열 생성
     *
     * PF
     *
     * ->
     *
     * PF Project Financing 프로젝트 파이낸싱 브릿지론 본PF
     */
    buildQuery(keyword: string): string {

        const item = this.find(keyword);

        if (!item)
            return keyword;

        return [

            item.term,

            ...item.aliases,

            ...item.related

        ].join(" ");

    }

}

export const dictionaryManager = new DictionaryManager();