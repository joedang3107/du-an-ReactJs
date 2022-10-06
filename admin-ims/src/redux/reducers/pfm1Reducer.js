
import * as type from '../const'

let initialState = {
    addPfm1: {
        addPfmLoading: false,
        success: false,
        data: [],
        message: "",
    },
    deletePfm1: {
        deletePfmLoading: false,
        success: false,
        message: "",
    },
    fetchPfm1: {
        loading: false,
        data: [],
        message: "",
        total: 0
    },
}

function pfm1Reducer(state = initialState, action) {

    switch (action.type) {
        case type.ADD_PFM_1:
            return {
                ...state,
                addPfm1: {
                    addPfmLoading: true,
                    success: false,
                    data: [],
                    message: "",
                }
            }

        case type.ADD_PFM_1_SUCCEEDED:
            return {
                ...state,
                addPfm1: {
                    addPfmLoading: false,
                    success: true,
                    data: [],
                    message: "Add pfm successed",
                }
            }

        case type.ADD_PFM_1_FAILED:
            return {
                ...state,
                addPfm1: {
                    addPfmLoading: false,
                    success: false,
                    data: [],
                    message: action.message,
                }
            }
        case type.DELETE_PFM_1:
            return {
                ...state,
                deletePfm1: {
                    deletePfmLoading: true,
                    success: false,
                    message: "",
                }
            }

        case type.DELETE_PFM_1_SUCCEEDED:
            return {
                ...state,
                deletePfm1: {
                    deletePfmLoading: false,
                    success: true,
                    message: "",
                }
            }

        case type.DELETE_PFM_1_FAILED:
            return {
                ...state,
                deletePfm1: {
                    deletePfmLoading: false,
                    success: false,
                    message: action.message,
                }
            }
        case type.FETCH_PFM_1:
            return {
                ...state,
                fetchPfm1: {
                    loading: true,
                    data: [],
                    message: "",
                    total: 0
                }
            }

        case type.FETCH_PFM_1_SUCCEEDED:
            return {
                ...state,
                fetchPfm1: {
                    loading: false,
                    data: action.payload.data.list,
                    message: "",
                    total: Number(action.payload.data.total)
                }
            }

        case type.FETCH_PFM_1_FAILED:
            return {
                ...state,
                fetchPfm1: {
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

export { pfm1Reducer }