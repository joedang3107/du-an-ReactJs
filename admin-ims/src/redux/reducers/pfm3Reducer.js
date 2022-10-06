
import * as type from '../const'

let initialState = {
    addPfm3: {
        addPfmLoading: false,
        success: false,
        data: [],
        message: "",
    },
    fetchPfm3: {
        loading: false,
        data: [],
        message: "",
        total: 0
    },
}

function pfm3Reducer(state = initialState, action) {

    switch (action.type) {

        case type.ADD_PFM_3:
            return {
                ...state,
                addPfm3: {
                    addPfmLoading: true,
                    success: false,
                    data: [],
                    message: "",
                }
            }

        case type.ADD_PFM_3_SUCCEEDED:
            return {
                ...state,
                addPfm3: {
                    addPfmLoading: false,
                    success: true,
                    data: [],
                    message: "Add pfm success!",
                }
            }

        case type.ADD_PFM_3_FAILED:
            return {
                ...state,
                addPfm3: {
                    addPfmLoading: false,
                    success: false,
                    data: [],
                    message: action.message,
                }
            }
    
        case type.FETCH_PFM_3:
            return {
                ...state,
                fetchPfm3: {
                    loading: true,
                    data: [],
                    message: "",
                    total: 0
                }
            }

        case type.FETCH_PFM_3_SUCCEEDED:
            return {
                ...state,
                fetchPfm3: {
                    loading: false,
                    data: action.payload.data.list,
                    message: "",
                    total: Number(action.payload.data.total)
                }
            }

        case type.FETCH_PFM_3_FAILED:
            return {
                ...state,
                fetchPfm3: {
                    loading: false,
                    data: [],
                    message: action.message,
                    total: 0
                }
            }
        default:
            return state
    }
}

export { pfm3Reducer }