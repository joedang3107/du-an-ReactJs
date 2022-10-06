
import * as type from '../const'

let initialState = {
    addPfm4: {
        addPfmLoading: false,
        success: false,
        data: [],
        message: "",
    },
    fetchPfm4: {
        loading: false,
        data: [],
        message: "",
        total: 0
    },
}

function pfm4Reducer(state = initialState, action) {

    switch (action.type) {

        case type.ADD_PFM_4:
            return {
                ...state,
                addPfm4: {
                    addPfmLoading: true,
                    success: false,
                    data: [],
                    message: "",
                }
            }

        case type.ADD_PFM_4_SUCCEEDED:
            return {
                ...state,
                addPfm4: {
                    addPfmLoading: false,
                    success: true,
                    data: [],
                    message: "Add pfm success!",
                }
            }

        case type.ADD_PFM_4_FAILED:
            return {
                ...state,
                addPfm4: {
                    addPfmLoading: false,
                    success: false,
                    data: [],
                    message: action.message,
                }
            }
    
        case type.FETCH_PFM_4:
            return {
                ...state,
                fetchPfm4: {
                    loading: true,
                    data: [],
                    message: "",
                    total: 0
                }
            }

        case type.FETCH_PFM_4_SUCCEEDED:
            return {
                ...state,
                fetchPfm4: {
                    loading: false,
                    data: action.payload.data.list,
                    message: "",
                    total: Number(action.payload.data.total)
                }
            }

        case type.FETCH_PFM_4_FAILED:
            return {
                ...state,
                fetchPfm4: {
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

export { pfm4Reducer }