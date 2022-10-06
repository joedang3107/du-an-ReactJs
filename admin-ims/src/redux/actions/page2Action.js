import * as type from '../const/index'

export const AddPfm2Action = (data) => {
    return { type: type.ADD_PFM_2, payload: data }
}

export const FetchPfm2Action = (data) => {
    return { type: type.FETCH_PFM_2, payload: data }
}
