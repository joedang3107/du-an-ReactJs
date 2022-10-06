import * as type from '../const/index'

export const AddPfm4Action = (data) => {
    return { type: type.ADD_PFM_4, payload: data }
}

export const FetchPfm4Action = (data) => {
    return { type: type.FETCH_PFM_4, payload: data }
}