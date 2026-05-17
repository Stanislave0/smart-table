import {rules, createComparison} from "../lib/compare.js";


export function initSearching(searchField) {
    const searchKey = typeof searchField === 'string'
        ? searchField
        : searchField?.search?.name || searchField?.name || 'search';

    // @todo: #5.1 — настроить компаратор
    const comparator = createComparison(
        ['skipEmptyTargetValues'],
        [rules.searchMultipleFields(searchKey, ['date', 'customer', 'seller'], false)]
    );

    return (data, state, action) => {
        // @todo: #5.2 — применить компаратор
        return data.filter((row) => comparator(row, state));
    }
}