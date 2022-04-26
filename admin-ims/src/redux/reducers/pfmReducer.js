
import * as type from '../const'

let initialState = {
    addPfms: {
        loading: false,
        success: false,
        data: [],
        message: "",
    },
}

function pfmsReducer(state = initialState, action) {
    console.log(action);
    switch (action.type) {
    
        case type.ADD_PFM:
            return {
                ...state,
                addPfms: {
                    loading: true,
                    success: false,
                    data: [],
                    message: "",
                }
            }

        case type.ADD_PFM_SUCCEEDED:
            return {
                ...state,
                addPfms: {
                    loading: false,
                    success: true,
                    data: action.payload.data,
                    message: "Add pfm success!",
                }
            }

        case type.ADD_PFM_FAILED:
            return {
                ...state,
                addPfms: {
                    loading: false,
                    success: false,
                    data: [],
                    message: action.message,
                }
            }
        default:
            return state
    }
}

export { pfmsReducer }