
import * as type from '../const'

let initialState = {

    addPfm2: {
        addPfmLoading: false,
        success: false,
        data: [],
        message: "",
    },
    fetchPfm2: {
        loading: false,
        data: [],
        message: "",
        total: 0
    },
}

function pfm2Reducer(state = initialState, action) {

    switch (action.type) {
        case type.ADD_PFM_2:
            return {
                ...state,
                addPfm2: {
                    addPfmLoading: true,
                    success: false,
                    data: [],
                    message: "",
                }
            }

        case type.ADD_PFM_2_SUCCEEDED:
            return {
                ...state,
                addPfm2: {
                    addPfmLoading: false,
                    success: true,
                    data: [],
                    message: "Add pfm success!",
                }
            }

        case type.ADD_PFM_2_FAILED:
            return {
                ...state,
                addPfm2: {
                    addPfmLoading: false,
                    success: false,
                    data: [],
                    message: action.message,
                }
            }
    
        case type.FETCH_PFM_2:
            return {
                ...state,
                fetchPfm2: {
                    loading: true,
                    data: [],
                    message: "",
                    total: 0
                }
            }

        case type.FETCH_PFM_2_SUCCEEDED:
            return {
                ...state,
                fetchPfm2: {
                    loading: false,
                    data: action.payload.data.list,
                    message: "",
                    total: Number(action.payload.data.total)
                }
            }

        case type.FETCH_PFM_2_FAILED:
            return {
                ...state,
                fetchPfm2: {
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

export { pfm2Reducer }