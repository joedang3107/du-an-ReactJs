
import * as type from '../const'

let initialState = {
    fetchUser: {
        data: [],
        message: "",
    },
}

function userReducer(state = initialState, action) {
    console.log(action);
    switch (action.type) {
    
        case type.FETCH_USER:
            return {
                ...state,
                fetchUser: {
                    data: [],
                    message: "",
                }
            }

        case type.FETCH_USER_SUCCEEDED:
            return {
                ...state,
                fetchUser: {
                    data: action.payload.data,
                    message: "",
                }
            }

        case type.FETCH_USER_FAILED:
            return {
                ...state,
                fetchUser: {
                    data: [],
                    message: action.message,
                }
            }
        default:
            return state
    }
}

export { userReducer }