import * as SearchApiUtil from '../util/search_util'

export const RECEIVE_SEARCH_RESULTS = 'RECEIVE_SEARCH_RESULTS'
export const CLEAR_SEARCH_RESULTS = 'CLEAR_SEARCH_RESULTS'

export const receiveSearchResults = searchRes => (
    {
        type: RECEIVE_SEARCH_RESULTS,
        searchRes
    }
) 

export const clearSearchResults = () => (
    {
        type: CLEAR_SEARCH_RESULTS
    }
)

export const search = (query) => dispatch => (
    SearchApiUtil.search(query).then(searchRes => dispatch(receiveSearchResults(searchRes)))
)



